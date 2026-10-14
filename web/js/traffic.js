// Ambient city life: lane-following traffic, parked cars and pedestrians that
// spawn just out of view around the player and despawn far away.
import { G } from './game.js';
import { TILE, T, WALKABLE, D } from './consts.js';
import { clamp, rand, randRange, pick, angDiff, dist } from './util.js';
import { spawnVehicle, removeVehicle, randomCivType, VTYPES } from './vehicles.js';
import { spawnPed, removePed } from './peds.js';

const tmp = [];

export class Traffic {
  constructor(city) {
    this.city = city;
    this.carTarget = 32;
    this.pedTarget = 42;
    this.spawnT = 0;
    this.pedT = 0;
    this.parkT = 0;
    // candidate tiles for pedestrians
    this.pedTiles = [];
    const { W, H, tiles, district } = city;
    for (let z = 0; z < H; z++) for (let x = 0; x < W; x++) {
      const t = tiles[z * W + x];
      if (t === T.SIDEWALK || t === T.PLAZA || (t === T.GRASS && district[z * W + x] === D.PARK)) this.pedTiles.push(z * W + x);
    }
    this.lanesByChunk = city.lanes;
  }

  setQuality(q) {
    this.carTarget = q === 'low' ? 22 : q === 'high' ? 42 : 32;
    this.pedTarget = q === 'low' ? 28 : q === 'high' ? 54 : 42;
  }

  focus() {
    const pl = G.player;
    if (!pl) return { x: G.cam.cx, z: G.cam.cz };
    return pl.inCar ? { x: pl.vehicle.x, z: pl.vehicle.z } : { x: pl.ped.x, z: pl.ped.z };
  }

  inView(x, z, margin = 8) {
    const c = G.cam;
    return Math.abs(x - c.cx) < c.halfW + margin && Math.abs(z - c.cz) < c.halfH + margin;
  }

  update(dt) {
    const f = this.focus();
    // ---------------------------------------------------------- traffic cars
    this.spawnT -= dt;
    let civ = 0;
    for (let i = G.vehicles.length - 1; i >= 0; i--) {
      const v = G.vehicles[i];
      const d = dist(v.x, v.z, f.x, f.z);
      const visible = this.inView(v.x, v.z, 12);
      if (visible) v.sinceSeen = 0; else v.sinceSeen += dt;
      if (v.ai && v.ai.mode === 'traffic') civ++;
      const playerCar = G.player && (G.player.vehicle === v || G.player.lastCar === v);
      const far = v.persistent || playerCar ? 260 : v.spot ? 125 : 165;
      if (d > far && !visible && !v.mission) {
        if (v.spot && v.spot.vehicle === v) v.spot.vehicle = null;
        if (G.player && G.player.lastCar === v) G.player.lastCar = null;
        removeVehicle(v);
        continue;
      }
      // wrecks clean up once out of sight for a while
      if (v.dead && v.sinceSeen > 20 && !v.mission) { removeVehicle(v); continue; }
    }
    if (this.spawnT <= 0 && civ < this.carTarget) {
      this.spawnT = 0.1;
      this.spawnTrafficCar(f);
    }
    // ---------------------------------------------------------- parked cars
    this.parkT -= dt;
    if (this.parkT <= 0) {
      this.parkT = 0.5;
      for (const s of this.city.parkingSpots) {
        if (s.vehicle) {
          const v = s.vehicle;
          if (v.removed || dist(v.x, v.z, s.x, s.z) > 3 || v.driver) { s.vehicle = null; s.state = 'empty'; v.spot = null; }
          continue;
        }
        const d = dist(s.x, s.z, f.x, f.z);
        if (d > 95 || d < 20) continue;
        if (this.inView(s.x, s.z, 6)) continue;
        if (s.state === undefined) s.state = rand() < 0.62 ? 'car' : 'empty';
        if (s.state !== 'car') continue;
        if (this.blocked(s.x, s.z, 3.5)) continue;
        const type = pick(['sedan', 'sedan', 'compact', 'compact', 'pickup', 'van', 'sports', 'muscle', 'taxi']);
        const v = spawnVehicle(type, s.x, s.z, s.h);
        v.spot = s;
        s.vehicle = v;
      }
    }
    // ---------------------------------------------------------- pedestrians
    let civPeds = 0;
    for (let i = G.peds.length - 1; i >= 0; i--) {
      const p = G.peds[i];
      if (p.kind === 'player' || p.persistent) continue;
      const d = dist(p.x, p.z, f.x, f.z);
      if (!p.brain) civPeds++;
      const far = p.brain ? 140 : 95;
      if (d > far && !this.inView(p.x, p.z, 6)) { removePed(p); continue; }
      if (p.state === 'dead' && p.timer > 40 && !this.inView(p.x, p.z, 4)) removePed(p);
    }
    this.pedT -= dt;
    if (this.pedT <= 0 && civPeds < this.pedTarget) {
      this.pedT = 0.08;
      this.spawnPedNear(f);
    }
  }

  blocked(x, z, r) {
    for (const v of G.vehicles) if (Math.abs(v.x - x) < r + v.radius && Math.abs(v.z - z) < r + v.radius && dist(v.x, v.z, x, z) < r + v.radius) return true;
    return false;
  }

  /** choose a lane point in a ring around (f) that is out of view */
  laneSpot(f, rMin, rMax, tries = 20) {
    const lanes = this.city.lanes;
    for (let k = 0; k < tries; k++) {
      const lane = lanes[(rand() * lanes.length) | 0];
      // quick reject using lane midpoint
      const mx = (lane.ax + lane.bx) / 2, mz = (lane.az + lane.bz) / 2;
      if (dist(mx, mz, f.x, f.z) > rMax + lane.len / 2) continue;
      const t = rand() * lane.len;
      const x = lane.ax + lane.dx * t, z = lane.az + lane.dz * t;
      const d = dist(x, z, f.x, f.z);
      if (d < rMin || d > rMax || this.inView(x, z, 10)) continue;
      if (lane.len - t < 6) continue;
      return { lane, t, x, z };
    }
    return null;
  }

  spawnTrafficCar(f, forceType) {
    const s = this.laneSpot(f, 58, 140);
    if (!s) return null;
    if (this.blocked(s.x, s.z, 7)) return null;
    let type = forceType || (rand() < 0.06 ? 'police' : randomCivType());
    if (type === 'bus' && s.lane.speed < 14 && rand() < 0.5) type = 'sedan';
    const h = Math.atan2(s.lane.dz, s.lane.dx);
    const v = spawnVehicle(type, s.x, s.z, h, { speed: s.lane.speed * 0.7 });
    v.driver = type === 'police' ? 'cop' : 'npc';
    v.crew = type === 'police' ? 2 : 1;
    setTraffic(v, s.lane, s.t);
    return v;
  }

  spawnPedNear(f) {
    const { W } = this.city;
    for (let k = 0; k < 14; k++) {
      const idx = this.pedTiles[(rand() * this.pedTiles.length) | 0];
      const tx = idx % W, tz = (idx / W) | 0;
      const x = (tx + randRange(0.2, 0.8)) * TILE, z = (tz + randRange(0.2, 0.8)) * TILE;
      const d = dist(x, z, f.x, f.z);
      if (d < 35 || d > 85 || this.inView(x, z, 4)) continue;
      const dd = this.city.district[idx];
      const w = dd === D.DOWNTOWN ? 1 : dd === D.COMMERCIAL ? 0.85 : dd === D.PARK ? 0.6 : dd === D.WATERFRONT ? 0.6 : 0.4;
      if (rand() > w) continue;
      const p = spawnPed('civ', x, z);
      if (rand() < 0.04) { p.weapon = 'pistol'; p.armed = true; }
      return p;
    }
    return null;
  }
}

// ------------------------------------------------------------------ lane following AI
export function setTraffic(v, lane, t) {
  v.ai = {
    mode: 'traffic',
    lane,
    pts: [lane.ax + lane.dx * t, lane.az + lane.dz * t, lane.bx, lane.bz],
    pi: 1,
    speedScale: randRange(0.85, 1.08),
    blockedT: 0,
    waitT: 0,
    panicT: 0,
    hornCd: 0,
    turns: [],
  };
}

/** re-join the nearest lane (used after a car was hijacked back by AI or after a chase) */
export function rejoinTraffic(v) {
  const lanes = G.city.lanes;
  let best = null, bd = 1e9, bt = 0;
  for (const lane of lanes) {
    // distance from point to segment
    const px = v.x - lane.ax, pz = v.z - lane.az;
    let t = clamp(px * lane.dx + pz * lane.dz, 0, lane.len);
    const cx = lane.ax + lane.dx * t, cz = lane.az + lane.dz * t;
    let d = dist(v.x, v.z, cx, cz);
    d += Math.abs(angDiff(Math.atan2(lane.dz, lane.dx), v.h)) * 4;
    if (d < bd) { bd = d; best = lane; bt = t; }
  }
  if (best) setTraffic(v, best, Math.min(bt + 4, best.len - 0.5));
}

function appendNext(ai) {
  const lane = ai.lane;
  const outs = lane.outs;
  let conn;
  if (!outs.length) return false;
  if (outs.length === 1) conn = G.city.conns[outs[0]];
  else {
    let total = 0;
    const ws = outs.map((id) => {
      const c = G.city.conns[id];
      const w = c.turn === 'S' ? 0.55 : c.turn === 'U' ? 0.02 : 0.24;
      total += w;
      return w;
    });
    let r = rand() * total;
    let k = 0;
    for (; k < ws.length - 1; k++) { r -= ws[k]; if (r <= 0) break; }
    conn = G.city.conns[outs[k]];
  }
  const startIdx = ai.pts.length / 2;
  for (let i = 2; i < conn.pts.length; i += 2) ai.pts.push(conn.pts[i], conn.pts[i + 1]);
  ai.turns.push({ at: startIdx - 1, turn: conn.turn, node: conn.node });
  const next = G.city.lanes[conn.to];
  ai.pts.push(next.bx, next.bz);
  ai.lane = next;
  return true;
}

const others = [];
export function driveTraffic(v, dt) {
  const ai = v.ai;
  const pts = ai.pts;
  // keep enough path ahead
  let guard = 0;
  while (pts.length / 2 - ai.pi < 6 && guard++ < 4) if (!appendNext(ai)) break;
  // drop consumed points
  if (ai.pi > 24) {
    const drop = ai.pi - 2;
    pts.splice(0, drop * 2);
    ai.pi -= drop;
    for (const t of ai.turns) t.at -= drop;
    while (ai.turns.length && ai.turns[0].at < -2) ai.turns.shift();
  }
  const n = pts.length / 2;
  // advance waypoint index
  while (ai.pi < n - 1) {
    const ax = pts[(ai.pi - 1) * 2], az = pts[(ai.pi - 1) * 2 + 1];
    const bx = pts[ai.pi * 2], bz = pts[ai.pi * 2 + 1];
    const sx = bx - ax, sz = bz - az;
    const sl = Math.hypot(sx, sz) || 1;
    const along = ((v.x - ax) * sx + (v.z - az) * sz) / sl;
    if (along >= sl - 0.5) ai.pi++;
    else break;
  }
  // pure pursuit target
  const look = 3.5 + v.speed * 0.42 + v.t.L * 0.3;
  let k = ai.pi;
  let ax = pts[(k - 1) * 2], az = pts[(k - 1) * 2 + 1];
  let bx = pts[k * 2], bz = pts[k * 2 + 1];
  let sx = bx - ax, sz = bz - az;
  let sl = Math.hypot(sx, sz) || 1;
  let along = clamp(((v.x - ax) * sx + (v.z - az) * sz) / sl, 0, sl);
  let px = ax + (sx / sl) * along, pz = az + (sz / sl) * along;
  const latErr = Math.hypot(v.x - px, v.z - pz);
  let rem = look;
  let tx = px, tz = pz;
  for (;;) {
    const dl = Math.hypot(bx - px, bz - pz);
    if (rem <= dl || k >= n - 1) {
      const f = dl > 0 ? Math.min(1, rem / dl) : 0;
      tx = px + (bx - px) * f; tz = pz + (bz - pz) * f;
      break;
    }
    rem -= dl;
    px = bx; pz = bz;
    k++;
    bx = pts[k * 2]; bz = pts[k * 2 + 1];
  }
  const desired = Math.atan2(tz - v.z, tx - v.x);
  const diff = angDiff(desired, v.h);
  v.input.steer = clamp(diff * 2.4, -1, 1);
  // ---- target speed
  let target = ai.lane.speed * ai.speedScale;
  if (ai.panicT > 0) { ai.panicT -= dt; target *= 1.45; }
  // slow for upcoming turns
  for (const t of ai.turns) {
    if (t.turn === 'S') continue;
    const ti = t.at;
    if (ti < ai.pi - 2) continue;
    const qx = pts[Math.max(0, ti) * 2], qz = pts[Math.max(0, ti) * 2 + 1];
    const d = Math.hypot(qx - v.x, qz - v.z);
    if (d < 22) target = Math.min(target, 6.5 + d * 0.25);
    break;
  }
  if (latErr > 3) target = Math.min(target, 7);
  // obstacles ahead
  const fx = Math.cos(v.h), fz = Math.sin(v.h), rx = -fz, rz = fx;
  const range = 5 + v.speed * 1.35 + v.t.L / 2;
  let blocker = null;
  G.hash.query(v.x + fx * range * 0.5, v.z + fz * range * 0.5, range * 0.6 + 4, others);
  for (const o of others) {
    if (o === v || o.hidden || o.removed) continue;
    const ox = o.x - v.x, oz = o.z - v.z;
    const al = ox * fx + oz * fz;
    if (al < 0) continue;
    const lat = Math.abs(ox * rx + oz * rz);
    let extAlong = 0.35, extLat = 0.45;
    if (o.isVehicle) {
      const dh = o.h - v.h, c = Math.abs(Math.cos(dh)), s = Math.abs(Math.sin(dh));
      extAlong = c * o.t.L / 2 + s * o.t.W / 2;
      extLat = s * o.t.L / 2 + c * o.t.W / 2;
    }
    if (lat > v.t.W / 2 + extLat + 0.45) continue;
    const gap = al - v.t.L / 2 - extAlong;
    if (gap > range) continue;
    // ignore vehicles moving away quickly in the same direction
    const allowed = Math.max(0, (gap - 2.2) * 0.85);
    if (allowed < target) { target = allowed; blocker = o; }
  }
  // junction yield: crossing traffic already inside the next junction
  const turn = ai.turns.find((t) => t.at >= ai.pi - 1);
  if (turn && turn.node && turn.node.junction && ai.waitT < 2.5) {
    const qx = pts[turn.at * 2], qz = pts[turn.at * 2 + 1];
    const d = Math.hypot(qx - v.x, qz - v.z);
    if (d < 6 && d > 0.8) {
      const n0 = turn.node;
      const x0 = n0.x0 * TILE, x1 = n0.x1 * TILE, z0 = n0.z0 * TILE, z1 = n0.z1 * TILE;
      let busy = false;
      for (const o of G.vehicles) {
        if (o === v || o.speed < 1.5) continue;
        if (o.x < x0 - 1 || o.x > x1 + 1 || o.z < z0 - 1 || o.z > z1 + 1) continue;
        if (Math.abs(angDiff(o.h, v.h)) < 0.5) continue;
        busy = true; break;
      }
      if (busy) { target = 0; ai.waitT += dt; }
    }
  }
  if (target > 3) ai.waitT = 0;
  // stuck behind something: honk, then try to pass
  if (target < 0.5 && blocker) {
    ai.blockedT += dt;
    if (ai.blockedT > 2 && ai.hornCd <= 0 && (blocker.kind === 'player' || (blocker.isVehicle && blocker.driver === 'player'))) {
      v.horn = 0.5; ai.hornCd = randRange(2, 4);
      G.audio?.horn(v.x, v.z, 0.5);
    }
  } else ai.blockedT = Math.max(0, ai.blockedT - dt);
  if (ai.hornCd > 0) ai.hornCd -= dt;
  if (ai.blockedT > 7 && blocker && !blocker.isPed) {
    // squeeze past slowly
    target = 2.5;
    v.input.steer = clamp(v.input.steer - 0.6, -1, 1);
  }
  // throttle / brake
  const vf = v.vf;
  if (vf < target - 0.4) { v.input.throttle = clamp((target - vf) * 0.35, 0.25, 1); v.input.brake = 0; }
  else if (vf > target + 0.6) { v.input.throttle = 0; v.input.brake = clamp((vf - target) * 0.25, 0.25, 1); }
  else { v.input.throttle = 0.12; v.input.brake = 0; }
  if (target === 0 && vf < 1) { v.input.throttle = 0; v.input.brake = 1; }
  v.input.handbrake = false;
}

export { VTYPES, WALKABLE };
