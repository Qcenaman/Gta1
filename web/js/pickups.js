// Weapon / health / armor / cash / heat-badge crates scattered around the city.
import * as THREE from 'three';
import { G } from './game.js';
import { rand, dist, pick } from './util.js';
import { WEAPONS } from './weapons.js';

export const PICKUP_TYPES = {
  pistol: { label: 'PISTOL', color: '#4d5a3c', weight: 26 },
  smg: { label: 'SMG', color: '#4d5a3c', weight: 15 },
  shotgun: { label: 'SHOTGUN', color: '#4d5a3c', weight: 12 },
  rocket: { label: 'ROCKETS', color: '#6a3a2a', weight: 5 },
  flamer: { label: 'FLAMER', color: '#6a3a2a', weight: 5 },
  health: { label: 'HEALTH', color: '#e8e4da', weight: 14 },
  armor: { label: 'ARMOR', color: '#2f5fa8', weight: 10 },
  cash: { label: 'CASH', color: '#2f7d4a', weight: 9 },
  badge: { label: 'BRIBE', color: '#1d2b4f', weight: 6 },
};

let atlas = null;
const ORDER = Object.keys(PICKUP_TYPES);

export function drawIcon(g, type, x, y, s) {
  g.save();
  g.translate(x, y);
  g.scale(s / 100, s / 100);
  g.lineJoin = 'round';
  g.lineCap = 'round';
  const dark = '#14161a', light = '#f3efe3', yellow = '#ffc61a';
  switch (type) {
    case 'pistol':
      g.fillStyle = light;
      g.fillRect(18, 34, 60, 16); g.fillRect(22, 48, 18, 30);
      g.fillStyle = dark; g.fillRect(42, 50, 10, 8);
      break;
    case 'smg':
      g.fillStyle = light;
      g.fillRect(10, 36, 74, 14); g.fillRect(30, 50, 14, 30); g.fillRect(52, 50, 10, 22); g.fillRect(84, 40, 8, 6);
      break;
    case 'shotgun':
      g.fillStyle = light;
      g.fillRect(6, 40, 86, 10); g.fillRect(6, 50, 26, 16);
      g.fillStyle = dark; g.fillRect(44, 49, 22, 6);
      g.fillStyle = light; g.fillRect(44, 50, 22, 8);
      break;
    case 'rocket':
      g.fillStyle = light;
      g.fillRect(8, 40, 70, 18);
      g.beginPath(); g.moveTo(78, 34); g.lineTo(96, 49); g.lineTo(78, 64); g.fill();
      g.fillRect(30, 58, 10, 18);
      break;
    case 'flamer':
      g.fillStyle = yellow;
      g.beginPath(); g.moveTo(50, 12); g.bezierCurveTo(82, 40, 78, 86, 50, 88); g.bezierCurveTo(22, 86, 18, 54, 38, 36); g.bezierCurveTo(40, 52, 50, 54, 50, 12); g.fill();
      g.fillStyle = '#ff6a2a';
      g.beginPath(); g.moveTo(50, 46); g.bezierCurveTo(66, 60, 62, 82, 50, 82); g.bezierCurveTo(38, 82, 36, 66, 50, 46); g.fill();
      break;
    case 'health':
      g.fillStyle = '#d6332b';
      g.fillRect(38, 14, 24, 72); g.fillRect(14, 38, 72, 24);
      break;
    case 'armor':
      g.fillStyle = light;
      g.beginPath(); g.moveTo(50, 10); g.lineTo(84, 22); g.lineTo(80, 56); g.quadraticCurveTo(70, 80, 50, 90); g.quadraticCurveTo(30, 80, 20, 56); g.lineTo(16, 22); g.closePath(); g.fill();
      g.fillStyle = '#2f5fa8'; g.fillRect(44, 30, 12, 40); g.fillRect(32, 42, 36, 12);
      break;
    case 'cash':
      g.fillStyle = light;
      g.font = 'bold 86px Impact, "Arial Black", sans-serif';
      g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText('$', 50, 54);
      break;
    case 'badge':
      g.fillStyle = yellow;
      g.beginPath();
      for (let i = 0; i < 10; i++) {
        const a = -Math.PI / 2 + (i * Math.PI) / 5, r = i % 2 ? 18 : 40;
        g.lineTo(50 + Math.cos(a) * r, 52 + Math.sin(a) * r);
      }
      g.closePath(); g.fill();
      g.fillStyle = '#1d2b4f'; g.fillRect(36, 47, 28, 9);
      break;
    case 'fists':
      g.fillStyle = light;
      g.beginPath(); g.roundRect ? g.roundRect(22, 30, 56, 44, 12) : g.rect(22, 30, 56, 44); g.fill();
      g.fillStyle = dark;
      for (let i = 0; i < 3; i++) g.fillRect(36 + i * 14, 30, 3, 20);
      break;
  }
  g.restore();
}

function getAtlas() {
  if (atlas) return atlas;
  const cv = document.createElement('canvas');
  cv.width = 128 * ORDER.length; cv.height = 128;
  const g = cv.getContext('2d');
  ORDER.forEach((t, i) => {
    g.fillStyle = PICKUP_TYPES[t].color;
    g.fillRect(i * 128, 0, 128, 128);
    g.strokeStyle = 'rgba(255,255,255,0.35)';
    g.lineWidth = 6;
    g.strokeRect(i * 128 + 5, 5, 118, 118);
    drawIcon(g, t, i * 128 + 14, 14, 100);
  });
  atlas = new THREE.CanvasTexture(cv);
  atlas.anisotropy = 4;
  return atlas;
}

export class Pickups {
  constructor(city) {
    this.items = city.pickupSpots.map((s, i) => ({ x: s.x, z: s.z, type: null, respawn: (i % 5) * 0.5, mesh: null }));
    this.tex = getAtlas();
    this.geos = {};
  }
  geo(type) {
    if (this.geos[type]) return this.geos[type];
    const i = ORDER.indexOf(type);
    const g = new THREE.BoxGeometry(1.1, 0.75, 1.1);
    const uv = g.attributes.uv;
    // map every face to the icon cell
    for (let k = 0; k < uv.count; k++) uv.setX(k, (i + uv.getX(k)) / ORDER.length);
    this.geos[type] = g;
    return g;
  }
  roll() {
    let total = 0;
    for (const t of ORDER) total += PICKUP_TYPES[t].weight;
    let r = rand() * total;
    for (const t of ORDER) { r -= PICKUP_TYPES[t].weight; if (r <= 0) return t; }
    return 'pistol';
  }
  update(dt) {
    const pl = G.player;
    const t = G.realTime;
    for (const it of this.items) {
      if (!it.type) {
        it.respawn -= dt;
        if (it.respawn <= 0) {
          it.type = this.roll();
          it.mesh = new THREE.Mesh(this.geo(it.type), new THREE.MeshBasicMaterial({ map: this.tex }));
          it.mesh.position.set(it.x, 0.7, it.z);
          G.scene.add(it.mesh);
        }
        continue;
      }
      it.mesh.rotation.y = t * 1.6 + it.x;
      it.mesh.position.y = 0.75 + Math.sin(t * 3 + it.z) * 0.18;
      if (!pl || !pl.alive) continue;
      const e = pl.inCar ? pl.vehicle : pl.ped;
      const r = pl.inCar ? pl.vehicle.t.L / 2 + 0.6 : 1.3;
      if (dist(e.x, e.z, it.x, it.z) < r) this.collect(it);
    }
  }
  collect(it) {
    const pl = G.player;
    const type = it.type;
    let msg = '';
    if (WEAPONS[type]) {
      const w = WEAPONS[type];
      pl.ammo[type] = Math.min(w.max, (pl.ammo[type] || 0) + w.pickup);
      if (pl.weapon === 'fists' || !(pl.ammo[pl.weapon] > 0)) pl.weapon = type;
      msg = `${w.name} +${w.pickup}`;
    } else if (type === 'health') {
      if (pl.ped.health >= 100) return;
      pl.ped.health = Math.min(100, pl.ped.health + 60);
      msg = 'Health';
    } else if (type === 'armor') {
      if (pl.ped.armor >= 100) return;
      pl.ped.armor = 100;
      msg = 'Armor';
    } else if (type === 'cash') {
      const n = pick([250, 500, 500, 1000]);
      pl.addCash(n);
      msg = `+$${n}`;
    } else if (type === 'badge') {
      if (G.police.level === 0) return;
      G.police.heat = Math.max(0, Math.floor(G.police.heat) - 0.01);
      if (G.police.heat < 1) { G.police.heat = 0; G.police.disengageAll(); }
      msg = 'Heat down';
    }
    G.scene.remove(it.mesh);
    it.mesh.material.dispose();
    it.mesh = null;
    it.type = null;
    it.respawn = 50 + rand() * 20;
    G.audio?.pickup();
    G.hud?.toast(msg);
  }
}
