// Payphone missions. A phone rings somewhere in the city; walk up to it to get a job.
import * as THREE from 'three';
import { G } from './game.js';
import { TILE } from './consts.js';
import { clamp, rand, randRange, pick, dist, formatMoney } from './util.js';
import { spawnVehicle, removeVehicle } from './vehicles.js';
import { spawnPed, removePed } from './peds.js';
import { setTraffic } from './traffic.js';

// ------------------------------------------------------------------ world markers
const beamMat = new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
  uniforms: { uColor: { value: new THREE.Color(1, 0.8, 0.2) }, uTime: { value: 0 } },
  vertexShader: `varying float vY; void main(){ vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `uniform vec3 uColor; uniform float uTime; varying float vY;
    void main(){ float a = (1.0 - smoothstep(0.0, 9.0, vY)) * (0.55 + 0.15 * sin(uTime * 4.0 - vY * 1.4)); gl_FragColor = vec4(uColor * a, a); }`,
});
const ringMat = new THREE.MeshBasicMaterial({ color: 0xffd23f, transparent: true, opacity: 0.85, depthWrite: false, blending: THREE.AdditiveBlending });

class Marker {
  constructor(color = 0xffcc33) {
    this.group = new THREE.Group();
    const mat = beamMat.clone();
    mat.uniforms.uColor.value = new THREE.Color(color);
    this.beamMat = mat;
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 9, 20, 1, true).translate(0, 4.5, 0), mat);
    const rmat = ringMat.clone();
    rmat.color = new THREE.Color(color);
    this.ringMat = rmat;
    this.ring = new THREE.Mesh(new THREE.RingGeometry(1.7, 2.1, 36).rotateX(-Math.PI / 2), rmat);
    this.ring.position.y = 0.06;
    beam.renderOrder = 8; this.ring.renderOrder = 8;
    this.group.add(beam, this.ring);
    this.group.visible = false;
    G.scene.add(this.group);
  }
  set(x, z, r = 2) {
    this.group.visible = true;
    this.group.position.set(x, 0, z);
    this.r = r;
  }
  hide() { this.group.visible = false; }
  update(t) {
    if (!this.group.visible) return;
    this.beamMat.uniforms.uTime.value = t;
    const k = (this.r / 2) * (1 + 0.12 * Math.sin(t * 5));
    this.ring.scale.set(k, 1, k);
    this.group.children[0].scale.set(this.r / 2, 1, this.r / 2);
  }
  dispose() { G.scene.remove(this.group); }
}

class Arrow {
  constructor() {
    const shape = new THREE.Shape();
    shape.moveTo(1.6, 0); shape.lineTo(0.2, 0.95); shape.lineTo(0.2, 0.42); shape.lineTo(-1.1, 0.42);
    shape.lineTo(-1.1, -0.42); shape.lineTo(0.2, -0.42); shape.lineTo(0.2, -0.95); shape.lineTo(1.6, 0);
    const geo = new THREE.ShapeGeometry(shape).rotateX(Math.PI / 2);
    const outline = new THREE.ShapeGeometry(shape).rotateX(Math.PI / 2).scale(1.18, 1, 1.22);
    this.group = new THREE.Group();
    const a = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0xffd23f, side: THREE.DoubleSide, depthTest: false }));
    const b = new THREE.Mesh(outline, new THREE.MeshBasicMaterial({ color: 0x1a1406, side: THREE.DoubleSide, depthTest: false, transparent: true, opacity: 0.85 }));
    a.renderOrder = 21; b.renderOrder = 20;
    a.position.y = 0.02;
    this.mat = a.material;
    this.group.add(b, a);
    this.group.visible = false;
    G.scene.add(this.group);
  }
  point(fromX, fromZ, y, toX, toZ, radius, color) {
    const ang = Math.atan2(toZ - fromZ, toX - fromX);
    this.group.visible = true;
    this.group.position.set(fromX + Math.cos(ang) * radius, y, fromZ + Math.sin(ang) * radius);
    this.group.rotation.set(0, -ang, 0);
    const k = 1 + 0.1 * Math.sin(G.realTime * 6);
    this.group.scale.setScalar(k);
    if (color) this.mat.color.setHex(color);
  }
  hide() { this.group.visible = false; }
}

// ------------------------------------------------------------------ mission scripts
const STORY = [
  {
    id: 'first-wheels', title: 'First Wheels', reward: 1000,
    brief: 'Need a driver. Grab any car and get to the drop. You have 1:30.',
    start(M) {
      M.d.dest = M.place('roadside', 150, 260);
      M.timer(90);
      M.goal(M.d.dest, 4.5);
    },
    update(M) {
      const pl = G.player;
      if (!pl.inCar) M.hint('Stand next to a car and tap ENTER to take it.');
      if (pl.inCar && M.near(pl.vehicle, M.d.dest, 6) && pl.vehicle.speed < 7) M.complete();
    },
  },
  {
    id: 'hot-property', title: 'Hot Property', reward: 3000,
    brief: 'A red sports car is parked across town. Bring it to the garage at Dockside. Keep it pretty.',
    start(M) {
      const p = M.place('alley', 110, 240) || M.place('roadside', 110, 240);
      const car = M.car('sports', p.x, p.z, rand() * 6.28, '#c4281f');
      car.ai = null; car.driver = null;
      M.d.car = car;
      M.d.phase = 0;
      M.goal(car, 3);
    },
    update(M) {
      const car = M.d.car, pl = G.player;
      if (car.dead) return M.fail('The car got wrecked.');
      if (M.d.phase === 0 && pl.vehicle === car) {
        M.d.phase = 1;
        M.d.dest = M.place('industrial', 160, 320) || M.place('roadside', 160, 320);
        M.pager('Nice ride. Now the garage, and no scratches.');
        M.goal(M.d.dest, 5);
      }
      if (M.d.phase === 1) {
        if (car.health < car.t.health * 0.35) return M.fail('That car is scrap now. Deal is off.');
        if (pl.vehicle === car && M.near(car, M.d.dest, 6) && car.speed < 4) {
          M.deliver(car);
          M.complete();
        }
      }
    },
  },
  {
    id: 'courier', title: 'Courier', reward: 2500,
    brief: 'Briefcase left in the park. Pick it up and run it to the client. Two minutes.',
    start(M) {
      M.d.item = M.place('park', 80, 200) || M.place('alley', 80, 200);
      M.d.phase = 0;
      M.timer(120);
      M.item(M.d.item);
      M.goal(M.d.item, 2.2);
    },
    update(M) {
      const pl = G.player;
      if (M.d.phase === 0 && M.near(pl.pos(), M.d.item, 3)) {
        M.d.phase = 1;
        M.clearItem();
        G.audio?.pickup();
        M.d.dest = M.place('roadside', 220, 360);
        M.pager('Got it. Now the client. Clock is running.');
        M.goal(M.d.dest, 4);
      }
      if (M.d.phase === 1 && M.near(pl.pos(), M.d.dest, 5)) M.complete();
    },
  },
  {
    id: 'accountant', title: 'The Accountant', reward: 3500,
    brief: 'Our accountant needs a lift. He will not walk far, so bring a car.',
    start(M) {
      const p = M.place('downtown', 120, 240) || M.place('roadside', 120, 240);
      M.d.vip = M.ped('vip', p.x, p.z);
      M.d.phase = 0;
      M.goal(M.d.vip, 2.5);
    },
    update(M) {
      const vip = M.d.vip, pl = G.player;
      if (!vip.alive) return M.fail('The accountant is dead. So is the deal.');
      if (M.d.phase === 0) {
        if (pl.inCar && M.near(pl.vehicle, vip, 9) && pl.vehicle.speed < 3) M.board([vip], pl.vehicle, () => {
          M.d.phase = 1;
          M.d.car = pl.vehicle;
          M.d.dest = M.place('waterfront', 200, 360) || M.place('roadside', 200, 360);
          M.pager('He is in. Take him to the waterfront. Smooth, please.');
          M.goal(M.d.dest, 5);
        });
        else if (!pl.inCar && M.near(pl.pos(), vip, 6)) M.hint('Get a car. He is not walking.');
      } else if (M.d.phase === 1) {
        if (M.d.car.dead) return M.fail('The accountant went up with the car.');
        if (pl.vehicle === M.d.car && M.near(M.d.car, M.d.dest, 7) && M.d.car.speed < 3) {
          M.unboard(M.d.car);
          M.complete();
        }
      }
    },
  },
  {
    id: 'wrong-colors', title: 'Wrong Colors', reward: 5000,
    brief: "Some punk is joyriding in the boss's limo. Wreck it. Nobody steals from us.",
    start(M) {
      const s = G.traffic.laneSpot(M.from(), 140, 240, 60) || G.traffic.laneSpot(M.from(), 60, 300, 60);
      const car = M.car('limo', s.x, s.z, Math.atan2(s.lane.dz, s.lane.dx), '#17181b');
      car.driver = 'npc';
      setTraffic(car, s.lane, s.t);
      car.ai.speedScale = 1.1;
      car.mission = { target: true };
      M.d.car = car;
      M.goal(car, 3);
    },
    update(M) {
      const car = M.d.car;
      if (car.dead) return M.complete();
      if (car.ai && car.ai.mode === 'traffic' && M.near(G.player.pos(), car, 30) && car.ai.panicT <= 0) car.ai.panicT = 8;
      if (G.player.vehicle === car && !M.d.taunt) { M.d.taunt = true; M.pager('Ha. Now torch it.'); }
    },
  },
  {
    id: 'heat-check', title: 'Heat Check', reward: 4000,
    brief: 'The cops have your plate. Lose the heat. A respray at Paint & Go works wonders.',
    start(M) {
      G.police.setAtLeast(3);
      M.d.shop = M.nearestPaint();
      M.goal(M.d.shop, 3, 0x7fdcff);
    },
    update(M) {
      if (G.police.level === 0) M.complete();
      else M.d.shop = M.nearestPaint();
      if (M.d.shop) M.goal(M.d.shop, 3, 0x7fdcff);
    },
  },
  {
    id: 'gauntlet', title: 'The Gauntlet', reward: 6000,
    brief: 'Show me what you can drive. Hit every checkpoint before time runs out.',
    start(M) {
      M.d.phase = 0;
      if (G.player.inCar) M.startRace();
      else M.pager('Grab something fast first, then the clock starts.');
    },
    update(M) {
      const pl = G.player;
      if (M.d.phase === 0) { if (pl.inCar) M.startRace(); else M.hint('Get a car to start the race.'); return; }
      const cp = M.d.cps[M.d.i];
      if (M.near(pl.pos(), cp, 7)) {
        M.d.i++;
        G.audio?.checkpoint();
        if (M.d.i >= M.d.cps.length) return M.complete();
        M.goal(M.d.cps[M.d.i], 6, 0x5fe3ff);
        G.hud.toast(`Checkpoint ${M.d.i}/${M.d.cps.length}`);
      }
    },
  },
  {
    id: 'special-delivery', title: 'Special Delivery', reward: 8000,
    brief: "Pick up the van at the yard and park it outside the rivals' print shop. Don't look in the back.",
    start(M) {
      const p = M.place('industrial', 100, 220) || M.place('roadside', 100, 220);
      const van = M.car('van', p.x, p.z, rand() * 6.28, '#5d6a74');
      van.ai = null; van.driver = null;
      M.d.van = van;
      M.d.phase = 0;
      M.goal(van, 3);
    },
    update(M) {
      const van = M.d.van, pl = G.player;
      if (M.d.phase < 2 && van.dead) return M.fail('The van blew early.');
      if (M.d.phase === 0 && pl.vehicle === van) {
        M.d.phase = 1;
        M.d.dest = M.place('downtown', 180, 320) || M.place('roadside', 180, 320);
        M.pager('Park it at the print shop. Then walk away. Fast.');
        M.goal(M.d.dest, 5);
      } else if (M.d.phase === 1 && M.near(van, M.d.dest, 6) && van.speed < 2) {
        M.d.phase = 2;
        M.d.fuse = 10;
        van.locked = true;
        M.pager('Get out and get clear! Ten seconds!');
        M.timer(10, true);
        if (pl.vehicle === van) G.player.exitVehicle(true);
        M.goal(null);
      } else if (M.d.phase === 2) {
        M.d.fuse -= M.dt;
        if (M.d.fuse <= 0) {
          van.locked = false;
          van.damage(9999, 'mission', 'explosion');
          van.burnTime = 0;
          M.d.phase = 3;
          M.d.wait = 1.2;
        }
      } else if (M.d.phase === 3) {
        M.d.wait -= M.dt;
        if (M.d.wait <= 0 && G.player.alive) M.complete();
      }
    },
    noTimeoutFail: true,
  },
  {
    id: 'bank-job', title: 'Bank Job', reward: 12000,
    brief: 'The crew is hitting the bank downtown. Be their wheels. Bring something with doors.',
    start(M) {
      const p = M.place('downtown', 150, 260) || M.place('roadside', 150, 260);
      M.d.crew = [0, 1, 2].map((i) => M.ped('crew', p.x + (i - 1) * 1.2, p.z + (i % 2) * 0.8, 'pistol'));
      M.d.phase = 0;
      M.goal(p, 3);
      M.d.pos = p;
    },
    update(M) {
      const pl = G.player;
      const alive = M.d.crew.filter((c) => c.alive);
      if (M.d.phase === 0) {
        if (alive.length < 3) return M.fail('You got the crew killed.');
        if (pl.inCar && M.near(pl.vehicle, M.d.pos, 10) && pl.vehicle.speed < 3) M.board(M.d.crew, pl.vehicle, () => {
          M.d.phase = 1;
          M.d.car = pl.vehicle;
          G.police.setAtLeast(4);
          M.d.dest = M.place('residential', 260, 420) || M.place('roadside', 260, 420);
          M.pager('Alarm is ringing! Get us to the hideout!');
          M.goal(M.d.dest, 5);
        });
      } else if (M.d.phase === 1) {
        if (M.d.car.dead) return M.fail('The crew went up in flames.');
        if (pl.vehicle === M.d.car && M.near(M.d.car, M.d.dest, 7) && M.d.car.speed < 3) {
          M.unboard(M.d.car);
          M.complete();
        }
      }
    },
  },
  {
    id: 'armored-score', title: 'The Big Score', reward: 25000,
    brief: 'Last job. An armored truck is doing its rounds. Take it, any way you can.',
    start(M) {
      const s = G.traffic.laneSpot(M.from(), 140, 260, 60) || G.traffic.laneSpot(M.from(), 60, 320, 60);
      const car = M.car('armored', s.x, s.z, Math.atan2(s.lane.dz, s.lane.dx), '#55604f');
      car.driver = 'npc';
      setTraffic(car, s.lane, s.t);
      M.d.car = car;
      M.d.phase = 0;
      M.goal(car, 3);
    },
    update(M) {
      const car = M.d.car, pl = G.player;
      if (car.dead) return M.fail('The truck is toast. So is the payday.');
      if (M.d.phase === 0 && pl.vehicle === car) {
        M.d.phase = 1;
        G.police.setAtLeast(5);
        M.d.dest = M.place('waterfront', 280, 460) || M.place('industrial', 280, 460) || M.place('roadside', 280, 460);
        M.pager('That is the one! Get it to the docks. Every cop in town is coming.');
        M.goal(M.d.dest, 6);
      } else if (M.d.phase === 1 && pl.vehicle === car && M.near(car, M.d.dest, 8) && car.speed < 4) {
        M.deliver(car);
        M.complete();
      }
    },
  },
];

// endless jobs after the story
function randomJob(n) {
  const kinds = ['delivery', 'steal', 'wreck', 'race', 'courier'];
  const k = kinds[n % kinds.length];
  const reward = 4000 + n * 1500;
  if (k === 'delivery') return { ...STORY[0], id: 'job-' + n, title: 'Drop Run', reward, brief: 'Get to the drop point in any car. Clock is ticking.' };
  if (k === 'steal') {
    const type = pick(['muscle', 'sports', 'pickup', 'taxi', 'limo']);
    return { ...STORY[1], id: 'job-' + n, title: 'Shopping List', reward, brief: `A client wants a ${type === 'limo' ? 'limo' : type + ' car'}. Bring it to the garage in good shape.`,
      start(M) {
        const p = M.place('alley', 110, 260) || M.place('roadside', 110, 260);
        const car = M.car(type, p.x, p.z, rand() * 6.28);
        car.ai = null; car.driver = null;
        M.d.car = car; M.d.phase = 0;
        M.goal(car, 3);
      } };
  }
  if (k === 'wreck') return { ...STORY[4], id: 'job-' + n, title: 'Scrap Job', reward, brief: 'A rival is cruising in a limo. Make it scrap metal.' };
  if (k === 'race') return { ...STORY[6], id: 'job-' + n, title: 'Time Trial', reward, brief: 'Beat the clock through every checkpoint.' };
  return { ...STORY[2], id: 'job-' + n, title: 'Hot Case', reward, brief: 'Another briefcase, another client. Two minutes.' };
}

// ------------------------------------------------------------------ manager
export class Missions {
  constructor(city) {
    this.city = city;
    this.index = 0;
    this.state = 'idle';
    this.phone = null;
    this.active = null;
    this.marker = new Marker(0xffcc33);
    this.phoneMarker = new Marker(0x55e08a);
    this.arrow = new Arrow();
    this.itemMesh = null;
    this.ringT = 0;
    this.hintT = 0;
    this.timeLeft = null;
    this.goalObj = null;
    this.goalColor = 0xffcc33;
    this.multiplier = 1;
  }

  get total() { return STORY.length; }

  reset(index = 0) {
    this.cleanup();
    this.index = index;
    this.state = 'idle';
    this.phone = null;
    this.multiplier = 1;
  }

  def() { return this.index < STORY.length ? STORY[this.index] : randomJob(this.index - STORY.length); }

  ringPhone(near) {
    const from = near || G.player.pos();
    const phones = this.city.phones;
    let cands = phones.filter((p) => { const d = dist(p.x, p.z, from.x, from.z); return d > 45 && d < 230; });
    if (!cands.length) cands = phones.filter((p) => dist(p.x, p.z, from.x, from.z) > 30);
    if (!cands.length) cands = phones;
    // prefer closer ones
    cands.sort((a, b) => dist(a.x, a.z, from.x, from.z) - dist(b.x, b.z, from.x, from.z));
    this.phone = cands[Math.min(cands.length - 1, Math.floor(rand() * Math.min(3, cands.length)))];
    this.state = 'idle';
    G.hud?.pager(this.index === 0 ? 'A payphone is ringing. Follow the arrow and walk up to it.' : 'Another phone is ringing. Follow the arrow.');
  }

  begin() {
    const def = this.def();
    this.state = 'active';
    this.phoneMarker.hide();
    const M = this.api(def);
    this.active = { def, M };
    G.hud?.pager(def.brief, 9);
    G.hud?.missionTitle(def.title);
    def.start(M);
  }

  cleanup() {
    if (this.active) {
      const d = this.active.M.d;
      for (const e of this.active.M.spawned) {
        if (e.isVehicle) { e.persistent = false; e.mission = null; if (e !== G.player?.vehicle && e.sinceSeen > 0 && e.dead) removeVehicle(e); }
        if (e.isPed) { e.persistent = false; if (e.brain && e.missionTag) { e.brain = null; e.state = 'walk'; } }
      }
      void d;
    }
    this.clearItem();
    this.active = null;
    this.goalObj = null;
    this.timeLeft = null;
    this.marker.hide();
    this.arrow.hide();
    G.hud?.setTimer(null);
  }

  clearItem() {
    if (this.itemMesh) { G.scene.remove(this.itemMesh); this.itemMesh = null; }
  }

  complete() {
    const def = this.active.def;
    const reward = def.reward * this.multiplier;
    G.player.addCash(reward);
    G.audio?.missionPassed();
    G.hud?.big('JOB DONE', `+$${reward.toLocaleString()}`, 'good');
    G.stats.missions++;
    this.multiplier = Math.min(8, this.multiplier + 1);
    G.hud?.toast(`Multiplier x${this.multiplier}`);
    const wasFinale = this.index === STORY.length - 1;
    this.cleanup();
    this.index++;
    this.state = 'between';
    this.wait = 4;
    G.events.missionComplete?.(def, wasFinale);
    if (wasFinale) G.hud?.pager('That is the whole city. Keep the phones close, there is always more work.', 10);
  }

  fail(reason) {
    if (!this.active) return;
    G.audio?.missionFailed();
    G.hud?.big('JOB FAILED', reason, 'bad');
    G.hud?.pager(reason + ' Find another phone when you are ready.', 8);
    this.cleanup();
    this.state = 'between';
    this.wait = 5;
  }

  /** player died or got arrested */
  abort() {
    if (this.active) {
      this.cleanup();
      this.state = 'between';
      this.wait = 3;
    }
  }

  goal(obj, r = 3, color = 0xffcc33) {
    this.goalObj = obj;
    this.goalR = r;
    this.goalColor = color;
  }

  api(def) {
    const self = this;
    const M = {
      d: {},
      dt: 0,
      spawned: [],
      def,
      from: () => G.player.pos(),
      pager: (t, s) => G.hud?.pager(t, s),
      hint(t) {
        if (self.hintT > 0) return;
        self.hintT = 9;
        G.hud?.toast(t);
      },
      timer(sec) { self.timeLeft = sec; },
      goal: (o, r, c) => self.goal(o, r, c),
      complete: () => self.complete(),
      fail: (r) => self.fail(r),
      near(a, b, r) { return a && b && dist(a.x, a.z, b.x, b.z) < r; },
      place(kind, min, max) {
        const from = G.player.pos();
        const list = self.city.places[kind] || [];
        const ok = list.filter((p) => { const d = dist(p.x, p.z, from.x, from.z); return d >= min && d <= max; });
        if (ok.length) return pick(ok);
        if (!list.length) return null;
        // nearest to the middle of the range
        let best = null, bd = 1e9;
        for (const p of list) {
          const d = Math.abs(dist(p.x, p.z, from.x, from.z) - (min + max) / 2);
          if (d < bd) { bd = d; best = p; }
        }
        return best;
      },
      car(type, x, z, h, paint) {
        const v = spawnVehicle(type, x, z, h, { paint });
        v.persistent = true;
        v.mission = { tag: def.id };
        M.spawned.push(v);
        return v;
      },
      ped(kind, x, z, weapon) {
        const p = spawnPed(kind, x, z);
        p.persistent = true;
        p.missionTag = def.id;
        p.brain = idleBrain;
        p.state = 'custom';
        if (weapon) p.weapon = weapon;
        M.spawned.push(p);
        return p;
      },
      item(pos) {
        self.clearItem();
        const m = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.5, 0.6), new THREE.MeshBasicMaterial({ color: 0x5b3a1e }));
        m.position.set(pos.x, 0.6, pos.z);
        self.itemMesh = m;
        G.scene.add(m);
      },
      clearItem: () => self.clearItem(),
      deliver(car) {
        // hand the car over: player steps out, car stays locked
        if (G.player.vehicle === car) G.player.exitVehicle(true);
        car.locked = true;
        car.persistent = false;
        car.mission = null;
        car.ai = null; car.driver = null;
      },
      board(peds, car, done) {
        if (M.d.boarding) return;
        M.d.boarding = true;
        for (const p of peds) {
          if (!p.alive) continue;
          p.brain = (q, dt) => {
            void dt;
            const door = car.doorPos(peds.indexOf(q) % 2 === 0 ? 1 : -1);
            if (q.moveTo(door.x, door.z, 3.5) < 0.9) { q.hidden = true; q.vehicle = car; car.passengers.push(q); }
          };
        }
        const check = () => {
          if (peds.every((p) => !p.alive || p.hidden)) done();
          else if (G.player.vehicle !== car) { M.d.boarding = false; for (const p of peds) if (!p.hidden) p.brain = idleBrain; }
          else setTimeout(check, 200);
        };
        setTimeout(check, 200);
      },
      unboard(car) {
        car.passengers.forEach((p, i) => {
          const door = car.doorPos(i % 2 === 0 ? 1 : -1);
          p.hidden = false; p.vehicle = null; p.x = door.x; p.z = door.z;
          p.brain = null; p.state = 'walk'; p.persistent = false;
        });
        car.passengers.length = 0;
      },
      nearestPaint() {
        const from = G.player.pos();
        let best = null, bd = 1e9;
        for (const sp of Object.values(self.city.specials)) {
          if (!sp.name.startsWith('paint')) continue;
          const d = dist(sp.x, sp.z, from.x, from.z);
          if (d < bd) { bd = d; best = sp; }
        }
        return best;
      },
      startRace() {
        M.d.phase = 1;
        const cps = [];
        let from = G.player.pos();
        for (let i = 0; i < 6; i++) {
          const list = self.city.places.roadside;
          const ok = list.filter((p) => { const d = dist(p.x, p.z, from.x, from.z); return d > 90 && d < 150 && !cps.some((c) => dist(c.x, c.z, p.x, p.z) < 70); });
          const p = ok.length ? pick(ok) : pick(list);
          cps.push(p);
          from = p;
        }
        let total = 0, prev = G.player.pos();
        for (const c of cps) { total += dist(prev.x, prev.z, c.x, c.z); prev = c; }
        M.d.cps = cps;
        M.d.i = 0;
        M.timer(Math.round(total / 15 + 12));
        M.goal(cps[0], 6, 0x5fe3ff);
        M.pager('Go go go! Hit the checkpoints.');
      },
    };
    return M;
  }

  update(dt) {
    const pl = G.player;
    if (!pl || !pl.alive) return;
    this.hintT -= dt;
    const t = G.realTime;
    this.marker.update(t);
    this.phoneMarker.update(t);
    if (this.itemMesh) { this.itemMesh.rotation.y += dt * 2; this.itemMesh.position.y = 0.6 + Math.sin(t * 4) * 0.15; }
    if (this.state === 'between') {
      this.wait -= dt;
      this.marker.hide();
      this.arrow.hide();
      if (this.wait <= 0) this.ringPhone();
      return;
    }
    if (this.state === 'idle') {
      if (!this.phone) { this.ringPhone(); return; }
      const ph = this.phone;
      this.phoneMarker.set(ph.x, ph.z, 1.6);
      this.marker.hide();
      this.ringT -= dt;
      if (this.ringT <= 0) { this.ringT = 1.4; G.audio?.phoneRing(ph.x, ph.z); }
      this.pointArrow(ph, 0x55e08a);
      if (!pl.inCar && dist(pl.ped.x, pl.ped.z, ph.x, ph.z) < 2.3) this.begin();
      return;
    }
    // active mission
    const a = this.active;
    a.M.dt = dt;
    if (this.timeLeft != null) {
      this.timeLeft -= dt;
      G.hud?.setTimer(this.timeLeft);
      if (this.timeLeft <= 0) {
        this.timeLeft = null;
        G.hud?.setTimer(null);
        if (!a.def.noTimeoutFail) { this.fail('Out of time.'); return; }
      }
    }
    a.def.update(a.M, dt);
    if (!this.active) return;
    const g = this.goalObj;
    if (g && !(g.isPed && g.hidden) && !(g.isVehicle && g === pl.vehicle)) {
      this.marker.set(g.x, g.z, this.goalR || 3);
      this.marker.ringMat.color.setHex(this.goalColor);
      this.marker.beamMat.uniforms.uColor.value.setHex(this.goalColor);
      this.pointArrow(g, this.goalColor);
    } else {
      this.marker.hide();
      this.arrow.hide();
    }
  }

  pointArrow(target, color) {
    const pl = G.player;
    const e = pl.inCar ? pl.vehicle : pl.ped;
    const d = dist(e.x, e.z, target.x, target.z);
    if (d < 6) { this.arrow.hide(); return; }
    const r = pl.inCar ? pl.vehicle.t.L / 2 + 2.6 : 2.6;
    const y = pl.inCar ? pl.vehicle.t.H + 1.2 : 2.6;
    this.arrow.point(e.x, e.z, y, target.x, target.z, r, color);
  }

  /** target for HUD/minimap */
  targetPos() {
    if (this.state === 'idle' && this.phone) return { x: this.phone.x, z: this.phone.z, kind: 'phone' };
    if (this.state === 'active' && this.goalObj) return { x: this.goalObj.x, z: this.goalObj.z, kind: 'goal' };
    return null;
  }
}

function idleBrain(p, dt) {
  void dt;
  p.vx *= 0.8; p.vz *= 0.8;
  // face the player
  const pl = G.player;
  if (pl && pl.alive) {
    const e = pl.inCar ? pl.vehicle : pl.ped;
    if (dist(e.x, e.z, p.x, p.z) < 25) p.h = Math.atan2(e.z - p.z, e.x - p.x);
  }
}

export { formatMoney, clamp, randRange, removePed, TILE };
