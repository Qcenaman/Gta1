// Straight-down perspective camera that rises with speed and leads the car.
import { clamp, lerp, damp, smoothstep } from './util.js';
import { G } from './game.js';

export class CameraRig {
  constructor(camera) {
    this.camera = camera;
    this.x = 0; this.z = 0; this.h = 60;
    this.lx = 0; this.lz = 0;
    this.vfov = 38;
    this.aspect = 2;
    this.halfW = 40; this.halfH = 20;
    this.zoom = 1;
    camera.up.set(0, 0, -1);
  }

  resize(w, h) {
    this.aspect = w / h;
    this.camera.aspect = this.aspect;
    this.camera.fov = this.vfov;
    this.camera.updateProjectionMatrix();
  }

  heightForSpan(span) {
    const t = Math.tan((this.vfov * Math.PI) / 360);
    if (this.aspect >= 1) return span / 2 / t;
    // portrait: keep the narrow horizontal span readable
    return (span * 0.82) / 2 / (t * this.aspect);
  }

  snap(x, z, span = 34) {
    this.x = x; this.z = z;
    this.lx = this.lz = 0;
    this.h = this.heightForSpan(span);
    this.apply(0, 0);
  }

  update(dt, t) {
    const sp = t.inCar ? t.speed : 0;
    const span = (t.inCar ? lerp(44, 92, smoothstep(2, 40, sp)) : 38) * this.zoom;
    const hT = clamp(this.heightForSpan(span), 30 * Math.min(1, this.zoom), 190);
    this.h += (hT - this.h) * damp(t.inCar ? 1.6 : 2.4, dt);
    // look ahead along the velocity
    let tlx = 0, tlz = 0;
    if (t.inCar) {
      const k = 0.62;
      tlx = t.vx * k; tlz = t.vz * k;
      const m = Math.hypot(tlx, tlz), lim = span * 0.3;
      if (m > lim) { tlx *= lim / m; tlz *= lim / m; }
    }
    this.lx += (tlx - this.lx) * damp(2.2, dt);
    this.lz += (tlz - this.lz) * damp(2.2, dt);
    this.x += (t.x - this.x) * damp(10, dt);
    this.z += (t.z - this.z) * damp(10, dt);
    const sh = G.fx ? G.fx.shake : 0;
    this.apply((Math.random() - 0.5) * sh * 1.6, (Math.random() - 0.5) * sh * 1.6);
  }

  flyover(time) {
    const c = G.city;
    const W = c.W * 4, H = c.H * 4;
    const a = time * 0.035;
    this.x = W * 0.5 + Math.cos(a) * W * 0.22;
    this.z = H * 0.42 + Math.sin(a * 1.3) * H * 0.2;
    this.h = this.heightForSpan(70);
    this.lx = this.lz = 0;
    this.apply(0, 0);
  }

  apply(ox, oz) {
    const cx = this.x + this.lx + ox, cz = this.z + this.lz + oz;
    this.camera.position.set(cx, this.h, cz);
    this.camera.lookAt(cx, 0, cz);
    const t = Math.tan((this.vfov * Math.PI) / 360);
    this.halfH = this.h * t;
    this.halfW = this.halfH * this.aspect;
    this.cx = cx; this.cz = cz;
  }
}
