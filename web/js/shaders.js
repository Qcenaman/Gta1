// GLSL for the static city: ground patterns, procedural windowed walls, water.
// All colours are authored in display (sRGB) space; ColorManagement is disabled.
import * as THREE from 'three';

export function makeNoiseTexture(size = 256) {
  const data = new Uint8Array(size * size * 4);
  const chans = [
    [6, 13], // r: broad blotches
    [16, 31], // g: medium
    [64, 128], // b: fine grain
    [24, 48], // a: medium-fine
  ];
  const lattice = (G, seed) => {
    const a = new Float32Array(G * G);
    let s = seed;
    for (let i = 0; i < a.length; i++) {
      s = (s * 1664525 + 1013904223) >>> 0;
      a[i] = s / 4294967296;
    }
    return a;
  };
  const sm = (t) => t * t * (3 - 2 * t);
  for (let c = 0; c < 4; c++) {
    const octs = chans[c].map((G, oi) => ({ G, l: lattice(G, 1234 + c * 97 + oi * 31) }));
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
      let v = 0, wsum = 0;
      octs.forEach((o, oi) => {
        const fx = (x / size) * o.G, fy = (y / size) * o.G;
        const ix = Math.floor(fx), iy = Math.floor(fy);
        const tx = sm(fx - ix), ty = sm(fy - iy);
        const G = o.G;
        const a = o.l[(iy % G) * G + (ix % G)], b = o.l[(iy % G) * G + ((ix + 1) % G)];
        const cc = o.l[((iy + 1) % G) * G + (ix % G)], d = o.l[((iy + 1) % G) * G + ((ix + 1) % G)];
        const w = oi === 0 ? 0.65 : 0.35;
        v += w * ((a * (1 - tx) + b * tx) * (1 - ty) + (cc * (1 - tx) + d * tx) * ty);
        wsum += w;
      });
      data[(y * size + x) * 4 + c] = Math.round((v / wsum) * 255);
    }
  }
  const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return tex;
}

const commonUniforms = () => ({
  uNoise: { value: null },
  uTime: { value: 0 },
  uNight: { value: 0 },
  uTint: { value: new THREE.Color(1, 1, 1) },
});

// ---------------------------------------------------------------- ground / flat surfaces
// pattern ids: 0 asphalt, 1 paving, 2 grass, 3 plain, 4 planks, 5 sand, 6 plaza stone,
// 7 concrete, 8 roof gravel, 9 marking paint, 10 roof shingles, 11 metal roof, 12 dirt
export function makeGroundMaterial(noise) {
  const u = commonUniforms();
  u.uNoise.value = noise;
  return new THREE.ShaderMaterial({
    uniforms: u,
    vertexShader: /* glsl */ `
      attribute vec3 color;
      attribute float pattern;
      varying vec3 vColor;
      varying float vPat;
      varying vec3 vPos;
      void main() {
        vColor = color;
        vPat = pattern;
        vPos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D uNoise;
      uniform float uNight;
      uniform vec3 uTint;
      varying vec3 vColor;
      varying float vPat;
      varying vec3 vPos;
      float lineMask(vec2 f, float w) {
        vec2 d = min(f, 1.0 - f);
        float m = min(d.x, d.y);
        return 1.0 - smoothstep(w, w + 0.02, m);
      }
      void main() {
        vec2 xz = vPos.xz;
        vec4 n1 = texture2D(uNoise, xz * 0.031);
        vec4 n2 = texture2D(uNoise, xz * 0.17);
        float fine = texture2D(uNoise, xz * 0.9).b;
        vec3 c = vColor;
        float p = vPat;
        if (p < 0.5) {            // asphalt
          c *= 0.86 + 0.16 * n1.r + 0.12 * (fine - 0.5) + 0.06 * (n2.g - 0.5);
          c *= 1.0 - 0.18 * smoothstep(0.72, 0.9, n1.a); // worn patches
        } else if (p < 1.5) {     // sidewalk paving, 1.33 m slabs
          vec2 g = xz * 0.75;
          float l = lineMask(fract(g), 0.025);
          float slab = texture2D(uNoise, floor(g) * 0.071).g;
          c *= (0.9 + 0.12 * slab + 0.06 * (fine - 0.5)) * (1.0 - 0.16 * l);
        } else if (p < 2.5) {     // grass
          float k = 0.78 + 0.34 * n1.r + 0.16 * (fine - 0.5);
          c *= k;
          c = mix(c, c * vec3(1.18, 1.1, 0.72), smoothstep(0.62, 0.8, n2.a) * 0.6);
          c *= 1.0 - 0.12 * smoothstep(0.65, 0.85, n1.g);
        } else if (p < 3.5) {     // plain with slight grain
          c *= 0.95 + 0.08 * (fine - 0.5) + 0.05 * (n1.r - 0.5);
        } else if (p < 4.5) {     // wooden planks along x
          float row = floor(xz.y * 3.0);
          float plank = texture2D(uNoise, vec2(row * 0.137, floor(xz.x * 0.25 + row * 0.5) * 0.11)).r;
          float seam = 1.0 - smoothstep(0.0, 0.06, min(fract(xz.y * 3.0), 1.0 - fract(xz.y * 3.0)));
          float grain = texture2D(uNoise, vec2(xz.x * 0.35, xz.y * 6.0)).b;
          c *= (0.82 + 0.3 * plank + 0.1 * (grain - 0.5)) * (1.0 - 0.35 * seam);
        } else if (p < 5.5) {     // sand
          c *= 0.92 + 0.1 * n1.r + 0.1 * (fine - 0.5);
        } else if (p < 6.5) {     // plaza stone, 2 m tiles offset rows
          vec2 g = xz * 0.5;
          g.x += step(0.5, fract(g.y * 0.5)) * 0.5;
          float l = lineMask(fract(g), 0.018);
          float st = texture2D(uNoise, floor(g) * 0.113).a;
          c *= (0.9 + 0.14 * st + 0.05 * (fine - 0.5)) * (1.0 - 0.14 * l);
        } else if (p < 7.5) {     // concrete / alley
          c *= 0.86 + 0.18 * n1.g + 0.1 * (fine - 0.5);
          c *= 1.0 - 0.15 * smoothstep(0.7, 0.88, n2.r);
        } else if (p < 8.5) {     // roof gravel
          c *= 0.88 + 0.12 * n1.r + 0.16 * (fine - 0.5);
        } else if (p < 9.5) {     // road paint (slightly worn)
          c *= 0.9 + 0.1 * fine;
          c = mix(c, c * 0.72, smoothstep(0.6, 0.85, n2.g) * 0.5);
        } else if (p < 10.5) {    // shingles: rows along local slope (use y)
          float row = fract(vPos.y * 2.2 + (xz.x + xz.y) * 0.0);
          c *= 0.86 + 0.14 * smoothstep(0.0, 0.25, row) + 0.08 * (fine - 0.5);
        } else if (p < 11.5) {    // corrugated metal roof stripes along x
          float s = 0.5 + 0.5 * sin(xz.x * 9.0);
          c *= 0.84 + 0.16 * s + 0.06 * (fine - 0.5);
        } else {                  // dirt
          c *= 0.8 + 0.3 * n1.r + 0.12 * (fine - 0.5);
        }
        c *= uTint;
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
}

// ---------------------------------------------------------------- walls with windows
export function makeWallMaterial(noise) {
  const u = commonUniforms();
  u.uNoise.value = noise;
  return new THREE.ShaderMaterial({
    uniforms: u,
    vertexShader: /* glsl */ `
      attribute vec3 color;
      attribute vec2 uvw;      // metres along wall, metres up
      attribute vec4 wstyle;   // floorH, bayW, winW, winH (fractions)
      attribute vec3 wcolor;   // window colour
      attribute vec4 wkind;    // kind, seed, wallTop, shade
      varying vec3 vColor;
      varying vec2 vUv;
      varying vec4 vStyle;
      varying vec3 vWin;
      varying vec4 vKind;
      void main() {
        vColor = color; vUv = uvw; vStyle = wstyle; vWin = wcolor; vKind = wkind;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D uNoise;
      uniform float uNight;
      uniform vec3 uTint;
      varying vec3 vColor;
      varying vec2 vUv;
      varying vec4 vStyle;
      varying vec3 vWin;
      varying vec4 vKind;
      float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float inside(float d, float halfW) {
        float w = fwidth(d) * 0.8 + 1e-4;
        return 1.0 - smoothstep(halfW - w, halfW + w, d);
      }
      void main() {
        float kind = vKind.x;
        float seed = vKind.y;
        float top = vKind.z;
        vec3 base = vColor;
        vec2 g = vec2(vUv.x / vStyle.y, vUv.y / vStyle.x);
        vec2 f = fract(g);
        vec2 cell = floor(g);
        float grain = texture2D(uNoise, vUv * vec2(0.35, 0.5)).b;
        base *= 0.94 + 0.1 * (grain - 0.5);
        float win = 0.0;
        vec3 wc = vWin;
        if (kind < 0.5) {               // standard punched windows
          win = inside(abs(f.x - 0.5), vStyle.z * 0.5) * inside(abs(f.y - 0.56), vStyle.w * 0.5);
          wc *= 0.85 + 0.3 * h21(cell + seed * 17.0);
        } else if (kind < 1.5) {        // glass curtain wall
          win = inside(abs(f.x - 0.5), 0.46) * inside(abs(f.y - 0.5), 0.43);
          float sky = 0.75 + 0.35 * fract(vUv.y * 0.03 + seed) + 0.15 * h21(cell + seed);
          wc *= sky;
        } else if (kind < 2.5) {        // corrugated / container
          base *= 0.82 + 0.18 * step(0.5, fract(vUv.x * 1.6));
          win = 0.0;
        } else if (kind < 3.5) {        // brick with framed windows
          float course = fract(vUv.y * 4.0);
          base *= 0.93 + 0.07 * smoothstep(0.0, 0.15, course);
          float frame = inside(abs(f.x - 0.5), vStyle.z * 0.5 + 0.06) * inside(abs(f.y - 0.56), vStyle.w * 0.5 + 0.05);
          base = mix(base, vec3(0.86, 0.83, 0.76), frame);
          win = inside(abs(f.x - 0.5), vStyle.z * 0.5) * inside(abs(f.y - 0.56), vStyle.w * 0.5);
        } else {                        // houses: small windows, siding lines
          base *= 0.95 + 0.05 * step(0.5, fract(vUv.y * 3.0));
          win = inside(abs(f.x - 0.5), vStyle.z * 0.5) * inside(abs(f.y - 0.55), vStyle.w * 0.5);
        }
        // shop fronts on the ground floor for commercial kinds
        if (cell.y < 0.5 && (kind < 0.5 || (kind > 2.5 && kind < 3.5))) {
          float shop = step(0.5, h21(vec2(seed, 3.0)));
          if (shop > 0.5) {
            win = inside(abs(f.x - 0.5), 0.44) * inside(abs(f.y - 0.42), 0.3);
            wc = vec3(0.24, 0.3, 0.34) * (0.9 + 0.3 * h21(cell + 7.0));
            float awn = inside(abs(vUv.y - vStyle.x * 0.86), 0.18);
            vec3 awc = mix(vec3(0.62, 0.16, 0.14), vec3(0.15, 0.4, 0.3), step(0.5, h21(vec2(seed, 9.0))));
            base = mix(base, awc, awn);
          }
        }
        // lit windows at night
        float lit = step(0.58, h21(cell * 1.37 + seed * 31.0));
        wc = mix(wc, vec3(1.0, 0.82, 0.48) * (0.85 + 0.3 * h21(cell + 2.0)), lit * uNight);
        vec3 c = mix(base, wc, win);
        // cornice at the top and plinth at the bottom
        c *= 1.0 - 0.22 * inside(abs(vUv.y - (top - 0.25)), 0.25);
        c *= 1.0 - 0.18 * (1.0 - smoothstep(0.0, 0.5, vUv.y));
        // ambient occlusion towards the ground
        c *= mix(0.72, 1.0, smoothstep(0.0, 3.0, vUv.y));
        c *= vKind.w;
        c *= mix(uTint, vec3(1.0), win * lit * uNight);
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
}

// ---------------------------------------------------------------- water
export function makeWaterMaterial(noise) {
  const u = commonUniforms();
  u.uNoise.value = noise;
  return new THREE.ShaderMaterial({
    uniforms: u,
    vertexShader: /* glsl */ `
      attribute float shore;
      varying float vShore;
      varying vec2 vXZ;
      void main() {
        vShore = shore;
        vXZ = position.xz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D uNoise;
      uniform float uTime;
      uniform vec3 uTint;
      varying float vShore;
      varying vec2 vXZ;
      void main() {
        vec2 p = vXZ;
        float a = texture2D(uNoise, p * 0.045 + vec2(uTime * 0.012, uTime * 0.007)).r;
        float b = texture2D(uNoise, p * 0.11 - vec2(uTime * 0.02, -uTime * 0.013)).g;
        float c2 = texture2D(uNoise, p * 0.36 + vec2(uTime * 0.05, uTime * 0.03)).b;
        float depth = smoothstep(0.0, 4.0, vShore);
        vec3 shallow = vec3(0.2, 0.52, 0.58);
        vec3 deep = vec3(0.07, 0.25, 0.38);
        vec3 col = mix(shallow, deep, depth);
        col *= 0.88 + 0.22 * a;
        float ripple = smoothstep(0.62, 0.7, b * 0.6 + c2 * 0.5);
        col = mix(col, vec3(0.62, 0.8, 0.84), ripple * 0.35);
        float foamBand = 1.0 - smoothstep(0.0, 0.55 + 0.25 * sin(uTime * 1.3 + p.x * 0.3 + p.y * 0.2), vShore);
        float foam = foamBand * smoothstep(0.35, 0.65, c2 + 0.25 * a);
        col = mix(col, vec3(0.9, 0.96, 0.95), foam * 0.85);
        gl_FragColor = vec4(col * uTint, 1.0);
      }`,
  });
}
