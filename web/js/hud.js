// DOM heads-up display: cash, health, heat, pager, timer, minimap, toasts, buttons.
import { G } from './game.js';
import { TILE, T } from './consts.js';
import { formatMoney, formatTime, clamp } from './util.js';
import { drawIcon } from './pickups.js';
import { WEAPONS } from './weapons.js';

const $ = (id) => document.getElementById(id);

const ICONS = {
  fire: '<circle cx="12" cy="12" r="7"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5"/>',
  brake: '<rect x="5" y="4" width="14" height="16" rx="3"/><path d="M8 9h8M8 13h8M8 17h8"/>',
  enter: '<path d="M10 5H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4"/><path d="M14 8l4 4-4 4M18 12H9"/>',
  exit: '<path d="M14 5h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-4"/><path d="M10 8l-4 4 4 4M6 12h9"/>',
  swap: '<path d="M4 9h13l-3-3M20 15H7l3 3"/>',
  horn: '<path d="M4 10v4h3l6 4V6L7 10H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',
};

const MAPCOL = {
  [T.WATER]: '#1d4d66', [T.ROAD]: '#5a5e65', [T.SIDEWALK]: '#8d8a82', [T.BUILDING]: '#25272b', [T.GRASS]: '#41693a',
  [T.PLAZA]: '#8f8676', [T.ALLEY]: '#4b4945', [T.PARKING]: '#4d4f53', [T.DOCK]: '#6e5438', [T.BRIDGE]: '#6b6f76', [T.SAND]: '#b4a272', [T.WALL]: '#333',
};

export class HUD {
  constructor() {
    this.el = {
      hud: $('hud'), cash: $('cash'), mult: $('mult'), health: $('healthbar').firstElementChild, armorbar: $('armorbar'), armor: $('armorbar').firstElementChild,
      lives: $('lives'), pager: $('pager'), pagerText: $('pagertext'), timer: $('timer'), mtitle: $('mtitle'), wanted: $('wanted'),
      lamps: [...$('wanted').children], minimap: $('minimap'), wicon: $('wicon'), ammo: $('ammo'), big: $('big'), bigTitle: $('bigtitle'),
      bigSub: $('bigsub'), toasts: $('toasts'), radio: $('radio'), vname: $('vname'), rotate: $('rotate'), fps: $('fps'),
      iconA: $('iconA'), iconB: $('iconB'), iconC: $('iconC'), labelA: $('labelA'), labelB: $('labelB'), labelC: $('labelC'), btnB: $('btnB'),
    };
    this.cache = {};
    this.pagerT = 0;
    this.bigT = 0;
    this.mmCtx = this.el.minimap.getContext('2d');
    this.wCtx = this.el.wicon.getContext('2d');
    this.mapT = 0;
    this.vnameT = 0;
    this.rotateDismissed = false;
    this.el.rotate.addEventListener('pointerdown', () => { this.rotateDismissed = true; this.el.rotate.hidden = true; });
  }

  buildMap(city) {
    // 2px per tile base map
    const cv = document.createElement('canvas');
    cv.width = city.W * 2; cv.height = city.H * 2;
    const g = cv.getContext('2d');
    for (let z = 0; z < city.H; z++) for (let x = 0; x < city.W; x++) {
      g.fillStyle = MAPCOL[city.tiles[z * city.W + x]] || '#000';
      g.fillRect(x * 2, z * 2, 2, 2);
    }
    for (const sp of Object.values(city.specials)) {
      g.fillStyle = sp.building.special === 'police' ? '#3d7bff' : sp.building.special === 'hospital' ? '#ff5a4a' : '#ffc61a';
      g.fillRect(sp.building.x0 * 2, sp.building.z0 * 2, (sp.building.x1 - sp.building.x0) * 2, (sp.building.z1 - sp.building.z0) * 2);
    }
    this.baseMap = cv;
  }

  show(on) { this.el.hud.hidden = !on; }

  set(key, val, fn) {
    if (this.cache[key] === val) return;
    this.cache[key] = val;
    fn(val);
  }

  pager(text, secs = 7) {
    const e = this.el;
    e.pagerText.textContent = text;
    e.pager.classList.remove('idle', 'flash');
    void e.pager.offsetWidth;
    e.pager.classList.add('flash');
    this.pagerT = secs;
    G.audio?.pagerBeep();
  }

  missionTitle(t) { this.el.mtitle.textContent = t; this.el.mtitle.hidden = !t; this.mtitleT = 6; }

  setTimer(t) {
    if (t == null) { this.el.timer.hidden = true; this.cache.timer = null; return; }
    this.el.timer.hidden = false;
    const s = formatTime(t);
    this.set('timer', s, (v) => { this.el.timer.textContent = v; this.el.timer.classList.toggle('low', t < 10); });
  }

  big(title, sub = '', kind = '') {
    const e = this.el;
    e.bigTitle.textContent = title;
    e.bigSub.textContent = sub;
    e.big.className = kind;
    e.big.hidden = false;
    void e.big.offsetWidth;
    e.big.classList.add('show');
    this.bigT = 3.2;
  }

  toast(text) {
    if (!text) return;
    const d = document.createElement('div');
    d.className = 'toast';
    d.textContent = text;
    this.el.toasts.appendChild(d);
    while (this.el.toasts.children.length > 3) this.el.toasts.firstChild.remove();
    setTimeout(() => d.classList.add('out'), 2200);
    setTimeout(() => d.remove(), 2800);
  }

  cashPulse() {
    const c = this.el.cash;
    c.classList.add('pulse');
    clearTimeout(this.cpT);
    this.cpT = setTimeout(() => c.classList.remove('pulse'), 180);
  }

  flashWanted() {
    const w = this.el.wanted;
    w.classList.add('flash');
    clearTimeout(this.fwT);
    this.fwT = setTimeout(() => w.classList.remove('flash'), 1600);
  }

  radio(name) {
    const r = this.el.radio;
    if (!name) { r.hidden = true; return; }
    r.hidden = false;
    r.textContent = name;
  }

  vehicleName(n) {
    this.el.vname.textContent = n;
    this.el.vname.hidden = false;
    this.el.vname.style.opacity = 1;
    this.vnameT = 2.5;
  }

  buttons(inCar, nearCar) {
    const key = (inCar ? 'car' : 'foot') + (nearCar ? 1 : 0);
    this.set('btns', key, () => {
      const e = this.el;
      e.iconA.innerHTML = inCar ? ICONS.brake : ICONS.fire;
      e.labelA.textContent = inCar ? 'BRAKE' : 'FIRE';
      e.iconB.innerHTML = inCar ? ICONS.exit : ICONS.enter;
      e.labelB.textContent = inCar ? 'EXIT' : 'ENTER';
      e.iconC.innerHTML = inCar ? ICONS.horn : ICONS.swap;
      e.labelC.textContent = inCar ? 'HORN' : 'SWAP';
      e.btnB.classList.toggle('dim', !inCar && !nearCar);
    });
  }

  update(dt) {
    const pl = G.player;
    const e = this.el;
    if (!pl) return;
    this.set('cash', pl.cash, (v) => { e.cash.textContent = '$' + formatMoney(v); });
    this.set('mult', G.missions.multiplier, (v) => { e.mult.textContent = '×' + v; });
    this.set('lives', pl.lives, (v) => { e.lives.textContent = 'Lives ' + v; });
    const hp = clamp(pl.ped.health / 100, 0, 1);
    this.set('hp', Math.round(hp * 100), () => {
      e.health.style.transform = `scaleX(${hp})`;
      e.health.style.background = hp < 0.3 ? 'var(--bad)' : hp < 0.6 ? '#f2c230' : 'var(--good)';
    });
    const ar = clamp(pl.ped.armor / 100, 0, 1);
    this.set('ar', Math.round(ar * 100), () => { e.armorbar.hidden = ar <= 0; e.armor.style.transform = `scaleX(${ar})`; });
    const lvl = G.police.level;
    this.set('wanted', lvl, (v) => { e.lamps.forEach((l, i) => { l.className = i < v ? (i % 2 ? 'on b' : 'on') : ''; }); });
    const lost = lvl > 0 && !G.police.seen;
    this.set('lost', lost, (v) => e.wanted.classList.toggle('lost', v));
    // weapon chip
    const w = pl.weapon, ammo = pl.ammo[w];
    this.set('wpn', w + ':' + ammo, () => {
      const g = this.wCtx;
      g.clearRect(0, 0, 68, 68);
      drawIcon(g, w, 2, 2, 64);
      e.ammo.textContent = w === 'fists' ? '–' : String(ammo);
    });
    // pager fade
    if (this.pagerT > 0) { this.pagerT -= dt; if (this.pagerT <= 0) e.pager.classList.add('idle'); }
    if (this.mtitleT > 0) { this.mtitleT -= dt; if (this.mtitleT <= 0) e.mtitle.hidden = true; }
    if (this.bigT > 0) { this.bigT -= dt; if (this.bigT <= 0) e.big.hidden = true; }
    if (this.vnameT > 0) { this.vnameT -= dt; if (this.vnameT <= 0.6) e.vname.style.opacity = 0; if (this.vnameT <= 0) e.vname.hidden = true; }
    const portrait = innerHeight > innerWidth;
    this.set('rot', portrait && !this.rotateDismissed, (v) => { e.rotate.hidden = !v; });
    // minimap at 15 fps
    this.mapT -= dt;
    if (this.mapT <= 0) { this.mapT = 1 / 15; this.drawMinimap(); }
  }

  drawMinimap() {
    const g = this.mmCtx, W = 208, R = W / 2;
    const pl = G.player;
    const p = pl.pos();
    const scale = 2.2; // canvas px per tile-px... base map is 2px/tile, draw at 2.2x -> 4.4 px per tile
    const px = (p.x / TILE) * 2, pz = (p.z / TILE) * 2;
    g.save();
    g.clearRect(0, 0, W, W);
    g.beginPath(); g.arc(R, R, R, 0, Math.PI * 2); g.clip();
    g.fillStyle = '#1d4d66'; g.fillRect(0, 0, W, W);
    g.imageSmoothingEnabled = false;
    g.drawImage(this.baseMap, px - R / scale, pz - R / scale, W / scale, W / scale, 0, 0, W, W);
    const toMap = (x, z) => [R + ((x / TILE) * 2 - px) * scale, R + ((z / TILE) * 2 - pz) * scale];
    // police
    for (const v of G.vehicles) {
      if (!v.ai || (v.ai.mode !== 'pursuit' && v.ai.mode !== 'waiting')) continue;
      const [x, z] = toMap(v.x, v.z);
      g.fillStyle = (G.realTime * 4) % 2 < 1 ? '#ff3b3b' : '#3d7bff';
      g.fillRect(x - 4, z - 4, 8, 8);
    }
    // objective
    const t = G.missions.targetPos();
    if (t) {
      let [x, z] = toMap(t.x, t.z);
      const dx = x - R, dz = z - R, d = Math.hypot(dx, dz);
      const col = t.kind === 'phone' ? '#55e08a' : '#ffc61a';
      g.fillStyle = col; g.strokeStyle = '#000'; g.lineWidth = 2;
      if (d > R - 12) {
        x = R + (dx / d) * (R - 12); z = R + (dz / d) * (R - 12);
        const a = Math.atan2(dz, dx);
        g.save(); g.translate(x, z); g.rotate(a);
        g.beginPath(); g.moveTo(10, 0); g.lineTo(-6, -8); g.lineTo(-6, 8); g.closePath(); g.fill(); g.stroke();
        g.restore();
      } else {
        g.beginPath(); g.arc(x, z, 7, 0, Math.PI * 2); g.fill(); g.stroke();
      }
    }
    // player arrow
    const e = pl.inCar ? pl.vehicle : pl.ped;
    g.translate(R, R); g.rotate(e.h);
    g.fillStyle = '#fff'; g.strokeStyle = '#000'; g.lineWidth = 2;
    g.beginPath(); g.moveTo(10, 0); g.lineTo(-7, -7); g.lineTo(-3, 0); g.lineTo(-7, 7); g.closePath(); g.fill(); g.stroke();
    g.restore();
  }

  drawBigMap(cv) {
    const g = cv.getContext('2d');
    const S = cv.width;
    g.imageSmoothingEnabled = false;
    g.drawImage(this.baseMap, 0, 0, S, S);
    const k = S / (G.city.W * TILE);
    for (const ph of G.city.phones) { g.fillStyle = '#55e08a88'; g.fillRect(ph.x * k - 3, ph.z * k - 3, 6, 6); }
    const t = G.missions.targetPos();
    if (t) {
      g.fillStyle = t.kind === 'phone' ? '#55e08a' : '#ffc61a'; g.strokeStyle = '#000'; g.lineWidth = 3;
      g.beginPath(); g.arc(t.x * k, t.z * k, 9, 0, Math.PI * 2); g.fill(); g.stroke();
    }
    const p = G.player.pos();
    g.fillStyle = '#fff'; g.strokeStyle = '#000'; g.lineWidth = 3;
    g.beginPath(); g.arc(p.x * k, p.z * k, 8, 0, Math.PI * 2); g.fill(); g.stroke();
    g.font = '600 20px "Barlow Condensed", sans-serif';
    g.fillStyle = '#f3efe3'; g.strokeStyle = '#000'; g.lineWidth = 4;
    const label = (txt, x, z) => { g.strokeText(txt, x, z); g.fillText(txt, x, z); };
    for (const sp of Object.values(G.city.specials)) {
      const name = sp.building.special === 'police' ? 'Police' : sp.building.special === 'hospital' ? 'Hospital' : 'Paint & Go';
      label(name, sp.x * k + 8, sp.z * k - 8);
    }
  }

  showFps(fps, info) {
    this.el.fps.hidden = false;
    this.el.fps.textContent = `${fps} fps · ${info}`;
  }
}

export { WEAPONS };
