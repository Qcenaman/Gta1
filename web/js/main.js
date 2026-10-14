// Crosstown Heat — boot, game loop, rules glue and menus.
import * as THREE from 'three';
import { G } from './game.js';
import { TILE } from './consts.js';
import { clamp, dist, rand, randRange, pick } from './util.js';
import { generateCity, makeQueries } from './citygen.js';
import { buildWorld } from './world3d.js';
import { initPhysics, SpatialHash } from './physics.js';
import { FX } from './fx.js';
import { spawnVehicle, removeVehicle, collideVehicles, setVehicleShadowMaterial, updateSirenMaterials } from './vehicles.js';
import { spawnPed, removePed, PedRenderer, panic } from './peds.js';
import { Player } from './player.js';
import { Traffic, driveTraffic, rejoinTraffic } from './traffic.js';
import { Police, drivePursuit, copBrain } from './police.js';
import { Missions } from './missions.js';
import { Pickups } from './pickups.js';
import { AudioEngine } from './audio.js';
import { Input } from './input.js';
import { HUD } from './hud.js';
import { CameraRig } from './camera.js';
import { fire, explode, updateProjectiles } from './weapons.js';

THREE.ColorManagement.enabled = false;
const SEED = 1015;
const SAVE_KEY = 'crosstown-heat-v1';
const $ = (id) => document.getElementById(id);

// ------------------------------------------------------------------ persistence
function loadSave() {
  try { return JSON.parse(localStorage.getItem(SAVE_KEY)) || {}; } catch { return {}; }
}
function writeSave(data) {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(data)); } catch { /* storage unavailable */ }
}
let save = loadSave();
if (save.settings) Object.assign(G.settings, save.settings);

// ------------------------------------------------------------------ renderer
const canvas = $('view');
let renderer;
function fail(msg) {
  $('loadmsg').textContent = msg;
  $('loading').hidden = false;
}
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, stencil: true, powerPreference: 'high-performance' });
} catch (e) {
  fail('This device could not start WebGL, which the game needs to draw the city.');
  throw e;
}
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
renderer.setClearColor(0x16485f);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(38, 1, 2, 800);
G.renderer = renderer; G.scene = scene; G.camera = camera;

let pixelRatio = 1;
function choosePixelRatio() {
  const dpr = window.devicePixelRatio || 1;
  const q = G.settings.quality;
  if (q === 'high') return Math.min(dpr, 2);
  if (q === 'low') return Math.min(dpr, 1);
  return Math.min(dpr, 1.6);
}
function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(w, h, false);
  G.cam?.resize(w, h);
}
addEventListener('resize', resize);

const frame = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));

// ------------------------------------------------------------------ boot
let world, city;
async function boot() {
  $('loadmsg').textContent = 'Pouring the asphalt…';
  await frame();
  city = generateCity(SEED);
  G.city = city;
  G.q = makeQueries(city);
  $('loadmsg').textContent = 'Raising the skyline…';
  await frame();
  world = buildWorld(city);
  G.world = world;
  scene.add(world.group);
  initPhysics(city);
  setVehicleShadowMaterial(world.mats.shadow);
  G.fx = new FX(scene);
  G.pedRender = new PedRenderer(scene, world.mats.shadow);
  G.hash = new SpatialHash();
  G.traffic = new Traffic(city);
  G.police = new Police(city);
  G.missions = new Missions(city);
  G.pickups = new Pickups(city);
  G.audio = new AudioEngine();
  G.input = new Input();
  G.hud = new HUD();
  G.hud.buildMap(city);
  G.cam = new CameraRig(camera);
  pixelRatio = choosePixelRatio();
  resize();
  G.cam.flyover(0);
  G.traffic.setQuality(G.settings.quality);
  wireEvents();
  wireUI();
  applySettings();
  // warm up the streets for the title screen
  for (let i = 0; i < 40; i++) { G.traffic.update(0.1); simStep(1 / 30); }
  $('loading').hidden = true;
  showTitle();
  requestAnimationFrame(loop);
}

// ------------------------------------------------------------------ game flow
function clearWorld() {
  for (const v of [...G.vehicles]) removeVehicle(v);
  for (const p of [...G.peds]) removePed(p);
  G.projectiles.length = 0;
  for (const s of city.parkingSpots) { s.vehicle = null; s.state = undefined; }
}

function spawnPlayerAt(x, z) {
  const ped = spawnPed('player', x, z, 0);
  return ped;
}

function newGame(fromSave = false) {
  G.audio.init();
  G.audio.setSfx(G.settings.sound);
  G.audio.setMusic(G.settings.music);
  clearWorld();
  G.police.reset();
  const s = city.start;
  const ped = spawnPlayerAt(s.x, s.z);
  G.player = new Player(ped);
  G.stats = { kills: 0, cops: 0, cars: 0, missions: 0 };
  let index = 0;
  if (fromSave && save.progress) {
    index = save.progress.index || 0;
    G.player.cash = save.progress.cash || 0;
    G.player.lives = Math.max(1, save.progress.lives || 4);
  }
  G.missions.reset(index);
  if (fromSave && save.progress) G.missions.multiplier = save.progress.mult || 1;
  // a car waiting at the curb to get going
  const road = nearestLanePoint(s.x, s.z);
  if (road) {
    const v = spawnVehicle(pick(['compact', 'sedan', 'muscle']), road.x, road.z, road.h);
    v.driver = null;
  }
  G.cam.snap(s.x, s.z, 38);
  G.state = 'playing';
  G.time = 0;
  showScreen(null);
  G.hud.show(true);
  $('controls').hidden = false;
  G.missions.ringPhone();
  G.hud.pager(index === 0 ? 'Welcome to Halcyon Bay. A payphone is ringing nearby. Follow the green arrow.' : 'Back in town. A phone is ringing.', 8);
  requestWakeLock();
  tryFullscreen();
}

function nearestLanePoint(x, z) {
  let best = null, bd = 1e9;
  for (const lane of city.lanes) {
    const px = x - lane.ax, pz = z - lane.az;
    const t = clamp(px * lane.dx + pz * lane.dz, 4, lane.len - 6);
    const cx = lane.ax + lane.dx * t, cz = lane.az + lane.dz * t;
    const d = dist(x, z, cx, cz);
    if (d < bd && lane.li === lane.nl - 1) { bd = d; best = { x: cx, z: cz, h: Math.atan2(lane.dz, lane.dx) }; }
  }
  return best;
}

let downT = 0;
function playerDown(kind) {
  if (G.state !== 'playing') return;
  G.state = kind; // 'dead' | 'busted'
  downT = 3.6;
  const pl = G.player;
  if (pl.inCar) {
    const v = pl.vehicle;
    pl.exitVehicle(true);
    if (kind === 'busted') { v.driver = null; }
  }
  pl.entering = null;
  pl.wantVx = pl.wantVz = 0;
  G.missions.abort();
  if (kind === 'dead') {
    G.hud.big('FLATLINED', 'Patched up at the hospital', 'bad');
    G.audio.wasted();
  } else {
    G.hud.big('ARRESTED', 'Weapons confiscated', 'bad');
    G.audio.busted();
    if (pl.ped.state !== 'down') pl.ped.state = 'custom';
    pl.ped.vx = pl.ped.vz = 0;
  }
  G.audio.radio(false);
  G.audio.engine(false);
  G.audio.skid(0);
  G.hud.radio(null);
}

function respawn() {
  const pl = G.player;
  const kind = G.state;
  if (kind === 'dead') pl.lives--;
  G.police.reset();
  G.missions.multiplier = 1;
  for (const p of [...G.peds]) if (p.brain === copBrain) removePed(p);
  if (pl.lives <= 0) { gameOver(); return; }
  const sp = city.specials[kind === 'dead' ? 'hospital' : 'police'] || { x: city.start.x, z: city.start.z };
  if (kind === 'busted') {
    const fine = Math.floor(pl.cash * 0.1);
    pl.cash -= fine;
    if (fine > 0) G.hud.toast(`Bail paid: $${fine}`);
  }
  pl.resetForRespawn(sp.x, sp.z);
  G.cam.snap(sp.x, sp.z, 38);
  G.state = 'playing';
  G.hud.toast(`Lives left: ${pl.lives}`);
  persist();
}

function gameOver() {
  G.state = 'gameover';
  const pl = G.player;
  const best = Math.max(save.best || 0, pl.cash);
  const isBest = pl.cash > (save.best || 0);
  save.best = best;
  save.progress = null;
  writeSave(save);
  $('overtitle').textContent = 'Game over';
  $('ostats').innerHTML = statsHTML();
  $('overbest').textContent = isBest ? 'New best score.' : `Best: $${best.toLocaleString()}`;
  G.hud.show(false);
  $('controls').hidden = true;
  showScreen('over');
}

function persist() {
  const pl = G.player;
  if (!pl) return;
  save.best = Math.max(save.best || 0, pl.cash);
  save.progress = { index: G.missions.index, cash: pl.cash, lives: pl.lives, mult: G.missions.multiplier };
  writeSave(save);
}

function statsHTML() {
  const pl = G.player;
  const items = [
    ['Cash', '$' + pl.cash.toLocaleString()],
    ['Jobs done', G.stats.missions],
    ['Cars wrecked', G.stats.cars],
  ];
  return items.map(([k, v]) => `<div><b>${v}</b><span>${k}</span></div>`).join('');
}

// ------------------------------------------------------------------ events (rules)
let shotCrimeT = 0;
function wireEvents() {
  const E = G.events;
  E.crash = (v, impact, x, z, other) => {
    const now = G.realTime;
    if (now - v.lastCrash > 0.18) {
      v.lastCrash = now;
      G.audio.crash(impact, x, z);
      if (impact > 7) G.fx.spark(x, 0.8, z, Math.min(14, impact | 0), impact * 0.8);
    }
    const pl = G.player;
    if (!pl) return;
    const mine = pl.vehicle === v || pl.vehicle === other;
    if (mine && impact > 9) G.fx.shake = Math.min(0.8, G.fx.shake + impact * 0.025);
    if (mine && other) {
      const victim = pl.vehicle === v ? other : v;
      if (victim.ai && victim.ai.mode === 'traffic') victim.ai.panicT = 6;
      // only the faster car counts as the one doing the ramming
      if (impact > 5 && pl.vehicle.speed > victim.speed + 1.5) {
        if (victim.type === 'police' || victim.type === 'swat') G.police.crime(0.7, x, z, victim.driver != null);
        else G.police.crime(0.2, x, z);
      }
    }
  };
  E.vehicleExploded = (v) => {
    explode(v.x, v.z, 6.5, 120, v.lastHitBy || 'world');
    const pl = G.player;
    if (pl && pl.vehicle === v) {
      pl.exitVehicle(true);
      pl.ped.hit(999, 0, 1, 'world', 'explosion');
    }
    for (const p of v.passengers) { p.hidden = false; p.x = v.x; p.z = v.z; p.hit(999, 0, 1, 'world', 'explosion'); }
    v.passengers.length = 0;
    if (v.driver && v.driver !== 'player') v.driver = null;
    v.ai = null;
    if (v.lastHitBy === 'player' && pl) {
      G.stats.cars++;
      pl.addCash(100 * G.missions.multiplier);
      G.police.crime(v.type === 'police' || v.type === 'swat' ? 1.3 : 0.6, v.x, v.z, v.type === 'police' || v.type === 'swat');
    }
  };
  E.pedKilled = (p, source) => {
    const pl = G.player;
    if (pl && p === pl.ped) { playerDown('dead'); return; }
    if (source === 'player' && pl) {
      G.stats.kills++;
      const cop = p.kind === 'cop' || p.kind === 'swat';
      if (cop) G.stats.cops++;
      pl.addCash(cop ? 50 : 10);
      G.police.crime(cop ? 1.5 : 0.6, p.x, p.z, cop);
    }
    if (p.missionTag && p.persistent) { /* mission scripts check alive */ }
  };
  E.pedHurt = (p, source) => {
    const pl = G.player;
    if (!pl || p === pl.ped || source !== 'player') return;
    const cop = p.kind === 'cop' || p.kind === 'swat';
    G.police.crime(cop ? 0.9 : 0.25, p.x, p.z, cop);
    if (cop && !p.brain) { p.brain = copBrain; p.state = 'custom'; p.weapon = p.weapon || 'pistol'; }
    if (p.armed && !p.brain && rand() < 0.6) { p.brain = hostileBrain; p.state = 'custom'; p.weapon = 'pistol'; p.hostileT = 18; }
  };
  E.shots = (shooter, wid, melee) => {
    const pl = G.player;
    if (!pl || shooter !== pl.ped) return;
    if (!melee) pl.lastShotT = G.realTime;
    if (!melee) panic(shooter.x, shooter.z, 30, shooter);
    if (G.realTime - shotCrimeT > 1.2 && !melee) {
      shotCrimeT = G.realTime;
      G.police.crime(0.3, shooter.x, shooter.z);
    }
  };
  E.explosion = (x, z, source) => {
    if (source === 'player') G.police.crime(0.5, x, z);
  };
  E.busted = () => playerDown('busted');
  E.driverShot = (v) => {
    if (!v.driver || v.driver === 'player') return;
    const door = v.doorPos(-1);
    const kind = v.driver === 'cop' ? 'cop' : 'civ';
    const d = spawnPed(kind, door.x, door.z);
    if (kind === 'cop') { d.brain = copBrain; d.state = 'custom'; d.weapon = 'pistol'; }
    else d.startFlee(v.x, v.z, 8);
    v.driver = null;
    v.ai = null;
  };
  E.missionComplete = () => persist();
}

function hostileBrain(p, dt) {
  const pl = G.player;
  p.hostileT -= dt;
  if (!pl || !pl.alive || p.hostileT <= 0) { p.brain = null; p.state = 'walk'; p.aimT = 0; return; }
  const e = pl.inCar ? pl.vehicle : pl.ped;
  const d = dist(p.x, p.z, e.x, e.z);
  if (d > 40) { p.brain = null; p.state = 'walk'; return; }
  if (d > 11) p.moveTo(e.x, e.z, p.runSpeed);
  else {
    p.vx *= 0.5; p.vz *= 0.5;
    p.h = Math.atan2(e.z - p.z, e.x - p.x);
    p.aimT = 0.5;
    if (p.fireCd <= 0) { fire(p, 'pistol', p.h + randRange(-0.12, 0.12)); p.fireCd += randRange(0.5, 1.1); }
  }
}

// ------------------------------------------------------------------ simulation
const near = [];
function simStep(dt) {
  G.time += dt;
  const pl = G.player;
  if (pl && G.state === 'playing') pl.update(dt, G.input);
  // drivers
  for (const v of G.vehicles) {
    const ai = v.ai;
    if (ai && v.driver !== 'player') {
      if (ai.mode === 'traffic') driveTraffic(v, dt);
      else if (ai.mode === 'pursuit') drivePursuit(v, dt);
      else if (ai.mode === 'waiting') { v.input.throttle = 0; v.input.brake = 1; v.input.steer = 0; }
    } else if (v.driver !== 'player') {
      v.input.throttle = 0; v.input.brake = 0.15; v.input.steer = 0; v.input.handbrake = false;
    }
    v.step(dt);
  }
  for (const v of G.vehicles) v.collideWorld(dt);
  // spatial hash
  const hash = G.hash;
  hash.clear();
  for (const v of G.vehicles) hash.insert(v, v.x, v.z, v.radius);
  for (const p of G.peds) if (!p.hidden) hash.insert(p, p.x, p.z, 0.4);
  // vehicle vs vehicle
  for (const v of G.vehicles) {
    hash.query(v.x, v.z, v.radius, near);
    for (const o of near) if (o.isVehicle && o.id > v.id) collideVehicles(v, o);
  }
  // vehicle vs pedestrians
  for (const v of G.vehicles) {
    hash.query(v.x, v.z, v.radius + 0.6, near);
    for (const p of near) if (p.isPed) carVsPed(v, p);
  }
  // pedestrians
  for (const p of G.peds) p.update(dt);
  for (let i = G.peds.length - 1; i >= 0; i--) if (G.peds[i].removeMe) removePed(G.peds[i]);
  updateProjectiles(dt);
}

const circ = [];
function carVsPed(v, p) {
  if (p.hidden || p.removed) return;
  if (G.player && p === G.player.ped && G.player.entering && G.player.entering.v === v) return;
  v.worldCircles(circ);
  const r = v.cr + 0.3;
  for (let i = 0; i < circ.length; i += 2) {
    const cx = circ[i], cz = circ[i + 1];
    const dx = p.x - cx, dz = p.z - cz;
    const d2 = dx * dx + dz * dz;
    if (d2 >= r * r) continue;
    const d = Math.sqrt(d2) || 0.01;
    const nx = dx / d, nz = dz / d;
    const rx = cx - v.x + nx * v.cr, rz = cz - v.z + nz * v.cr;
    const pvx = v.vx - v.w * rz, pvz = v.vz + v.w * rx;
    const vn = pvx * nx + pvz * nz - (p.vx * nx + p.vz * nz);
    const upright = p.alive && p.state !== 'down' && p.state !== 'dead';
    if (vn > 3.4 && upright) {
      const dmg = vn * vn * 0.85 + vn * 4;
      const src = v.driver === 'player' ? 'player' : v;
      p.hit(dmg, pvx + nx * 2, pvz + nz * 2, src, 'car');
      p.vx = pvx * 0.8 + nx * 2.5; p.vz = pvz * 0.8 + nz * 2.5;
      v.vx *= 0.96; v.vz *= 0.96;
      G.audio.thud(p.x, p.z);
      G.fx.dust(p.x, p.z, 3, [0.6, 0.58, 0.55]);
    } else {
      p.x = cx + nx * r; p.z = cz + nz * r;
      if (upright && v.speed > 1.5 && !p.brain && p.state !== 'dive') p.startFlee(v.x, v.z, 3);
    }
    return;
  }
}

// ------------------------------------------------------------------ frame loop
let last = performance.now();
let acc = 0;
const STEP = 1 / 60;
let fpsAcc = 0, fpsN = 0, fpsT = 0, lowT = 0, highT = 0;
const perf = { sim: 0, frame: 0, render: 0 };
const showFps = /fps/.test(location.hash);

function loop(now) {
  requestAnimationFrame(loop);
  let dt = (now - last) / 1000;
  last = now;
  if (dt > 0.1) dt = 0.1;
  if (dt <= 0) return;
  G.realTime += dt;
  const st = G.state;
  const t0 = performance.now();
  if (st === 'playing' || st === 'dead' || st === 'busted' || st === 'title') {
    acc += dt;
    let n = 0;
    while (acc >= STEP && n < 4) { simStep(STEP); acc -= STEP; n++; }
    if (n === 4) acc = 0;
    const t1 = performance.now();
    frameUpdate(dt);
    perf.sim += t1 - t0;
    perf.frame += performance.now() - t1;
  }
  if (st === 'dead' || st === 'busted') {
    downT -= dt;
    if (downT <= 0) respawn();
  }
  if (st !== 'playing') G.input.clearEdges();
  const t2 = performance.now();
  renderer.render(scene, camera);
  perf.render += performance.now() - t2;
  // adaptive resolution
  fpsAcc += dt; fpsN++;
  fpsT += dt;
  if (fpsT > 1) {
    const fps = Math.round(fpsN / fpsAcc);
    if (showFps) G.hud.showFps(fps, `sim ${(perf.sim / fpsN).toFixed(1)} upd ${(perf.frame / fpsN).toFixed(1)} draw ${(perf.render / fpsN).toFixed(1)} ms · ${G.vehicles.length} cars · ${G.peds.length} peds · ${renderer.info.render.calls} calls · pr ${pixelRatio.toFixed(2)}`);
    window.__perf = { fps, sim: perf.sim / fpsN, upd: perf.frame / fpsN, draw: perf.render / fpsN, calls: renderer.info.render.calls, tris: renderer.info.render.triangles };
    perf.sim = perf.frame = perf.render = 0;
    if (G.settings.quality === 'auto' && st === 'playing') {
      if (fps < 42) { lowT++; highT = 0; } else if (fps > 57) { highT++; lowT = 0; } else { lowT = highT = 0; }
      const maxPr = Math.min(window.devicePixelRatio || 1, 1.6);
      if (lowT >= 2 && pixelRatio > 0.75) { pixelRatio = Math.max(0.75, pixelRatio - 0.2); resize(); lowT = 0; }
      if (highT >= 6 && pixelRatio < maxPr) { pixelRatio = Math.min(maxPr, pixelRatio + 0.1); resize(); highT = 0; }
    }
    fpsT = 0; fpsAcc = 0; fpsN = 0;
  }
}

function frameUpdate(dt) {
  const pl = G.player;
  const playing = G.state === 'playing' || G.state === 'dead' || G.state === 'busted';
  G.traffic.update(dt);
  if (pl && playing) {
    G.police.update(dt);
    if (G.state === 'playing') G.missions.update(dt);
    G.pickups.update(dt);
  }
  for (const v of G.vehicles) v.update(dt);
  updateSirenMaterials(G.realTime);
  G.fx.update(dt);
  // camera
  if (pl && playing) {
    const e = pl.inCar ? pl.vehicle : pl.ped;
    G.cam.update(dt, { x: e.x, z: e.z, vx: e.vx, vz: e.vz, inCar: pl.inCar, speed: pl.inCar ? pl.vehicle.speed : 0 });
  } else if (G.state === 'title') {
    G.cam.flyover(G.realTime);
  }
  G.pedRender.update(G.peds, G.cam.cx, G.cam.cz, Math.max(G.cam.halfW, G.cam.halfH) + 10);
  world.setTime(G.realTime);
  // audio
  const au = G.audio;
  if (au.ctx) {
    if (pl && pl.inCar && G.state === 'playing') {
      const v = pl.vehicle;
      au.engine(true, v.speed / v.t.maxSpeed, Math.abs(v.input.throttle));
      au.skid(v.skid * clamp(v.speed / 10, 0, 1));
    } else { au.engine(false); au.skid(0); }
    let siren = 0;
    if (pl) {
      const p = pl.pos();
      for (const v of G.vehicles) {
        if (!v.sirenOn) continue;
        siren = Math.max(siren, 1 - dist(v.x, v.z, p.x, p.z) / 110);
      }
    }
    au.siren(G.state === 'playing' ? siren : 0);
    au.tick();
  }
  if (pl && G.state !== 'title') {
    G.hud.update(dt);
    G.hud.buttons(pl.inCar, !pl.inCar && !!pl.nearestCar(4.2));
  }
}

// ------------------------------------------------------------------ UI
let currentScreen = null;
let returnTo = null;
function showScreen(id) {
  for (const s of ['title', 'pause', 'how', 'settings', 'over']) $(s).hidden = s !== id;
  currentScreen = id;
}

function showTitle() {
  G.state = 'title';
  G.player = null;
  G.hud.show(false);
  $('controls').hidden = true;
  $('mapview').hidden = true;
  G.missions.cleanup();
  G.missions.phoneMarker.hide();
  G.police.reset();
  save = loadSave();
  const p = save.progress;
  $('cont').hidden = !(p && p.index > 0);
  if (p && p.index > 0) $('contsub').textContent = `Job ${p.index + 1} · $${(p.cash || 0).toLocaleString()}`;
  $('best').textContent = save.best ? `Best: $${save.best.toLocaleString()}` : '';
  showScreen('title');
  // clear the player's leftovers but keep ambient traffic for the backdrop
  for (const p2 of [...G.peds]) if (p2.kind === 'player' || p2.brain) removePed(p2);
}

function pause() {
  if (G.state !== 'playing') return;
  G.state = 'paused';
  G.audio.suspend();
  $('pstats').innerHTML = statsHTML();
  showScreen('pause');
}
function resume() {
  if (G.state !== 'paused') return;
  showScreen(null);
  G.state = 'playing';
  G.audio.resume();
  last = performance.now();
}

function applySettings() {
  const s = G.settings;
  document.querySelectorAll('.seg').forEach((seg) => {
    const key = seg.dataset.set;
    let val = key === 'sound' ? (s.sound ? 'on' : 'off') : key === 'music' ? (s.music ? 'on' : 'off') : key === 'hand' ? (s.leftHanded ? 'left' : 'right') : s[key];
    seg.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.v === val));
  });
  document.body.classList.toggle('lefty', !!s.leftHanded);
  G.audio.setSfx(s.sound);
  G.audio.setMusic(s.music);
  if (!s.music) G.audio.radio(false);
  else if (G.player && G.player.inCar) G.audio.radio(true);
  G.traffic.setQuality(s.quality);
  const pr = choosePixelRatio();
  if (pr !== pixelRatio) { pixelRatio = pr; resize(); }
  save.settings = s;
  writeSave(save);
}

function wireUI() {
  const input = G.input;
  input.bindTouch($('stickzone'), $('stickbase'), $('stickknob'), [
    [$('btnA'), 'a', 'hold'],
    [$('btnB'), 'b', 'tap'],
    [$('btnC'), 'c', 'hold'],
  ]);
  $('stickzone').addEventListener('pointerdown', () => { $('stickhint').style.opacity = 0; }, { once: true });
  $('play').onclick = () => { G.audio.init(); G.audio.click(); newGame(false); };
  $('cont').onclick = () => { G.audio.init(); G.audio.click(); newGame(true); };
  $('howbtn').onclick = () => { returnTo = 'title'; showScreen('how'); };
  $('setbtn').onclick = () => { returnTo = 'title'; showScreen('settings'); };
  $('howclose').onclick = () => showScreen(returnTo);
  $('setclose').onclick = () => showScreen(returnTo);
  $('pausebtn').onclick = () => pause();
  $('resume').onclick = () => resume();
  $('psettings').onclick = () => { returnTo = 'pause'; showScreen('settings'); };
  $('phow').onclick = () => { returnTo = 'pause'; showScreen('how'); };
  $('quit').onclick = () => { persist(); G.audio.radio(false); G.audio.engine(false); G.audio.siren(0); G.audio.resume(); showTitle(); };
  $('again').onclick = () => newGame(false);
  $('totitle').onclick = () => showTitle();
  $('weapon').onclick = () => input.press('weapon');
  $('radio').onclick = () => input.press('radio');
  const openMap = () => {
    if (G.state !== 'playing') return;
    G.state = 'paused';
    G.hud.drawBigMap($('bigmap'));
    $('mapview').hidden = false;
  };
  $('minimap').onclick = openMap;
  $('mapclose').onclick = () => { $('mapview').hidden = true; G.state = 'playing'; last = performance.now(); };
  document.querySelectorAll('.seg').forEach((seg) => {
    seg.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      const key = seg.dataset.set, v = b.dataset.v;
      if (key === 'sound') G.settings.sound = v === 'on';
      else if (key === 'music') G.settings.music = v === 'on';
      else if (key === 'hand') G.settings.leftHanded = v === 'left';
      else G.settings[key] = v;
      applySettings();
      G.audio.click();
    });
  });
  // keyboard shortcuts for menus
  addEventListener('keydown', (e) => {
    if (e.code === 'KeyP' || e.code === 'Escape') {
      if (G.state === 'playing') pause();
      else if (G.state === 'paused' && currentScreen === 'pause') resume();
      else if (!$('mapview').hidden) $('mapclose').onclick();
    }
    if (e.code === 'KeyM') { if (!$('mapview').hidden) $('mapclose').onclick(); else openMap(); }
    if ((e.code === 'Enter' || e.code === 'Space') && G.state === 'title' && currentScreen === 'title') { e.preventDefault(); newGame(false); }
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { if (G.state === 'playing') pause(); G.audio.suspend(); }
    else requestWakeLock();
  });
  addEventListener('contextmenu', (e) => e.preventDefault());
  // Android app: hardware back button and app switching
  window.__onBack = () => {
    if (!$('mapview').hidden) { $('mapclose').onclick(); return true; }
    if (G.state === 'playing') { pause(); return true; }
    if (currentScreen === 'pause') { resume(); return true; }
    if (currentScreen === 'how' || currentScreen === 'settings') { showScreen(returnTo); return true; }
    if (currentScreen === 'over') { showTitle(); return true; }
    return false;
  };
  window.__appPause = () => { if (G.state === 'playing') pause(); G.audio.suspend(); persist(); };
}

let wakeLock = null;
async function requestWakeLock() {
  try { if ('wakeLock' in navigator && !wakeLock) { wakeLock = await navigator.wakeLock.request('screen'); wakeLock.addEventListener('release', () => { wakeLock = null; }); } } catch { wakeLock = null; }
}
function tryFullscreen() {
  if (window.AndroidShell) return; // the Android app is already full screen
  const el = document.documentElement;
  try {
    const p = el.requestFullscreen?.({ navigationUI: 'hide' });
    p?.then?.(() => screen.orientation?.lock?.('landscape').catch(() => {})).catch(() => {});
  } catch { /* not allowed here */ }
}

// debug hooks for automated testing
window.__game = { G, newGame, simStep, spawnVehicle, spawnPed, explode, playerDown, debug: () => ({ downT, state: G.state }) };

boot().catch((e) => {
  console.error(e);
  fail('Something went wrong while building the city: ' + (e && e.message ? e.message : e));
});

export { TILE, rejoinTraffic };
