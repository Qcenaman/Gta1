// Weapons: hitscan guns, shotgun spread, rockets, flamethrower, fists; explosions.
import { G } from './game.js';
import { TILE } from './consts.js';
import { clamp, rand, randRange, angDiff } from './util.js';
import { rayTiles, rayCircle, hasLOS } from './physics.js';
import { panic } from './peds.js';

export const WEAPONS = {
  fists: { name: 'Fists', icon: 'fists', rate: 0.42, dmg: 22, range: 1.5, melee: true },
  pistol: { name: 'Pistol', icon: 'pistol', rate: 0.3, dmg: 34, range: 42, spread: 0.035, pellets: 1, pickup: 40, max: 200 },
  smg: { name: 'SMG', icon: 'smg', rate: 0.085, dmg: 15, range: 36, spread: 0.075, pellets: 1, pickup: 150, max: 600 },
  shotgun: { name: 'Shotgun', icon: 'shotgun', rate: 0.8, dmg: 14, range: 24, spread: 0.2, pellets: 7, pickup: 24, max: 120 },
  rocket: { name: 'Rockets', icon: 'rocket', rate: 1.05, dmg: 230, radius: 7.5, speed: 38, pickup: 8, max: 40, projectile: true },
  flamer: { name: 'Flamer', icon: 'flamer', rate: 0.05, dmg: 4.2, range: 9.5, pickup: 260, max: 900, flame: true },
};
export const WEAPON_ORDER = ['fists', 'pistol', 'smg', 'shotgun', 'rocket', 'flamer'];

/** cast a bullet; returns {t, hitType, target} */
export function hitscan(ox, oz, dx, dz, range, shooter, ignoreVehicle) {
  let bestT = rayTiles(ox, oz, dx, dz, range);
  let hit = { type: 'wall', target: null };
  for (const v of G.vehicles) {
    if (v === ignoreVehicle || v.removed) continue;
    // reject by distance from ray
    const rx = v.x - ox, rz = v.z - oz;
    const along = rx * dx + rz * dz;
    if (along < -v.radius || along > bestT + v.radius) continue;
    const perp = Math.abs(rx * dz - rz * dx);
    if (perp > v.radius + 0.2) continue;
    const fx = Math.cos(v.h), fz = Math.sin(v.h);
    for (const off of v.circles) {
      const t = rayCircle(ox, oz, dx, dz, v.x + fx * off, v.z + fz * off, v.cr);
      if (t >= 0 && t < bestT) { bestT = t; hit = { type: 'vehicle', target: v }; }
    }
  }
  for (const p of G.peds) {
    if (p === shooter || p.hidden || !p.alive || p.removed) continue;
    const rx = p.x - ox, rz = p.z - oz;
    const along = rx * dx + rz * dz;
    if (along < 0 || along > bestT + 1) continue;
    const r = p.state === 'down' ? 0.5 : 0.45;
    const t = rayCircle(ox, oz, dx, dz, p.x, p.z, r);
    if (t >= 0 && t < bestT) { bestT = t; hit = { type: 'ped', target: p }; }
  }
  return { t: bestT, type: hit.type, target: hit.target };
}

/** pick a target near the aim direction (aim assist for touch screens) */
export function autoAim(shooter, ang, range, isPlayer) {
  let best = null, bestScore = 1e9;
  const wanted = G.police ? G.police.level : 0;
  for (const p of G.peds) {
    if (p === shooter || !p.alive || p.hidden || p.state === 'down') continue;
    const dx = p.x - shooter.x, dz = p.z - shooter.z;
    const d = Math.hypot(dx, dz);
    if (d > range || d < 0.3) continue;
    const a = Math.abs(angDiff(Math.atan2(dz, dx), ang));
    const hostile = isPlayer ? (p.kind === 'thug' || p.missionTarget || ((p.kind === 'cop' || p.kind === 'swat') && wanted > 0)) : p.kind === 'player';
    const cone = hostile ? 0.62 : 0.2;
    if (a > cone) continue;
    if (!hasLOS(shooter.x, shooter.z, p.x, p.z)) continue;
    const score = a * 12 + d * 0.15 - (hostile ? 4 : 0);
    if (score < bestScore) { bestScore = score; best = p; }
  }
  if (isPlayer) {
    for (const v of G.vehicles) {
      if (!v.mission?.target || v.dead) continue;
      const dx = v.x - shooter.x, dz = v.z - shooter.z;
      const d = Math.hypot(dx, dz);
      if (d > range) continue;
      const a = Math.abs(angDiff(Math.atan2(dz, dx), ang));
      if (a > 0.5) continue;
      const score = a * 12 + d * 0.15 - 3;
      if (score < bestScore) { bestScore = score; best = v; }
    }
  }
  return best ? Math.atan2(best.z - shooter.z, best.x - shooter.x) : ang;
}

/**
 * Fire shooter's weapon toward angle ang. Returns true if a shot happened.
 * shooter is a Ped (player ped included).
 */
export function fire(shooter, wid, ang) {
  const w = WEAPONS[wid];
  if (!w || shooter.fireCd > 0) return false;
  const isPlayer = shooter.kind === 'player';
  if (wid !== 'fists') {
    if (isPlayer) {
      const inv = G.player.ammo;
      if (!(inv[wid] > 0)) return false;
      inv[wid]--;
    }
  }
  shooter.fireCd = w.rate;
  shooter.aimT = Math.max(shooter.aimT, wid === 'flamer' ? 0.25 : 0.6);
  if (isPlayer || w.melee) ang = autoAim(shooter, ang, w.melee ? 2.2 : Math.min(w.range || 30, 26), isPlayer);
  shooter.h = ang;
  const src = isPlayer ? 'player' : shooter;
  const dx = Math.cos(ang), dz = Math.sin(ang);
  const mx = shooter.x + dx * 0.75 - dz * 0.2, mz = shooter.z + dz * 0.75 + dx * 0.2;
  if (w.melee) {
    let tgt = null, bd = 1e9;
    for (const p of G.peds) {
      if (p === shooter || !p.alive || p.hidden) continue;
      const ex = p.x - shooter.x, ez = p.z - shooter.z;
      const d = Math.hypot(ex, ez);
      if (d > w.range + 0.3) continue;
      if (Math.abs(angDiff(Math.atan2(ez, ex), ang)) > 1.0) continue;
      if (d < bd) { bd = d; tgt = p; }
    }
    if (tgt) {
      tgt.hit(w.dmg, dx, dz, src, 'melee');
      G.audio?.punch(tgt.x, tgt.z);
      if (isPlayer) G.events.shots?.(shooter, wid, true);
    } else G.audio?.whoosh?.(shooter.x, shooter.z);
    return true;
  }
  if (w.projectile) {
    G.projectiles.push({ kind: 'rocket', x: mx, z: mz, y: 1.25, vx: dx * w.speed, vz: dz * w.speed, life: 2.6, owner: shooter, src, w });
    G.fx.muzzle(mx, 1.3, mz, ang, true);
    G.fx.smoke(mx - dx, 1.2, mz - dz, 1.2, 0.7, 0.8);
    G.audio?.shot('rocket', mx, mz);
    G.events.shots?.(shooter, wid, false);
    return true;
  }
  if (w.flame) {
    for (let i = 0; i < 3; i++) {
      const a = ang + randRange(-0.14, 0.14);
      const sp = randRange(12, 17);
      G.fx.add.spawn({ x: mx, y: 1.2, z: mz, vx: Math.cos(a) * sp + shooter.vx, vy: randRange(0, 1.2), vz: Math.sin(a) * sp + shooter.vz, life: randRange(0.45, 0.65), size: 0.5, size1: 2.6, color: [1, 0.78, 0.3, 0.95], color1: [0.85, 0.18, 0.05, 0], drag: 1.6, shape: 3 });
    }
    const range = w.range;
    for (const p of G.peds) {
      if (p === shooter || !p.alive || p.hidden) continue;
      const ex = p.x - shooter.x, ez = p.z - shooter.z;
      const d = Math.hypot(ex, ez);
      if (d > range || d < 0.2) continue;
      if ((ex * dx + ez * dz) / d < 0.9) continue;
      if (!hasLOS(shooter.x, shooter.z, p.x, p.z)) continue;
      p.hit(w.dmg, dx, dz, src, 'fire');
    }
    for (const v of G.vehicles) {
      if (v.dead || v === shooter.vehicle) continue;
      const ex = v.x - shooter.x, ez = v.z - shooter.z;
      const d = Math.hypot(ex, ez) - v.radius * 0.6;
      if (d > range) continue;
      if ((ex * dx + ez * dz) / Math.max(0.1, Math.hypot(ex, ez)) < 0.85) continue;
      v.damage(w.dmg * 0.9, src, 'fire');
      if (v.health < v.t.health * 0.3 && !v.onFire) { v.onFire = true; v.burnTime = randRange(2, 3.5); }
    }
    G.audio?.flame(mx, mz);
    G.events.shots?.(shooter, wid, false);
    return true;
  }
  // bullets
  G.fx.muzzle(mx, 1.28, mz, ang, wid === 'shotgun');
  G.audio?.shot(wid, mx, mz);
  for (let i = 0; i < w.pellets; i++) {
    const a = ang + randRange(-w.spread, w.spread) * (isPlayer ? 0.7 : 1.4);
    const bx = Math.cos(a), bz = Math.sin(a);
    const h = hitscan(mx, mz, bx, bz, w.range * (wid === 'shotgun' ? randRange(0.75, 1) : 1), shooter, shooter.vehicle);
    const ex = mx + bx * h.t, ez = mz + bz * h.t;
    if (i === 0 || rand() < 0.5) G.fx.tracer(mx, mz, ex, ez, 1.25);
    if (h.type === 'ped') {
      const falloff = wid === 'shotgun' ? clamp(1.4 - h.t / w.range, 0.4, 1.2) : 1;
      // enemies are less lethal to the player than the player is to them
      const vsPlayer = !isPlayer && h.target.kind === 'player' ? 0.42 : 1;
      h.target.hit(w.dmg * falloff * vsPlayer, bx, bz, src, 'bullet');
      G.fx.spark(ex, 1.1, ez, 3, 4, [1, 0.95, 0.85, 1]);
    } else if (h.type === 'vehicle') {
      h.target.damage(w.dmg * 0.32, src, 'bullet');
      G.fx.spark(ex, 1, ez, 5, 7);
      if (isPlayer && h.target.driver && h.target.driver !== 'player' && rand() < 0.2) G.events.driverShot?.(h.target);
    } else if (h.t < w.range - 0.1) {
      G.fx.dust(ex - bx * 0.2, ez - bz * 0.2, 2);
      G.fx.spark(ex - bx * 0.2, 1.2, ez - bz * 0.2, 2, 5);
    }
  }
  G.events.shots?.(shooter, wid, false);
  return true;
}

export function updateProjectiles(dt) {
  const list = G.projectiles;
  for (let i = list.length - 1; i >= 0; i--) {
    const p = list[i];
    p.life -= dt;
    let boom = p.life <= 0;
    const steps = 3;
    for (let s = 0; s < steps && !boom; s++) {
      p.x += (p.vx * dt) / steps;
      p.z += (p.vz * dt) / steps;
      if (G.q.solidAt(p.x, p.z) && G.q.tileAt(p.x, p.z) !== 0) boom = true; // buildings
      if (G.q.tileAt(p.x, p.z) === 0) { /* over water: keep flying */ }
      for (const v of G.vehicles) {
        if (boom || v === p.owner.vehicle || v.removed) break;
        if (Math.hypot(v.x - p.x, v.z - p.z) > v.radius + 0.3) continue;
        const fx = Math.cos(v.h), fz = Math.sin(v.h);
        for (const off of v.circles) {
          if (Math.hypot(v.x + fx * off - p.x, v.z + fz * off - p.z) < v.cr + 0.2) { boom = true; break; }
        }
      }
      for (const q of G.peds) {
        if (boom || q === p.owner || !q.alive || q.hidden) continue;
        if (Math.hypot(q.x - p.x, q.z - p.z) < 0.6) boom = true;
      }
    }
    if (rand() < 0.9) G.fx.smoke(p.x - p.vx * 0.02, p.y, p.z - p.vz * 0.02, 0.5, 0.75, 0.9);
    G.fx.add.spawn({ x: p.x, y: p.y, z: p.z, life: 0.05, size: 0.8, color: [1, 0.8, 0.4, 1], color1: [1, 0.5, 0.2, 0], shape: 3, drag: 0 });
    if (boom) {
      explode(p.x - p.vx * 0.01, p.z - p.vz * 0.01, p.w.radius, p.w.dmg, p.src);
      list.splice(i, 1);
    }
  }
}

export function explode(x, z, radius, damage, source) {
  G.fx.explosion(x, z, radius / 7);
  G.audio?.explosion(x, z);
  for (const p of G.peds) {
    if (!p.alive || p.hidden) continue;
    const d = Math.hypot(p.x - x, p.z - z);
    if (d > radius) continue;
    const k = Math.pow(1 - d / radius, 0.7);
    p.hit(damage * k, p.x - x + 0.01, p.z - z, source, 'explosion');
    if (rand() < 0.6) p.onFire = Math.max(p.onFire, 1.5);
  }
  for (const v of G.vehicles) {
    if (v.removed) continue;
    const dx = v.x - x, dz = v.z - z;
    const d = Math.max(0, Math.hypot(dx, dz) - v.radius * 0.5);
    if (d > radius) continue;
    const k = 1 - d / radius;
    const l = Math.hypot(dx, dz) || 1;
    v.vx += (dx / l) * 12 * k / v.mass;
    v.vz += (dz / l) * 12 * k / v.mass;
    v.w += randRange(-3, 3) * k / v.mass;
    if (!v.dead) v.damage(damage * k, source, 'explosion');
    else v.jumpV = Math.max(v.jumpV, 3 * k);
  }
  panic(x, z, 45);
  G.events.explosion?.(x, z, source);
}

export { TILE };
