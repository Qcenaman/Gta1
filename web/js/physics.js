// Collision and ray queries against the tile map, static round props and dynamic entities.
import { TILE, T, SOLID } from './consts.js';
import { G } from './game.js';

let staticGrid = null; // per tile: array of {x,z,r}

export function initPhysics(city) {
  const { W, H } = city;
  staticGrid = new Array(W * H);
  const add = (x, z, r) => {
    const tx0 = Math.floor((x - r) / TILE), tx1 = Math.floor((x + r) / TILE);
    const tz0 = Math.floor((z - r) / TILE), tz1 = Math.floor((z + r) / TILE);
    for (let tz = tz0; tz <= tz1; tz++) for (let tx = tx0; tx <= tx1; tx++) {
      if (tx < 0 || tz < 0 || tx >= W || tz >= H) continue;
      const k = tz * W + tx;
      (staticGrid[k] || (staticGrid[k] = [])).push({ x, z, r });
    }
  };
  for (const t of city.trees) add(t.x, t.z, t.kind === 'palm' ? 0.35 : 0.42);
  for (const p of city.props) add(p.x, p.z, p.r);
}

export function solidTile(tx, tz) {
  const c = G.city;
  if (tx < 0 || tz < 0 || tx >= c.W || tz >= c.H) return true;
  return SOLID[c.tiles[tz * c.W + tx]] === 1;
}

/**
 * Resolve a circle against solid tiles and static props.
 * Returns the deepest contact {nx, nz, depth, px, pz} or null. Does not move anything.
 */
export function circleContact(x, z, r) {
  const c = G.city;
  let best = null;
  const tx0 = Math.floor((x - r) / TILE), tx1 = Math.floor((x + r) / TILE);
  const tz0 = Math.floor((z - r) / TILE), tz1 = Math.floor((z + r) / TILE);
  for (let tz = tz0; tz <= tz1; tz++) for (let tx = tx0; tx <= tx1; tx++) {
    if (solidTile(tx, tz)) {
      const bx0 = tx * TILE, bz0 = tz * TILE, bx1 = bx0 + TILE, bz1 = bz0 + TILE;
      const cx = x < bx0 ? bx0 : x > bx1 ? bx1 : x;
      const cz = z < bz0 ? bz0 : z > bz1 ? bz1 : z;
      let dx = x - cx, dz = z - cz;
      let d2 = dx * dx + dz * dz;
      let nx, nz, depth;
      if (d2 > 1e-9) {
        if (d2 >= r * r) continue;
        const d = Math.sqrt(d2);
        nx = dx / d; nz = dz / d; depth = r - d;
      } else {
        // centre inside the tile: push out along the shallowest axis
        const l = x - bx0, rr = bx1 - x, t = z - bz0, b = bz1 - z;
        const m = Math.min(l, rr, t, b);
        if (m === l) { nx = -1; nz = 0; } else if (m === rr) { nx = 1; nz = 0; } else if (m === t) { nx = 0; nz = -1; } else { nx = 0; nz = 1; }
        depth = m + r;
      }
      if (!best || depth > best.depth) best = { nx, nz, depth, px: cx, pz: cz, kind: 'wall' };
    }
    if (tx >= 0 && tz >= 0 && tx < c.W && tz < c.H) {
      const list = staticGrid[tz * c.W + tx];
      if (list) for (const s of list) {
        const dx = x - s.x, dz = z - s.z;
        const rr = r + s.r;
        const d2 = dx * dx + dz * dz;
        if (d2 >= rr * rr || d2 < 1e-9) continue;
        const d = Math.sqrt(d2);
        const depth = rr - d;
        if (!best || depth > best.depth) best = { nx: dx / d, nz: dz / d, depth, px: s.x + (dx / d) * s.r, pz: s.z + (dz / d) * s.r, kind: 'prop' };
      }
    }
  }
  return best;
}

/** Push a circle out of the world; returns true if it collided. Mutates obj.x/obj.z */
export function pushOut(obj, r, iterations = 2) {
  let hit = false;
  for (let i = 0; i < iterations; i++) {
    const c = circleContact(obj.x, obj.z, r);
    if (!c) break;
    obj.x += c.nx * c.depth;
    obj.z += c.nz * c.depth;
    hit = c;
  }
  return hit;
}

/** Distance along a ray until it enters a solid tile (DDA). */
export function rayTiles(x, z, dx, dz, maxDist, opaqueOnly = false) {
  const c = G.city;
  let tx = Math.floor(x / TILE), tz = Math.floor(z / TILE);
  const stepX = dx > 0 ? 1 : -1, stepZ = dz > 0 ? 1 : -1;
  const tDeltaX = dx !== 0 ? Math.abs(TILE / dx) : Infinity;
  const tDeltaZ = dz !== 0 ? Math.abs(TILE / dz) : Infinity;
  let tMaxX = dx !== 0 ? ((dx > 0 ? (tx + 1) * TILE - x : x - tx * TILE) / Math.abs(dx)) : Infinity;
  let tMaxZ = dz !== 0 ? ((dz > 0 ? (tz + 1) * TILE - z : z - tz * TILE) / Math.abs(dz)) : Infinity;
  let t = 0;
  for (let i = 0; i < 200; i++) {
    const solid = tx < 0 || tz < 0 || tx >= c.W || tz >= c.H ? true : (opaqueOnly ? c.tiles[tz * c.W + tx] === T.BUILDING : SOLID[c.tiles[tz * c.W + tx]] === 1);
    if (solid && i > 0) return t;
    if (tMaxX < tMaxZ) { t = tMaxX; tMaxX += tDeltaX; tx += stepX; }
    else { t = tMaxZ; tMaxZ += tDeltaZ; tz += stepZ; }
    if (t > maxDist) return maxDist;
  }
  return maxDist;
}

export function hasLOS(ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az;
  const d = Math.hypot(dx, dz);
  if (d < 0.01) return true;
  return rayTiles(ax, az, dx / d, dz / d, d, true) >= d - 0.01;
}

/** ray vs circle; returns t or -1 */
export function rayCircle(ox, oz, dx, dz, cx, cz, r) {
  const fx = ox - cx, fz = oz - cz;
  const b = fx * dx + fz * dz;
  const cc = fx * fx + fz * fz - r * r;
  const disc = b * b - cc;
  if (disc < 0) return -1;
  const s = Math.sqrt(disc);
  let t = -b - s;
  if (t < 0) t = -b + s;
  return t >= 0 ? t : -1;
}

// ------------------------------------------------------------------ spatial hash for dynamic entities
const CELL = 8;
export class SpatialHash {
  constructor() { this.map = new Map(); }
  clear() { this.map.clear(); }
  key(cx, cz) { return cx * 73856093 ^ cz * 19349663; }
  insert(obj, x, z, r) {
    const cx0 = Math.floor((x - r) / CELL), cx1 = Math.floor((x + r) / CELL);
    const cz0 = Math.floor((z - r) / CELL), cz1 = Math.floor((z + r) / CELL);
    for (let cz = cz0; cz <= cz1; cz++) for (let cx = cx0; cx <= cx1; cx++) {
      const k = this.key(cx, cz);
      let a = this.map.get(k);
      if (!a) { a = []; this.map.set(k, a); }
      a.push(obj);
    }
  }
  query(x, z, r, out = []) {
    out.length = 0;
    const cx0 = Math.floor((x - r) / CELL), cx1 = Math.floor((x + r) / CELL);
    const cz0 = Math.floor((z - r) / CELL), cz1 = Math.floor((z + r) / CELL);
    for (let cz = cz0; cz <= cz1; cz++) for (let cx = cx0; cx <= cx1; cx++) {
      const a = this.map.get(this.key(cx, cz));
      if (!a) continue;
      for (const o of a) if (!out.includes(o)) out.push(o);
    }
    return out;
  }
}
