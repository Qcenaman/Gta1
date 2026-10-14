// The player: on-foot control, car-jacking, driving, weapons, respray.
import { G } from './game.js';
import { TILE } from './consts.js';
import { clamp, angDiff, dist, rand, randRange, pick } from './util.js';
import { fire, WEAPONS, WEAPON_ORDER } from './weapons.js';
import { spawnPed } from './peds.js';
import { randomPaint } from './vehicles.js';
import { copBrain } from './police.js';

export class Player {
  constructor(ped) {
    this.ped = ped;
    ped.kind = 'player';
    ped.persistent = true;
    ped.state = 'custom';
    ped.brain = (p) => { p.vx = this.wantVx; p.vz = this.wantVz; };
    this.wantVx = 0; this.wantVz = 0;
    this.vehicle = null;
    this.inCar = false;
    this.entering = null;
    this.cash = 0;
    this.lives = 4;
    this.weapon = 'fists';
    this.ammo = { fists: Infinity, pistol: 0, smg: 0, shotgun: 0, rocket: 0, flamer: 0 };
    this.lastCar = null;
    this.spray = 0;
    this.padCd = false;
    this.hornCd = 0;
    this.extraLifeAt = 50000;
  }

  get alive() { return this.ped.alive; }

  pos() {
    const e = this.inCar ? this.vehicle : this.ped;
    return { x: e.x, z: e.z };
  }

  addCash(n) {
    this.cash += n;
    G.hud?.cashPulse();
    while (this.cash >= this.extraLifeAt) {
      this.extraLifeAt += 50000;
      this.lives++;
      G.hud?.toast('Extra life!');
      G.audio?.missionPassed();
    }
  }

  nextWeapon() {
    const i = WEAPON_ORDER.indexOf(this.weapon);
    for (let k = 1; k <= WEAPON_ORDER.length; k++) {
      const w = WEAPON_ORDER[(i + k) % WEAPON_ORDER.length];
      if (w === 'fists' || this.ammo[w] > 0) { this.weapon = w; break; }
    }
    G.audio?.click();
  }

  update(dt, input) {
    if (!this.alive) return;
    this.ped.weapon = this.weapon;
    if (this.inCar) this.drive(dt, input);
    else this.onFoot(dt, input);
  }

  // ---------------------------------------------------------------- on foot
  onFoot(dt, input) {
    const ped = this.ped;
    if (ped.state === 'down') { this.wantVx = this.wantVz = 0; input.take('b'); return; }
    if (this.weapon !== 'fists' && !(this.ammo[this.weapon] > 0)) this.weapon = 'fists';
    if (input.take('weapon') || input.take('c')) this.nextWeapon();
    const m = input.move();
    if (this.entering) { this.updateEntering(dt, m); return; }
    const run = m.keyboard ? !input.handbrake : m.mag > 0.8;
    const sp = m.mag > 0 ? (run ? 6.4 : 2.2 + 2.6 * (m.mag / 0.8)) : 0;
    this.wantVx = m.x / (m.mag || 1) * sp;
    this.wantVz = m.y / (m.mag || 1) * sp;
    if (m.mag === 0) { this.wantVx = 0; this.wantVz = 0; }
    if (input.a) {
      const ang = m.mag > 0 ? Math.atan2(m.y, m.x) : ped.h;
      fire(ped, this.weapon, ang);
    }
    if (input.take('b')) this.tryEnter();
    input.take('horn');
  }

  nearestCar(maxD = 5) {
    let best = null, bd = maxD;
    for (const v of G.vehicles) {
      if (v.dead || v.removed) continue;
      const d = dist(v.x, v.z, this.ped.x, this.ped.z) - v.t.W * 0.5;
      if (d < bd) { bd = d; best = v; }
    }
    return best;
  }

  tryEnter() {
    const v = this.nearestCar(4.2);
    if (!v) { G.hud?.toast('No car close enough'); return; }
    if (v.locked) { G.hud?.toast('It is locked'); return; }
    // pick the free door: left (driver) unless blocked
    let side = -1;
    const dl = v.doorPos(-1), dr = v.doorPos(1);
    if (G.q.solidAt(dl.x, dl.z)) side = 1;
    else if (!G.q.solidAt(dr.x, dr.z) && dist(dr.x, dr.z, this.ped.x, this.ped.z) + 1.5 < dist(dl.x, dl.z, this.ped.x, this.ped.z)) side = 1;
    this.entering = { v, t: 0, side };
  }

  updateEntering(dt, m) {
    const e = this.entering;
    const v = e.v;
    e.t += dt;
    if (v.dead || v.removed || (v.speed > 7 && e.t > 0.3) || e.t > 2.4 || (m.mag > 0.6 && e.t > 0.35)) { this.entering = null; return; }
    const door = v.doorPos(e.side);
    const ped = this.ped;
    const dx = door.x - ped.x, dz = door.z - ped.z;
    const d = Math.hypot(dx, dz);
    const sp = Math.min(6.4, d * 8);
    this.wantVx = d > 0.01 ? (dx / d) * sp : 0;
    this.wantVz = d > 0.01 ? (dz / d) * sp : 0;
    if (d < 0.7 || (e.t > 1.1 && d < 2.2)) this.enterVehicle(v);
  }

  enterVehicle(v) {
    this.entering = null;
    const ped = this.ped;
    const police = G.police;
    // car-jack whoever is driving
    if (v.driver && v.driver !== 'player') {
      const door = v.doorPos(-1);
      const kind = v.driver === 'cop' ? (v.type === 'swat' ? 'swat' : 'cop') : 'civ';
      const d = spawnPed(kind, door.x + randRange(-0.3, 0.3), door.z + randRange(-0.3, 0.3), v.h + Math.PI / 2);
      d.hit(4, Math.cos(v.h + Math.PI / 2), Math.sin(v.h + Math.PI / 2), 'player', 'melee');
      d.state = 'down'; d.timer = 1.0;
      if (kind !== 'civ') {
        d.brain = copBrain; d.weapon = kind === 'swat' ? 'smg' : 'pistol';
        police.crime(1.6, v.x, v.z, true);
      } else {
        if (rand() < 0.15) d.armed = true;
        police.crime(0.9, v.x, v.z);
      }
      G.audio?.punch(v.x, v.z);
      G.hud?.toast(kind === 'civ' ? 'Car jacked' : 'Cop car jacked!');
    } else if (v.type === 'police' || v.type === 'swat') {
      police.crime(1.2, v.x, v.z, true);
    }
    // passengers that are not ours bail out
    v.ai = null;
    v.driver = 'player';
    v.sirenOn = false;
    if (v.spot) { v.spot.vehicle = null; v.spot.state = 'empty'; v.spot = null; }
    v.persistent = true;
    ped.hidden = true;
    ped.vehicle = v;
    this.vehicle = v;
    this.inCar = true;
    this.wantVx = this.wantVz = 0;
    if (this.lastCar && this.lastCar !== v) this.lastCar.persistent = !!this.lastCar.mission;
    this.lastCar = v;
    G.hud?.vehicleName(v.t.name);
    if (G.audio) {
      G.audio.pickStation();
      G.audio.radio(true);
      G.hud?.radio(G.audio.stationName());
    }
  }

  exitVehicle(force = false) {
    const v = this.vehicle;
    if (!v) return;
    const ped = this.ped;
    const cands = [v.doorPos(-1), v.doorPos(1)];
    const fx = Math.cos(v.h), fz = Math.sin(v.h);
    cands.push({ x: v.x + fx * (v.t.L / 2 + 0.8), z: v.z + fz * (v.t.L / 2 + 0.8) });
    cands.push({ x: v.x - fx * (v.t.L / 2 + 0.8), z: v.z - fz * (v.t.L / 2 + 0.8) });
    let spot = cands.find((p) => !G.q.solidAt(p.x, p.z));
    if (!spot) {
      if (!force) { G.hud?.toast('No room to get out'); return; }
      spot = cands[0];
    }
    ped.x = spot.x; ped.z = spot.z;
    ped.h = v.h;
    ped.hidden = false;
    ped.vehicle = null;
    ped.vx = v.vx * 0.4; ped.vz = v.vz * 0.4;
    ped.state = 'custom';
    if (v.speed > 11) { ped.state = 'down'; ped.timer = 0.6; ped.health -= Math.min(25, v.speed); }
    v.driver = null;
    v.input.throttle = 0; v.input.steer = 0; v.input.brake = 0; v.input.handbrake = false;
    this.vehicle = null;
    this.inCar = false;
    this.lastCar = v;
    G.audio?.radio(false);
    G.audio?.engine(false);
    G.audio?.skid(0);
    G.hud?.radio(null);
  }

  // ---------------------------------------------------------------- driving
  drive(dt, input) {
    const v = this.vehicle;
    if (input.take('b')) { this.exitVehicle(); return; }
    if (input.take('radio')) { G.hud?.radio(G.audio?.nextStation()); G.audio?.radio(true); }
    input.take('weapon');
    const inp = v.input;
    const m = input.move();
    // respray in progress: hold still
    if (this.spray > 0) {
      this.spray -= dt;
      inp.throttle = 0; inp.brake = 1; inp.steer = 0; inp.handbrake = false;
      G.fx.spray(v.x, v.z, [0.85, 0.85, 0.85]);
      if (this.spray <= 0) this.finishSpray(v);
      return;
    }
    const classic = G.settings.steering === 'classic' || m.keyboard;
    let throttle = 0, steer = 0, brake = 0, handbrake = false;
    const vf = v.vf;
    if (classic) {
      throttle = -m.y;
      steer = m.x;
      if (m.keyboard) { throttle = Math.sign(throttle); steer = Math.sign(steer); }
      if (input.a) { brake = vf > 1 ? 1 : 0; if (vf <= 1) throttle = -1; }
      handbrake = input.handbrake;
    } else {
      const active = m.mag > 0;
      const target = Math.atan2(m.y, m.x);
      if (input.a) {
        if (vf > 2) {
          brake = 1;
          if (active) {
            const diff = angDiff(target, v.h);
            steer = clamp(diff * 1.7, -1, 1);
            handbrake = Math.abs(diff) > 0.55 && vf > 9;
          }
        } else {
          throttle = -1;
          if (active) {
            const diff = angDiff(target + Math.PI, v.h);
            steer = clamp(-diff * 2, -1, 1);
          }
        }
      } else if (active) {
        const diff = angDiff(target, v.h);
        steer = clamp(diff * 2.0, -1, 1) * (vf < -0.5 ? -1 : 1);
        throttle = Math.min(1, m.mag * 1.15);
        if (Math.abs(diff) > 1.35 && vf > 13) throttle = 0.2;
        if (Math.abs(diff) > 2.2 && vf > 7) { throttle = 0; brake = 0.35; handbrake = vf > 15; }
      }
    }
    inp.throttle = throttle; inp.steer = steer; inp.brake = brake; inp.handbrake = handbrake;
    // horn scares pedestrians out of the way
    this.hornCd -= dt;
    if ((input.c || input.take('horn')) && this.hornCd <= 0) {
      this.hornCd = 0.45;
      v.horn = 0.45;
      G.audio?.horn(v.x, v.z, 0.4);
      const fx = Math.cos(v.h), fz = Math.sin(v.h);
      for (const p of G.peds) {
        if (!p.alive || p.brain || p.hidden) continue;
        const ox = p.x - v.x, oz = p.z - v.z;
        const al = ox * fx + oz * fz;
        if (al > 0 && al < 22 && Math.abs(ox * -fz + oz * fx) < 4) {
          p.state = 'dive'; p.timer = 0.45;
          const s = (ox * -fz + oz * fx) >= 0 ? 1 : -1;
          p.vx = -fz * s * 5.5; p.vz = fx * s * 5.5;
        }
      }
    }
    input.take('c');
    // respray pad
    const c = G.city;
    const tx = Math.floor(v.x / TILE), tz = Math.floor(v.z / TILE);
    const onPad = tx >= 0 && tz >= 0 && tx < c.W && tz < c.H && (c.meta[tz * c.W + tx] & 1);
    if (onPad && !this.padCd && v.speed < 2.5) {
      this.padCd = true;
      if (this.cash >= 500 || G.police.level > 0) this.startSpray(v);
      else G.hud?.toast('Respray costs $500');
    }
    if (!onPad) this.padCd = false;
  }

  startSpray(v) {
    this.spray = 1.6;
    G.audio?.spray();
    G.hud?.toast('Respraying...');
  }

  finishSpray(v) {
    let hex = randomPaint('sedan');
    while (hex === v.paintHex) hex = randomPaint('sedan');
    if (v.type !== 'police' && v.type !== 'swat' && v.type !== 'taxi' && v.type !== 'ambulance') v.setPaint(hex);
    v.health = Math.max(v.health, v.t.health * 0.9);
    v.onFire = false;
    const cost = Math.min(500, this.cash);
    this.cash -= cost;
    const had = G.police.level > 0;
    G.police.reset();
    G.hud?.toast(had ? `Fresh paint. Heat gone. -$${cost}` : `Fresh paint. -$${cost}`);
    G.audio?.pickup();
  }

  resetForRespawn(x, z) {
    const ped = this.ped;
    ped.x = x; ped.z = z;
    ped.vx = ped.vz = 0;
    ped.alive = true;
    ped.health = 100;
    ped.armor = 0;
    ped.state = 'custom';
    ped.hidden = false;
    ped.onFire = 0;
    ped.vehicle = null;
    this.vehicle = null;
    this.inCar = false;
    this.entering = null;
    this.weapon = 'fists';
    for (const k of Object.keys(this.ammo)) if (k !== 'fists') this.ammo[k] = 0;
    this.spray = 0;
    this.wantVx = this.wantVz = 0;
    if (G.pedRender && ped.slot < 0) G.pedRender.alloc(ped);
  }
}

export { WEAPONS, pick };
