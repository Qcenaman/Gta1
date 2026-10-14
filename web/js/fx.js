// Particles (smoke, fire, sparks, tracers), ground decals (skid marks, scorch) and
// floating score text. All particles are flat quads facing the top-down camera.
import * as THREE from 'three';
import { G } from './game.js';
import { rand, randRange, clamp } from './util.js';
import { SHADOW_DX, SHADOW_DZ } from './consts.js';

const PVS = /* glsl */ `
  attribute vec3 iPos;
  attribute vec3 iSize;   // w, h, rotation
  attribute vec4 iColor;
  attribute float iShape;
  varying vec2 vUv;
  varying vec4 vColor;
  varying float vShape;
  void main() {
    vUv = uv;
    vColor = iColor;
    vShape = iShape;
    float c = cos(iSize.z), s = sin(iSize.z);
    vec2 p = vec2(position.x * iSize.x, position.z * iSize.y);
    p = vec2(p.x * c - p.y * s, p.x * s + p.y * c);
    vec3 wp = iPos + vec3(p.x, 0.0, p.y);
    gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
  }`;
const PFS = /* glsl */ `
  uniform vec3 uTint;
  varying vec2 vUv;
  varying vec4 vColor;
  varying float vShape;
  void main() {
    vec2 d = vUv - 0.5;
    float a;
    if (vShape < 0.5) {            // soft puff
      float r = length(d) * 2.0;
      a = smoothstep(1.0, 0.25, r);
    } else if (vShape < 1.5) {     // hard rect with soft edges (sparks, tracers, debris)
      vec2 e = smoothstep(vec2(0.5), vec2(0.38), abs(d));
      a = e.x * e.y;
    } else if (vShape < 2.5) {     // ring (shockwave)
      float r = length(d) * 2.0;
      a = smoothstep(0.7, 0.85, r) * smoothstep(1.0, 0.9, r);
    } else {                        // hot core: bright centre
      float r = length(d) * 2.0;
      a = smoothstep(1.0, 0.0, r);
      a = a * a;
    }
    gl_FragColor = vec4(vColor.rgb * uTint, vColor.a * a);
  }`;

class QuadPool {
  constructor(max, blending) {
    this.max = max;
    const base = new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2);
    const g = new THREE.InstancedBufferGeometry();
    g.index = base.index;
    g.setAttribute('position', base.attributes.position);
    g.setAttribute('uv', base.attributes.uv);
    this.aPos = new THREE.InstancedBufferAttribute(new Float32Array(max * 3), 3).setUsage(THREE.DynamicDrawUsage);
    this.aSize = new THREE.InstancedBufferAttribute(new Float32Array(max * 3), 3).setUsage(THREE.DynamicDrawUsage);
    this.aColor = new THREE.InstancedBufferAttribute(new Float32Array(max * 4), 4).setUsage(THREE.DynamicDrawUsage);
    this.aShape = new THREE.InstancedBufferAttribute(new Float32Array(max), 1).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('iPos', this.aPos);
    g.setAttribute('iSize', this.aSize);
    g.setAttribute('iColor', this.aColor);
    g.setAttribute('iShape', this.aShape);
    g.instanceCount = 0;
    this.geo = g;
    this.mat = new THREE.ShaderMaterial({
      vertexShader: PVS, fragmentShader: PFS, transparent: true, depthWrite: false,
      blending, depthTest: true,
      uniforms: { uTint: { value: new THREE.Color(1, 1, 1) } },
    });
    this.mesh = new THREE.Mesh(g, this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = blending === THREE.AdditiveBlending ? 6 : 5;
    // particle state (structure of arrays)
    const F = (n = 1) => new Float32Array(max * n);
    this.p = { x: F(), y: F(), z: F(), vx: F(), vy: F(), vz: F(), life: F(), max: F(), s0: F(), s1: F(), sx: F(), rot: F(), vr: F(),
      c0: F(4), c1: F(4), drag: F(), grav: F(), shape: F(), stretch: F() };
    this.n = 0;
  }
  spawn(o) {
    if (this.n >= this.max) return;
    const i = this.n++;
    const p = this.p;
    p.x[i] = o.x; p.y[i] = o.y ?? 0.5; p.z[i] = o.z;
    p.vx[i] = o.vx || 0; p.vy[i] = o.vy || 0; p.vz[i] = o.vz || 0;
    p.life[i] = 0; p.max[i] = o.life || 1;
    p.s0[i] = o.size ?? 1; p.s1[i] = o.size1 ?? p.s0[i];
    p.sx[i] = o.aspect ?? 1;
    p.rot[i] = o.rot ?? rand() * 6.28; p.vr[i] = o.vr ?? 0;
    const c0 = o.color || [1, 1, 1, 1], c1 = o.color1 || [c0[0], c0[1], c0[2], 0];
    p.c0.set(c0, i * 4); p.c1.set(c1, i * 4);
    p.drag[i] = o.drag ?? 1; p.grav[i] = o.grav ?? 0; p.shape[i] = o.shape ?? 0;
    p.stretch[i] = o.stretch ? 1 : 0;
  }
  update(dt) {
    const p = this.p;
    let w = 0;
    const pos = this.aPos.array, siz = this.aSize.array, col = this.aColor.array, shp = this.aShape.array;
    for (let i = 0; i < this.n; i++) {
      p.life[i] += dt;
      if (p.life[i] >= p.max[i]) continue;
      const k = Math.exp(-p.drag[i] * dt);
      p.vx[i] *= k; p.vz[i] *= k; p.vy[i] = p.vy[i] * k + p.grav[i] * dt;
      p.x[i] += p.vx[i] * dt; p.y[i] += p.vy[i] * dt; p.z[i] += p.vz[i] * dt;
      if (p.y[i] < 0.05) { p.y[i] = 0.05; p.vy[i] *= -0.3; p.vx[i] *= 0.7; p.vz[i] *= 0.7; }
      p.rot[i] += p.vr[i] * dt;
      if (w !== i) {
        // compact
        for (const key of ['x', 'y', 'z', 'vx', 'vy', 'vz', 'life', 'max', 's0', 's1', 'sx', 'rot', 'vr', 'drag', 'grav', 'shape', 'stretch']) p[key][w] = p[key][i];
        for (let c = 0; c < 4; c++) { p.c0[w * 4 + c] = p.c0[i * 4 + c]; p.c1[w * 4 + c] = p.c1[i * 4 + c]; }
      }
      const t = p.life[w] / p.max[w];
      const s = p.s0[w] + (p.s1[w] - p.s0[w]) * t;
      pos[w * 3] = p.x[w]; pos[w * 3 + 1] = p.y[w]; pos[w * 3 + 2] = p.z[w];
      if (p.stretch[w]) {
        const sp = Math.hypot(p.vx[w], p.vz[w]);
        siz[w * 3] = s * (1 + sp * 0.04) * p.sx[w]; siz[w * 3 + 1] = s * 0.35; siz[w * 3 + 2] = Math.atan2(p.vz[w], p.vx[w]);
      } else {
        siz[w * 3] = s * p.sx[w]; siz[w * 3 + 1] = s; siz[w * 3 + 2] = p.rot[w];
      }
      for (let c = 0; c < 4; c++) col[w * 4 + c] = p.c0[w * 4 + c] + (p.c1[w * 4 + c] - p.c0[w * 4 + c]) * t;
      shp[w] = p.shape[w];
      w++;
    }
    this.n = w;
    this.geo.instanceCount = w;
    this.aPos.needsUpdate = true; this.aSize.needsUpdate = true; this.aColor.needsUpdate = true; this.aShape.needsUpdate = true;
    this.aPos.addUpdateRange?.(0, w * 3);
  }
}

// ring buffer of flat quads for skid marks & scorch decals
class Decals {
  constructor(max) {
    this.max = max;
    this.pos = new Float32Array(max * 4 * 3);
    this.col = new Float32Array(max * 4 * 4);
    this.uv = new Float32Array(max * 4 * 2);
    const idx = new Uint32Array(max * 6);
    for (let i = 0; i < max; i++) {
      idx.set([i * 4, i * 4 + 1, i * 4 + 2, i * 4, i * 4 + 2, i * 4 + 3], i * 6);
      this.uv.set([0, 0, 0, 1, 1, 1, 1, 0], i * 8);
    }
    const g = new THREE.BufferGeometry();
    this.aPos = new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage);
    this.aCol = new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.aPos);
    g.setAttribute('color', this.aCol);
    g.setAttribute('uv', new THREE.BufferAttribute(this.uv, 2));
    g.setIndex(new THREE.BufferAttribute(idx, 1));
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e6);
    this.geo = g;
    this.mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      vertexShader: /* glsl */ `
        attribute vec4 color; varying vec4 vC; varying vec2 vUv;
        void main(){ vC = color; vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: /* glsl */ `
        varying vec4 vC; varying vec2 vUv;
        void main(){
          float a = vC.a;
          if (vUv.x > 1.5) { } // unused
          gl_FragColor = vec4(vC.rgb, a);
        }`,
      polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
    });
    this.mesh = new THREE.Mesh(g, this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 2;
    this.i = 0;
  }
  quad(ax, az, bx, bz, cx, cz, dx, dz, y, color) {
    const i = this.i;
    this.i = (this.i + 1) % this.max;
    this.pos.set([ax, y, az, bx, y, bz, cx, y, cz, dx, y, dz], i * 12);
    for (let k = 0; k < 4; k++) this.col.set(color, i * 16 + k * 4);
    this.aPos.needsUpdate = true;
    this.aCol.needsUpdate = true;
  }
  segment(x0, z0, x1, z1, width, color, y = 0.016) {
    const dx = x1 - x0, dz = z1 - z0;
    const l = Math.hypot(dx, dz);
    if (l < 0.01) return;
    const px = (-dz / l) * width / 2, pz = (dx / l) * width / 2;
    this.quad(x0 - px, z0 - pz, x0 + px, z0 + pz, x1 + px, z1 + pz, x1 - px, z1 - pz, y, color);
  }
  blot(x, z, r, color, sides = 8) {
    // approximate disc as a star of quads (two crossed squares)
    for (let s = 0; s < 2; s++) {
      const a = s * Math.PI / 4 + rand();
      const c = Math.cos(a) * r, sn = Math.sin(a) * r;
      this.quad(x - c + sn, z - sn - c, x - c - sn, z - sn + c, x + c - sn, z + sn + c, x + c + sn, z + sn - c, 0.017, color);
    }
    void sides;
  }
}

export class FX {
  constructor(scene) {
    this.alpha = new QuadPool(1400, THREE.NormalBlending);
    this.add = new QuadPool(1200, THREE.AdditiveBlending);
    this.decals = new Decals(1600);
    scene.add(this.decals.mesh, this.alpha.mesh, this.add.mesh);
    this.shake = 0;
    this.popups = [];
  }
  setTint(tint) { this.alpha.mat.uniforms.uTint.value.copy(tint); }
  update(dt) {
    this.alpha.update(dt);
    this.add.update(dt);
    this.shake = Math.max(0, this.shake - dt * 2.2);
  }
  // --------------------------------------------------------------- effects
  smoke(x, y, z, size = 1.2, dark = 0.35, life = 1.6) {
    const g = dark;
    this.alpha.spawn({ x: x + randRange(-0.3, 0.3), y, z: z + randRange(-0.3, 0.3), vx: randRange(-0.6, 0.6) + 1.2, vy: randRange(1.5, 3), vz: randRange(-0.6, 0.6) + 0.6,
      life: life * randRange(0.7, 1.2), size, size1: size * 3, color: [g, g, g * 1.05, 0.55], color1: [g, g, g, 0], drag: 1.2, vr: randRange(-1, 1) });
  }
  fire(x, y, z, size = 1) {
    this.add.spawn({ x: x + randRange(-0.4, 0.4), y, z: z + randRange(-0.4, 0.4), vx: randRange(-0.5, 0.5), vy: randRange(2, 4), vz: randRange(-0.5, 0.5),
      life: randRange(0.35, 0.7), size: size * randRange(0.8, 1.3), size1: size * 0.3, color: [1, 0.75, 0.3, 0.9], color1: [0.9, 0.2, 0.05, 0], drag: 1.5, shape: 3 });
  }
  spark(x, y, z, n = 6, speed = 9, color = [1, 0.85, 0.4, 1]) {
    for (let i = 0; i < n; i++) {
      const a = rand() * Math.PI * 2, s = speed * randRange(0.3, 1);
      this.add.spawn({ x, y, z, vx: Math.cos(a) * s, vy: randRange(1, 5), vz: Math.sin(a) * s, life: randRange(0.15, 0.4), size: 0.25, color, color1: [1, 0.3, 0.1, 0], drag: 3, grav: -18, shape: 1, stretch: true });
    }
  }
  dust(x, z, n = 4, color = [0.7, 0.66, 0.58]) {
    for (let i = 0; i < n; i++) {
      this.alpha.spawn({ x: x + randRange(-0.3, 0.3), y: 0.4, z: z + randRange(-0.3, 0.3), vx: randRange(-2, 2), vy: randRange(0.5, 2), vz: randRange(-2, 2), life: randRange(0.4, 0.8), size: 0.5, size1: 1.4, color: [...color, 0.5], color1: [...color, 0], drag: 3 });
    }
  }
  tracer(x0, z0, x1, z1, y = 1.2, color = [1, 0.9, 0.55, 0.9]) {
    const dx = x1 - x0, dz = z1 - z0;
    const l = Math.hypot(dx, dz);
    this.add.spawn({ x: (x0 + x1) / 2, y, z: (z0 + z1) / 2, life: 0.06, size: 0.12, aspect: l / 0.12, rot: Math.atan2(dz, dx), color, color1: [color[0], color[1], color[2], 0], shape: 1, drag: 0 });
  }
  muzzle(x, y, z, ang, big = false) {
    const s = big ? 1.6 : 1;
    this.add.spawn({ x: x + Math.cos(ang) * 0.3, y, z: z + Math.sin(ang) * 0.3, life: 0.06, size: 0.55 * s, aspect: 1.8, rot: ang, color: [1, 0.85, 0.45, 1], color1: [1, 0.5, 0.2, 0], shape: 3, drag: 0 });
  }
  skid(x0, z0, x1, z1, alpha = 0.45) {
    this.decals.segment(x0, z0, x1, z1, 0.32, [0.06, 0.06, 0.07, alpha]);
  }
  scorch(x, z, r) {
    this.decals.blot(x, z, r, [0.05, 0.045, 0.04, 0.72]);
  }
  explosion(x, z, scale = 1) {
    const s = scale;
    // flash and shockwave
    this.add.spawn({ x, y: 2, z, life: 0.18, size: 12 * s, size1: 16 * s, color: [1, 0.9, 0.6, 0.9], color1: [1, 0.5, 0.2, 0], shape: 3, drag: 0 });
    this.add.spawn({ x, y: 0.3, z, life: 0.45, size: 2 * s, size1: 22 * s, color: [1, 0.85, 0.6, 0.6], color1: [1, 0.6, 0.3, 0], shape: 2, drag: 0 });
    for (let i = 0; i < 26 * s; i++) {
      const a = rand() * Math.PI * 2, sp = randRange(2, 9) * s;
      this.add.spawn({ x, y: randRange(0.5, 2), z, vx: Math.cos(a) * sp, vy: randRange(2, 9), vz: Math.sin(a) * sp, life: randRange(0.4, 0.9), size: randRange(2, 4) * s, size1: 0.6, color: [1, randRange(0.55, 0.85), 0.25, 1], color1: [0.8, 0.15, 0.05, 0], drag: 2.2, shape: 3 });
    }
    for (let i = 0; i < 14 * s; i++) {
      const a = rand() * Math.PI * 2, sp = randRange(1, 5) * s;
      this.alpha.spawn({ x, y: randRange(1, 3), z, vx: Math.cos(a) * sp + 1, vy: randRange(2, 6), vz: Math.sin(a) * sp + 0.6, life: randRange(1.6, 3), size: randRange(2, 3) * s, size1: 7 * s, color: [0.18, 0.17, 0.17, 0.75], color1: [0.32, 0.31, 0.3, 0], drag: 1.4, vr: randRange(-1, 1) });
    }
    for (let i = 0; i < 12; i++) {
      const a = rand() * Math.PI * 2, sp = randRange(6, 18) * s;
      this.alpha.spawn({ x, y: 1, z, vx: Math.cos(a) * sp, vy: randRange(5, 13), vz: Math.sin(a) * sp, life: randRange(0.6, 1.2), size: randRange(0.25, 0.5), color: [0.12, 0.12, 0.13, 1], color1: [0.12, 0.12, 0.13, 1], drag: 0.6, grav: -24, shape: 1, vr: randRange(-12, 12) });
    }
    this.spark(x, 1, z, 16, 16);
    this.scorch(x, z, 3.2 * s);
    this.shake = Math.min(1.2, this.shake + 0.8 * s);
  }
  splash(x, z) {
    for (let i = 0; i < 10; i++) {
      const a = rand() * Math.PI * 2, sp = randRange(1, 4);
      this.alpha.spawn({ x, y: -1, z, vx: Math.cos(a) * sp, vy: randRange(3, 6), vz: Math.sin(a) * sp, life: 0.7, size: 0.6, size1: 1.2, color: [0.85, 0.95, 0.98, 0.8], color1: [0.85, 0.95, 0.98, 0], grav: -14, drag: 1 });
    }
  }
  spray(x, z, color) {
    for (let i = 0; i < 3; i++) {
      this.alpha.spawn({ x: x + randRange(-2.5, 2.5), y: randRange(0.5, 2.5), z: z + randRange(-2.5, 2.5), vx: randRange(-1, 1), vy: randRange(0, 1), vz: randRange(-1, 1), life: 0.9, size: 1.2, size1: 2.6, color: [...color, 0.5], color1: [...color, 0], drag: 2 });
    }
  }
}

export { SHADOW_DX, SHADOW_DZ, clamp };
