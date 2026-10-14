// Procedural city: island + river, road grid with avenues and bridges,
// sidewalks, districts, building lots, parks, docks, props and a lane graph.
import { RNG, clamp } from './util.js';
import { TILE, MAP_W, MAP_H, T, D, SOLID, WALKABLE } from './consts.js';

const LAND = 255;
const DIRS = { N: [0, -1], S: [0, 1], E: [1, 0], W: [-1, 0] };
const RIGHT = { S: 'W', W: 'N', N: 'E', E: 'S' };
const LEFT = { S: 'E', E: 'N', N: 'W', W: 'S' };
const OPP = { S: 'N', N: 'S', E: 'W', W: 'E' };

export function generateCity(seed = 1015) {
  const rng = new RNG(seed);
  const W = MAP_W, H = MAP_H, N = W * H;
  const tiles = new Uint8Array(N).fill(LAND);
  const district = new Uint8Array(N).fill(255);
  const buildingId = new Int16Array(N).fill(-1);
  const meta = new Uint8Array(N); // bit flags: 1 = paint pad, 2 = crosswalk, 4 = river bank, 8 = coast strip
  const id = (x, z) => z * W + x;
  const inb = (x, z) => x >= 0 && z >= 0 && x < W && z < H;
  const get = (x, z) => (inb(x, z) ? tiles[id(x, z)] : T.WATER);

  // ---------------------------------------------------------------- coastline
  const ph = [rng.range(0, 9), rng.range(0, 9), rng.range(0, 9), rng.range(0, 9)];
  const coast = (t, p) => 5 + Math.round(2.0 * Math.sin(t * 0.11 + p) + 1.4 * Math.sin(t * 0.23 + p * 2.3) + 1.0 * Math.sin(t * 0.047 + p * 0.7));
  for (let z = 0; z < H; z++) for (let x = 0; x < W; x++) {
    if (x < coast(z, ph[0]) || x >= W - coast(z, ph[1]) || z < coast(x, ph[2]) || z >= H - coast(x, ph[3])) tiles[id(x, z)] = T.WATER;
  }

  // ---------------------------------------------------------------- road lines
  const RING0 = 12, RING1 = W - 14;
  function genLines(nb, avenueIdx, fixed) {
    const widths = [2];
    for (let i = 1; i < nb; i++) widths.push(i === avenueIdx ? 4 : 2);
    widths.push(2);
    const span = RING1 - (RING0 + 2);
    let interiorW = 0;
    for (let i = 1; i < nb; i++) interiorW += widths[i];
    const total = span - interiorW;
    const gaps = [];
    for (let i = 0; i < nb; i++) gaps.push(fixed[i] != null ? fixed[i] : rng.int(10, 14));
    let sum = gaps.reduce((a, b) => a + b, 0);
    let guard = 0;
    while (sum !== total && guard++ < 20000) {
      const i = rng.int(0, nb - 1);
      if (fixed[i] != null) continue;
      if (sum < total && gaps[i] < 17) { gaps[i]++; sum++; }
      else if (sum > total && gaps[i] > 9) { gaps[i]--; sum--; }
    }
    const lines = [];
    let p = RING0;
    for (let i = 0; i <= nb; i++) {
      lines.push({ p, w: widths[i] });
      if (i < nb) p += widths[i] + gaps[i];
    }
    return lines;
  }
  const NB = 10;
  const vAve = 5, hAve = 3, rIdx = 6;
  const vLines = genLines(NB, vAve, {});
  const hLines = genLines(NB, hAve, { [rIdx]: 14 });
  const nv = vLines.length, nh = hLines.length;

  // river between hLines[rIdx] and hLines[rIdx+1]
  const riverZ0 = hLines[rIdx].p + hLines[rIdx].w + 4;
  const riverZ1 = riverZ0 + 6; // exclusive
  for (let z = riverZ0; z < riverZ1; z++) for (let x = 0; x < W; x++) tiles[id(x, z)] = T.WATER;

  // ---------------------------------------------------------------- road graph
  const vE = Array.from({ length: nv }, () => new Array(nh - 1).fill(true));
  const hE = Array.from({ length: nv - 1 }, () => new Array(nh).fill(true));
  const bridges = new Set([0, vAve, nv - 1, rng.pick([2, 3, 7, 8])]);
  for (let i = 0; i < nv; i++) if (!bridges.has(i)) vE[i][rIdx] = false;

  const deg = (i, j) =>
    (j > 0 && vE[i][j - 1] ? 1 : 0) + (j < nh - 1 && vE[i][j] ? 1 : 0) +
    (i > 0 && hE[i - 1][j] ? 1 : 0) + (i < nv - 1 && hE[i][j] ? 1 : 0);

  function connected() {
    const seen = new Uint8Array(nv * nh);
    const q = [0];
    seen[0] = 1;
    let count = 1;
    while (q.length) {
      const k = q.pop();
      const i = k % nv, j = (k / nv) | 0;
      const nb = [];
      if (j > 0 && vE[i][j - 1]) nb.push(k - nv);
      if (j < nh - 1 && vE[i][j]) nb.push(k + nv);
      if (i > 0 && hE[i - 1][j]) nb.push(k - 1);
      if (i < nv - 1 && hE[i][j]) nb.push(k + 1);
      for (const n of nb) if (!seen[n]) { seen[n] = 1; count++; q.push(n); }
    }
    let total = 0;
    for (let j = 0; j < nh; j++) for (let i = 0; i < nv; i++) if (deg(i, j) > 0) total++;
    return count === total;
  }

  const elig = [];
  for (let i = 1; i < nv - 1; i++) {
    if (i === vAve) continue;
    for (let j = 0; j < nh - 1; j++) if (j !== rIdx && vE[i][j]) elig.push(['v', i, j]);
  }
  for (let i = 0; i < nv - 1; i++) for (let j = 1; j < nh - 1; j++) {
    if (j === hAve || j === rIdx || j === rIdx + 1) continue;
    elig.push(['h', i, j]);
  }
  rng.shuffle(elig);
  let toRemove = Math.round(elig.length * 0.2);
  for (const [t, i, j] of elig) {
    if (toRemove <= 0) break;
    const a = [i, j], b = t === 'v' ? [i, j + 1] : [i + 1, j];
    if (deg(a[0], a[1]) <= 2 || deg(b[0], b[1]) <= 2) continue;
    if (t === 'v') vE[i][j] = false; else hE[i][j] = false;
    if (!connected()) {
      if (t === 'v') vE[i][j] = true; else hE[i][j] = true;
      continue;
    }
    toRemove--;
  }

  // ---------------------------------------------------------------- rasterize roads
  function markRoad(x0, z0, x1, z1) {
    for (let z = z0; z < z1; z++) for (let x = x0; x < x1; x++) {
      if (!inb(x, z)) continue;
      const k = id(x, z);
      tiles[k] = tiles[k] === T.WATER || tiles[k] === T.BRIDGE ? T.BRIDGE : T.ROAD;
    }
  }
  const nodes = [];
  for (let j = 0; j < nh; j++) for (let i = 0; i < nv; i++) {
    const v = vLines[i], h = hLines[j];
    const arms = {
      N: j > 0 && vE[i][j - 1],
      S: j < nh - 1 && vE[i][j],
      W: i > 0 && hE[i - 1][j],
      E: i < nv - 1 && hE[i][j],
    };
    const d = (arms.N ? 1 : 0) + (arms.S ? 1 : 0) + (arms.W ? 1 : 0) + (arms.E ? 1 : 0);
    const node = { i, j, x0: v.p, z0: h.p, x1: v.p + v.w, z1: h.p + h.w, arms, deg: d };
    node.junction = (arms.N || arms.S) && (arms.E || arms.W);
    nodes.push(node);
    if (d > 0) markRoad(node.x0, node.z0, node.x1, node.z1);
  }
  const nodeAt = (i, j) => nodes[j * nv + i];
  for (let i = 0; i < nv; i++) for (let j = 0; j < nh - 1; j++) if (vE[i][j]) {
    markRoad(vLines[i].p, hLines[j].p + hLines[j].w, vLines[i].p + vLines[i].w, hLines[j + 1].p);
  }
  for (let i = 0; i < nv - 1; i++) for (let j = 0; j < nh; j++) if (hE[i][j]) {
    markRoad(vLines[i].p + vLines[i].w, hLines[j].p, vLines[i + 1].p, hLines[j].p + hLines[j].w);
  }

  // ---------------------------------------------------------------- sidewalks
  const isRoadish = (t) => t === T.ROAD || t === T.BRIDGE;
  for (let z = 0; z < H; z++) for (let x = 0; x < W; x++) {
    const k = id(x, z);
    if (tiles[k] !== LAND) continue;
    let near = false;
    for (let dz = -1; dz <= 1 && !near; dz++) for (let dx = -1; dx <= 1; dx++) {
      if (isRoadish(get(x + dx, z + dz))) { near = true; break; }
    }
    if (near) tiles[k] = T.SIDEWALK;
  }
  // crosswalk flags: the first road row/col outside each junction on each arm
  for (const n of nodes) {
    if (!n.junction) continue;
    if (n.arms.N) for (let x = n.x0; x < n.x1; x++) meta[id(x, n.z0 - 1)] |= 2;
    if (n.arms.S) for (let x = n.x0; x < n.x1; x++) meta[id(x, n.z1)] |= 2;
    if (n.arms.W) for (let z = n.z0; z < n.z1; z++) meta[id(n.x0 - 1, z)] |= 2;
    if (n.arms.E) for (let z = n.z0; z < n.z1; z++) meta[id(n.x1, z)] |= 2;
  }

  // ---------------------------------------------------------------- blocks
  const inCity = (x, z) => x >= RING0 && x < RING1 + 2 && z >= RING0 && z < RING1 + 2;
  const blockOf = new Int32Array(N).fill(-1);
  const blocks = [];
  for (let z = 0; z < H; z++) for (let x = 0; x < W; x++) {
    const k0 = id(x, z);
    if (tiles[k0] !== LAND || blockOf[k0] >= 0) continue;
    const b = { id: blocks.length, cells: [], x0: x, z0: z, x1: x, z1: z, water: false, inCity: inCity(x, z) };
    const stack = [k0];
    blockOf[k0] = b.id;
    while (stack.length) {
      const k = stack.pop();
      const cx = k % W, cz = (k / W) | 0;
      b.cells.push(k);
      if (cx < b.x0) b.x0 = cx; if (cx > b.x1) b.x1 = cx;
      if (cz < b.z0) b.z0 = cz; if (cz > b.z1) b.z1 = cz;
      for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = cx + dx, nz = cz + dz;
        if (!inb(nx, nz)) continue;
        const nk = id(nx, nz);
        const t = tiles[nk];
        if (t === T.WATER) b.water = true;
        if (t === LAND && blockOf[nk] < 0) { blockOf[nk] = b.id; stack.push(nk); }
      }
    }
    b.x1++; b.z1++;
    blocks.push(b);
  }

  // waterfront & coastal strips
  const cx0 = W * 0.5, cz0 = (RING0 + riverZ0) * 0.5;
  for (const b of blocks) {
    const bcx = (b.x0 + b.x1) / 2, bcz = (b.z0 + b.z1) / 2;
    if (!b.inCity || b.water) {
      const coastal = !b.inCity;
      const industrial = !coastal && bcx > W * 0.6;
      b.district = coastal ? D.COAST : D.WATERFRONT;
      for (const k of b.cells) {
        const x = k % W, z = (k / W) | 0;
        let nearWater = false;
        for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) if (get(x + dx, z + dz) === T.WATER) nearWater = true;
        if (coastal) tiles[k] = nearWater ? T.SAND : (rng.chance(0.85) ? T.GRASS : T.SAND);
        else tiles[k] = industrial ? T.DOCK : T.PLAZA;
        district[k] = b.district;
        if (coastal) meta[k] |= 8; else meta[k] |= 4;
      }
      b.kind = coastal ? 'coast' : industrial ? 'dock' : 'promenade';
      continue;
    }
    const south = bcz > riverZ1;
    const d = Math.hypot((bcx - cx0) / W, (bcz - cz0) / H);
    let dist;
    if (south) dist = bcx > W * 0.6 && bcz < riverZ1 + 30 ? D.INDUSTRIAL : D.RESIDENTIAL;
    else if (d < 0.15) dist = D.DOWNTOWN;
    else if (d < 0.29) dist = D.COMMERCIAL;
    else dist = bcx > W * 0.68 && bcz < H * 0.3 ? D.INDUSTRIAL : D.RESIDENTIAL;
    b.district = dist;
  }
  // parks: one big central park + a few pockets
  const regular = blocks.filter((b) => b.inCity && !b.water);
  let central = null, bestScore = -1e9;
  for (const b of regular) {
    if (b.district === D.DOWNTOWN) continue;
    const area = b.cells.length;
    const bcx = (b.x0 + b.x1) / 2, bcz = (b.z0 + b.z1) / 2;
    const dd = Math.hypot(bcx - W * 0.3, bcz - riverZ0 * 0.62);
    const s = area * 1.0 - dd * 6;
    if (bcz < riverZ0 && s > bestScore) { bestScore = s; central = b; }
  }
  if (central) { central.district = D.PARK; central.central = true; }
  const resi = rng.shuffle(regular.filter((b) => b.district === D.RESIDENTIAL && b.cells.length < 140));
  for (let i = 0; i < Math.min(3, resi.length); i++) resi[i].district = D.PARK;

  // ---------------------------------------------------------------- lots & buildings
  const buildings = [];
  const trees = [];
  const props = []; // solid round props: fountains, statues
  const parkingSpots = [];
  const plazas = [];
  const DP = {
    [D.DOWNTOWN]: { min: 4, max: 8, alley: 0.22 },
    [D.COMMERCIAL]: { min: 3, max: 6, alley: 0.3 },
    [D.RESIDENTIAL]: { min: 3, max: 5, alley: 0.12 },
    [D.INDUSTRIAL]: { min: 4, max: 9, alley: 0.12 },
  };

  function subdivide(r, p, out) {
    const w = r.x1 - r.x0, h = r.z1 - r.z0;
    const canX = w >= p.min * 2 + 1, canZ = h >= p.min * 2 + 1;
    if ((w <= p.max && h <= p.max && rng.chance(0.55)) || (!canX && !canZ)) { out.push(r); return; }
    const splitX = canX && (!canZ || w >= h ? true : rng.chance(0.25));
    if (splitX) {
      const s = r.x0 + rng.int(p.min, w - p.min);
      const alley = rng.chance(p.alley) && r.x1 - s > p.min ? 1 : 0;
      subdivide({ x0: r.x0, z0: r.z0, x1: s, z1: r.z1 }, p, out);
      subdivide({ x0: s + alley, z0: r.z0, x1: r.x1, z1: r.z1 }, p, out);
    } else {
      const s = r.z0 + rng.int(p.min, h - p.min);
      const alley = rng.chance(p.alley) && r.z1 - s > p.min ? 1 : 0;
      subdivide({ x0: r.x0, z0: r.z0, x1: r.x1, z1: s }, p, out);
      subdivide({ x0: r.x0, z0: s + alley, x1: r.x1, z1: r.z1 }, p, out);
    }
  }
  const rectInBlock = (r, b) => {
    for (let z = r.z0; z < r.z1; z++) for (let x = r.x0; x < r.x1; x++) if (blockOf[id(x, z)] !== b.id || tiles[id(x, z)] !== LAND) return false;
    return true;
  };
  const fillRect = (r, t, b) => {
    for (let z = r.z0; z < r.z1; z++) for (let x = r.x0; x < r.x1; x++) {
      const k = id(x, z);
      if (blockOf[k] === b.id && tiles[k] === LAND) tiles[k] = t;
    }
  };

  const STYLE = {
    glass: 0, office: 1, brick: 2, apartment: 3, house: 4, warehouse: 5, container: 6, shop: 7,
  };
  function addBuilding(r, b, h, style, extra = {}) {
    const bld = {
      id: buildings.length, x0: r.x0, z0: r.z0, x1: r.x1, z1: r.z1, h, style, district: b.district,
      colorSeed: rng.next(), roofSeed: rng.next(), tiers: [], ...extra,
    };
    for (let z = r.z0; z < r.z1; z++) for (let x = r.x0; x < r.x1; x++) {
      const k = id(x, z);
      tiles[k] = T.BUILDING;
      buildingId[k] = bld.id;
    }
    buildings.push(bld);
    return bld;
  }
  function addTree(x, z, kind = 'round', r = rng.range(1.6, 2.6)) {
    trees.push({ x, z, r, h: r * 2.2 + rng.range(1, 3), kind, seed: rng.next() });
  }

  for (const b of regular) {
    for (const k of b.cells) district[k] = b.district;
    const rect = { x0: b.x0, z0: b.z0, x1: b.x1, z1: b.z1 };
    if (b.district === D.PARK) {
      // grass, cross paths, trees, a pond in the big park
      for (const k of b.cells) tiles[k] = T.GRASS;
      const mx = Math.floor((b.x0 + b.x1) / 2), mz = Math.floor((b.z0 + b.z1) / 2);
      for (const k of b.cells) {
        const x = k % W, z = (k / W) | 0;
        if (x === mx || z === mz) tiles[k] = T.PLAZA;
      }
      if (b.central && b.x1 - b.x0 >= 12 && b.z1 - b.z0 >= 10) {
        // pond in one quadrant
        const qx0 = b.x0 + 2, qz0 = b.z0 + 2, qx1 = mx - 1, qz1 = mz - 1;
        const pcx = (qx0 + qx1) / 2, pcz = (qz0 + qz1) / 2;
        const rx = (qx1 - qx0) / 2, rz = (qz1 - qz0) / 2;
        for (let z = qz0; z <= qz1; z++) for (let x = qx0; x <= qx1; x++) {
          const ex = (x + 0.5 - pcx - 0.5) / Math.max(rx, 1), ez = (z + 0.5 - pcz - 0.5) / Math.max(rz, 1);
          if (ex * ex + ez * ez < 0.85 && blockOf[id(x, z)] === b.id) tiles[id(x, z)] = T.WATER;
        }
      }
      // fountain at path crossing
      props.push({ x: (mx + 0.5) * TILE, z: (mz + 0.5) * TILE, r: 1.6, kind: 'fountain' });
      for (const k of b.cells) {
        const x = k % W, z = (k / W) | 0;
        if (tiles[k] !== T.GRASS) continue;
        if (rng.chance(0.42)) {
          addTree((x + rng.range(0.2, 0.8)) * TILE, (z + rng.range(0.2, 0.8)) * TILE);
        }
      }
      continue;
    }
    const p = DP[b.district];
    const lots = [];
    subdivide(rect, p, lots);
    for (const r of lots) {
      if (!rectInBlock(r, b)) { fillRect(r, b.district === D.INDUSTRIAL ? T.PARKING : T.GRASS, b); continue; }
      const w = r.x1 - r.x0, h = r.z1 - r.z0;
      const roll = rng.next();
      if (b.district === D.DOWNTOWN) {
        if (roll < 0.1 && w * h <= 40) {
          fillRect(r, T.PLAZA, b);
          plazas.push(r);
          props.push({ x: (r.x0 + w / 2) * TILE, z: (r.z0 + h / 2) * TILE, r: 1.4, kind: rng.chance(0.5) ? 'fountain' : 'statue' });
          continue;
        }
        if (roll < 0.17) { makeParking(r, b); continue; }
        let hgt = rng.range(14, 23);
        const style = rng.chance(0.5) ? STYLE.glass : STYLE.office;
        const bld = addBuilding(r, b, hgt, style);
        if (w >= 5 && h >= 5 && rng.chance(0.65)) {
          const extraH = Math.min(27 - hgt, rng.range(3, 6));
          if (extraH > 2) bld.tiers.push({ x0: r.x0 + 1, z0: r.z0 + 1, x1: r.x1 - 1, z1: r.z1 - 1, h: hgt + extraH });
        }
      } else if (b.district === D.COMMERCIAL) {
        if (roll < 0.12) { makeParking(r, b); continue; }
        const style = rng.pick([STYLE.brick, STYLE.brick, STYLE.office, STYLE.shop, STYLE.apartment]);
        addBuilding(r, b, rng.range(7, 14), style);
      } else if (b.district === D.RESIDENTIAL) {
        if (w >= 3 && h >= 3 && roll < 0.72) {
          // house with a yard: shrink the footprint by one tile on random sides
          const fr = { ...r };
          if (w >= 4) { if (rng.chance(0.5)) fr.x0++; else fr.x1--; }
          if (h >= 4) { if (rng.chance(0.5)) fr.z0++; else fr.z1--; }
          if (fr.x1 - fr.x0 >= 2 && fr.z1 - fr.z0 >= 2) {
            fillRect(r, T.GRASS, b);
            for (let z = fr.z0; z < fr.z1; z++) for (let x = fr.x0; x < fr.x1; x++) tiles[id(x, z)] = LAND;
            addBuilding(fr, b, rng.range(4.5, 7.5), STYLE.house, { gable: true, ridgeX: fr.x1 - fr.x0 >= fr.z1 - fr.z0 });
            for (let z = r.z0; z < r.z1; z++) for (let x = r.x0; x < r.x1; x++) {
              if (tiles[id(x, z)] === T.GRASS && rng.chance(0.28)) addTree((x + rng.range(0.25, 0.75)) * TILE, (z + rng.range(0.25, 0.75)) * TILE, 'round', rng.range(1.4, 2.2));
            }
            continue;
          }
        }
        if (roll < 0.9) addBuilding(r, b, rng.range(8, 12.5), STYLE.apartment);
        else { fillRect(r, T.GRASS, b); for (let i = 0; i < 2; i++) addTree((r.x0 + rng.range(0.3, w - 0.3)) * TILE, (r.z0 + rng.range(0.3, h - 0.3)) * TILE); }
      } else if (b.district === D.INDUSTRIAL) {
        if (roll < 0.3) {
          // container yard
          fillRect(r, T.PARKING, b);
          for (let z = r.z0; z + 1 < r.z1; z += 3) for (let x = r.x0; x < r.x1; x += 2) {
            if (rng.chance(0.62) && tiles[id(x, z)] === T.PARKING && tiles[id(x, z + 1)] === T.PARKING) {
              for (let zz = z; zz < z + 2; zz++) tiles[id(x, zz)] = LAND;
              addBuilding({ x0: x, z0: z, x1: x + 1, z1: z + 2 }, b, rng.chance(0.5) ? 2.7 : 5.4, STYLE.container);
            }
          }
          continue;
        }
        if (roll < 0.42) { makeParking(r, b); continue; }
        addBuilding(r, b, rng.range(6, 10), STYLE.warehouse);
      }
    }
    // leftover land inside the block becomes alleys
    for (const k of b.cells) if (tiles[k] === LAND) tiles[k] = T.ALLEY;
  }

  function makeParking(r, b) {
    fillRect(r, T.PARKING, b);
    const w = r.x1 - r.x0, h = r.z1 - r.z0;
    const alongX = w >= h;
    // spots every tile across, rows every 2 tiles
    if (alongX) {
      for (let z = r.z0; z < r.z1; z += 2) for (let x = r.x0; x < r.x1; x++) {
        parkingSpots.push({ x: (x + 0.5) * TILE, z: (z + 0.75) * TILE, h: rng.chance(0.5) ? Math.PI / 2 : -Math.PI / 2 });
      }
    } else {
      for (let x = r.x0; x < r.x1; x += 2) for (let z = r.z0; z < r.z1; z++) {
        parkingSpots.push({ x: (x + 0.75) * TILE, z: (z + 0.5) * TILE, h: rng.chance(0.5) ? 0 : Math.PI });
      }
    }
  }

  // anything still LAND (shouldn't be many) -> grass
  for (let k = 0; k < N; k++) if (tiles[k] === LAND) tiles[k] = T.GRASS;

  // sidewalks and roads inherit the district of the nearest block
  for (let pass = 0; pass < 6; pass++) {
    const next = district.slice();
    for (let z = 1; z < H - 1; z++) for (let x = 1; x < W - 1; x++) {
      const k = id(x, z);
      if (district[k] !== 255) continue;
      let best = 255;
      for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) {
        const d = district[id(x + dx, z + dz)];
        if (d !== 255 && (best === 255 || d < best)) best = d;
      }
      next[k] = best;
    }
    district.set(next);
  }

  // promenade trees and dock containers
  for (const b of blocks) {
    if (b.kind === 'promenade') {
      for (const k of b.cells) {
        const x = k % W, z = (k / W) | 0;
        if ((x + z) % 4 === 0 && get(x, z - 1) !== T.SIDEWALK && get(x, z + 1) !== T.SIDEWALK) addTree((x + 0.5) * TILE, (z + 0.5) * TILE, 'round', rng.range(1.5, 2.1));
      }
    } else if (b.kind === 'coast') {
      for (const k of b.cells) {
        const x = k % W, z = (k / W) | 0;
        if (tiles[k] === T.SAND && rng.chance(0.07)) addTree((x + 0.5) * TILE, (z + 0.5) * TILE, 'palm', rng.range(2.2, 3));
        else if (tiles[k] === T.GRASS && rng.chance(0.12)) addTree((x + rng.range(0.3, 0.7)) * TILE, (z + rng.range(0.3, 0.7)) * TILE, 'round');
      }
    } else if (b.kind === 'dock') {
      for (const k of b.cells) {
        const x = k % W, z = (k / W) | 0;
        if (rng.chance(0.05)) props.push({ x: (x + 0.5) * TILE, z: (z + 0.5) * TILE, r: 0.5, kind: 'bollard' });
      }
    }
  }
  // remove trees that ended up on non-walkable tiles (e.g. later changes)
  for (let i = trees.length - 1; i >= 0; i--) {
    const t = trees[i];
    const tt = get(Math.floor(t.x / TILE), Math.floor(t.z / TILE));
    if (SOLID[tt] || tt === T.ROAD || tt === T.SIDEWALK) trees.splice(i, 1);
  }

  // ---------------------------------------------------------------- special buildings
  const isFrontage = (bld) => {
    // building touching a sidewalk tile that touches a road
    for (let z = bld.z0 - 1; z <= bld.z1; z++) for (let x = bld.x0 - 1; x <= bld.x1; x++) {
      if (get(x, z) === T.SIDEWALK) return true;
    }
    return false;
  };
  function pickBuilding(filter, tx, tz) {
    let best = null, bd = 1e9;
    for (const b of buildings) {
      if (b.special || !filter(b) || !isFrontage(b)) continue;
      const d = Math.hypot((b.x0 + b.x1) / 2 - tx, (b.z0 + b.z1) / 2 - tz);
      if (d < bd) { bd = d; best = b; }
    }
    return best;
  }
  function frontSidewalk(bld) {
    // a sidewalk tile adjacent to the building and to a road
    let best = null;
    for (let z = bld.z0 - 1; z <= bld.z1; z++) for (let x = bld.x0 - 1; x <= bld.x1; x++) {
      if (get(x, z) !== T.SIDEWALK) continue;
      if (x >= bld.x0 && x < bld.x1 && z >= bld.z0 && z < bld.z1) continue;
      let road = null;
      for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) if (get(x + dx, z + dz) === T.ROAD) road = [dx, dz];
      if (!road) continue;
      const corner = (x < bld.x0 || x >= bld.x1) && (z < bld.z0 || z >= bld.z1);
      if (corner) continue;
      const cand = { x, z, road };
      if (!best || Math.abs(x - (bld.x0 + bld.x1) / 2) + Math.abs(z - (bld.z0 + bld.z1) / 2) < Math.abs(best.x - (bld.x0 + bld.x1) / 2) + Math.abs(best.z - (bld.z0 + bld.z1) / 2)) best = cand;
    }
    return best;
  }
  const specials = {};
  const nonResi = (b) => (b.district === D.COMMERCIAL || b.district === D.DOWNTOWN) && b.style !== STYLE.glass && b.x1 - b.x0 >= 3 && b.z1 - b.z0 >= 3;
  const defs = [
    ['police', nonResi, W * 0.36, H * 0.42],
    ['hospital', nonResi, W * 0.66, H * 0.3],
    ['paint', (b) => (b.district === D.COMMERCIAL || b.district === D.INDUSTRIAL) && b.x1 - b.x0 >= 2 && b.z1 - b.z0 >= 2, W * 0.55, H * 0.5],
    ['paint2', (b) => (b.district === D.INDUSTRIAL || b.district === D.RESIDENTIAL) && b.style !== STYLE.container && b.x1 - b.x0 >= 2 && b.z1 - b.z0 >= 2, W * 0.4, H * 0.82],
  ];
  for (const [name, f, tx, tz] of defs) {
    const bld = pickBuilding(f, tx, tz);
    if (!bld) continue;
    const front = frontSidewalk(bld);
    if (!front) continue;
    bld.special = name.startsWith('paint') ? 'paint' : name;
    if (bld.h > 14) bld.h = 12;
    bld.tiers = [];
    bld.gable = false;
    const sp = { name, building: bld, tx: front.x, tz: front.z, x: (front.x + 0.5) * TILE, z: (front.z + 0.5) * TILE, road: front.road };
    if (name.startsWith('paint')) meta[id(front.x, front.z)] |= 1;
    specials[name] = sp;
  }

  // ---------------------------------------------------------------- props: lamps, phones
  const lamps = [];
  for (let z = 1; z < H - 1; z++) for (let x = 1; x < W - 1; x++) {
    if (tiles[id(x, z)] !== T.SIDEWALK) continue;
    if ((x * 7 + z * 13) % 4 !== 0) continue;
    const roads = [];
    for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) if (get(x + dx, z + dz) === T.ROAD) roads.push([dx, dz]);
    if (roads.length !== 1) continue;
    if (meta[id(x, z)] & 1) continue;
    const [dx, dz] = roads[0];
    lamps.push({ x: (x + 0.5 + dx * 0.38) * TILE, z: (z + 0.5 + dz * 0.38) * TILE, dx, dz });
  }

  const phones = [];
  const phoneCands = [];
  for (let z = 1; z < H - 1; z++) for (let x = 1; x < W - 1; x++) {
    const k = id(x, z);
    if (tiles[k] !== T.SIDEWALK || meta[k] & 1) continue;
    const roads = [];
    for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) if (get(x + dx, z + dz) === T.ROAD) roads.push([dx, dz]);
    if (roads.length !== 1) continue;
    const [dx, dz] = roads[0];
    if (!SOLID[get(x - dx, z - dz)] && get(x - dx, z - dz) !== T.GRASS && get(x - dx, z - dz) !== T.PLAZA) continue;
    phoneCands.push({ x, z, dx, dz });
  }
  rng.shuffle(phoneCands);
  for (const c of phoneCands) {
    if (phones.length >= 14) break;
    const px = (c.x + 0.5 - c.dx * 0.3) * TILE, pz = (c.z + 0.5 - c.dz * 0.3) * TILE;
    if (phones.some((p) => Math.hypot(p.x - px, p.z - pz) < 70)) continue;
    if (district[id(c.x, c.z)] === 255) continue;
    phones.push({ id: phones.length, x: px, z: pz, face: Math.atan2(c.dz, c.dx), tx: c.x, tz: c.z });
  }

  // ---------------------------------------------------------------- place lists
  const places = { roadside: [], downtown: [], industrial: [], waterfront: [], park: [], residential: [], alley: [] };
  for (let z = 1; z < H - 1; z++) for (let x = 1; x < W - 1; x++) {
    const k = id(x, z);
    const t = tiles[k];
    const pos = { x: (x + 0.5) * TILE, z: (z + 0.5) * TILE, tx: x, tz: z };
    if (t === T.SIDEWALK) {
      let road = 0;
      for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) if (get(x + dx, z + dz) === T.ROAD) road++;
      if (road === 1) {
        places.roadside.push(pos);
        const d = district[k];
        if (d === D.DOWNTOWN) places.downtown.push(pos);
        if (d === D.RESIDENTIAL) places.residential.push(pos);
        if (d === D.INDUSTRIAL) places.industrial.push(pos);
      }
    } else if ((t === T.DOCK || t === T.PLAZA) && meta[k] & 4) places.waterfront.push(pos);
    else if (t === T.GRASS && district[k] === D.PARK) places.park.push(pos);
    else if (t === T.ALLEY) places.alley.push(pos);
    else if (t === T.PARKING && district[k] === D.INDUSTRIAL) places.industrial.push(pos);
  }

  const pickupSpots = [];
  const pc = rng.shuffle([...places.alley, ...places.park, ...places.waterfront]);
  for (const p of pc) {
    if (pickupSpots.length >= 36) break;
    if (pickupSpots.some((q) => Math.hypot(q.x - p.x, q.z - p.z) < 45)) continue;
    pickupSpots.push(p);
  }

  // ---------------------------------------------------------------- lane graph
  const lanes = [];
  const conns = [];
  const laneMap = new Map();
  const roadSpeed = (isAve, isRing) => (isAve ? 16 : isRing ? 15 : 12);
  function addLane(key, ax, az, bx, bz, speed, li, nl, edge) {
    const len = Math.hypot(bx - ax, bz - az);
    const lane = { id: lanes.length, ax, az, bx, bz, dx: (bx - ax) / len, dz: (bz - az) / len, len, speed, li, nl, outs: [], edge };
    lanes.push(lane);
    if (!laneMap.has(key)) laneMap.set(key, []);
    laneMap.get(key)[li] = lane;
    return lane;
  }
  for (let i = 0; i < nv; i++) for (let j = 0; j < nh - 1; j++) {
    if (!vE[i][j]) continue;
    const v = vLines[i];
    const nl = v.w / 2;
    const Zs = (hLines[j].p + hLines[j].w) * TILE, Ze = hLines[j + 1].p * TILE;
    const sp = roadSpeed(i === vAve, i === 0 || i === nv - 1);
    for (let li = 0; li < nl; li++) {
      const cS = (v.p + nl - 1 - li + 0.5) * TILE;
      addLane(`v,${i},${j},S`, cS, Zs, cS, Ze, sp, li, nl, { t: 'v', i, j });
      const cN = (v.p + nl + li + 0.5) * TILE;
      addLane(`v,${i},${j},N`, cN, Ze, cN, Zs, sp, li, nl, { t: 'v', i, j });
    }
  }
  for (let i = 0; i < nv - 1; i++) for (let j = 0; j < nh; j++) {
    if (!hE[i][j]) continue;
    const h = hLines[j];
    const nl = h.w / 2;
    const Xs = (vLines[i].p + vLines[i].w) * TILE, Xe = vLines[i + 1].p * TILE;
    const sp = roadSpeed(j === hAve, j === 0 || j === nh - 1);
    for (let li = 0; li < nl; li++) {
      const cE = (h.p + nl + li + 0.5) * TILE;
      addLane(`h,${i},${j},E`, Xs, cE, Xe, cE, sp, li, nl, { t: 'h', i, j });
      const cW = (h.p + nl - 1 - li + 0.5) * TILE;
      addLane(`h,${i},${j},W`, Xe, cW, Xs, cW, sp, li, nl, { t: 'h', i, j });
    }
  }
  const outgoing = (i, j, d) => {
    if (d === 'S') return laneMap.get(`v,${i},${j},S`);
    if (d === 'N') return laneMap.get(`v,${i},${j - 1},N`);
    if (d === 'E') return laneMap.get(`h,${i},${j},E`);
    return laneMap.get(`h,${i - 1},${j},W`);
  };
  const incoming = (i, j, d) => {
    if (d === 'S') return laneMap.get(`v,${i},${j - 1},S`);
    if (d === 'N') return laneMap.get(`v,${i},${j},N`);
    if (d === 'E') return laneMap.get(`h,${i - 1},${j},E`);
    return laneMap.get(`h,${i},${j},W`);
  };
  function connect(a, b, turn, node) {
    const pts = [a.bx, a.bz];
    if (turn === 'S') pts.push(b.ax, b.az);
    else {
      let cx, cz;
      if (Math.abs(a.dx) < 0.5) { cx = a.bx; cz = b.az; } else { cx = b.ax; cz = a.bz; }
      if (turn === 'U') { cx = (a.bx + b.ax) / 2 + a.dx * 6; cz = (a.bz + b.az) / 2 + a.dz * 6; }
      for (let s = 1; s <= 8; s++) {
        const t = s / 8, u = 1 - t;
        pts.push(u * u * a.bx + 2 * u * t * cx + t * t * b.ax, u * u * a.bz + 2 * u * t * cz + t * t * b.az);
      }
    }
    let len = 0;
    for (let k = 2; k < pts.length; k += 2) len += Math.hypot(pts[k] - pts[k - 2], pts[k + 1] - pts[k - 1]);
    const c = { id: conns.length, from: a.id, to: b.id, pts, len, turn, node };
    conns.push(c);
    a.outs.push(c.id);
  }
  for (const n of nodes) {
    if (n.deg === 0) continue;
    for (const d of ['N', 'S', 'E', 'W']) {
      const inc = incoming(n.i, n.j, d);
      if (!inc) continue;
      const st = outgoing(n.i, n.j, d);
      const rt = outgoing(n.i, n.j, RIGHT[d]);
      const lt = outgoing(n.i, n.j, LEFT[d]);
      let any = false;
      if (st) { for (let li = 0; li < inc.length; li++) connect(inc[li], st[Math.min(li, st.length - 1)], 'S', n); any = true; }
      if (rt) { connect(inc[inc.length - 1], rt[rt.length - 1], 'R', n); any = true; }
      if (lt) { connect(inc[0], lt[0], 'L', n); any = true; }
      if (!any) {
        const back = outgoing(n.i, n.j, OPP[d]);
        if (back) connect(inc[0], back[0], 'U', n);
      }
    }
  }

  // start position: sidewalk near the police-hospital midpoint, prefer midtown
  let start = null, sd = 1e9;
  const sx = W * 0.47, sz = riverZ0 * 0.58;
  for (const p of places.roadside) {
    const d = Math.hypot(p.tx - sx, p.tz - sz);
    if (d < sd) { sd = d; start = p; }
  }

  return {
    W, H, tiles, district, buildingId, meta, blockOf, blocks, buildings, trees, props, lamps, phones,
    parkingSpots, pickupSpots, places, specials, plazas, lanes, conns, nodes, vLines, hLines, vE, hE,
    river: { z0: riverZ0, z1: riverZ1 }, ring: { a: RING0, b: RING1 }, start, STYLE,
    nv, nh, vAve, hAve, rIdx,
  };
}

// --------------------------------------------------------------------------- queries
export function makeQueries(city) {
  const { W, H, tiles } = city;
  const tileAt = (x, z) => {
    const tx = Math.floor(x / TILE), tz = Math.floor(z / TILE);
    if (tx < 0 || tz < 0 || tx >= W || tz >= H) return T.WATER;
    return tiles[tz * W + tx];
  };
  const tileXZ = (tx, tz) => (tx < 0 || tz < 0 || tx >= W || tz >= H ? T.WATER : tiles[tz * W + tx]);
  const solidAt = (x, z) => SOLID[tileAt(x, z)] === 1;
  const walkableAt = (x, z) => WALKABLE[tileAt(x, z)] === 1;
  return { tileAt, tileXZ, solidAt, walkableAt };
}

export { clamp };
