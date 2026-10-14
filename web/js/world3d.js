// Builds the static city meshes from the generated map. Everything static is merged
// into a handful of big meshes so the whole city costs only ~8 draw calls.
import * as THREE from 'three';
import { TILE, T, D, SHADOW_DX, SHADOW_DZ, WATER_Y } from './consts.js';
import { hexRgb, hash2, RNG, clamp } from './util.js';
import { makeNoiseTexture, makeGroundMaterial, makeWallMaterial, makeWaterMaterial } from './shaders.js';

// light direction (towards the light) for baked shading
const LX = -0.452, LY = 0.822, LZ = -0.345;
export function shadeN(nx, ny, nz) {
  return Math.min(1, 0.55 + 0.5 * Math.max(0, nx * LX + ny * LY + nz * LZ));
}
const C = (h) => hexRgb(h);
const mul = (c, k) => [c[0] * k, c[1] * k, c[2] * k];

// ------------------------------------------------------------------ builders
// Every builder splits its geometry into square chunks so off-screen parts get
// frustum-culled. Call .at(x, z) before adding something to pick its chunk.
export const CHUNK = 128; // metres
class Chunked {
  constructor(fields) {
    this.fields = fields;
    this.chunks = new Map();
    this.at(0, 0);
  }
  at(x, z) {
    const key = Math.floor(x / CHUNK) + ',' + Math.floor(z / CHUNK);
    let c = this.chunks.get(key);
    if (!c) {
      c = { n: 0, idx: [] };
      for (const f of this.fields) c[f] = [];
      this.chunks.set(key, c);
    }
    this.c = c;
    return this;
  }
  get n() { let s = 0; for (const c of this.chunks.values()) s += c.n; return s; }
  meshes(material, setup) {
    const out = [];
    for (const c of this.chunks.values()) {
      if (!c.n) continue;
      const g = new THREE.BufferGeometry();
      setup(g, c);
      g.setIndex(c.idx);
      g.computeBoundingSphere();
      g.computeBoundingBox();
      out.push(new THREE.Mesh(g, material));
    }
    return out;
  }
}

class Flat extends Chunked {
  constructor() { super(['pos', 'col', 'pat']); }
  quad(a, b, c, d, col, pat) {
    const k = this.c, n = k.n;
    k.pos.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2], d[0], d[1], d[2]);
    for (let i = 0; i < 4; i++) { k.col.push(col[0], col[1], col[2]); k.pat.push(pat); }
    k.idx.push(n, n + 1, n + 2, n, n + 2, n + 3);
    k.n += 4;
  }
  rect(x0, z0, x1, z1, y, col, pat) {
    this.quad([x0, y, z0], [x0, y, z1], [x1, y, z1], [x1, y, z0], col, pat);
  }
  rot(cx, cz, len, wid, ang, y, col, pat) {
    const dx = Math.cos(ang), dz = Math.sin(ang), px = -dz, pz = dx;
    const l = len / 2, w = wid / 2;
    this.quad(
      [cx - dx * l - px * w, y, cz - dz * l - pz * w],
      [cx - dx * l + px * w, y, cz - dz * l + pz * w],
      [cx + dx * l + px * w, y, cz + dz * l + pz * w],
      [cx + dx * l - px * w, y, cz + dz * l - pz * w], col, pat);
  }
  fan(cx, cz, y, r, sides, col, pat, r2 = 0) {
    for (let i = 0; i < sides; i++) {
      const a0 = (i / sides) * Math.PI * 2, a1 = ((i + 1) / sides) * Math.PI * 2;
      const o0 = [cx + Math.cos(a0) * r, y, cz + Math.sin(a0) * r];
      const o1 = [cx + Math.cos(a1) * r, y, cz + Math.sin(a1) * r];
      const i0 = [cx + Math.cos(a0) * r2, y, cz + Math.sin(a0) * r2];
      const i1 = [cx + Math.cos(a1) * r2, y, cz + Math.sin(a1) * r2];
      this.quad(i0, i1, o1, o0, col, pat);
    }
  }
  vquad(ax, az, bx, bz, y0, y1, col, pat) {
    this.quad([ax, y0, az], [ax, y1, az], [bx, y1, bz], [bx, y0, bz], col, pat);
  }
  build(material) {
    return this.meshes(material, (g, c) => {
      g.setAttribute('position', new THREE.Float32BufferAttribute(c.pos, 3));
      g.setAttribute('color', new THREE.Float32BufferAttribute(c.col, 3));
      g.setAttribute('pattern', new THREE.Float32BufferAttribute(c.pat, 1));
    });
  }
}

class Walls extends Chunked {
  constructor() { super(['pos', 'col', 'uvw', 'sty', 'wc', 'kind']); }
  _v(x, y, z, u, v, s) {
    const k = this.c;
    k.pos.push(x, y, z);
    k.col.push(s.col[0], s.col[1], s.col[2]);
    k.uvw.push(u, v);
    k.sty.push(s.floorH, s.bayW, s.winW, s.winH);
    k.wc.push(s.win[0], s.win[1], s.win[2]);
    k.kind.push(s.kind, s.seed, s.top, s.shade);
  }
  wall(ax, az, bx, bz, y0, y1, u0, s) {
    const len = Math.hypot(bx - ax, bz - az);
    const nx = (bz - az) / len, nz = -(bx - ax) / len;
    const st = { ...s, shade: shadeN(nx, 0, nz) };
    const n = this.c.n;
    this._v(ax, y0, az, u0, y0, st);
    this._v(ax, y1, az, u0, y1, st);
    this._v(bx, y1, bz, u0 + len, y1, st);
    this._v(bx, y0, bz, u0 + len, y0, st);
    this.c.idx.push(n, n + 1, n + 2, n, n + 2, n + 3);
    this.c.n += 4;
    return u0 + len;
  }
  gable(ax, az, bx, bz, y0, y1, s) {
    const len = Math.hypot(bx - ax, bz - az);
    const nx = (bz - az) / len, nz = -(bx - ax) / len;
    const st = { ...s, shade: shadeN(nx, 0, nz) };
    const n = this.c.n;
    this._v(ax, y0, az, 0, y0, st);
    this._v((ax + bx) / 2, y1, (az + bz) / 2, len / 2, y1, st);
    this._v(bx, y0, bz, len, y0, st);
    this.c.idx.push(n, n + 1, n + 2);
    this.c.n += 3;
  }
  build(material) {
    return this.meshes(material, (g, c) => {
      g.setAttribute('position', new THREE.Float32BufferAttribute(c.pos, 3));
      g.setAttribute('color', new THREE.Float32BufferAttribute(c.col, 3));
      g.setAttribute('uvw', new THREE.Float32BufferAttribute(c.uvw, 2));
      g.setAttribute('wstyle', new THREE.Float32BufferAttribute(c.sty, 4));
      g.setAttribute('wcolor', new THREE.Float32BufferAttribute(c.wc, 3));
      g.setAttribute('wkind', new THREE.Float32BufferAttribute(c.kind, 4));
    });
  }
}

export class Props extends Chunked {
  constructor() { super(['pos', 'col']); }
  _shade(a, b, c) {
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
    const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const l = Math.hypot(nx, ny, nz) || 1;
    return shadeN(nx / l, ny / l, nz / l);
  }
  tri(a, b, c, col, shaded = true) {
    const k = shaded ? this._shade(a, b, c) : 1;
    const ch = this.c, n = ch.n;
    ch.pos.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]);
    for (let i = 0; i < 3; i++) ch.col.push(col[0] * k, col[1] * k, col[2] * k);
    ch.idx.push(n, n + 1, n + 2);
    ch.n += 3;
  }
  quad(a, b, c, d, col, shaded = true) {
    const k = shaded ? this._shade(a, b, c) : 1;
    const ch = this.c, n = ch.n;
    ch.pos.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2], d[0], d[1], d[2]);
    for (let i = 0; i < 4; i++) ch.col.push(col[0] * k, col[1] * k, col[2] * k);
    ch.idx.push(n, n + 1, n + 2, n, n + 2, n + 3);
    ch.n += 4;
  }
  box(x0, y0, z0, x1, y1, z1, top, side = top, sides = 'nesw') {
    this.quad([x0, y1, z0], [x0, y1, z1], [x1, y1, z1], [x1, y1, z0], top);
    if (sides.includes('n')) this.quad([x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [x1, y0, z0], side);
    if (sides.includes('e')) this.quad([x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [x1, y0, z1], side);
    if (sides.includes('s')) this.quad([x1, y0, z1], [x1, y1, z1], [x0, y1, z1], [x0, y0, z1], side);
    if (sides.includes('w')) this.quad([x0, y0, z1], [x0, y1, z1], [x0, y1, z0], [x0, y0, z0], side);
  }
  prism(cx, cz, r, y0, y1, sides, side, top, rot = 0, rTop = r) {
    const ring = [];
    for (let i = 0; i < sides; i++) {
      const a = rot + (i / sides) * Math.PI * 2;
      ring.push([Math.cos(a), Math.sin(a)]);
    }
    for (let i = 0; i < sides; i++) {
      const p = ring[i], q = ring[(i + 1) % sides];
      this.quad([cx + p[0] * r, y0, cz + p[1] * r], [cx + p[0] * rTop, y1, cz + p[1] * rTop], [cx + q[0] * rTop, y1, cz + q[1] * rTop], [cx + q[0] * r, y0, cz + q[1] * r], side);
    }
    if (top) for (let i = 0; i < sides; i++) {
      const p = ring[i], q = ring[(i + 1) % sides];
      this.tri([cx, y1, cz], [cx + q[0] * rTop, y1, cz + q[1] * rTop], [cx + p[0] * rTop, y1, cz + p[1] * rTop], top);
    }
  }
  cone(cx, cz, r, y0, y1, sides, col) {
    for (let i = 0; i < sides; i++) {
      const a0 = (i / sides) * Math.PI * 2, a1 = ((i + 1) / sides) * Math.PI * 2;
      this.tri([cx + Math.cos(a0) * r, y0, cz + Math.sin(a0) * r], [cx, y1, cz], [cx + Math.cos(a1) * r, y0, cz + Math.sin(a1) * r], col);
    }
  }
  blob(cx, cy, cz, r, sy, col, rng, detail = 1) {
    const g = new THREE.IcosahedronGeometry(r, detail);
    const p = g.attributes.position.array;
    for (let i = 0; i < p.length; i += 9) {
      const v = (k) => [cx + p[i + k * 3], cy + p[i + k * 3 + 1] * sy, cz + p[i + k * 3 + 2]];
      const jit = 0.9 + rng() * 0.2;
      // skip faces pointing straight down - never visible from above
      if (p[i + 1] + p[i + 4] + p[i + 7] < -r * 1.2) continue;
      this.tri(v(0), v(1), v(2), mul(col, jit));
    }
    g.dispose();
  }
  build(material) {
    return this.meshes(material, (g, c) => {
      g.setAttribute('position', new THREE.Float32BufferAttribute(c.pos, 3));
      g.setAttribute('color', new THREE.Float32BufferAttribute(c.col, 3));
    });
  }
}

class Shadows extends Chunked {
  constructor() { super(['pos']); }
  poly(pts, y) {
    const k = this.c, n = k.n;
    for (const p of pts) k.pos.push(p[0], y, p[1]);
    for (let i = 1; i < pts.length - 1; i++) k.idx.push(n, n + i + 1, n + i);
    k.n += pts.length;
  }
  boxShadow(x0, z0, x1, z1, h, y = 0.03) {
    const sx = SHADOW_DX * h, sz = SHADOW_DZ * h;
    this.poly([[x0, z0], [x1, z0], [x1 + sx, z0 + sz], [x1 + sx, z1 + sz], [x0 + sx, z1 + sz], [x0, z1]], y);
  }
  circle(cx, cz, r, y = 0.03, sides = 10) {
    const pts = [];
    for (let i = 0; i < sides; i++) {
      const a = -(i / sides) * Math.PI * 2;
      pts.push([cx + Math.cos(a) * r, cz + Math.sin(a) * r]);
    }
    this.poly(pts, y);
  }
  build(material) {
    return this.meshes(material, (g, c) => {
      g.setAttribute('position', new THREE.Float32BufferAttribute(c.pos, 3));
    });
  }
}

export function makeShadowMaterial(opacity = 0.3) {
  return new THREE.MeshBasicMaterial({
    color: 0x0a0d18,
    transparent: true,
    opacity,
    depthWrite: false,
    stencilWrite: true,
    stencilRef: 0,
    stencilFunc: THREE.EqualStencilFunc,
    stencilZPass: THREE.IncrementStencilOp,
    stencilFail: THREE.KeepStencilOp,
    stencilZFail: THREE.KeepStencilOp,
  });
}

// ------------------------------------------------------------------ palettes
const GROUND = {
  [T.ROAD]: ['#46494e', 0],
  [T.BRIDGE]: ['#4b4d52', 0],
  [T.SIDEWALK]: ['#a8a397', 1],
  [T.GRASS]: ['#5b8a3a', 2],
  [T.PLAZA]: ['#b9ad98', 6],
  [T.ALLEY]: ['#74706a', 7],
  [T.PARKING]: ['#57595d', 0],
  [T.DOCK]: ['#8f6c49', 4],
  [T.SAND]: ['#dcc690', 5],
  [T.BUILDING]: ['#5e5c59', 7],
  [T.WALL]: ['#6d6a64', 7],
};
const DISTRICT_SIDEWALK = {
  [D.DOWNTOWN]: '#b3afa6',
  [D.COMMERCIAL]: '#aaa59a',
  [D.RESIDENTIAL]: '#a7a296',
  [D.INDUSTRIAL]: '#97938a',
};

const STY = {
  0: { name: 'glass', walls: ['#3d4a57', '#485864', '#33404d', '#526170', '#3f4f5f'], win: ['#7fa9c9', '#8fb8cf', '#6d98b8', '#9cc0d0', '#86a6bd'], floorH: 3.6, bayW: 2, winW: 0.9, winH: 0.8, kind: 1, roof: ['#5d6064', '#6a6c6f', '#55585c'], roofPat: 8 },
  1: { name: 'office', walls: ['#bab6ad', '#a8acae', '#c7c0b2', '#9ea5a9', '#cbc6bb'], win: ['#2c3a46', '#33414d', '#283642', '#3a4652'], floorH: 3.4, bayW: 4 / 3, winW: 0.62, winH: 0.58, kind: 0, roof: ['#8d8a84', '#7b7a77', '#9a958a'], roofPat: 8 },
  2: { name: 'brick', walls: ['#8e4b3b', '#9b5b45', '#7c4235', '#a0644c', '#74413a'], win: ['#252b31', '#2c3239'], floorH: 3.2, bayW: 2, winW: 0.44, winH: 0.52, kind: 3, roof: ['#6e6c69', '#7c7873', '#5f5e5c'], roofPat: 8 },
  3: { name: 'apartment', walls: ['#d8c2a4', '#cfa98c', '#bcc6b2', '#e0d5c0', '#c9b6a4', '#a9b9c4'], win: ['#36424c', '#2d3842'], floorH: 3.0, bayW: 2, winW: 0.5, winH: 0.5, kind: 0, roof: ['#8a8781', '#9a968e', '#77756f'], roofPat: 8 },
  4: { name: 'house', walls: ['#e7dfcd', '#c8d5dd', '#e2cd9f', '#d6b3a3', '#b7c8a7', '#ece7da'], win: ['#3a4650', '#34404a'], floorH: 2.8, bayW: 2, winW: 0.38, winH: 0.44, kind: 4, roof: ['#9d5139', '#56606a', '#6b513f', '#7a3f34', '#5b6e5e', '#8a6b4c'], roofPat: 10 },
  5: { name: 'warehouse', walls: ['#8b9095', '#6d7a85', '#9a8b6e', '#7f6a5a', '#a3a7a3'], win: ['#3a4148'], floorH: 4, bayW: 1, winW: 0, winH: 0, kind: 2, roof: ['#8e9296', '#7d8489', '#a1a49f', '#8b7f72'], roofPat: 11 },
  6: { name: 'container', walls: ['#b8432f', '#2f5f9e', '#3f7d4a', '#d08a2c', '#c9b23a', '#7d3f6e', '#4a8c96'], win: ['#222222'], floorH: 2.7, bayW: 1, winW: 0, winH: 0, kind: 2, roofPat: 11 },
  7: { name: 'shop', walls: ['#d9d3c4', '#c4b7a2', '#e3d2b0', '#b0a99b', '#d0c6b8'], win: ['#2f3a44', '#35414a'], floorH: 3.6, bayW: 2, winW: 0.55, winH: 0.5, kind: 0, roof: ['#8d8a84', '#9a958a', '#827f79'], roofPat: 8 },
};
export const BUILDING_STYLES = STY;

// ------------------------------------------------------------------ main
export function buildWorld(city) {
  const { W, H, tiles, meta } = city;
  const get = (x, z) => (x < 0 || z < 0 || x >= W || z >= H ? T.WATER : tiles[z * W + x]);
  const rng = new RNG(4242);
  const r01 = () => rng.next();

  const noise = makeNoiseTexture();
  const mats = {
    ground: makeGroundMaterial(noise),
    wall: makeWallMaterial(noise),
    water: makeWaterMaterial(noise),
    props: new THREE.MeshBasicMaterial({ vertexColors: true }),
    shadow: makeShadowMaterial(0.3),
  };
  const flat = new Flat(), walls = new Walls(), props = new Props(), shadows = new Shadows();

  // ---------------------------------------------------------- ground (greedy merged)
  const keyAt = (x, z) => {
    const t = get(x, z);
    if (t === T.WATER || t === T.BUILDING) return -1;
    let key = t * 8;
    if (t === T.SIDEWALK) key += city.district[z * W + x] < 4 ? city.district[z * W + x] : 4;
    if (t === T.GRASS && city.meta[z * W + x] & 8) key += 1;
    return key;
  };
  const used = new Uint8Array(W * H);
  for (let z = 0; z < H; z++) for (let x = 0; x < W; x++) {
    const k = z * W + x;
    if (used[k]) continue;
    const key = keyAt(x, z);
    if (key < 0) { used[k] = 1; continue; }
    const CT = CHUNK / TILE;
    const cxEnd = (Math.floor(x / CT) + 1) * CT, czEnd = (Math.floor(z / CT) + 1) * CT;
    let w = 1;
    while (x + w < W && x + w < cxEnd && !used[k + w] && keyAt(x + w, z) === key) w++;
    let h = 1;
    outer: while (z + h < H && z + h < czEnd) {
      for (let i = 0; i < w; i++) {
        const kk = (z + h) * W + x + i;
        if (used[kk] || keyAt(x + i, z + h) !== key) break outer;
      }
      h++;
    }
    for (let dz = 0; dz < h; dz++) for (let dx = 0; dx < w; dx++) used[(z + dz) * W + x + dx] = 1;
    const t = (key / 8) | 0;
    let [hex, pat] = GROUND[t];
    if (t === T.SIDEWALK) hex = DISTRICT_SIDEWALK[key % 8] || hex;
    if (t === T.GRASS && key % 8 === 1) hex = '#6a9142';
    flat.at(x * TILE + 1, z * TILE + 1);
    flat.rect(x * TILE, z * TILE, (x + w) * TILE, (z + h) * TILE, 0, C(hex), pat);
  }

  // ---------------------------------------------------------- road markings
  const YM = 0.012;
  const yellow = C('#e0b63e'), white = C('#e8e6de');
  const PAT_PAINT = 9;
  function dashedV(x, z0, z1, wdt, col, dash = 2.6, gap = 2.4) {
    for (let z = z0; z < z1; z += dash + gap) flat.at(x, z).rect(x - wdt / 2, z, x + wdt / 2, Math.min(z + dash, z1), YM, col, PAT_PAINT);
  }
  function dashedH(z, x0, x1, wdt, col, dash = 2.6, gap = 2.4) {
    for (let x = x0; x < x1; x += dash + gap) flat.at(x, z).rect(x, z - wdt / 2, Math.min(x + dash, x1), z + wdt / 2, YM, col, PAT_PAINT);
  }
  const nodeAt = (i, j) => city.nodes[j * city.nv + i];
  const { vLines, hLines, vE, hE, nv, nh } = city;
  const CW = 4.0; // crosswalk zone length
  function vMarks(i, z0, z1) {
    const v = vLines[i], nl = v.w / 2, cx = (v.p + nl) * TILE;
    if (z1 - z0 < 1) return;
    flat.at(cx, (z0 + z1) / 2);
    if (nl === 1) dashedV(cx, z0, z1, 0.18, yellow);
    else {
      flat.rect(cx - 0.32, z0, cx - 0.16, z1, YM, yellow, PAT_PAINT);
      flat.rect(cx + 0.16, z0, cx + 0.32, z1, YM, yellow, PAT_PAINT);
      dashedV((v.p + 1) * TILE, z0, z1, 0.14, white, 2.2, 3.4);
      dashedV((v.p + 3) * TILE, z0, z1, 0.14, white, 2.2, 3.4);
    }
  }
  function hMarks(j, x0, x1) {
    const h = hLines[j], nl = h.w / 2, cz = (h.p + nl) * TILE;
    if (x1 - x0 < 1) return;
    flat.at((x0 + x1) / 2, cz);
    if (nl === 1) dashedH(cz, x0, x1, 0.18, yellow);
    else {
      flat.rect(x0, cz - 0.32, x1, cz - 0.16, YM, yellow, PAT_PAINT);
      flat.rect(x0, cz + 0.16, x1, cz + 0.32, YM, yellow, PAT_PAINT);
      dashedH((h.p + 1) * TILE, x0, x1, 0.14, white, 2.2, 3.4);
      dashedH((h.p + 3) * TILE, x0, x1, 0.14, white, 2.2, 3.4);
    }
  }
  function zebraV(x0, x1, z0, z1) { flat.at(x0, z0); for (let x = x0 + 0.45; x < x1 - 0.4; x += 1.15) flat.rect(x, z0, x + 0.6, z1, YM, white, PAT_PAINT); }
  function zebraH(z0, z1, x0, x1) { flat.at(x0, z0); for (let z = z0 + 0.45; z < z1 - 0.4; z += 1.15) flat.rect(x0, z, x1, z + 0.6, YM, white, PAT_PAINT); }
  for (let i = 0; i < nv; i++) for (let j = 0; j < nh - 1; j++) {
    if (!vE[i][j]) continue;
    const v = vLines[i], nl = v.w / 2;
    const A = nodeAt(i, j), B = nodeAt(i, j + 1);
    const Zs = (hLines[j].p + hLines[j].w) * TILE, Ze = hLines[j + 1].p * TILE;
    const z0 = Zs + (A.junction ? CW + 0.8 : 0), z1 = Ze - (B.junction ? CW + 0.8 : 0);
    vMarks(i, z0, z1);
    const xL = v.p * TILE, xR = (v.p + v.w) * TILE, xm = (v.p + nl) * TILE;
    if (A.junction) { zebraV(xL, xR, Zs + 0.4, Zs + CW - 0.5); flat.rect(xm, Zs + CW - 0.2, xR - 0.2, Zs + CW + 0.25, YM, white, PAT_PAINT); }
    if (B.junction) { zebraV(xL, xR, Ze - CW + 0.5, Ze - 0.4); flat.rect(xL + 0.2, Ze - CW - 0.25, xm, Ze - CW + 0.2, YM, white, PAT_PAINT); }
  }
  for (let i = 0; i < nv - 1; i++) for (let j = 0; j < nh; j++) {
    if (!hE[i][j]) continue;
    const h = hLines[j], nl = h.w / 2;
    const A = nodeAt(i, j), B = nodeAt(i + 1, j);
    const Xs = (vLines[i].p + vLines[i].w) * TILE, Xe = vLines[i + 1].p * TILE;
    const x0 = Xs + (A.junction ? CW + 0.8 : 0), x1 = Xe - (B.junction ? CW + 0.8 : 0);
    hMarks(j, x0, x1);
    const zT = h.p * TILE, zB = (h.p + h.w) * TILE, zm = (h.p + nl) * TILE;
    // eastbound uses the south half and stops before node B; westbound the north half before A
    if (A.junction) { zebraH(zT, zB, Xs + 0.4, Xs + CW - 0.5); flat.rect(Xs + CW - 0.2, zT + 0.2, Xs + CW + 0.25, zm, YM, white, PAT_PAINT); }
    if (B.junction) { zebraH(zT, zB, Xe - CW + 0.5, Xe - 0.4); flat.rect(Xe - CW - 0.25, zm, Xe - CW + 0.2, zB - 0.2, YM, white, PAT_PAINT); }
  }
  // straight-through nodes keep their centre line
  for (const n of city.nodes) {
    if (n.deg !== 2 || n.junction) continue;
    if (n.arms.N && n.arms.S) vMarks(n.i, n.z0 * TILE, n.z1 * TILE);
    if (n.arms.E && n.arms.W) hMarks(n.j, n.x0 * TILE, n.x1 * TILE);
  }

  // ---------------------------------------------------------- curbs, gutters, manholes, pads
  const curb = C('#cfcabe'), gutter = C('#303236'), dark = C('#2c2e31');
  for (let z = 0; z < H; z++) for (let x = 0; x < W; x++) {
    const t = tiles[z * W + x];
    const X = x * TILE, Z = z * TILE;
    flat.at(X + 1, Z + 1);
    if (t === T.SIDEWALK || t === T.PLAZA || t === T.ALLEY || t === T.PARKING) {
      const isRoad = (tt) => tt === T.ROAD || tt === T.BRIDGE;
      const cw = t === T.SIDEWALK ? 0.32 : 0.18;
      if (isRoad(get(x + 1, z))) { flat.rect(X + TILE - cw, Z, X + TILE, Z + TILE, 0.008, curb, 7); flat.rect(X + TILE, Z, X + TILE + 0.24, Z + TILE, 0.006, gutter, 7); }
      if (isRoad(get(x - 1, z))) { flat.rect(X, Z, X + cw, Z + TILE, 0.008, curb, 7); flat.rect(X - 0.24, Z, X, Z + TILE, 0.006, gutter, 7); }
      if (isRoad(get(x, z + 1))) { flat.rect(X, Z + TILE - cw, X + TILE, Z + TILE, 0.008, curb, 7); flat.rect(X, Z + TILE, X + TILE, Z + TILE + 0.24, 0.006, gutter, 7); }
      if (isRoad(get(x, z - 1))) { flat.rect(X, Z, X + TILE, Z + cw, 0.008, curb, 7); flat.rect(X, Z - 0.24, X + TILE, Z, 0.006, gutter, 7); }
    }
    if (t === T.ROAD && !(meta[z * W + x] & 2) && hash2(x, z) < 0.05) {
      flat.fan(X + 1 + hash2(z, x) * 2, Z + 1 + hash2(x + 7, z) * 2, 0.01, 0.42, 8, dark, 7);
    }
    if (meta[z * W + x] & 1) {
      // respray drive-in pad: hazard stripes
      flat.rect(X + 0.15, Z + 0.15, X + TILE - 0.15, Z + TILE - 0.15, 0.013, C('#1f2022'), 3);
      for (let s = 0; s < 6; s++) {
        const a = Math.PI / 4;
        flat.rot(X + 0.55 + s * 0.6, Z + TILE / 2, 4.6, 0.28, a, 0.015, C('#f2c230'), 3);
      }
      flat.rect(X + 0.15, Z + 0.15, X + TILE - 0.15, Z + 0.4, 0.016, C('#f2c230'), 3);
      flat.rect(X + 0.15, Z + TILE - 0.4, X + TILE - 0.15, Z + TILE - 0.15, 0.016, C('#f2c230'), 3);
    }
  }
  // parking bay lines and oil stains
  for (const s of city.parkingSpots) {
    flat.at(s.x, s.z);
    const dx = Math.cos(s.h), dz = Math.sin(s.h), px = -dz, pz = dx;
    for (const side of [-1, 1]) flat.rot(s.x + px * 2 * side, s.z + pz * 2 * side, 4.8, 0.12, s.h, YM, white, PAT_PAINT);
    if (r01() < 0.3) flat.fan(s.x + dx * (r01() - 0.5) * 2, s.z + dz * (r01() - 0.5) * 2, 0.009, 0.5 + r01() * 0.5, 7, C('#3d3e40'), 3);
  }

  // ---------------------------------------------------------- quays and bridges
  const stone = C('#6e6a61'), coping = C('#bdb7a9'), concrete = C('#8e8b84');
  const WY = WATER_Y - 0.3;
  for (let z = 0; z < H; z++) for (let x = 0; x < W; x++) {
    const t = tiles[z * W + x];
    if (t === T.WATER) continue;
    const X = x * TILE, Z = z * TILE;
    flat.at(X + 1, Z + 1); props.at(X + 1, Z + 1);
    const bridge = t === T.BRIDGE;
    const y0 = bridge ? -1.0 : WY;
    const col = bridge ? concrete : stone;
    if (get(x + 1, z) === T.WATER) { flat.vquad(X + TILE, Z, X + TILE, Z + TILE, y0, 0, col, 3); if (!bridge) flat.rect(X + TILE - 0.35, Z, X + TILE, Z + TILE, 0.014, coping, 7); }
    if (get(x - 1, z) === T.WATER) { flat.vquad(X, Z + TILE, X, Z, y0, 0, col, 3); if (!bridge) flat.rect(X, Z, X + 0.35, Z + TILE, 0.014, coping, 7); }
    if (get(x, z + 1) === T.WATER) { flat.vquad(X + TILE, Z + TILE, X, Z + TILE, y0, 0, col, 3); if (!bridge) flat.rect(X, Z + TILE - 0.35, X + TILE, Z + TILE, 0.014, coping, 7); }
    if (get(x, z - 1) === T.WATER) { flat.vquad(X, Z, X + TILE, Z, y0, 0, col, 3); if (!bridge) flat.rect(X, Z, X + TILE, Z + 0.35, 0.014, coping, 7); }
    if (bridge) {
      const rail = C('#a9a69e');
      if (get(x + 1, z) === T.WATER) props.box(X + TILE - 0.3, 0, Z, X + TILE, 0.95, Z + TILE, rail);
      if (get(x - 1, z) === T.WATER) props.box(X, 0, Z, X + 0.3, 0.95, Z + TILE, rail);
      if (get(x, z + 1) === T.WATER) props.box(X, 0, Z + TILE - 0.3, X + TILE, 0.95, Z + TILE, rail);
      if (get(x, z - 1) === T.WATER) props.box(X, 0, Z, X + TILE, 0.95, Z + 0.3, rail);
    } else if ((meta[z * W + x] & 4) && tiles[z * W + x] === T.PLAZA) {
      // promenade railing along the river
      const rail = C('#4a4f55');
      if (get(x, z + 1) === T.WATER) props.box(X, 0, Z + TILE - 0.32, X + TILE, 0.9, Z + TILE - 0.18, rail);
      if (get(x, z - 1) === T.WATER) props.box(X, 0, Z + 0.18, X + TILE, 0.9, Z + 0.32, rail);
    }
  }

  // ---------------------------------------------------------- buildings
  const pickC = (arr, s) => C(arr[Math.floor(s * arr.length) % arr.length]);
  for (const b of city.buildings) {
    const st = STY[b.style];
    const wallCol = pickC(st.walls, b.colorSeed);
    const winCol = pickC(st.win, b.roofSeed);
    let roofCol = st.roof ? pickC(st.roof, (b.roofSeed * 7.31) % 1) : mul(wallCol, 1.08);
    const floorH = st.floorH;
    // snap heights to whole floors
    let h = b.h;
    if (b.style !== 6 && !b.gable) {
      const floors = Math.max(1, Math.round((h - 0.6) / floorH));
      h = floors * floorH + 0.6;
      b.h = h;
    }
    const x0 = b.x0 * TILE, z0 = b.z0 * TILE, x1 = b.x1 * TILE, z1 = b.z1 * TILE;
    const bcx = (x0 + x1) / 2, bcz = (z0 + z1) / 2;
    flat.at(bcx, bcz); walls.at(bcx, bcz); props.at(bcx, bcz); shadows.at(bcx, bcz);
    const style = { col: wallCol, win: winCol, floorH, bayW: st.bayW, winW: st.winW, winH: st.winH, kind: st.kind, seed: b.colorSeed * 10, top: h };
    if (b.special === 'police') { style.col = C('#c9cdd2'); roofCol = C('#7f858c'); }
    if (b.special === 'hospital') { style.col = C('#e9e6df'); roofCol = C('#a7a8a6'); }
    if (b.special === 'paint') { style.col = C('#d8d2c1'); style.kind = 2; roofCol = C('#7f8489'); }

    if (b.gable) {
      const w = x1 - x0, d = z1 - z0;
      const rise = Math.min(w, d) * 0.32;
      const he = Math.max(2.8, h - rise);
      style.top = he;
      let u = 0;
      u = walls.wall(x0, z0, x1, z0, 0, he, u, style);
      u = walls.wall(x1, z0, x1, z1, 0, he, u, style);
      u = walls.wall(x1, z1, x0, z1, 0, he, u, style);
      walls.wall(x0, z1, x0, z0, 0, he, u, style);
      const ov = 0.45;
      const rc = roofCol;
      if (b.ridgeX) {
        const zm = (z0 + z1) / 2;
        walls.gable(x0, z1, x0, z0, he, h, { ...style, winW: 0 });
        walls.gable(x1, z0, x1, z1, he, h, { ...style, winW: 0 });
        // north slope
        const nN = [0, d / 2, -(h - he)]; // approx normal
        const kN = shadeN(0, 0.83, -0.55), kS = shadeN(0, 0.83, 0.55);
        flat.quad([x0 - ov, he - 0.15, z0 - ov], [x0 - ov, h, zm], [x1 + ov, h, zm], [x1 + ov, he - 0.15, z0 - ov], mul(rc, kN), 10);
        flat.quad([x1 + ov, he - 0.15, z1 + ov], [x1 + ov, h, zm], [x0 - ov, h, zm], [x0 - ov, he - 0.15, z1 + ov], mul(rc, kS), 10);
        props.box(x0 - ov, h - 0.05, zm - 0.14, x1 + ov, h + 0.12, zm + 0.14, mul(rc, 0.8));
        void nN;
      } else {
        const xm = (x0 + x1) / 2;
        walls.gable(x0, z0, x1, z0, he, h, { ...style, winW: 0 });
        walls.gable(x1, z1, x0, z1, he, h, { ...style, winW: 0 });
        const kW = shadeN(-0.55, 0.83, 0), kE = shadeN(0.55, 0.83, 0);
        flat.quad([x0 - ov, he - 0.15, z1 + ov], [xm, h, z1 + ov], [xm, h, z0 - ov], [x0 - ov, he - 0.15, z0 - ov], mul(rc, kW), 10);
        flat.quad([x1 + ov, he - 0.15, z0 - ov], [xm, h, z0 - ov], [xm, h, z1 + ov], [x1 + ov, he - 0.15, z1 + ov], mul(rc, kE), 10);
        props.box(xm - 0.14, h - 0.05, z0 - ov, xm + 0.14, h + 0.12, z1 + ov, mul(rc, 0.8));
      }
      // chimney
      if (b.colorSeed > 0.4) {
        const cx = x0 + (x1 - x0) * (0.25 + b.roofSeed * 0.5), cz = z0 + (z1 - z0) * 0.3;
        props.box(cx - 0.4, he, cz - 0.4, cx + 0.4, h + 0.8, cz + 0.4, C('#7b4a3c'));
      }
      shadows.boxShadow(x0, z0, x1, z1, h * 0.85);
      continue;
    }

    // box building + optional tiers
    let u = 0;
    u = walls.wall(x0, z0, x1, z0, 0, h, u, style);
    u = walls.wall(x1, z0, x1, z1, 0, h, u, style);
    u = walls.wall(x1, z1, x0, z1, 0, h, u, style);
    walls.wall(x0, z1, x0, z0, 0, h, u, style);
    const roofPat = b.style === 6 ? 11 : st.roofPat;
    flat.rect(x0, z0, x1, z1, h, b.style === 6 ? mul(wallCol, 1.12) : roofCol, roofPat);
    let topH = h;
    for (const t of b.tiers) {
      const tx0 = t.x0 * TILE, tz0 = t.z0 * TILE, tx1 = t.x1 * TILE, tz1 = t.z1 * TILE;
      const th = Math.round((t.h - h) / floorH) * floorH + h;
      const tst = { ...style, top: th };
      let uu = 0;
      uu = walls.wall(tx0, tz0, tx1, tz0, h, th, uu, tst);
      uu = walls.wall(tx1, tz0, tx1, tz1, h, th, uu, tst);
      uu = walls.wall(tx1, tz1, tx0, tz1, h, th, uu, tst);
      walls.wall(tx0, tz1, tx0, tz0, h, th, uu, tst);
      flat.rect(tx0, tz0, tx1, tz1, th, mul(roofCol, 0.95), 8);
      roofDetails(b, tx0, tz0, tx1, tz1, th, wallCol, roofCol, true);
      topH = Math.max(topH, th);
      shadows.boxShadow(tx0, tz0, tx1, tz1, th);
    }
    if (!b.tiers.length) roofDetails(b, x0, z0, x1, z1, h, wallCol, roofCol, false);
    else parapet(x0, z0, x1, z1, h, wallCol);
    shadows.boxShadow(x0, z0, x1, z1, h);
  }

  function parapet(x0, z0, x1, z1, h, wallCol) {
    const t = 0.32, ph = 0.75;
    const top = mul(wallCol, 1.12), side = mul(wallCol, 1.0);
    props.box(x0, h, z0, x1, h + ph, z0 + t, top, side);
    props.box(x0, h, z1 - t, x1, h + ph, z1, top, side);
    props.box(x0, h, z0 + t, x0 + t, h + ph, z1 - t, top, side);
    props.box(x1 - t, h, z0 + t, x1, h + ph, z1 - t, top, side);
  }

  function roofDetails(b, x0, z0, x1, z1, h, wallCol, roofCol, isTier) {
    const w = x1 - x0, d = z1 - z0, area = w * d;
    const lr = new RNG(Math.floor(b.roofSeed * 1e6) + (isTier ? 99 : 0));
    const style = b.style;
    if (style === 6) return; // containers: plain
    if (style === 5) {
      // warehouse: skylight strips and vents
      for (let x = x0 + 2; x < x1 - 2; x += 4) flat.rect(x, z0 + 1.2, x + 1.2, z1 - 1.2, h + 0.02, C('#a7b7c0'), 3);
      for (let i = 0; i < 2; i++) props.prism(x0 + 1.5 + lr.next() * (w - 3), z0 + 1.5 + lr.next() * (d - 3), 0.35, h, h + 1.1, 6, C('#7d8287'), C('#5d6166'));
      return;
    }
    if (b.special) {
      parapet(x0, z0, x1, z1, h, wallCol);
      return;
    }
    parapet(x0, z0, x1, z1, h, wallCol);
    const m = 1.4;
    const rand = (a, b2) => a + lr.next() * (b2 - a);
    // stairwell / lift housing
    if (h > 9 && area > 70) {
      const sx = rand(x0 + m, x1 - m - 3), sz = rand(z0 + m, z1 - m - 3);
      props.box(sx, h, sz, sx + 3, h + 2.6, sz + 2.6, mul(roofCol, 1.1), mul(wallCol, 0.95));
      props.box(sx + 0.8, h + 2.6, sz + 0.8, sx + 2.2, h + 3.0, sz + 1.8, C('#6d7075'));
    }
    // helipad on large towers
    if (style === 0 && area >= 140 && lr.chance(0.5)) {
      const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
      flat.rect(cx - 3.6, cz - 3.6, cx + 3.6, cz + 3.6, h + 0.03, C('#3b3e42'), 3);
      flat.fan(cx, cz, h + 0.05, 3.0, 24, C('#e1bf3a'), 3, 2.7);
      flat.rect(cx - 1.1, cz - 1.4, cx - 0.65, cz + 1.4, h + 0.06, C('#ece9e2'), 3);
      flat.rect(cx + 0.65, cz - 1.4, cx + 1.1, cz + 1.4, h + 0.06, C('#ece9e2'), 3);
      flat.rect(cx - 0.65, cz - 0.22, cx + 0.65, cz + 0.22, h + 0.06, C('#ece9e2'), 3);
      return;
    }
    // AC units
    const n = Math.min(4, Math.floor(area / 45));
    for (let i = 0; i < n; i++) {
      const ax = rand(x0 + m, x1 - m - 1.6), az = rand(z0 + m, z1 - m - 1.2);
      props.box(ax, h, az, ax + 1.6, h + 1.0, az + 1.2, C('#c3c6c8'), C('#a9adb0'));
      props.prism(ax + 0.8, az + 0.6, 0.38, h + 1.0, h + 1.06, 8, C('#4a4d51'), C('#3f4246'));
    }
    // water tank
    if ((style === 2 || style === 3) && area > 50 && lr.chance(0.45)) {
      const tx = rand(x0 + 2.2, x1 - 2.2), tz = rand(z0 + 2.2, z1 - 2.2);
      for (const [ox, oz] of [[-0.8, -0.8], [0.8, -0.8], [-0.8, 0.8], [0.8, 0.8]]) props.box(tx + ox - 0.08, h, tz + oz - 0.08, tx + ox + 0.08, h + 1.1, tz + oz + 0.08, C('#4a4643'));
      props.prism(tx, tz, 1.25, h + 1.1, h + 3.2, 10, C('#7a5a3c'), null);
      props.cone(tx, tz, 1.35, h + 3.2, h + 4.1, 10, C('#5b4330'));
    }
    // skylights
    if ((style === 1 || style === 7) && lr.chance(0.4)) {
      const sx = rand(x0 + m, x1 - m - 2.6), sz = rand(z0 + m, z1 - m - 1.4);
      props.box(sx, h, sz, sx + 2.6, h + 0.3, sz + 1.4, C('#7f9db3'), C('#9aa3aa'));
    }
    // small vents
    for (let i = 0; i < 2; i++) {
      const vx = rand(x0 + m, x1 - m), vz = rand(z0 + m, z1 - m);
      props.box(vx - 0.22, h, vz - 0.22, vx + 0.22, h + 0.7, vz + 0.22, C('#7c7f83'));
    }
  }

  // ---------------------------------------------------------- trees
  const greens = ['#3f7a35', '#4d8a3c', '#2f6b33', '#5b8f3a', '#46803f'].map(C);
  for (const t of city.trees) {
    props.at(t.x, t.z); shadows.at(t.x, t.z);
    const tr = new RNG(Math.floor(t.seed * 1e6));
    const rf = () => tr.next();
    if (t.kind === 'palm') {
      const lean = rf() * Math.PI * 2, lx = Math.cos(lean) * 0.6, lz = Math.sin(lean) * 0.6;
      const topX = t.x + lx, topZ = t.z + lz, topY = t.h;
      props.box(t.x - 0.18, 0, t.z - 0.18, t.x + 0.18, topY * 0.5, t.z + 0.18, C('#8a7353'));
      props.box((t.x + topX) / 2 - 0.16, topY * 0.5, (t.z + topZ) / 2 - 0.16, (t.x + topX) / 2 + 0.16, topY, (t.z + topZ) / 2 + 0.16, C('#8a7353'));
      const fronds = 7;
      for (let i = 0; i < fronds; i++) {
        const a = (i / fronds) * Math.PI * 2 + rf() * 0.4;
        const ca = Math.cos(a), sa = Math.sin(a), px = -sa, pz = ca;
        const L = t.r * (0.9 + rf() * 0.3);
        const p0 = [topX, topY, topZ];
        const pm = [topX + ca * L * 0.55, topY + 0.25, topZ + sa * L * 0.55];
        const p1 = [topX + ca * L, topY - 0.9, topZ + sa * L];
        const wdt = 0.55;
        const col = mul(C('#4f8f3a'), 0.85 + rf() * 0.3);
        props.quad(p0, [pm[0] - px * wdt, pm[1], pm[2] - pz * wdt], pm, [pm[0] + px * wdt, pm[1], pm[2] + pz * wdt], col);
        props.tri([pm[0] - px * wdt, pm[1], pm[2] - pz * wdt], p1, [pm[0] + px * wdt, pm[1], pm[2] + pz * wdt], mul(col, 0.92));
      }
      shadows.circle(topX + SHADOW_DX * topY, topZ + SHADOW_DZ * topY, t.r * 0.7, 0.03, 7);
      continue;
    }
    const g = greens[Math.floor(rf() * greens.length)];
    props.box(t.x - 0.2, 0, t.z - 0.2, t.x + 0.2, t.h * 0.6, t.z + 0.2, C('#5d4632'));
    props.blob(t.x, t.h, t.z, t.r, 0.72, g, rf, t.r > 2.1 ? 1 : 0);
    props.blob(t.x + t.r * 0.45, t.h + 0.3, t.z - t.r * 0.35, t.r * 0.62, 0.8, mul(g, 1.1), rf, 0);
    shadows.circle(t.x + SHADOW_DX * t.h, t.z + SHADOW_DZ * t.h, t.r * 0.95, 0.03, 9);
  }

  // ---------------------------------------------------------- street furniture
  for (const l of city.lamps) {
    props.at(l.x, l.z);
    const pole = C('#3e4147');
    props.box(l.x - 0.09, 0, l.z - 0.09, l.x + 0.09, 5.0, l.z + 0.09, pole);
    const ex = l.x + l.dx * 1.4, ez = l.z + l.dz * 1.4;
    props.box(Math.min(l.x, ex) - 0.06, 4.85, Math.min(l.z, ez) - 0.06, Math.max(l.x, ex) + 0.06, 5.0, Math.max(l.z, ez) + 0.06, pole);
    props.box(ex - 0.3, 4.7, ez - 0.3, ex + 0.3, 4.95, ez + 0.3, C('#d9d5c6'), C('#9a978e'));
  }
  for (const p of city.phones) {
    props.at(p.x, p.z); shadows.at(p.x, p.z);
    const fx = Math.cos(p.face), fz = Math.sin(p.face);
    props.box(p.x - 0.5, 0, p.z - 0.5, p.x + 0.5, 2.25, p.z + 0.5, C('#2c66c4'), C('#24539f'));
    props.box(p.x - 0.58, 2.25, p.z - 0.58, p.x + 0.58, 2.4, p.z + 0.58, C('#e8eef5'));
    props.box(p.x + fx * 0.5 - 0.3 - Math.abs(fz) * 0.0, 0.9, p.z + fz * 0.5 - 0.3, p.x + fx * 0.5 + 0.3, 1.8, p.z + fz * 0.5 + 0.3, C('#9fc3e6'));
    shadows.circle(p.x + SHADOW_DX * 2.3, p.z + SHADOW_DZ * 2.3, 0.55, 0.03, 6);
  }
  for (const p of city.props) {
    props.at(p.x, p.z); shadows.at(p.x, p.z);
    if (p.kind === 'fountain') {
      props.prism(p.x, p.z, 1.75, 0, 0.55, 12, C('#a9a291'), C('#c2bba9'));
      props.prism(p.x, p.z, 1.45, 0.4, 0.5, 12, C('#4f97b8'), C('#62a9c7'));
      props.prism(p.x, p.z, 0.3, 0.5, 1.6, 8, C('#b4ad9c'), C('#c7c0ae'));
      props.prism(p.x, p.z, 0.75, 1.6, 1.75, 10, C('#b4ad9c'), C('#5fa5c4'));
    } else if (p.kind === 'statue') {
      props.box(p.x - 0.9, 0, p.z - 0.9, p.x + 0.9, 1.4, p.z + 0.9, C('#a8a296'));
      props.box(p.x - 0.32, 1.4, p.z - 0.22, p.x + 0.32, 3.2, p.z + 0.22, C('#56645a'));
      props.prism(p.x, p.z, 0.22, 3.2, 3.6, 8, C('#56645a'), C('#607066'));
      shadows.circle(p.x + SHADOW_DX * 2, p.z + SHADOW_DZ * 2, 1.0, 0.03, 8);
    } else if (p.kind === 'bollard') {
      props.prism(p.x, p.z, 0.28, 0, 0.8, 8, C('#2f3236'), C('#d3b23a'));
    }
  }

  // ---------------------------------------------------------- water
  const VW = W + 1;
  const isWet = (x, z) => { const t = get(x, z); return t === T.WATER || t === T.BRIDGE; };
  const shore = new Float32Array(VW * (H + 1)).fill(99);
  const q = [];
  for (let z = 0; z <= H; z++) for (let x = 0; x <= W; x++) {
    let land = false;
    for (const [dx, dz] of [[-1, -1], [0, -1], [-1, 0], [0, 0]]) {
      const tx = x + dx, tz = z + dz;
      if (tx < 0 || tz < 0 || tx >= W || tz >= H) continue;
      if (!isWet(tx, tz)) land = true;
    }
    if (land) { shore[z * VW + x] = 0; q.push(z * VW + x); }
  }
  for (let qi = 0; qi < q.length; qi++) {
    const k = q[qi], x = k % VW, z = (k / VW) | 0, d = shore[k];
    if (d >= 6) continue;
    for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nx = x + dx, nz = z + dz;
      if (nx < 0 || nz < 0 || nx > W || nz > H) continue;
      const nk = nz * VW + nx;
      if (shore[nk] > d + 1) { shore[nk] = d + 1; q.push(nk); }
    }
  }
  const wpos = [], wsh = [], widx = [];
  for (let z = 0; z <= H; z++) for (let x = 0; x <= W; x++) {
    wpos.push(x * TILE, WATER_Y, z * TILE);
    wsh.push(Math.min(shore[z * VW + x], 8));
  }
  for (let z = 0; z < H; z++) for (let x = 0; x < W; x++) {
    if (!isWet(x, z)) continue;
    const a = z * VW + x, b = a + 1, c = a + VW, d = c + 1;
    widx.push(a, c, d, a, d, b);
  }
  const wg = new THREE.BufferGeometry();
  wg.setAttribute('position', new THREE.Float32BufferAttribute(wpos, 3));
  wg.setAttribute('shore', new THREE.Float32BufferAttribute(wsh, 1));
  wg.setIndex(widx);
  wg.computeBoundingSphere();
  const waterMesh = new THREE.Mesh(wg, mats.water);
  waterMesh.frustumCulled = false;
  // open sea beyond the map
  const sea = new THREE.PlaneGeometry(4000, 4000).rotateX(-Math.PI / 2);
  sea.translate(W * TILE / 2, WATER_Y - 0.05, H * TILE / 2);
  sea.setAttribute('shore', new THREE.Float32BufferAttribute(new Float32Array(sea.attributes.position.count).fill(8), 1));
  const seaMesh = new THREE.Mesh(sea, mats.water);
  seaMesh.frustumCulled = false;
  seaMesh.renderOrder = -2;

  // ---------------------------------------------------------- assemble
  const group = new THREE.Group();
  const add = (list, order = 0) => { for (const m of list) { m.renderOrder = order; group.add(m); } return list; };
  const groundMeshes = add(flat.build(mats.ground));
  add(walls.build(mats.wall));
  add(props.build(mats.props));
  add(shadows.build(mats.shadow), 1);
  waterMesh.renderOrder = -1;
  group.add(waterMesh, seaMesh);
  void groundMeshes;

  // roof signs for special buildings
  for (const sp of Object.values(city.specials)) {
    const b = sp.building;
    const tex = makeSignTexture(b.special);
    const w = (b.x1 - b.x0) * TILE - 1.4, d = (b.z1 - b.z0) * TILE - 1.4;
    const along = w >= d;
    const pw = along ? w : d, pd = Math.min(along ? d : w, pw * 0.5);
    const geo = new THREE.PlaneGeometry(pw, pd).rotateX(-Math.PI / 2);
    if (!along) geo.rotateY(Math.PI / 2);
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tex, transparent: true }));
    m.position.set((b.x0 + b.x1) / 2 * TILE, b.h + 0.06, (b.z0 + b.z1) / 2 * TILE);
    group.add(m);
  }

  const stats = { flat: flat.n, walls: walls.n, props: props.n, shadows: shadows.n };
  return {
    group, mats, noise, stats,
    setTime(t) { mats.water.uniforms.uTime.value = t; },
    setNight(n, tint) {
      for (const k of ['ground', 'wall', 'water']) {
        mats[k].uniforms.uNight.value = n;
        mats[k].uniforms.uTint.value.copy(tint);
      }
      mats.props.color.copy(tint);
    },
  };
}

function makeSignTexture(kind) {
  const cv = document.createElement('canvas');
  cv.width = 512; cv.height = 256;
  const g = cv.getContext('2d');
  g.clearRect(0, 0, 512, 256);
  const round = (x, y, w, h, r) => { g.beginPath(); g.roundRect ? g.roundRect(x, y, w, h, r) : g.rect(x, y, w, h); };
  if (kind === 'police') {
    g.fillStyle = '#1d3f8f'; round(8, 8, 496, 240, 26); g.fill();
    g.strokeStyle = '#f5f5f0'; g.lineWidth = 10; round(22, 22, 468, 212, 18); g.stroke();
    g.fillStyle = '#f5f5f0'; g.font = 'bold 112px Impact, "Arial Black", sans-serif';
    g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('POLICE', 256, 134);
  } else if (kind === 'hospital') {
    g.fillStyle = '#f2f2ee'; round(8, 8, 496, 240, 26); g.fill();
    g.fillStyle = '#d1312b';
    g.fillRect(56, 98, 120, 60); g.fillRect(86, 68, 60, 120);
    g.font = 'bold 74px Impact, "Arial Black", sans-serif'; g.textAlign = 'left'; g.textBaseline = 'middle';
    g.fillText('HOSPITAL', 196, 132);
  } else {
    const grd = g.createLinearGradient(0, 0, 512, 0);
    grd.addColorStop(0, '#ff3d7f'); grd.addColorStop(0.5, '#ffc93c'); grd.addColorStop(1, '#2fd0c4');
    g.fillStyle = '#1b1c20'; round(8, 8, 496, 240, 26); g.fill();
    g.fillStyle = grd; g.font = 'bold 104px Impact, "Arial Black", sans-serif';
    g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('PAINT & GO', 256, 120);
    g.fillStyle = '#f1efe8'; g.font = 'bold 36px sans-serif'; g.fillText('RESPRAY  •  $500', 256, 205);
  }
  const tex = new THREE.CanvasTexture(cv);
  tex.anisotropy = 4;
  return tex;
}
