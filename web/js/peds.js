// Pedestrians: data, wandering/fleeing AI and an instanced renderer
// (all peds draw in 6 instanced draw calls).
import * as THREE from 'three';
import { G, uid } from './game.js';
import { TILE, T, WALKABLE, SHADOW_DX, SHADOW_DZ } from './consts.js';
import { clamp, rand, randRange, pick, wrapAngle, angDiff, hexRgb } from './util.js';
import { shadeN } from './world3d.js';
import { pushOut } from './physics.js';

const SHIRTS = ['#c8423a', '#3f6fb5', '#e6e2d6', '#2f8a5c', '#d7a630', '#7c4a9e', '#e07d4a', '#4b5563', '#9fc2d8', '#b63c75', '#5f7f3a', '#2b2d31', '#d8cbb0', '#3c9c9a'];
const PANTS = ['#2c3e66', '#1f2124', '#6b5a43', '#4a4f57', '#384a6c', '#7a6f60', '#26364f'];
const HAIR = ['#1b1714', '#3a2a1e', '#5a3d25', '#b98d4f', '#8a8a86', '#7a3b22', '#2a2422', '#d9c38a'];
const SKIN = ['#e0b896', '#c99772', '#a3714d', '#7a5136', '#f0cdb0', '#5a3a26'];

export const PED_KINDS = {
  civ: {},
  player: { shirt: '#f2b51e', pants: '#25282d', hair: '#191513', sleeves: '#f2b51e' },
  cop: { shirt: '#24365f', pants: '#1b2238', hair: '#141c33', sleeves: '#24365f' },
  swat: { shirt: '#2a2f36', pants: '#1f2328', hair: '#1a1d22', sleeves: '#2a2f36' },
  thug: { shirt: '#1d1e22', pants: '#2b2f35', hair: '#c4262e', sleeves: '#1d1e22' },
  vip: { shirt: '#ecebe4', pants: '#ecebe4', hair: '#4a3a2a', sleeves: '#ecebe4' },
  crew: { shirt: '#3b3f46', pants: '#202226', hair: '#e2c060', sleeves: '#3b3f46' },
};

export class Ped {
  constructor(kind, x, z, h = rand() * Math.PI * 2) {
    this.id = uid();
    this.isPed = true;
    this.kind = kind;
    this.x = x; this.z = z; this.h = h; this.y = 0;
    this.vx = 0; this.vz = 0;
    this.speed = 0;
    this.health = kind === 'cop' ? 90 : kind === 'swat' ? 160 : kind === 'player' ? 100 : kind === 'thug' ? 80 : 50;
    this.maxHealth = this.health;
    this.armor = 0;
    this.alive = true;
    this.state = 'walk';
    this.brain = null;
    this.anim = rand() * 6;
    this.aimT = 0;
    this.weapon = null;
    this.ammo = 0;
    this.fireCd = 0;
    this.walkSpeed = randRange(1.15, 1.6);
    this.runSpeed = randRange(4.2, 5.2);
    this.lane = randRange(-1.0, 1.0);
    this.dir = null;
    this.dest = null;
    this.crossing = false;
    this.timer = 0;
    this.fleeX = 0; this.fleeZ = 0;
    this.vehicle = null;
    this.hidden = false;
    this.slot = -1;
    this.persistent = false;
    this.onFire = 0;
    this.radius = 0.38;
    this.lastHitBy = null;
    const k = PED_KINDS[kind] || {};
    const skin = pick(SKIN);
    const shirt = k.shirt || pick(SHIRTS);
    this.colors = {
      shirt,
      pants: k.pants || pick(PANTS),
      hair: k.hair || (rand() < 0.15 ? pick(SHIRTS) : pick(HAIR)),
      sleeves: k.sleeves || (rand() < 0.55 ? shirt : skin),
    };
    G.pedRender?.alloc(this);
  }

  get tileX() { return Math.floor(this.x / TILE); }
  get tileZ() { return Math.floor(this.z / TILE); }

  hit(dmg, dx, dz, source, kind = 'bullet') {
    if (!this.alive) return;
    if (this.armor > 0 && kind !== 'car') {
      const a = Math.min(this.armor, dmg * 0.7);
      this.armor -= a;
      dmg -= a;
    }
    this.health -= dmg;
    this.lastHitBy = source;
    const l = Math.hypot(dx, dz) || 1;
    dx /= l; dz /= l;
    const knock = kind === 'car' || kind === 'explosion' || this.health <= 0 || dmg >= 45;
    if (kind === 'fire') this.onFire = Math.max(this.onFire, 2.5);
    if (knock) {
      this.state = 'down';
      this.timer = 0;
      const imp = kind === 'car' ? clamp(dmg * 0.12, 3, 11) : kind === 'explosion' ? 8 : 2.5;
      this.vx = dx * imp; this.vz = dz * imp;
      this.h = Math.atan2(dz, dx);
      if (this.vehicle) this.vehicle = null;
    }
    if (this.health <= 0) {
      this.health = 0;
      this.alive = false;
      this.state = 'dead';
      this.timer = 0;
      this.weapon = null;
      G.events.pedKilled?.(this, source, kind);
    } else {
      G.events.pedHurt?.(this, source, kind);
      if (!knock && !this.brain) this.startFlee(this.x - dx * 5, this.z - dz * 5, 6);
    }
  }

  startFlee(fx, fz, time = randRange(4, 8)) {
    if (!this.alive || this.brain || this.state === 'down') return;
    this.state = 'flee';
    this.fleeX = fx; this.fleeZ = fz;
    this.timer = time;
    this.dest = null;
  }

  update(dt) {
    if (this.hidden) return;
    if (this.fireCd > 0) this.fireCd -= dt;
    if (this.aimT > 0) this.aimT -= dt;
    if (this.onFire > 0) {
      this.onFire -= dt;
      if (rand() < dt * 18) G.fx.fire(this.x + randRange(-0.2, 0.2), 1.2, this.z + randRange(-0.2, 0.2), 0.8);
      if (this.alive) {
        this.health -= dt * 22;
        if (this.health <= 0) this.hit(1, 0, 1, this.lastHitBy, 'fire');
        else if (!this.brain && this.state !== 'down') this.startFlee(this.x + randRange(-3, 3), this.z + randRange(-3, 3), 2);
      }
    }
    switch (this.state) {
      case 'down':
      case 'dead': {
        const k = Math.exp(-dt * 5);
        this.vx *= k; this.vz *= k;
        this.x += this.vx * dt; this.z += this.vz * dt;
        pushOut(this, this.radius);
        this.speed = 0;
        this.timer += dt;
        if (this.state === 'down' && this.timer > 2.4 && this.alive) {
          if (this.brain) this.state = 'custom';
          else this.startFlee(this.x + this.vx, this.z + this.vz, 6);
        }
        return;
      }
      case 'custom':
        this.brain(this, dt);
        break;
      case 'flee':
        this.fleeStep(dt);
        break;
      case 'idle':
        this.timer -= dt;
        this.vx = this.vz = 0;
        if (this.timer <= 0) this.state = 'walk';
        break;
      case 'dive':
        this.timer -= dt;
        if (this.timer <= 0) this.startFlee(this.x - this.vx, this.z - this.vz, 3);
        break;
      default:
        this.wander(dt);
    }
    this.integrate(dt);
  }

  integrate(dt) {
    this.x += this.vx * dt;
    this.z += this.vz * dt;
    const hit = pushOut(this, this.radius);
    if (hit && this.state === 'flee') this.dest = null;
    const sp = Math.hypot(this.vx, this.vz);
    this.speed = sp;
    if (sp > 0.2 && this.aimT <= 0) {
      const a = Math.atan2(this.vz, this.vx);
      this.h = wrapAngle(this.h + clamp(angDiff(a, this.h), -dt * 10, dt * 10));
    }
    this.anim += sp * dt * 3.1;
  }

  moveTo(tx, tz, speed) {
    const dx = tx - this.x, dz = tz - this.z;
    const d = Math.hypot(dx, dz);
    if (d < 0.05) { this.vx = this.vz = 0; return d; }
    const s = Math.min(speed, d * 6);
    this.vx = (dx / d) * s;
    this.vz = (dz / d) * s;
    return d;
  }

  wander(dt) {
    void dt;
    const q = G.q;
    if (!this.dest) this.pickDest();
    if (!this.dest) { this.vx = this.vz = 0; return; }
    const d = this.moveTo(this.dest.x, this.dest.z, this.walkSpeed);
    if (d < 0.35) {
      this.dest = null;
      if (!this.crossing && rand() < 0.015) { this.state = 'idle'; this.timer = randRange(1, 4); }
    }
    // stepping into traffic by accident (pushed off): walk back
    if (!this.crossing && q.tileAt(this.x, this.z) === T.ROAD) this.crossing = true;
  }

  pickDest() {
    const c = G.city, q = G.q;
    const tx = this.tileX, tz = this.tileZ;
    const here = q.tileXZ(tx, tz);
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const walk = (x, z) => WALKABLE[q.tileXZ(x, z)] === 1;
    if (this.crossing) {
      if (WALKABLE[here] && here !== T.ROAD) this.crossing = false;
      else {
        let d = this.dir || pick(dirs);
        // keep going across; if no road ahead and no walkable, pick any walkable neighbour
        const nt = q.tileXZ(tx + d[0], tz + d[1]);
        if (nt !== T.ROAD && nt !== T.BRIDGE && !walk(tx + d[0], tz + d[1])) {
          const opts = dirs.filter((dd) => walk(tx + dd[0], tz + dd[1]) || q.tileXZ(tx + dd[0], tz + dd[1]) === T.ROAD);
          d = opts.length ? pick(opts) : d;
        }
        this.dir = d;
        this.dest = { x: (tx + d[0] + 0.5) * TILE + -d[1] * this.lane * 0.5, z: (tz + d[1] + 0.5) * TILE + d[0] * this.lane * 0.5 };
        return;
      }
    }
    const cands = dirs.filter((d) => walk(tx + d[0], tz + d[1]));
    // crossing opportunity: road tile with a crosswalk next to us
    if (rand() < 0.35) {
      for (const d of dirs) {
        const k = (tz + d[1]) * c.W + (tx + d[0]);
        if (q.tileXZ(tx + d[0], tz + d[1]) === T.ROAD && (c.meta[k] & 2)) {
          // only cross along the crosswalk strip (perpendicular to traffic)
          this.crossing = true;
          this.dir = d;
          this.dest = { x: (tx + d[0] + 0.5) * TILE, z: (tz + d[1] + 0.5) * TILE };
          return;
        }
      }
    }
    let d = null;
    if (this.dir && cands.some((cd) => cd[0] === this.dir[0] && cd[1] === this.dir[1]) && rand() < 0.86) d = this.dir;
    else {
      const fwd = cands.filter((cd) => !this.dir || !(cd[0] === -this.dir[0] && cd[1] === -this.dir[1]));
      d = fwd.length ? pick(fwd) : cands.length ? pick(cands) : null;
    }
    if (!d) { this.dest = null; this.dir = null; return; }
    this.dir = d;
    const px = -d[1], pz = d[0];
    this.dest = { x: (tx + d[0] + 0.5) * TILE + px * this.lane, z: (tz + d[1] + 0.5) * TILE + pz * this.lane };
  }

  fleeStep(dt) {
    this.timer -= dt;
    if (this.timer <= 0) { this.state = 'walk'; this.dest = null; this.crossing = false; return; }
    if (!this.dest || Math.hypot(this.dest.x - this.x, this.dest.z - this.z) < 0.8) {
      let ax = this.x - this.fleeX, az = this.z - this.fleeZ;
      const l = Math.hypot(ax, az) || 1;
      ax /= l; az /= l;
      // try a few directions, prefer away from the threat and open ground
      let best = null, bestS = -1e9;
      for (let i = 0; i < 7; i++) {
        const a = Math.atan2(az, ax) + randRange(-1.2, 1.2);
        const dx = Math.cos(a), dz = Math.sin(a);
        const px = this.x + dx * 5, pz = this.z + dz * 5;
        if (G.q.solidAt(px, pz)) continue;
        const s = dx * ax + dz * az + (WALKABLE[G.q.tileAt(px, pz)] ? 0.4 : 0);
        if (s > bestS) { bestS = s; best = { x: px, z: pz }; }
      }
      this.dest = best || { x: this.x - ax * 3, z: this.z - az * 3 };
    }
    this.moveTo(this.dest.x, this.dest.z, this.runSpeed);
  }

  remove() {
    G.pedRender?.free(this);
    this.removed = true;
  }
}

export function spawnPed(kind, x, z, h) {
  const p = new Ped(kind, x, z, h);
  G.peds.push(p);
  return p;
}

export function removePed(p) {
  p.remove();
  const i = G.peds.indexOf(p);
  if (i >= 0) G.peds.splice(i, 1);
}

/** everyone near (x,z) panics */
export function panic(x, z, radius, except = null) {
  for (const p of G.peds) {
    if (p === except || !p.alive || p.brain || p.hidden) continue;
    const d = Math.hypot(p.x - x, p.z - z);
    if (d < radius && p.state !== 'down') p.startFlee(x, z, randRange(4, 8));
  }
}

// ------------------------------------------------------------------ renderer
function shadedGeometry(geo) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  const n = g.attributes.normal.array;
  const col = new Float32Array(n.length);
  for (let i = 0; i < n.length; i += 3) {
    const k = Math.min(1.1, shadeN(n[i], n[i + 1], n[i + 2]) * 1.1);
    col[i] = col[i + 1] = col[i + 2] = k;
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}

const M = new THREE.Matrix4(), B = new THREE.Matrix4(), P = new THREE.Matrix4(), ZERO = new THREE.Matrix4().makeScale(0, 0, 0);
// people are drawn a bit larger than life so they read on a phone screen (as in classic top-down games)
const PED_SCALE = 1.65;
const SCALE_M = new THREE.Matrix4().makeScale(PED_SCALE, PED_SCALE * 0.9, PED_SCALE);
const DOWN = new THREE.Matrix4().makeTranslation(-0.85, 0.2, 0).multiply(new THREE.Matrix4().makeRotationZ(-Math.PI / 2));
const TORSO = new THREE.Matrix4().compose(new THREE.Vector3(0, 1.08, 0), new THREE.Quaternion(), new THREE.Vector3(0.3, 0.58, 0.56));
const HEAD = new THREE.Matrix4().compose(new THREE.Vector3(0, 1.56, 0), new THREE.Quaternion(), new THREE.Vector3(0.17, 0.17, 0.17));
const GUN = new THREE.Matrix4().compose(new THREE.Vector3(0.62, 1.28, 0.34), new THREE.Quaternion(), new THREE.Vector3(0.52, 0.11, 0.1));
const SH = new THREE.Matrix4();

function limb(out, px, py, pz, theta, len, thick, phi = 0) {
  // pivot at (px,py,pz), rotate theta about z (swing forward), phi about x (spread), hang down by len
  const c = Math.cos(theta), s = Math.sin(theta);
  const cp = Math.cos(phi), sp = Math.sin(phi);
  // direction of the limb (unit, pointing from pivot to end) = Rz(theta) * Rx(phi) * (0,-1,0)
  // Rx(phi)*(0,-1,0) = (0, -cp, -sp); Rz: x = -(-cp)*s = cp*s, y = -cp*c, z = -sp
  const dx = cp * s, dy = -cp * c, dz = -sp;
  // build basis: y axis = -dir (limb length along local y), x/z perpendicular
  const yx = -dx, yy = -dy, yz = -dz;
  // x axis: Rz(theta) * (1,0,0) = (c, s, 0) (approximately perpendicular when phi small)
  let xx = c, xy = s, xz = 0;
  // z = x cross y
  let zx = xy * yz - xz * yy, zy = xz * yx - xx * yz, zz = xx * yy - xy * yx;
  const zl = Math.hypot(zx, zy, zz) || 1;
  zx /= zl; zy /= zl; zz /= zl;
  // re-orthogonalise x = y cross z
  xx = yy * zz - yz * zy; xy = yz * zx - yx * zz; xz = yx * zy - yy * zx;
  const cx = px + dx * len * 0.5, cy = py + dy * len * 0.5, cz = pz + dz * len * 0.5;
  out.set(
    xx * thick, yx * len, zx * thick, cx,
    xy * thick, yy * len, zy * thick, cy,
    xz * thick, yz * len, zz * thick, cz,
    0, 0, 0, 1,
  );
  return out;
}

export class PedRenderer {
  constructor(scene, shadowMat, max = 170) {
    this.max = max;
    const box = shadedGeometry(new THREE.BoxGeometry(1, 1, 1));
    const ball = shadedGeometry(new THREE.IcosahedronGeometry(1, 1));
    const mat = new THREE.MeshBasicMaterial({ vertexColors: true });
    const mk = (geo, n, m = mat) => {
      const im = new THREE.InstancedMesh(geo, m, n);
      im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      im.frustumCulled = false;
      for (let i = 0; i < n; i++) im.setMatrixAt(i, ZERO);
      im.setColorAt?.(0, new THREE.Color(1, 1, 1));
      scene.add(im);
      return im;
    };
    this.torso = mk(box, max);
    this.head = mk(ball, max);
    this.arms = mk(box, max * 2);
    this.legs = mk(box, max * 2);
    this.gun = mk(box, max, new THREE.MeshBasicMaterial({ color: 0x1b1c1f }));
    const shGeo = new THREE.CircleGeometry(0.42, 10).rotateX(-Math.PI / 2);
    this.shadow = mk(shGeo, max, shadowMat);
    this.shadow.renderOrder = 1;
    this.ring = new THREE.Mesh(new THREE.RingGeometry(0.95, 1.18, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xffd23f, transparent: true, opacity: 0.75, depthWrite: false }));
    this.ring.renderOrder = 3;
    this.ring.visible = false;
    scene.add(this.ring);
    this.freeSlots = [];
    for (let i = max - 1; i >= 0; i--) this.freeSlots.push(i);
    this.tmpC = new THREE.Color();
  }
  alloc(p) {
    if (!this.freeSlots.length) { p.slot = -1; return; }
    const s = this.freeSlots.pop();
    p.slot = s;
    const c = this.tmpC;
    this.torso.setColorAt(s, c.set(p.colors.shirt));
    this.head.setColorAt(s, c.set(p.colors.hair));
    this.arms.setColorAt(s * 2, c.set(p.colors.sleeves));
    this.arms.setColorAt(s * 2 + 1, c.set(p.colors.sleeves));
    this.legs.setColorAt(s * 2, c.set(p.colors.pants));
    this.legs.setColorAt(s * 2 + 1, c.set(p.colors.pants));
    for (const im of [this.torso, this.head, this.arms, this.legs]) im.instanceColor.needsUpdate = true;
  }
  free(p) {
    if (p.slot < 0) return;
    const s = p.slot;
    this.hide(s);
    this.freeSlots.push(s);
    p.slot = -1;
  }
  hide(s) {
    this.torso.setMatrixAt(s, ZERO); this.head.setMatrixAt(s, ZERO);
    this.arms.setMatrixAt(s * 2, ZERO); this.arms.setMatrixAt(s * 2 + 1, ZERO);
    this.legs.setMatrixAt(s * 2, ZERO); this.legs.setMatrixAt(s * 2 + 1, ZERO);
    this.gun.setMatrixAt(s, ZERO); this.shadow.setMatrixAt(s, ZERO);
  }
  update(peds, camX, camZ, viewR) {
    for (const p of peds) {
      const s = p.slot;
      if (s < 0) continue;
      if (p.hidden || Math.abs(p.x - camX) > viewR || Math.abs(p.z - camZ) > viewR) { this.hide(s); continue; }
      B.makeRotationY(-p.h);
      B.setPosition(p.x, p.y, p.z);
      B.multiply(SCALE_M);
      const lying = p.state === 'down' || p.state === 'dead';
      if (lying) B.multiply(DOWN);
      const sp = p.speed;
      const run = sp > 3;
      const amp = lying ? 0 : Math.min(1, sp / 1.4) * (run ? 0.85 : 0.55);
      const sw = Math.sin(p.anim) * amp;
      this.torso.setMatrixAt(s, M.multiplyMatrices(B, TORSO));
      this.head.setMatrixAt(s, M.multiplyMatrices(B, HEAD));
      const aiming = p.weapon && p.aimT > 0 && !lying;
      const armR = aiming ? 1.45 : lying ? 2.6 : -sw * 0.9;
      const armL = lying ? 2.4 : aiming && p.weapon !== 'pistol' ? 1.2 : sw * 0.9;
      // phi < 0 swings a limb towards +z (the ped's right), phi > 0 towards -z
      this.arms.setMatrixAt(s * 2, M.multiplyMatrices(B, limb(P, 0, 1.33, 0.36, armR, 0.62, 0.13, lying ? -0.5 : aiming ? 0.05 : -0.1)));
      this.arms.setMatrixAt(s * 2 + 1, M.multiplyMatrices(B, limb(P, 0, 1.33, -0.36, armL, 0.62, 0.13, lying ? 0.5 : aiming && p.weapon !== 'pistol' ? -0.35 : 0.1)));
      this.legs.setMatrixAt(s * 2, M.multiplyMatrices(B, limb(P, 0, 0.86, 0.13, sw, 0.86, 0.17, lying ? -0.25 : 0)));
      this.legs.setMatrixAt(s * 2 + 1, M.multiplyMatrices(B, limb(P, 0, 0.86, -0.13, -sw, 0.86, 0.17, lying ? 0.25 : 0)));
      if (p.weapon && p.weapon !== 'fists' && !lying) this.gun.setMatrixAt(s, M.multiplyMatrices(B, aiming ? GUN : limb(P, 0.0, 1.0, 0.36, armR, 0.5, 0.1)));
      else this.gun.setMatrixAt(s, ZERO);
      SH.makeTranslation(p.x + SHADOW_DX * (lying ? 0.5 : 1.9), 0.031, p.z + SHADOW_DZ * (lying ? 0.5 : 1.9));
      SH.multiply(M.makeScale(lying ? 2.4 : PED_SCALE, 1, lying ? 1.6 : PED_SCALE));
      this.shadow.setMatrixAt(s, SH);
    }
    for (const im of [this.torso, this.head, this.arms, this.legs, this.gun, this.shadow]) im.instanceMatrix.needsUpdate = true;
    // player marker ring
    const pl = G.player;
    if (pl && pl.ped && !pl.ped.hidden && pl.ped.alive) {
      this.ring.visible = true;
      this.ring.position.set(pl.ped.x, 0.04, pl.ped.z);
      const k = 1 + Math.sin(G.realTime * 5) * 0.08;
      this.ring.scale.set(k, 1, k);
    } else this.ring.visible = false;
  }
}

export { hexRgb, clamp };
