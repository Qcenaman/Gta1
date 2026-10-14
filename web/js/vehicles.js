// Vehicles: low-poly models, arcade physics with drift, collisions, damage, explosions.
import * as THREE from 'three';
import { G, uid } from './game.js';
import { clamp, lerp, approach, hexRgb, rand, randRange, pick, wrapAngle } from './util.js';
import { shadeN } from './world3d.js';
import { circleContact } from './physics.js';
import { SHADOW_DX, SHADOW_DZ } from './consts.js';

export const VTYPES = {
  sedan: { name: 'Sedan', L: 4.6, W: 1.9, H: 1.4, maxSpeed: 34, accel: 10.5, brake: 24, grip: 21, mass: 1.2, health: 110, steer: 0.62 },
  compact: { name: 'Compact', L: 4.0, W: 1.8, H: 1.45, maxSpeed: 31, accel: 10, brake: 24, grip: 21, mass: 1.0, health: 95, steer: 0.66 },
  sports: { name: 'Sports Car', L: 4.4, W: 1.95, H: 1.15, maxSpeed: 48, accel: 16, brake: 28, grip: 25, mass: 1.15, health: 95, steer: 0.6 },
  muscle: { name: 'Muscle Car', L: 4.9, W: 2.0, H: 1.36, maxSpeed: 43, accel: 15, brake: 24, grip: 18, mass: 1.35, health: 120, steer: 0.58 },
  taxi: { name: 'Taxi', L: 4.7, W: 1.92, H: 1.62, maxSpeed: 35, accel: 11, brake: 24, grip: 21, mass: 1.25, health: 115, steer: 0.62 },
  police: { name: 'Police Cruiser', L: 4.8, W: 2.0, H: 1.56, maxSpeed: 42, accel: 14.5, brake: 27, grip: 24, mass: 1.45, health: 160, steer: 0.62, siren: true },
  van: { name: 'Van', L: 5.0, W: 2.1, H: 2.2, maxSpeed: 29, accel: 8.5, brake: 20, grip: 17, mass: 1.9, health: 150, steer: 0.58 },
  pickup: { name: 'Pickup', L: 5.2, W: 2.05, H: 1.7, maxSpeed: 34, accel: 10.5, brake: 22, grip: 18, mass: 1.7, health: 140, steer: 0.56 },
  truck: { name: 'Box Truck', L: 7.6, W: 2.5, H: 3.25, maxSpeed: 25, accel: 6, brake: 17, grip: 14, mass: 3.2, health: 240, steer: 0.5 },
  bus: { name: 'City Bus', L: 11, W: 2.6, H: 3.35, maxSpeed: 23, accel: 5, brake: 15, grip: 13, mass: 4.2, health: 280, steer: 0.48 },
  ambulance: { name: 'Ambulance', L: 5.6, W: 2.2, H: 2.4, maxSpeed: 35, accel: 10.5, brake: 22, grip: 18, mass: 2.1, health: 170, steer: 0.58, siren: true },
  swat: { name: 'Armored Van', L: 5.8, W: 2.4, H: 2.5, maxSpeed: 37, accel: 11.5, brake: 22, grip: 20, mass: 3.0, health: 340, steer: 0.56, siren: true },
  limo: { name: 'Limousine', L: 7.2, W: 2.0, H: 1.38, maxSpeed: 35, accel: 9.5, brake: 21, grip: 17, mass: 2.2, health: 190, steer: 0.52 },
  armored: { name: 'Armored Truck', L: 6.6, W: 2.5, H: 2.85, maxSpeed: 28, accel: 7.5, brake: 19, grip: 17, mass: 4.0, health: 520, steer: 0.52 },
};

export const CIV_TYPES = [
  ['sedan', 30], ['compact', 24], ['taxi', 10], ['van', 9], ['pickup', 9], ['sports', 4], ['muscle', 5], ['truck', 4], ['bus', 3],
];
export function randomCivType() {
  let total = 0;
  for (const [, w] of CIV_TYPES) total += w;
  let r = rand() * total;
  for (const [t, w] of CIV_TYPES) { r -= w; if (r <= 0) return t; }
  return 'sedan';
}

const PAINTS = ['#dcdcd8', '#a9adb1', '#2b2d31', '#1f3a63', '#8e1f23', '#c43a2c', '#2f5d3a', '#c9b48a', '#5c7fa3', '#d9a42a', '#e07b2f', '#3f8f8a', '#6b4a8f', '#7a7f84', '#9fb7c9', '#4e5a3c'];
export const FIXED_PAINT = { taxi: '#f0bf2a', police: '#1c2c4c', ambulance: '#efefe9', swat: '#252c36', limo: '#17181b', armored: '#55604f', bus: null };
export function randomPaint(type) {
  if (FIXED_PAINT[type]) return FIXED_PAINT[type];
  if (type === 'bus') return pick(['#d9762b', '#2f8f87', '#c9433a']);
  if (type === 'sports') return pick(['#c43a2c', '#d9a42a', '#1f3a63', '#dcdcd8', '#2b2d31', '#e07b2f', '#3f8f8a']);
  return pick(PAINTS);
}

// ------------------------------------------------------------------ model building
const GLASS = [0.12, 0.16, 0.21], LIGHT = [0.98, 0.96, 0.82], TAIL = [0.78, 0.12, 0.13], TIRE = [0.09, 0.09, 0.1];
const TRIM = [0.17, 0.18, 0.2], WHITE = [0.93, 0.93, 0.9], RED = [0.8, 0.15, 0.14], CARGO = [0.87, 0.87, 0.84];

class VB {
  constructor() { this.pos = []; this.col = []; this.idx = []; this.n = 0; }
  quad(a, b, c, d, col) {
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
    const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const l = Math.hypot(nx, ny, nz) || 1;
    // cars are lit a little brighter than buildings so they pop
    const k = Math.min(1.08, shadeN(nx / l, ny / l, nz / l) * 1.08);
    const n = this.n;
    this.pos.push(...a, ...b, ...c, ...d);
    for (let i = 0; i < 4; i++) this.col.push(col[0] * k, col[1] * k, col[2] * k);
    this.idx.push(n, n + 1, n + 2, n, n + 2, n + 3);
    this.n += 4;
  }
  geometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.setIndex(this.idx);
    g.computeBoundingSphere();
    return g;
  }
}

class CarGeo {
  constructor() { this.p = new VB(); this.d = new VB(); this.red = new VB(); this.blue = new VB(); }
  face(spec, a, b, c, d) {
    if (!spec) return;
    if (spec === 'P') this.p.quad(a, b, c, d, [1, 1, 1]);
    else if (spec === 'R') this.red.quad(a, b, c, d, [1, 1, 1]);
    else if (spec === 'B') this.blue.quad(a, b, c, d, [1, 1, 1]);
    else this.d.quad(a, b, c, d, spec);
  }
  box(x0, y0, z0, x1, y1, z1, top, side = top, front = side, back = side) {
    this.face(top, [x0, y1, z0], [x0, y1, z1], [x1, y1, z1], [x1, y1, z0]);
    this.face(side, [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [x1, y0, z0]);
    this.face(front, [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [x1, y0, z1]);
    this.face(side, [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], [x0, y0, z1]);
    this.face(back, [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], [x0, y0, z0]);
  }
  frustum(b, t, y0, y1, top, side, front, back) {
    this.face(top, [t[0], y1, t[2]], [t[0], y1, t[3]], [t[1], y1, t[3]], [t[1], y1, t[2]]);
    this.face(side, [b[0], y0, b[2]], [t[0], y1, t[2]], [t[1], y1, t[2]], [b[1], y0, b[2]]);
    this.face(front, [b[1], y0, b[2]], [t[1], y1, t[2]], [t[1], y1, t[3]], [b[1], y0, b[3]]);
    this.face(side, [b[1], y0, b[3]], [t[1], y1, t[3]], [t[0], y1, t[3]], [b[0], y0, b[3]]);
    this.face(back, [b[0], y0, b[3]], [t[0], y1, t[3]], [t[0], y1, t[2]], [b[0], y0, b[2]]);
  }
  wheels(xs, hw, r = 0.62) {
    for (const x of xs) {
      this.box(x - 0.37, 0, -hw - 0.05, x + 0.37, r, -hw + 0.2, TIRE);
      this.box(x - 0.37, 0, hw - 0.2, x + 0.37, r, hw + 0.05, TIRE);
    }
  }
  lights(hl, hw, yTop, yLow = 0.5) {
    // patches on top of the body + on the front/back faces
    this.box(hl - 0.3, yTop, -hw + 0.1, hl - 0.04, yTop + 0.015, -hw + 0.46, LIGHT);
    this.box(hl - 0.3, yTop, hw - 0.46, hl - 0.04, yTop + 0.015, hw - 0.1, LIGHT);
    this.box(-hl + 0.03, yTop, -hw + 0.1, -hl + 0.22, yTop + 0.015, -hw + 0.42, TAIL);
    this.box(-hl + 0.03, yTop, hw - 0.42, -hl + 0.22, yTop + 0.015, hw - 0.1, TAIL);
    this.box(hl, yLow, -hw + 0.1, hl + 0.02, yTop - 0.06, -hw + 0.46, null, null, LIGHT);
    this.box(hl, yLow, hw - 0.46, hl + 0.02, yTop - 0.06, hw - 0.1, null, null, LIGHT);
    // bumpers
    this.box(hl, 0.28, -hw + 0.04, hl + 0.09, yLow, hw - 0.04, TRIM);
    this.box(-hl - 0.09, 0.28, -hw + 0.04, -hl, yLow, hw - 0.04, TRIM);
  }
}

function buildModel(type) {
  const t = VTYPES[type];
  const g = new CarGeo();
  const hl = t.L / 2, hw = t.W / 2;
  switch (type) {
    case 'sedan':
    case 'taxi':
    case 'police':
    case 'limo': {
      const long = type === 'limo';
      g.box(-hl, 0.3, -hw, hl, 0.82, hw, 'P');
      const cb = long ? [-2.5, 1.6] : [-1.3, 0.85], ct = long ? [-2.15, 1.05] : [-0.9, 0.25];
      g.frustum([cb[0], cb[1], -hw + 0.07, hw - 0.07], [ct[0], ct[1], -hw + 0.22, hw - 0.22], 0.82, 1.36, 'P', GLASS, GLASS, GLASS);
      g.lights(hl, hw, 0.82);
      g.wheels(long ? [hl - 1.1, -hl + 1.1] : [hl - 0.95, -hl + 0.95], hw);
      // side mirrors
      g.box(0.55, 0.82, -hw - 0.12, 0.75, 0.95, -hw, 'P');
      g.box(0.55, 0.82, hw, 0.75, 0.95, hw + 0.12, 'P');
      if (type === 'taxi') {
        g.box(-0.6, 1.36, -0.42, -0.15, 1.6, 0.42, [0.98, 0.97, 0.88], [0.98, 0.97, 0.88]);
        g.box(-1.0, 0.4, -hw - 0.005, 0.95, 0.52, -hw, null, TRIM);
        g.box(-1.0, 0.4, hw, 0.95, 0.52, hw + 0.005, null, TRIM);
      }
      if (type === 'police') {
        g.box(ct[0], 1.36, -hw + 0.22, ct[1], 1.37, hw - 0.22, WHITE);
        g.box(-1.25, 0.35, -hw - 0.006, 0.95, 0.78, -hw, null, WHITE);
        g.box(-1.25, 0.35, hw, 0.95, 0.78, hw + 0.006, null, WHITE);
        g.box(-0.55, 1.36, -0.78, -0.15, 1.39, 0.78, TRIM);
        g.box(-0.52, 1.39, -0.74, -0.18, 1.56, -0.04, 'R', 'R', 'R', 'R');
        g.box(-0.52, 1.39, 0.04, -0.18, 1.56, 0.74, 'B', 'B', 'B', 'B');
      }
      if (type === 'limo') {
        g.box(ct[0] + 0.2, 1.36, -0.5, ct[0] + 1.4, 1.37, 0.5, GLASS);
      }
      break;
    }
    case 'compact': {
      g.box(-hl, 0.3, -hw, hl, 0.82, hw, 'P');
      g.frustum([-hl + 0.25, 0.65, -hw + 0.07, hw - 0.07], [-hl + 0.45, 0.05, -hw + 0.2, hw - 0.2], 0.82, 1.42, 'P', GLASS, GLASS, GLASS);
      g.lights(hl, hw, 0.82);
      g.wheels([hl - 0.8, -hl + 0.8], hw);
      break;
    }
    case 'sports': {
      g.box(-hl, 0.26, -hw, hl, 0.72, hw, 'P');
      g.frustum([-0.95, 0.7, -hw + 0.1, hw - 0.1], [-0.6, 0.1, -hw + 0.3, hw - 0.3], 0.72, 1.13, 'P', GLASS, GLASS, GLASS);
      g.lights(hl, hw, 0.72, 0.42);
      g.box(-hl + 0.05, 0.92, -hw + 0.04, -hl + 0.32, 0.99, hw - 0.04, 'P');
      g.box(-hl + 0.12, 0.72, -0.6, -hl + 0.22, 0.92, -0.5, TRIM);
      g.box(-hl + 0.12, 0.72, 0.5, -hl + 0.22, 0.92, 0.6, TRIM);
      for (const s of [-1, 1]) {
        g.box(0.7, 0.72, s * 0.08 - (s < 0 ? 0.16 : 0), hl - 0.05, 0.735, s * 0.08 + (s > 0 ? 0.16 : 0), WHITE);
        g.box(-0.6, 1.13, s * 0.08 - (s < 0 ? 0.16 : 0), 0.1, 1.145, s * 0.08 + (s > 0 ? 0.16 : 0), WHITE);
      }
      g.wheels([hl - 0.9, -hl + 0.95], hw, 0.58);
      break;
    }
    case 'muscle': {
      g.box(-hl, 0.3, -hw, hl, 0.88, hw, 'P');
      g.frustum([-1.5, 0.35, -hw + 0.08, hw - 0.08], [-1.12, -0.15, -hw + 0.24, hw - 0.24], 0.88, 1.36, 'P', GLASS, GLASS, GLASS);
      g.lights(hl, hw, 0.88);
      g.box(0.85, 0.88, -0.3, 1.65, 1.0, 0.3, TRIM);
      for (const s of [-1, 1]) g.box(-hl + 0.1, 0.88, s > 0 ? 0.12 : -0.38, hl - 0.05, 0.895, s > 0 ? 0.38 : -0.12, [0.95, 0.95, 0.92]);
      g.wheels([hl - 1.0, -hl + 1.0], hw);
      break;
    }
    case 'van':
    case 'ambulance':
    case 'swat': {
      g.box(-hl, 0.36, -hw, hl, 1.2, hw, 'P');
      g.frustum([-hl, hl - 0.85, -hw + 0.02, hw - 0.02], [-hl, hl - 1.35, -hw + 0.1, hw - 0.1], 1.2, t.H, 'P', 'P', GLASS, 'P');
      g.lights(hl, hw, 1.2, 0.7);
      g.wheels([hl - 1.0, -hl + 1.1], hw, 0.72);
      if (type === 'ambulance') {
        g.box(-hl, 1.3, -hw - 0.006, hl - 0.9, 1.52, -hw, null, RED);
        g.box(-hl, 1.3, hw, hl - 0.9, 1.52, hw + 0.006, null, RED);
        g.box(-1.6, t.H, -0.2, -0.4, t.H + 0.012, 0.2, RED);
        g.box(-1.2, t.H, -0.62, -0.8, t.H + 0.012, 0.62, RED);
        g.box(0.6, t.H, -0.85, 0.95, t.H + 0.03, 0.85, TRIM);
        g.box(0.62, t.H + 0.03, -0.82, 0.93, t.H + 0.2, -0.04, 'R', 'R', 'R', 'R');
        g.box(0.62, t.H + 0.03, 0.04, 0.93, t.H + 0.2, 0.82, 'B', 'B', 'B', 'B');
      }
      if (type === 'swat') {
        g.box(-1.6, t.H, -0.6, -0.4, t.H + 0.12, 0.6, TRIM);
        g.box(0.5, t.H, -0.95, 0.85, t.H + 0.03, 0.95, TRIM);
        g.box(0.52, t.H + 0.03, -0.92, 0.83, t.H + 0.2, -0.04, 'R', 'R', 'R', 'R');
        g.box(0.52, t.H + 0.03, 0.04, 0.83, t.H + 0.2, 0.92, 'B', 'B', 'B', 'B');
        g.box(-hl + 0.3, 1.0, -hw - 0.006, hl - 1.2, 1.25, -hw, null, [0.85, 0.85, 0.8]);
        g.box(-hl + 0.3, 1.0, hw, hl - 1.2, 1.25, hw + 0.006, null, [0.85, 0.85, 0.8]);
      }
      break;
    }
    case 'pickup': {
      g.box(-hl, 0.36, -hw, hl, 0.95, hw, 'P');
      g.frustum([-0.45, 1.25, -hw + 0.05, hw - 0.05], [-0.32, 0.72, -hw + 0.18, hw - 0.18], 0.95, 1.7, 'P', GLASS, GLASS, GLASS);
      g.box(-hl + 0.08, 0.95, -hw + 0.1, -0.5, 0.98, hw - 0.1, TRIM);
      g.box(-hl, 0.95, -hw, -0.45, 1.3, -hw + 0.1, 'P');
      g.box(-hl, 0.95, hw - 0.1, -0.45, 1.3, hw, 'P');
      g.box(-hl, 0.95, -hw + 0.1, -hl + 0.1, 1.3, hw - 0.1, 'P');
      g.lights(hl, hw, 0.95);
      g.wheels([hl - 1.0, -hl + 1.05], hw, 0.7);
      break;
    }
    case 'truck': {
      g.box(2.1, 0.5, -hw, hl, 1.9, hw, 'P');
      g.frustum([2.1, hl - 0.05, -hw + 0.02, hw - 0.02], [2.1, hl - 0.5, -hw + 0.1, hw - 0.1], 1.9, 2.75, 'P', 'P', GLASS, 'P');
      g.box(-hl, 0.7, -hw + 0.02, 1.95, t.H, hw - 0.02, CARGO);
      g.box(-hl + 0.2, 1.55, -hw + 0.015, 1.8, 1.95, -hw + 0.02, null, 'P');
      g.box(-hl + 0.2, 1.55, hw - 0.02, 1.8, 1.95, hw - 0.015, null, 'P');
      g.box(-hl, 0.45, -hw + 0.2, 2.1, 0.7, hw - 0.2, TRIM);
      g.lights(hl, hw, 1.9, 1.0);
      g.wheels([hl - 0.9, -hl + 1.1, -hl + 2.2], hw, 0.95);
      break;
    }
    case 'bus': {
      g.box(-hl, 0.4, -hw, hl, 3.0, hw, 'P');
      g.box(-hl + 0.1, 3.0, -hw + 0.06, hl - 0.1, 3.03, hw - 0.06, [0.92, 0.92, 0.88]);
      g.box(-hl + 0.4, 1.55, -hw - 0.012, hl - 1.2, 2.55, -hw, null, GLASS);
      g.box(-hl + 0.4, 1.55, hw, hl - 1.2, 2.55, hw + 0.012, null, GLASS);
      g.box(hl, 1.15, -hw + 0.1, hl + 0.02, 2.75, hw - 0.1, null, null, GLASS);
      g.box(-3.2, 3.03, -0.85, -1.2, 3.38, 0.85, [0.78, 0.8, 0.81]);
      g.box(1.0, 3.03, -0.7, 2.4, 3.3, 0.7, [0.78, 0.8, 0.81]);
      g.lights(hl, hw, 0.95, 0.6);
      g.wheels([hl - 2.0, -hl + 2.3], hw, 0.95);
      break;
    }
    case 'armored': {
      g.box(-hl, 0.45, -hw, hl, 2.75, hw, 'P');
      g.box(hl - 0.02, 1.6, -hw + 0.25, hl + 0.01, 2.4, hw - 0.25, null, null, GLASS);
      g.box(-1.2, 2.75, -0.6, 0.2, 2.9, 0.6, TRIM);
      g.box(hl - 1.4, 2.75, -hw + 0.1, hl - 0.2, 2.77, hw - 0.1, [0.42, 0.47, 0.4]);
      g.lights(hl, hw, 1.2, 0.8);
      g.wheels([hl - 1.1, -hl + 1.2], hw, 0.95);
      break;
    }
    default:
      g.box(-hl, 0.3, -hw, hl, t.H, hw, 'P');
  }
  return {
    paint: g.p.geometry(),
    detail: g.d.geometry(),
    red: g.red.n ? g.red.geometry() : null,
    blue: g.blue.n ? g.blue.geometry() : null,
  };
}

const models = {};
function model(type) { return models[type] || (models[type] = buildModel(type)); }

// shared materials
const MAT = {
  detail: new THREE.MeshBasicMaterial({ vertexColors: true }),
  burnt: new THREE.MeshBasicMaterial({ vertexColors: true, color: 0x3a3a3a }),
  red: new THREE.MeshBasicMaterial({ color: 0xff2a2a }),
  blue: new THREE.MeshBasicMaterial({ color: 0x2a6bff }),
  glowRed: new THREE.MeshBasicMaterial({ color: 0xff2020, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }),
  glowBlue: new THREE.MeshBasicMaterial({ color: 0x2060ff, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }),
  shadow: null,
};
const glowGeo = new THREE.CircleGeometry(1, 16).rotateX(-Math.PI / 2);
let shadowGeos = {};

// headlight cones + tail-light glow, only visible at night
export const lightMat = new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  uniforms: { uNight: { value: 0 } },
  vertexShader: `attribute vec3 color; attribute float kind; varying vec3 vC; varying vec2 vUv; varying float vK;
    void main(){ vC = color; vUv = uv; vK = kind; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `uniform float uNight; varying vec3 vC; varying vec2 vUv; varying float vK;
    void main(){
      float a;
      if (vK < 0.5) { float across = abs(vUv.y - 0.5) * 2.0; a = pow(1.0 - vUv.x, 1.5) * (1.0 - across * across) * 0.5; }
      else { a = pow(max(0.0, 1.0 - length(vUv - 0.5) * 2.0), 2.0) * 0.9; }
      a *= uNight;
      gl_FragColor = vec4(vC * a, a);
    }`,
});
const lightGeos = {};
function lightGeometry(t) {
  const key = t.L + ':' + t.W;
  if (lightGeos[key]) return lightGeos[key];
  const pos = [], uv = [], col = [], kind = [], idx = [];
  const quad = (pts, uvs, c, k) => {
    const n = pos.length / 3;
    for (const p of pts) pos.push(p[0], p[1], p[2]);
    uv.push(...uvs);
    for (let i = 0; i < 4; i++) { col.push(...c); kind.push(k); }
    idx.push(n, n + 1, n + 2, n, n + 2, n + 3);
  };
  const hl = t.L / 2, hw = t.W / 2, y = 0.06;
  const near = hl - 0.1, far = hl + 11;
  quad([[near, y, -hw * 0.85], [near, y, hw * 0.85], [far, y, hw * 2.8], [far, y, -hw * 2.8]], [0, 0, 0, 1, 1, 1, 1, 0], [1, 0.93, 0.75], 0);
  for (const s of [-1, 1]) {
    const cx = -hl - 0.25, cz = s * (hw - 0.35), r = 0.9;
    quad([[cx - r, y + 0.02, cz - r], [cx - r, y + 0.02, cz + r], [cx + r, y + 0.02, cz + r], [cx + r, y + 0.02, cz - r]], [0, 0, 0, 1, 1, 1, 1, 0], [1, 0.12, 0.08], 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setAttribute('kind', new THREE.Float32BufferAttribute(kind, 1));
  g.setIndex(idx);
  g.computeBoundingSphere();
  return (lightGeos[key] = g);
}

export function setVehicleLighting(night, tint) {
  lightMat.uniforms.uNight.value = night;
  MAT.detail.color.copy(tint);
  MAT.burnt.color.setHex(0x3a3a3a).multiply(tint);
}

export function setVehicleShadowMaterial(m) { MAT.shadow = m; }

export function updateSirenMaterials(time) {
  const ph = (time * 3.2) % 1;
  const a = ph < 0.5;
  MAT.red.color.setHex(a ? 0xff3535 : 0x5a1010);
  MAT.blue.color.setHex(a ? 0x10204a : 0x3a7bff);
  MAT.glowRed.opacity = a ? 0.55 : 0.0;
  MAT.glowBlue.opacity = a ? 0.0 : 0.55;
}

const tmpPaint = new THREE.Color();

export class Vehicle {
  constructor(type, x, z, h, paint) {
    const t = VTYPES[type];
    this.id = uid();
    this.isVehicle = true;
    this.type = type;
    this.t = t;
    this.x = x; this.z = z; this.h = h;
    this.vx = 0; this.vz = 0; this.w = 0;
    this.vf = 0; this.vl = 0;
    this.speed = 0;
    this.health = t.health;
    this.dead = false;
    this.burnTime = 0;
    this.onFire = false;
    this.driver = null;
    this.passengers = [];
    this.ai = null;
    this.input = { throttle: 0, steer: 0, brake: 0, handbrake: false };
    this.paintHex = paint || randomPaint(type);
    this.sirenOn = false;
    this.horn = 0;
    this.skid = 0;
    this.persistent = false;
    this.mission = null;
    this.locked = false;
    this.lastHitBy = null;
    this.lastCrash = 0;
    this.jumpY = 0; this.jumpV = 0;
    this.smokeAcc = 0;
    this.prevWheel = null;
    this.sinceSeen = 0;
    this.radius = Math.hypot(t.L, t.W) / 2;
    this.mass = t.mass;
    this.inertia = (t.mass * (t.L * t.L + t.W * t.W)) / 12;
    // collision circles along the length
    const r = t.W / 2;
    const n = Math.max(2, Math.ceil(t.L / (t.W * 0.95)));
    this.cr = r;
    this.circles = [];
    for (let i = 0; i < n; i++) this.circles.push(lerp(-t.L / 2 + r, t.L / 2 - r, n === 1 ? 0.5 : i / (n - 1)));
    this.buildMesh();
  }

  buildMesh() {
    const m = model(this.type);
    const grp = new THREE.Group();
    this.paintMat = new THREE.MeshBasicMaterial({ vertexColors: true, color: new THREE.Color(this.paintHex) });
    this.bodyMesh = new THREE.Mesh(m.paint, this.paintMat);
    this.detailMesh = new THREE.Mesh(m.detail, MAT.detail);
    grp.add(this.bodyMesh, this.detailMesh);
    if (m.red) {
      this.redMesh = new THREE.Mesh(m.red, MAT.red);
      this.blueMesh = new THREE.Mesh(m.blue, MAT.blue);
      grp.add(this.redMesh, this.blueMesh);
      this.glowR = new THREE.Mesh(glowGeo, MAT.glowRed);
      this.glowB = new THREE.Mesh(glowGeo, MAT.glowBlue);
      this.glowR.scale.setScalar(3.2); this.glowB.scale.setScalar(3.2);
      this.glowR.position.set(-0.2, 0.08, -1.3); this.glowB.position.set(-0.2, 0.08, 1.3);
      this.glowR.renderOrder = 7; this.glowB.renderOrder = 7;
      this.glowR.visible = this.glowB.visible = false;
      grp.add(this.glowR, this.glowB);
    }
    this.lights = new THREE.Mesh(lightGeometry(this.t), lightMat);
    this.lights.renderOrder = 4;
    this.lights.visible = false;
    grp.add(this.lights);
    this.mesh = grp;
    // shadow (separate so it can be offset in world space)
    const key = this.type;
    if (!shadowGeos[key]) {
      const t = this.t;
      shadowGeos[key] = new THREE.PlaneGeometry(t.L * 0.98, t.W * 0.96).rotateX(-Math.PI / 2);
    }
    this.shadow = new THREE.Mesh(shadowGeos[key], MAT.shadow);
    this.shadow.renderOrder = 1;
    G.scene.add(grp, this.shadow);
    this.syncMesh();
  }

  setPaint(hex) {
    this.paintHex = hex;
    this.paintMat.color.set(hex);
  }

  get fx() { return Math.cos(this.h); }
  get fz() { return Math.sin(this.h); }

  /** world position of the driver door (left side) */
  doorPos(side = -1) {
    const fx = Math.cos(this.h), fz = Math.sin(this.h);
    const rx = -fz, rz = fx;
    const off = this.t.W / 2 + 0.55;
    const along = this.t.L * 0.08;
    return { x: this.x + fx * along + rx * off * side, z: this.z + fz * along + rz * off * side };
  }

  damage(amount, source, kind = 'impact') {
    if (this.dead) return;
    this.health -= amount;
    if (source) this.lastHitBy = source;
    if (this.health <= 0) {
      if (kind === 'explosion') {
        // short fuse so chain reactions ripple instead of happening in one frame
        if (!this.onFire || this.burnTime > 0.6) { this.onFire = true; this.burnTime = randRange(0.15, 0.55); }
      } else if (this.health < -80) this.explode();
      else if (!this.onFire) { this.onFire = true; this.burnTime = randRange(2.5, 4); }
    }
  }

  explode() {
    if (this.dead) return;
    this.dead = true;
    this.health = 0;
    this.onFire = false;
    this.sirenOn = false;
    this.paintMat.color.set('#2b2a29');
    this.detailMesh.material = MAT.burnt;
    if (this.redMesh) { this.redMesh.visible = false; this.blueMesh.visible = false; this.glowR.visible = this.glowB.visible = false; }
    this.jumpV = 6;
    this.w += randRange(-2, 2);
    G.events.vehicleExploded?.(this);
  }

  get asleep() {
    return !this.driver && !this.ai && !this.onFire && Math.abs(this.vx) + Math.abs(this.vz) < 0.03 && Math.abs(this.w) < 0.01 && this.jumpV === 0;
  }

  /** fixed timestep physics */
  step(dt) {
    if (this.asleep) { this.vx = this.vz = this.w = 0; return; }
    const t = this.t, inp = this.input;
    // integrate heading first so the existing velocity has to be turned by tyre grip
    const sp0 = Math.hypot(this.vx, this.vz);
    this.h = wrapAngle(this.h + this.w * dt);
    const fx = Math.cos(this.h), fz = Math.sin(this.h);
    const rx = -fz, rz = fx;
    let vf = this.vx * fx + this.vz * fz;
    let vl = this.vx * rx + this.vz * rz;
    const alive = !this.dead && (this.driver || this.ai);
    let throttle = alive ? clamp(inp.throttle, -1, 1) : 0;
    let brake = alive ? inp.brake : 0;
    const accel = t.accel * (this.health < t.health * 0.25 ? 0.6 : 1);
    if (throttle > 0) {
      if (vf < -0.5) vf = approach(vf, 0, t.brake * throttle * dt);
      else {
        const k = clamp(vf / t.maxSpeed, 0, 1);
        vf += accel * throttle * (1 - k * k) * dt;
      }
    } else if (throttle < 0) {
      if (vf > 0.5) vf = approach(vf, 0, t.brake * -throttle * dt);
      else {
        const rmax = t.maxSpeed * 0.32;
        const k = clamp(-vf / rmax, 0, 1);
        vf -= accel * 0.65 * -throttle * (1 - k) * dt;
      }
    }
    if (brake > 0) vf = approach(vf, 0, t.brake * brake * dt);
    // drag and rolling resistance
    vf -= vf * 0.1 * dt;
    vf = approach(vf, 0, (throttle === 0 ? (this.dead ? 6 : 2.2) : 0.3) * dt);
    // tyre grip removes sideways velocity
    let grip = t.grip * (inp.handbrake ? 0.3 : 1) * (this.dead ? 1.6 : 1);
    if (!alive && !this.dead) grip *= 1.2;
    const dvl = clamp(-vl, -grip * dt, grip * dt);
    vl += dvl;
    // sideways scrub also costs some forward speed
    vf -= Math.sign(vf) * Math.abs(dvl) * 0.12;
    if (inp.handbrake) vf = approach(vf, 0, 5 * dt);
    // steering -> yaw rate
    const sp = Math.abs(vf);
    const steerMax = lerp(t.steer, t.steer * 0.3, clamp(sp / 42, 0, 1));
    const wb = t.L * 0.62;
    let wTarget = alive ? (vf * Math.tan(clamp(inp.steer, -1, 1) * steerMax)) / wb : 0;
    const wLim = Math.max(1.1, (grip * 1.5) / Math.max(sp, 1)) * (inp.handbrake ? 1.7 : 1);
    wTarget = clamp(wTarget, -wLim, wLim);
    const wRate = this.dead ? 2 : 9;
    this.w += (wTarget - this.w) * Math.min(1, dt * wRate);
    if (!alive) this.w *= Math.exp(-dt * 2);
    this.vf = vf; this.vl = vl;
    this.vx = fx * vf + rx * vl;
    this.vz = fz * vf + rz * vl;
    this.x += this.vx * dt;
    this.z += this.vz * dt;
    this.speed = Math.hypot(this.vx, this.vz);
    // skid amount for marks/sound
    const lat = Math.abs(vl);
    let skid = lat > 3 ? clamp((lat - 3) / 7, 0, 1) : 0;
    if ((brake > 0.5 || throttle < -0.5) && vf > 9) skid = Math.max(skid, 0.6);
    if (inp.handbrake && sp > 6) skid = Math.max(skid, 0.8);
    if (throttle > 0.9 && vf < 6 && vf > 0 && t.accel > 12) skid = Math.max(skid, 0.4);
    this.skid = skid;
    void sp0;
  }

  collideWorld(dt) {
    if (this.asleep) return;
    const fx = Math.cos(this.h), fz = Math.sin(this.h);
    let crash = 0;
    for (let iter = 0; iter < 2; iter++) {
      let best = null, bestOff = 0;
      for (const off of this.circles) {
        const cx = this.x + fx * off, cz = this.z + fz * off;
        const c = circleContact(cx, cz, this.cr);
        if (c && (!best || c.depth > best.depth)) { best = c; bestOff = off; }
      }
      if (!best) break;
      // positional correction
      this.x += best.nx * best.depth;
      this.z += best.nz * best.depth;
      // impulse at contact (circle centre offset)
      const rcx = fx * bestOff - best.nx * this.cr, rcz = fz * bestOff - best.nz * this.cr;
      const pvx = this.vx - this.w * rcz, pvz = this.vz + this.w * rcx;
      const vn = pvx * best.nx + pvz * best.nz;
      if (vn < 0) {
        const rn = rcx * best.nz - rcz * best.nx;
        const e = 0.25;
        const j = (-(1 + e) * vn) / (1 / this.mass + (rn * rn) / this.inertia);
        this.vx += (j * best.nx) / this.mass;
        this.vz += (j * best.nz) / this.mass;
        this.w += (rn * j) / this.inertia * 0.8;
        // tangential scrub
        const tx = -best.nz, tz = best.nx;
        const vt = this.vx * tx + this.vz * tz;
        this.vx -= tx * vt * 0.18;
        this.vz -= tz * vt * 0.18;
        crash = Math.max(crash, -vn);
        if (-vn > 2) {
          const px = best.px, pz = best.pz;
          G.events.crash?.(this, -vn, px, pz, null);
        }
      }
    }
    if (crash > 6) this.damage((crash - 6) * 3.2, null);
    this.speed = Math.hypot(this.vx, this.vz);
  }

  update(dt) {
    // visuals, fire, smoke
    const t = this.t;
    if (this.onFire && !this.dead) {
      this.burnTime -= dt;
      this.smokeAcc += dt;
      if (this.smokeAcc > 0.05) {
        this.smokeAcc = 0;
        const fx = Math.cos(this.h), fz = Math.sin(this.h);
        G.fx.fire(this.x + fx * t.L * 0.32, t.H * 0.8, this.z + fz * t.L * 0.32, 1.3);
        if (rand() < 0.5) G.fx.smoke(this.x + fx * t.L * 0.3, t.H, this.z + fz * t.L * 0.3, 1.2, 0.18, 1.8);
      }
      if (this.burnTime <= 0) this.explode();
    } else if (!this.dead && this.health < t.health * 0.45) {
      this.smokeAcc += dt * (1 - this.health / (t.health * 0.45)) * 1.5;
      if (this.smokeAcc > 0.12) {
        this.smokeAcc = 0;
        const fx = Math.cos(this.h), fz = Math.sin(this.h);
        const dark = this.health < t.health * 0.2 ? 0.2 : 0.5;
        G.fx.smoke(this.x + fx * t.L * 0.32, t.H * 0.7, this.z + fz * t.L * 0.32, 0.8, dark, 1.4);
      }
    } else if (this.dead && rand() < dt * 3) {
      G.fx.smoke(this.x + randRange(-1, 1), t.H, this.z + randRange(-1, 1), 1.0, 0.16, 2.4);
    }
    // explosion jump
    if (this.jumpV !== 0 || this.jumpY > 0) {
      this.jumpV -= 22 * dt;
      this.jumpY += this.jumpV * dt;
      if (this.jumpY <= 0) { this.jumpY = 0; this.jumpV = this.jumpV < -3 ? -this.jumpV * 0.25 : 0; }
    }
    // skid marks from the rear wheels
    if (this.skid > 0.2 && this.speed > 2) {
      const fx = Math.cos(this.h), fz = Math.sin(this.h), rx = -fz, rz = fx;
      const back = -t.L * 0.32, side = t.W * 0.4;
      const w = [
        [this.x + fx * back + rx * side, this.z + fz * back + rz * side],
        [this.x + fx * back - rx * side, this.z + fz * back - rz * side],
      ];
      if (this.prevWheel) {
        for (let i = 0; i < 2; i++) G.fx.skid(this.prevWheel[i][0], this.prevWheel[i][1], w[i][0], w[i][1], 0.35 * this.skid + 0.1);
      }
      this.prevWheel = w;
      if (rand() < this.skid * 0.4) G.fx.smoke(w[0][0], 0.3, w[0][1], 0.5, 0.75, 0.8);
    } else this.prevWheel = null;
    // damage + time-of-day tint
    const tint = G.light.tint;
    if (!this.dead) {
      const k = 0.55 + 0.45 * clamp(this.health / t.health, 0, 1);
      tmpPaint.set(this.paintHex).multiplyScalar(k);
    } else tmpPaint.set('#2b2a29');
    if (tint) tmpPaint.multiply(tint);
    this.paintMat.color.copy(tmpPaint);
    this.lights.visible = !this.dead && G.light.night > 0.05 && !!(this.driver || this.ai);
    // siren visuals
    if (this.redMesh) {
      const on = this.sirenOn && !this.dead;
      this.glowR.visible = this.glowB.visible = on;
      this.redMesh.material = on ? MAT.red : MAT.detail;
      this.blueMesh.material = on ? MAT.blue : MAT.detail;
    }
    if (this.horn > 0) this.horn -= dt;
    this.syncMesh();
  }

  syncMesh() {
    const m = this.mesh;
    m.position.set(this.x, this.jumpY, this.z);
    m.rotation.set(0, -this.h, 0);
    if (this.jumpY > 0) m.rotation.z = Math.sin(this.jumpY) * 0.1;
    const sh = this.shadow;
    const k = this.t.H * 0.85 + this.jumpY;
    sh.position.set(this.x + SHADOW_DX * k, 0.03, this.z + SHADOW_DZ * k);
    sh.rotation.y = -this.h;
  }

  remove() {
    G.scene.remove(this.mesh, this.shadow);
    this.paintMat.dispose();
    this.removed = true;
  }

  /** circles in world space: returns array of [x, z] */
  worldCircles(out = []) {
    out.length = 0;
    const fx = Math.cos(this.h), fz = Math.sin(this.h);
    for (const off of this.circles) out.push(this.x + fx * off, this.z + fz * off);
    return out;
  }
}

// ------------------------------------------------------------------ vehicle vs vehicle
const ca = [], cb = [];
export function collideVehicles(a, b) {
  const dx = a.x - b.x, dz = a.z - b.z;
  const rr = a.radius + b.radius;
  if (dx * dx + dz * dz > rr * rr) return;
  a.worldCircles(ca);
  b.worldCircles(cb);
  let best = null;
  for (let i = 0; i < ca.length; i += 2) for (let j = 0; j < cb.length; j += 2) {
    const ex = ca[i] - cb[j], ez = ca[i + 1] - cb[j + 1];
    const r = a.cr + b.cr;
    const d2 = ex * ex + ez * ez;
    if (d2 >= r * r) continue;
    const d = Math.sqrt(d2) || 0.001;
    const depth = r - d;
    if (!best || depth > best.depth) best = { nx: ex / d, nz: ez / d, depth, ax: ca[i], az: ca[i + 1], bx: cb[j], bz: cb[j + 1] };
  }
  if (!best) return;
  const ima = 1 / a.mass, imb = 1 / b.mass;
  const corr = best.depth / (ima + imb);
  a.x += best.nx * corr * ima; a.z += best.nz * corr * ima;
  b.x -= best.nx * corr * imb; b.z -= best.nz * corr * imb;
  // contact point midway
  const px = (best.ax + best.bx) / 2, pz = (best.az + best.bz) / 2;
  const rax = px - a.x, raz = pz - a.z, rbx = px - b.x, rbz = pz - b.z;
  const vax = a.vx - a.w * raz, vaz = a.vz + a.w * rax;
  const vbx = b.vx - b.w * rbz, vbz = b.vz + b.w * rbx;
  const vn = (vax - vbx) * best.nx + (vaz - vbz) * best.nz;
  if (vn >= 0) return;
  const ran = rax * best.nz - raz * best.nx, rbn = rbx * best.nz - rbz * best.nx;
  const e = 0.3;
  const j = (-(1 + e) * vn) / (ima + imb + (ran * ran) / a.inertia + (rbn * rbn) / b.inertia);
  a.vx += j * best.nx * ima; a.vz += j * best.nz * ima;
  b.vx -= j * best.nx * imb; b.vz -= j * best.nz * imb;
  a.w += (ran * j) / a.inertia * 0.7;
  b.w -= (rbn * j) / b.inertia * 0.7;
  const impact = -vn;
  if (impact > 4) {
    const dmg = (impact - 4) * 2.6;
    a.damage(dmg * (b.mass / (a.mass + b.mass)) * 2, b.driver === 'player' ? 'player' : b);
    b.damage(dmg * (a.mass / (a.mass + b.mass)) * 2, a.driver === 'player' ? 'player' : a);
  }
  if (impact > 1.5) G.events.crash?.(a, impact, px, pz, b);
}

export function spawnVehicle(type, x, z, h, opts = {}) {
  const v = new Vehicle(type, x, z, h, opts.paint);
  if (opts.speed) { v.vx = Math.cos(h) * opts.speed; v.vz = Math.sin(h) * opts.speed; v.speed = opts.speed; }
  G.vehicles.push(v);
  return v;
}

export function removeVehicle(v) {
  v.remove();
  const i = G.vehicles.indexOf(v);
  if (i >= 0) G.vehicles.splice(i, 1);
}
