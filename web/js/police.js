// Wanted level, police spawning, pursuit driving, cops on foot and arrests.
import { G } from './game.js';
import { TILE, DRIVE_COST, WALKABLE, SOLID } from './consts.js';
import { clamp, rand, randRange, angDiff, dist, pick } from './util.js';
import { hasLOS } from './physics.js';
import { spawnVehicle } from './vehicles.js';
import { spawnPed } from './peds.js';
import { fire } from './weapons.js';
import { setTraffic, rejoinTraffic } from './traffic.js';

const INF = 0x3fffffff;

export class Police {
  constructor(city) {
    this.city = city;
    this.heat = 0;
    this.lastSeen = -999;
    this.spawnCd = 0;
    this.field = new Int32Array(city.W * city.H).fill(INF);
    this.fieldT = 0;
    this.fieldFrom = -1;
    this.bust = 0;
    this.seen = false;
    this.flash = 0;
    this.prevLevel = 0;
  }
  get level() { return Math.min(5, Math.floor(this.heat)); }

  reset() {
    this.heat = 0;
    this.bust = 0;
    this.disengageAll();
  }

  /** crime committed at (x,z); witnessed by nearby police unless forced */
  crime(amount, x, z, force = false) {
    if (!force && !this.witnessed(x, z)) return false;
    const before = this.level;
    this.heat = Math.min(5.99, this.heat + amount);
    this.lastSeen = G.time;
    if (this.level > before) {
      this.flash = 1.5;
      G.audio?.wantedUp?.();
      G.hud?.flashWanted();
    }
    return true;
  }
  setAtLeast(level) {
    if (this.heat < level) {
      this.heat = level + 0.05;
      this.lastSeen = G.time;
      this.flash = 1.5;
      G.audio?.wantedUp?.();
    }
  }
  witnessed(x, z) {
    for (const p of G.peds) {
      if (!p.alive || p.hidden || (p.kind !== 'cop' && p.kind !== 'swat')) continue;
      const d = dist(p.x, p.z, x, z);
      if (d < 38 && (d < 10 || hasLOS(p.x, p.z, x, z))) return true;
    }
    for (const v of G.vehicles) {
      if (v.dead || (v.type !== 'police' && v.type !== 'swat') || !v.driver || v.driver === 'player') continue;
      const d = dist(v.x, v.z, x, z);
      if (d < 42 && (d < 12 || hasLOS(v.x, v.z, x, z))) return true;
    }
    return false;
  }

  disengageAll() {
    for (const v of G.vehicles) {
      if (v.ai && (v.ai.mode === 'pursuit' || v.ai.mode === 'waiting')) {
        v.sirenOn = false;
        if (v.driver && v.driver !== 'player') rejoinTraffic(v);
        else v.ai = null;
      }
    }
    for (const p of G.peds) {
      if (p.brain === copBrain) {
        p.brain = null;
        p.state = 'walk';
        p.aimT = 0;
      }
    }
  }

  playerPos() {
    const pl = G.player;
    if (!pl) return null;
    const e = pl.inCar ? pl.vehicle : pl.ped;
    return { x: e.x, z: e.z, vx: e.vx, vz: e.vz, speed: pl.inCar ? pl.vehicle.speed : pl.ped.speed, inCar: pl.inCar, v: pl.vehicle };
  }

  update(dt) {
    const pl = G.player;
    if (!pl || !pl.alive) return;
    const pp = this.playerPos();
    if (this.flash > 0) this.flash -= dt;
    const lvl = this.level;
    // ---- visibility / decay
    this.seen = false;
    if (lvl > 0) {
      for (const p of G.peds) {
        if (!p.alive || p.hidden || (p.kind !== 'cop' && p.kind !== 'swat')) continue;
        const d = dist(p.x, p.z, pp.x, pp.z);
        if (d < 45 && (d < 12 || hasLOS(p.x, p.z, pp.x, pp.z))) { this.seen = true; break; }
      }
      if (!this.seen) for (const v of G.vehicles) {
        if (v.dead || !v.ai || v.ai.mode !== 'pursuit') continue;
        const d = dist(v.x, v.z, pp.x, pp.z);
        if (d < 50 && (d < 14 || hasLOS(v.x, v.z, pp.x, pp.z))) { this.seen = true; break; }
      }
      if (this.seen) this.lastSeen = G.time;
      const lose = 7 + lvl * 2.6;
      if (G.time - this.lastSeen > lose) {
        this.heat = Math.max(0, Math.floor(this.heat) - 0.01);
        if (this.heat < 1) this.heat = 0;
        this.lastSeen = G.time;
        if (this.heat === 0) {
          this.disengageAll();
          G.hud?.toast('Lost the cops');
        }
      }
    }
    // ---- pursuit units
    let units = 0, swat = 0;
    for (const v of G.vehicles) {
      if (v.dead) continue;
      if (v.ai && (v.ai.mode === 'pursuit' || v.ai.mode === 'waiting')) {
        units++;
        if (v.type === 'swat') swat++;
      } else if (lvl > 0 && v.type === 'police' && v.driver === 'cop' && v.ai && v.ai.mode === 'traffic' && dist(v.x, v.z, pp.x, pp.z) < 60) {
        startPursuit(v);
        units++;
      }
    }
    const want = [0, 1, 2, 3, 4, 5][lvl];
    const wantSwat = lvl >= 5 ? 2 : lvl >= 4 ? 1 : 0;
    this.spawnCd -= dt;
    if (lvl > 0 && this.spawnCd <= 0 && (units - swat < want || swat < wantSwat)) {
      const type = swat < wantSwat ? 'swat' : 'police';
      if (this.spawnUnit(type, pp)) this.spawnCd = clamp(5 - lvl * 0.7, 1.4, 5);
      else this.spawnCd = 0.5;
    }
    // ---- flow field towards the player
    this.fieldT -= dt;
    const ptile = Math.floor(pp.z / TILE) * this.city.W + Math.floor(pp.x / TILE);
    if (lvl > 0 && (this.fieldT <= 0 && ptile !== this.fieldFrom)) {
      this.fieldT = 0.6;
      this.computeField(pp.x, pp.z);
      this.fieldFrom = ptile;
    }
    // ---- arrests
    let close = false;
    if (lvl > 0) {
      const door = pp.inCar ? pp.v.doorPos(-1) : null;
      for (const p of G.peds) {
        if (p.brain !== copBrain || !p.alive || p.state !== 'custom') continue;
        if (!pp.inCar) {
          if (dist(p.x, p.z, pp.x, pp.z) < 1.15 && pp.speed < 4.5) close = true;
        } else if (pp.speed < 1.6) {
          if (dist(p.x, p.z, door.x, door.z) < 1.5 || dist(p.x, p.z, pp.x, pp.z) < pp.v.t.W / 2 + 1.1) close = true;
        }
      }
    }
    if (close) {
      this.bust += dt;
      if (this.bust > 0.9) { this.bust = 0; G.events.busted?.(); }
    } else this.bust = Math.max(0, this.bust - dt * 0.5);
    this.prevLevel = lvl;
  }

  spawnUnit(type, pp) {
    // prefer a lane that already points towards the player
    let s = null;
    for (let k = 0; k < 6; k++) {
      const c = G.traffic.laneSpot(pp, 75, 135, 20);
      if (!c) continue;
      const dx = pp.x - c.x, dz = pp.z - c.z, l = Math.hypot(dx, dz) || 1;
      if ((dx * c.lane.dx + dz * c.lane.dz) / l > 0.2) { s = c; break; }
      if (!s) s = c;
    }
    if (!s) return false;
    if (G.traffic.blocked(s.x, s.z, 7)) return false;
    // drive towards the player: flip direction if the lane leads away
    let h = Math.atan2(s.lane.dz, s.lane.dx);
    const v = spawnVehicle(type, s.x, s.z, h, { speed: 12 });
    v.driver = 'cop';
    v.crew = type === 'swat' ? 3 : 2;
    startPursuit(v);
    return true;
  }

  computeField(px, pz) {
    const { W, H, tiles } = this.city;
    const f = this.field;
    f.fill(INF);
    const start = Math.floor(pz / TILE) * W + Math.floor(px / TILE);
    if (start < 0 || start >= W * H) return;
    // Dial's algorithm with small integer costs
    const buckets = [];
    for (let i = 0; i < 8; i++) buckets.push([]);
    f[start] = 0;
    buckets[0].push(start);
    let cur = 0, pending = 1;
    while (pending > 0) {
      const b = buckets[cur & 7];
      while (b.length) {
        const k = b.pop();
        pending--;
        const d = f[k];
        if (d !== cur) continue;
        const x = k % W, z = (k / W) | 0;
        for (let n = 0; n < 4; n++) {
          const nx = x + (n === 0 ? 1 : n === 1 ? -1 : 0), nz = z + (n === 2 ? 1 : n === 3 ? -1 : 0);
          if (nx < 0 || nz < 0 || nx >= W || nz >= H) continue;
          const nk = nz * W + nx;
          const c = DRIVE_COST[tiles[nk]];
          if (!c) continue;
          const nd = d + c;
          if (nd < f[nk]) { f[nk] = nd; buckets[nd & 7].push(nk); pending++; }
        }
      }
      cur++;
      if (cur > 200000) break;
    }
  }

  /** a point a few tiles closer to the player along the flow field */
  waypoint(x, z, steps = 3) {
    const { W, H, tiles } = this.city;
    const f = this.field;
    let tx = Math.floor(x / TILE), tz = Math.floor(z / TILE);
    if (tx < 0 || tz < 0 || tx >= W || tz >= H) return null;
    if (f[tz * W + tx] >= INF) {
      // find a nearby reachable tile
      let best = null, bd = INF;
      for (let dz = -2; dz <= 2; dz++) for (let dx = -2; dx <= 2; dx++) {
        const nx = tx + dx, nz = tz + dz;
        if (nx < 0 || nz < 0 || nx >= W || nz >= H) continue;
        const v = f[nz * W + nx];
        if (v < bd) { bd = v; best = [nx, nz]; }
      }
      if (!best) return null;
      return { x: (best[0] + 0.5) * TILE, z: (best[1] + 0.5) * TILE };
    }
    for (let s = 0; s < steps; s++) {
      let bx = tx, bz = tz, bv = f[tz * W + tx];
      for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) {
        if (!dx && !dz) continue;
        const nx = tx + dx, nz = tz + dz;
        if (nx < 0 || nz < 0 || nx >= W || nz >= H) continue;
        if (dx && dz && (SOLID[tiles[tz * W + nx]] || SOLID[tiles[nz * W + tx]])) continue;
        const v = f[nz * W + nx] + (dx && dz ? 1 : 0);
        if (v < bv) { bv = v; bx = nx; bz = nz; }
      }
      if (bx === tx && bz === tz) break;
      tx = bx; tz = bz;
    }
    return { x: (tx + 0.5) * TILE, z: (tz + 0.5) * TILE };
  }
}

export function startPursuit(v) {
  v.ai = { mode: 'pursuit', stuckT: 0, reverseT: 0, deployed: false, crewIn: v.crew || 2, lostT: 0 };
  v.sirenOn = true;
}

// ------------------------------------------------------------------ pursuit driving
export function drivePursuit(v, dt) {
  const ai = v.ai;
  const police = G.police;
  const pp = police.playerPos();
  if (!pp) return;
  if (police.level === 0) { v.sirenOn = false; rejoinTraffic(v); return; }
  const dx = pp.x - v.x, dz = pp.z - v.z;
  const d = Math.hypot(dx, dz);
  const lead = clamp(d / 35, 0, 1.1);
  const tx = pp.x + (pp.vx || 0) * lead, tz = pp.z + (pp.vz || 0) * lead;
  let aim;
  if (d < 32 && hasLOS(v.x, v.z, tx, tz)) aim = { x: tx, z: tz };
  else aim = police.waypoint(v.x, v.z, 3) || { x: tx, z: tz };
  const desired = Math.atan2(aim.z - v.z, aim.x - v.x);
  const diff = angDiff(desired, v.h);
  const inp = v.input;
  inp.handbrake = false;
  if (ai.reverseT > 0) {
    ai.reverseT -= dt;
    inp.throttle = -1; inp.brake = 0;
    inp.steer = -Math.sign(diff || 1);
    return;
  }
  inp.steer = clamp(diff * 2.6, -1, 1);
  inp.brake = 0;
  inp.throttle = 1;
  if (Math.abs(diff) > 1.5 && v.vf > 9) { inp.throttle = 0; inp.brake = 0.6; }
  if (Math.abs(diff) > 2.3 && v.speed < 5 && d > 8) ai.reverseT = 0.8;
  // close in and deploy when the player is on foot or nearly stopped: plan the stop
  const slow = !pp.inCar || pp.speed < 3;
  if (slow && d < 45) {
    const want = clamp((d - 9) * 1.05, 0, 30);
    if (v.vf > want + 0.5) { inp.throttle = 0; inp.brake = clamp((v.vf - want) * 0.3, 0.35, 1); }
    else if (d < 11) { inp.throttle = 0; inp.brake = 1; }
    if (d < 14 && v.speed < 1.8 && !ai.deployed) deployCops(v);
  }
  // stuck detection
  if (inp.throttle > 0.5 && v.speed < 1.2) ai.stuckT += dt; else ai.stuckT = Math.max(0, ai.stuckT - dt);
  if (ai.stuckT > 1.1) { ai.stuckT = 0; ai.reverseT = 0.9; }
  // ram nudge: aggressive at higher heat
  if (d < 10 && pp.inCar && police.level >= 3) inp.throttle = 1;
}

export function deployCops(v) {
  const ai = v.ai;
  ai.deployed = true;
  ai.mode = 'waiting';
  const n = ai.crewIn || 1;
  for (let i = 0; i < n; i++) {
    const side = i % 2 === 0 ? -1 : 1;
    const door = v.doorPos(side);
    let x = door.x, z = door.z;
    if (G.q.solidAt(x, z)) { x = v.x; z = v.z; }
    const p = spawnPed(v.type === 'swat' ? 'swat' : 'cop', x, z, v.h);
    p.brain = copBrain;
    p.state = 'custom';
    p.weapon = v.type === 'swat' ? 'smg' : 'pistol';
    p.homeCar = v;
    p.runSpeed = randRange(5.2, 6.0);
    p.fireCd = randRange(0.6, 1.4);
  }
  ai.crewIn = 0;
  v.driver = null;
}

// ------------------------------------------------------------------ cops on foot
export function copBrain(p, dt) {
  const police = G.police;
  const pp = police.playerPos();
  if (!pp || !G.player.alive) { p.vx = p.vz = 0; return; }
  if (police.level === 0) {
    // back to the car or stroll off
    p.aimT = 0;
    const car = p.homeCar;
    if (car && !car.dead && !car.driver && dist(p.x, p.z, car.x, car.z) < 30) {
      const door = car.doorPos(-1);
      if (p.moveTo(door.x, door.z, 2.5) < 1) boardCar(p, car);
    } else { p.brain = null; p.state = 'walk'; }
    return;
  }
  const d = dist(p.x, p.z, pp.x, pp.z);
  // player speeding away in a car: get back into ours
  const car = p.homeCar;
  if (pp.inCar && pp.speed > 7 && d > 16 && car && !car.dead && !car.driver && dist(p.x, p.z, car.x, car.z) < 28) {
    const door = car.doorPos(-1);
    if (p.moveTo(door.x, door.z, p.runSpeed) < 1.0) boardCar(p, car);
    return;
  }
  // chase: direct when visible, else follow the flow field
  let tx = pp.x, tz = pp.z;
  const los = d < 40 && hasLOS(p.x, p.z, pp.x, pp.z);
  if (pp.inCar) {
    const door = pp.v.doorPos(-1);
    if (pp.speed < 2) { tx = door.x; tz = door.z; }
  }
  if (!los && d > 6) {
    const w = police.waypoint(p.x, p.z, 2);
    if (w) { tx = w.x; tz = w.z; }
  }
  // level 1: arrest only. level 2: shoot back if the player has a gun out. 3+: open fire
  const lvl = police.level;
  const pl = G.player;
  const playerArmed = pl.weapon !== 'fists' || G.realTime - (pl.lastShotT || -99) < 8;
  const mayShoot = p.weapon && (lvl >= 3 || (lvl >= 2 && playerArmed) || p.kind === 'swat');
  const shootRange = p.kind === 'swat' ? 22 : 17;
  const stopToShoot = mayShoot && los && d < shootRange && d > 3.5 && !(pp.inCar && pp.speed < 2);
  if (stopToShoot) {
    p.vx *= 0.6; p.vz *= 0.6;
    p.h = Math.atan2(pp.z - p.z, pp.x - p.x);
    p.aimT = 0.5;
    if (p.fireCd <= 0) {
      const err = (pp.speed > 4 ? 0.12 : 0.06) + rand() * 0.06;
      fire(p, p.weapon, p.h + randRange(-err, err));
      p.fireCd += randRange(p.kind === 'swat' ? 0.2 : 0.55, p.kind === 'swat' ? 0.5 : 1.2);
    }
  } else {
    p.moveTo(tx, tz, d < 2 ? 2.5 : p.runSpeed);
  }
}

function boardCar(p, car) {
  car.ai = car.ai || { mode: 'waiting' };
  car.ai.crewIn = (car.ai.crewIn || 0) + 1;
  p.hidden = true;
  p.persistent = false;
  // remove the ped, the car tracks crew count
  p.alive = false;
  p.removeMe = true;
  if (!car.driver) car.driver = 'cop';
  // when all aboard (or nobody else nearby), resume pursuit
  const left = G.peds.some((o) => o !== p && o.brain === copBrain && o.homeCar === car && o.alive && !o.hidden);
  if (!left) {
    const crew = car.ai.crewIn;
    startPursuit(car);
    car.ai.crewIn = crew;
  }
}

export { pick, WALKABLE, setTraffic };
