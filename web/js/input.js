// Touch (floating stick + buttons) and keyboard input.
import { clamp } from './util.js';

export class Input {
  constructor() {
    this.stick = { x: 0, y: 0, active: false, id: null, ox: 0, oy: 0 };
    this.keys = new Set();
    this.held = { a: false, c: false };
    this.edges = new Set();
    this.touchMode = false;
    this.R = 56;
    this.bindKeyboard();
  }

  /** read and clear a one-shot press */
  take(name) {
    if (this.edges.has(name)) { this.edges.delete(name); return true; }
    return false;
  }
  clearEdges() { this.edges.clear(); }

  press(name) { this.edges.add(name); }

  bindKeyboard() {
    const map = {
      Space: 'a', KeyJ: 'a',
      Enter: 'b', KeyE: 'b', KeyF: 'b',
      KeyQ: 'weapon', Tab: 'weapon',
      KeyH: 'horn',
      KeyR: 'radio',
      KeyP: 'pause', Escape: 'pause',
      KeyM: 'map',
    };
    addEventListener('keydown', (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT')) return;
      const c = e.code;
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(c)) e.preventDefault();
      if (!this.keys.has(c)) {
        const m = map[c];
        if (m) this.press(m);
      }
      this.keys.add(c);
      this.touchMode = false;
    });
    addEventListener('keyup', (e) => this.keys.delete(e.code));
    addEventListener('blur', () => { this.keys.clear(); this.resetStick(); this.held.a = this.held.c = false; });
  }

  /** wire the on-screen controls */
  bindTouch(zone, base, knob, buttons) {
    this.zone = zone; this.base = base; this.knob = knob;
    const onDown = (e) => {
      if (this.stick.id !== null) return;
      e.preventDefault();
      this.touchMode = true;
      this.stick.id = e.pointerId;
      this.stick.active = true;
      const r = zone.getBoundingClientRect();
      this.stick.ox = e.clientX; this.stick.oy = e.clientY;
      base.style.transform = `translate(${e.clientX - r.left}px, ${e.clientY - r.top}px)`;
      base.classList.add('on');
      try { zone.setPointerCapture?.(e.pointerId); } catch { /* synthetic or stale pointer */ }
      this.moveStick(e);
    };
    const onMove = (e) => { if (e.pointerId === this.stick.id) { e.preventDefault(); this.moveStick(e); } };
    const onUp = (e) => { if (e.pointerId === this.stick.id) this.resetStick(); };
    zone.addEventListener('pointerdown', onDown);
    zone.addEventListener('pointermove', onMove);
    zone.addEventListener('pointerup', onUp);
    zone.addEventListener('pointercancel', onUp);
    zone.addEventListener('lostpointercapture', onUp);
    for (const [el, name, kind] of buttons) {
      const down = (e) => {
        e.preventDefault();
        this.touchMode = true;
        el.classList.add('down');
        try { el.setPointerCapture?.(e.pointerId); } catch { /* ignore */ }
        if (kind === 'hold') this.held[name] = true;
        this.press(name);
        navigator.vibrate?.(8);
      };
      const up = (e) => {
        e.preventDefault?.();
        el.classList.remove('down');
        if (kind === 'hold') this.held[name] = false;
      };
      el.addEventListener('pointerdown', down);
      el.addEventListener('pointerup', up);
      el.addEventListener('pointercancel', up);
      el.addEventListener('lostpointercapture', up);
      el.addEventListener('contextmenu', (e) => e.preventDefault());
    }
  }

  moveStick(e) {
    let dx = e.clientX - this.stick.ox, dy = e.clientY - this.stick.oy;
    const d = Math.hypot(dx, dy);
    const R = this.R;
    if (d > R) {
      // drag the base along so the stick never "runs out"
      const over = d - R;
      this.stick.ox += (dx / d) * over;
      this.stick.oy += (dy / d) * over;
      const r = this.zone.getBoundingClientRect();
      this.base.style.transform = `translate(${this.stick.ox - r.left}px, ${this.stick.oy - r.top}px)`;
      dx = (dx / d) * R; dy = (dy / d) * R;
    }
    this.stick.x = dx / R;
    this.stick.y = dy / R;
    this.knob.style.transform = `translate(${dx}px, ${dy}px)`;
  }

  resetStick() {
    this.stick.id = null;
    this.stick.active = false;
    this.stick.x = this.stick.y = 0;
    if (this.knob) this.knob.style.transform = 'translate(0px, 0px)';
    this.base?.classList.remove('on');
  }

  /** combined movement vector in screen space (x right, y down), magnitude 0..1 */
  move() {
    let x = 0, y = 0;
    const k = this.keys;
    if (k.has('KeyA') || k.has('ArrowLeft')) x -= 1;
    if (k.has('KeyD') || k.has('ArrowRight')) x += 1;
    if (k.has('KeyW') || k.has('ArrowUp')) y -= 1;
    if (k.has('KeyS') || k.has('ArrowDown')) y += 1;
    if (x || y) {
      const l = Math.hypot(x, y);
      return { x: x / l, y: y / l, mag: 1, keyboard: true };
    }
    const s = this.stick;
    const mag = Math.hypot(s.x, s.y);
    if (mag < 0.14) return { x: 0, y: 0, mag: 0, keyboard: false };
    const m = clamp((mag - 0.14) / 0.86, 0, 1);
    return { x: (s.x / mag) * m, y: (s.y / mag) * m, mag: m, keyboard: false };
  }

  get a() { return this.held.a || this.keys.has('Space') || this.keys.has('KeyJ'); }
  get c() { return this.held.c || this.keys.has('KeyH'); }
  get handbrake() { return this.keys.has('ShiftLeft') || this.keys.has('ShiftRight'); }
  get keyboardDrive() { return this.keys.size > 0 && !this.touchMode; }
}
