// All sound is synthesized with WebAudio: no audio files to download.
import { G } from './game.js';
import { clamp, rand, pick } from './util.js';

const NOTE = (n) => 440 * Math.pow(2, (n - 69) / 12);

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.sfxOn = true;
    this.musicOn = true;
    this.station = 0;
    this.lastShot = {};
  }

  init() {
    if (this.ctx) { this.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    this.ctx = ctx;
    this.comp = ctx.createDynamicsCompressor();
    this.comp.threshold.value = -16; this.comp.knee.value = 12; this.comp.ratio.value = 4;
    this.master = ctx.createGain();
    this.master.gain.value = 0.9;
    this.master.connect(this.comp).connect(ctx.destination);
    this.sfx = ctx.createGain(); this.sfx.gain.value = this.sfxOn ? 1 : 0; this.sfx.connect(this.master);
    this.mus = ctx.createGain(); this.mus.gain.value = 0; this.mus.connect(this.master);
    // white noise buffer
    const len = ctx.sampleRate * 1.5;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = rand() * 2 - 1;
    this.noise = buf;
    this.setupLoops();
    this.musicT = 0;
    this.step = 0;
    this.nextStepTime = 0;
    this.radioOn = false;
  }
  resume() { if (this.ctx && this.ctx.state !== 'running') this.ctx.resume(); }
  suspend() { if (this.ctx && this.ctx.state === 'running') this.ctx.suspend(); }
  setSfx(on) { this.sfxOn = on; if (this.sfx) this.sfx.gain.value = on ? 1 : 0; }
  setMusic(on) { this.musicOn = on; }

  // distance attenuation from the camera centre
  att(x, z, range = 70) {
    if (x == null || !G.cam) return 1;
    const d = Math.hypot(x - G.cam.cx, z - G.cam.cz);
    return clamp(1 - d / range, 0, 1) ** 1.4;
  }

  noiseSrc() {
    const s = this.ctx.createBufferSource();
    s.buffer = this.noise;
    s.loop = true;
    s.loopStart = rand();
    return s;
  }

  burst({ dur = 0.2, gain = 0.5, type = 'lowpass', freq = 1200, q = 0.7, freqEnd, attack = 0.002, x, z, range, bus }) {
    if (!this.ctx) return;
    const a = this.att(x, z, range);
    if (a <= 0.01) return;
    const t = this.ctx.currentTime;
    const src = this.noiseSrc();
    const f = this.ctx.createBiquadFilter();
    f.type = type; f.frequency.setValueAtTime(freq, t); f.Q.value = q;
    if (freqEnd) f.frequency.exponentialRampToValueAtTime(freqEnd, t + dur);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain * a, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(bus || this.sfx);
    src.start(t, rand());
    src.stop(t + dur + 0.05);
  }

  tone({ type = 'sine', freq = 440, freqEnd, dur = 0.2, gain = 0.3, attack = 0.005, x, z, range, when = 0, bus, detune = 0 }) {
    if (!this.ctx) return;
    const a = this.att(x, z, range);
    if (a <= 0.01) return;
    const t = this.ctx.currentTime + when;
    const o = this.ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    o.detune.value = detune;
    if (freqEnd) o.frequency.exponentialRampToValueAtTime(freqEnd, t + dur);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain * a, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(bus || this.sfx);
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  // ------------------------------------------------------------------ one-shots
  shot(kind, x, z) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    if (kind === 'smg' && this.lastShot.smg && now - this.lastShot.smg < 0.05) return;
    this.lastShot[kind] = now;
    if (kind === 'pistol') {
      this.burst({ dur: 0.16, gain: 0.55, freq: 2400, freqEnd: 300, x, z });
      this.tone({ type: 'triangle', freq: 160, freqEnd: 50, dur: 0.12, gain: 0.35, x, z });
    } else if (kind === 'smg') {
      this.burst({ dur: 0.09, gain: 0.42, freq: 3000, freqEnd: 500, x, z });
      this.tone({ type: 'square', freq: 120, freqEnd: 60, dur: 0.06, gain: 0.12, x, z });
    } else if (kind === 'shotgun') {
      this.burst({ dur: 0.38, gain: 0.8, freq: 1600, freqEnd: 120, x, z });
      this.tone({ type: 'sine', freq: 110, freqEnd: 35, dur: 0.3, gain: 0.5, x, z });
    } else if (kind === 'rocket') {
      this.burst({ dur: 0.7, gain: 0.45, type: 'bandpass', freq: 900, freqEnd: 300, q: 1.2, x, z });
    }
  }
  explosion(x, z) {
    this.burst({ dur: 1.6, gain: 1.0, freq: 900, freqEnd: 60, x, z, range: 140 });
    this.tone({ type: 'sine', freq: 90, freqEnd: 25, dur: 1.1, gain: 0.8, x, z, range: 140 });
    this.burst({ dur: 0.25, gain: 0.6, type: 'highpass', freq: 2500, x, z, range: 140 });
  }
  crash(intensity, x, z) {
    const g = clamp(intensity / 14, 0.15, 1);
    this.burst({ dur: 0.25 + g * 0.2, gain: 0.7 * g, freq: 1400, freqEnd: 200, x, z });
    this.tone({ type: 'square', freq: 90 + rand() * 60, freqEnd: 40, dur: 0.15, gain: 0.25 * g, x, z });
    if (g > 0.5) this.burst({ dur: 0.35, gain: 0.25 * g, type: 'bandpass', freq: 3500, q: 3, x, z });
  }
  punch(x, z) { this.burst({ dur: 0.12, gain: 0.5, freq: 700, freqEnd: 120, x, z }); }
  whoosh(x, z) { this.burst({ dur: 0.15, gain: 0.15, type: 'bandpass', freq: 900, freqEnd: 2200, q: 2, x, z }); }
  thud(x, z) {
    this.tone({ type: 'sine', freq: 140, freqEnd: 50, dur: 0.18, gain: 0.55, x, z });
    this.burst({ dur: 0.12, gain: 0.35, freq: 600, x, z });
  }
  flame(x, z) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    if (this.lastShot.flame && now - this.lastShot.flame < 0.09) return;
    this.lastShot.flame = now;
    this.burst({ dur: 0.18, gain: 0.3, type: 'bandpass', freq: 500, q: 0.6, x, z });
  }
  horn(x, z, dur = 0.4) {
    this.tone({ type: 'sawtooth', freq: 392, dur, gain: 0.16, attack: 0.02, x, z });
    this.tone({ type: 'sawtooth', freq: 494, dur, gain: 0.14, attack: 0.02, x, z });
  }
  pickup() {
    [0, 0.07, 0.14].forEach((w, i) => this.tone({ type: 'square', freq: NOTE(76 + i * 4), dur: 0.12, gain: 0.12, when: w }));
  }
  checkpoint() {
    this.tone({ type: 'triangle', freq: NOTE(84), dur: 0.15, gain: 0.25 });
    this.tone({ type: 'triangle', freq: NOTE(91), dur: 0.25, gain: 0.25, when: 0.09 });
  }
  pagerBeep() {
    for (let i = 0; i < 3; i++) this.tone({ type: 'square', freq: 2093, dur: 0.07, gain: 0.08, when: i * 0.11 });
  }
  wantedUp() {
    this.tone({ type: 'square', freq: 880, dur: 0.1, gain: 0.1 });
    this.tone({ type: 'square', freq: 660, dur: 0.14, gain: 0.1, when: 0.1 });
  }
  phoneRing(x, z) {
    for (let r = 0; r < 2; r++) for (let i = 0; i < 8; i++) {
      this.tone({ type: 'sine', freq: i % 2 ? 480 : 620, dur: 0.05, gain: 0.18, when: r * 0.45 + i * 0.045, x, z, range: 90 });
    }
  }
  missionPassed() {
    const seq = [72, 76, 79, 84];
    seq.forEach((n, i) => this.tone({ type: 'square', freq: NOTE(n), dur: 0.22, gain: 0.13, when: i * 0.11 }));
    this.tone({ type: 'triangle', freq: NOTE(48), dur: 0.6, gain: 0.25, when: 0.33 });
  }
  missionFailed() {
    [64, 61, 57].forEach((n, i) => this.tone({ type: 'square', freq: NOTE(n), dur: 0.25, gain: 0.12, when: i * 0.16 }));
  }
  wasted() { this.tone({ type: 'sawtooth', freq: 220, freqEnd: 55, dur: 1.4, gain: 0.25 }); }
  busted() {
    for (let i = 0; i < 4; i++) this.tone({ type: 'square', freq: i % 2 ? 784 : 988, dur: 0.18, gain: 0.12, when: i * 0.2 });
  }
  spray() { this.burst({ dur: 1.2, gain: 0.3, type: 'highpass', freq: 3000, attack: 0.1 }); }
  click() { this.tone({ type: 'square', freq: 1200, dur: 0.03, gain: 0.06 }); }

  // ------------------------------------------------------------------ continuous loops
  setupLoops() {
    const ctx = this.ctx;
    // engine
    this.eng = { o1: ctx.createOscillator(), o2: ctx.createOscillator(), f: ctx.createBiquadFilter(), g: ctx.createGain() };
    const e = this.eng;
    e.o1.type = 'sawtooth'; e.o2.type = 'square';
    e.f.type = 'lowpass'; e.f.frequency.value = 400; e.f.Q.value = 2;
    e.g.gain.value = 0;
    e.o1.connect(e.f); e.o2.connect(e.f); e.f.connect(e.g).connect(this.sfx);
    e.o1.start(); e.o2.start();
    // tyre squeal
    this.sk = { s: this.noiseSrc(), f: ctx.createBiquadFilter(), g: ctx.createGain() };
    this.sk.f.type = 'bandpass'; this.sk.f.frequency.value = 1700; this.sk.f.Q.value = 6;
    this.sk.g.gain.value = 0;
    this.sk.s.connect(this.sk.f).connect(this.sk.g).connect(this.sfx);
    this.sk.s.start();
    // siren
    this.sir = { o: ctx.createOscillator(), lfo: ctx.createOscillator(), lg: ctx.createGain(), g: ctx.createGain() };
    const s = this.sir;
    s.o.type = 'triangle'; s.o.frequency.value = 760;
    s.lfo.type = 'sine'; s.lfo.frequency.value = 0.55;
    s.lg.gain.value = 260;
    s.lfo.connect(s.lg).connect(s.o.frequency);
    s.g.gain.value = 0;
    s.o.connect(s.g).connect(this.sfx);
    s.o.start(); s.lfo.start();
  }

  engine(on, speedRatio, throttle) {
    if (!this.ctx) return;
    const e = this.eng, t = this.ctx.currentTime;
    if (!on) { e.g.gain.setTargetAtTime(0, t, 0.08); return; }
    const gears = 4;
    const r = clamp(speedRatio, 0, 1) * gears;
    const gear = Math.min(gears - 1, Math.floor(r));
    const frac = r - gear;
    const rpm = 0.22 + frac * 0.78 * (gear === 0 ? 1 : 0.85) + (gear === 0 ? 0 : 0.12);
    const f = 32 + rpm * 70 + throttle * 6;
    e.o1.frequency.setTargetAtTime(f, t, 0.05);
    e.o2.frequency.setTargetAtTime(f * 0.5, t, 0.05);
    e.f.frequency.setTargetAtTime(250 + rpm * 900 + throttle * 500, t, 0.08);
    e.g.gain.setTargetAtTime(0.06 + throttle * 0.06 + rpm * 0.03, t, 0.08);
  }
  skid(amount) {
    if (!this.ctx) return;
    this.sk.g.gain.setTargetAtTime(clamp(amount, 0, 1) * 0.22, this.ctx.currentTime, 0.05);
  }
  siren(level) {
    if (!this.ctx) return;
    this.sir.g.gain.setTargetAtTime(clamp(level, 0, 1) * 0.09, this.ctx.currentTime, 0.2);
  }

  // ------------------------------------------------------------------ radio
  radio(on) {
    this.radioOn = on && this.musicOn;
    if (!this.ctx) return;
    this.mus.gain.setTargetAtTime(this.radioOn ? 0.5 : 0, this.ctx.currentTime, 0.3);
    if (this.radioOn && this.nextStepTime < this.ctx.currentTime) this.nextStepTime = this.ctx.currentTime + 0.05;
  }
  nextStation() {
    this.station = (this.station + 1) % (STATIONS.length + 1);
    return this.stationName();
  }
  stationName() { return this.station === STATIONS.length ? 'Radio off' : STATIONS[this.station].name; }
  pickStation() { this.station = Math.floor(rand() * STATIONS.length); return this.stationName(); }

  tick() {
    if (!this.ctx || !this.radioOn || this.station >= STATIONS.length) return;
    const st = STATIONS[this.station];
    const spb = 60 / st.bpm / 4; // seconds per 16th
    const now = this.ctx.currentTime;
    if (this.nextStepTime < now - 0.2) this.nextStepTime = now + 0.02;
    while (this.nextStepTime < now + 0.18) {
      st.play(this, this.step, this.nextStepTime, spb);
      const swing = st.swing && this.step % 2 === 0 ? spb * st.swing : st.swing ? -spb * st.swing : 0;
      this.nextStepTime += spb + swing;
      this.step = (this.step + 1) % 256;
    }
  }

  // instruments (scheduled at absolute time t on the music bus)
  kick(t, g = 0.9) {
    const o = this.ctx.createOscillator(), a = this.ctx.createGain();
    o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.14);
    a.gain.setValueAtTime(g, t); a.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
    o.connect(a).connect(this.mus); o.start(t); o.stop(t + 0.32);
  }
  snare(t, g = 0.35) {
    const s = this.noiseSrc(), f = this.ctx.createBiquadFilter(), a = this.ctx.createGain();
    f.type = 'bandpass'; f.frequency.value = 1800; f.Q.value = 0.8;
    a.gain.setValueAtTime(g, t); a.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
    s.connect(f).connect(a).connect(this.mus); s.start(t, rand()); s.stop(t + 0.2);
    const o = this.ctx.createOscillator(), b = this.ctx.createGain();
    o.type = 'triangle'; o.frequency.setValueAtTime(220, t); o.frequency.exponentialRampToValueAtTime(140, t + 0.08);
    b.gain.setValueAtTime(g * 0.6, t); b.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
    o.connect(b).connect(this.mus); o.start(t); o.stop(t + 0.12);
  }
  hat(t, g = 0.12, open = false) {
    const s = this.noiseSrc(), f = this.ctx.createBiquadFilter(), a = this.ctx.createGain();
    f.type = 'highpass'; f.frequency.value = 7500;
    const d = open ? 0.22 : 0.05;
    a.gain.setValueAtTime(g, t); a.gain.exponentialRampToValueAtTime(0.001, t + d);
    s.connect(f).connect(a).connect(this.mus); s.start(t, rand()); s.stop(t + d + 0.02);
  }
  synth(t, note, dur, { type = 'sawtooth', g = 0.12, cutoff = 1800, q = 1, detune = 0, attack = 0.005, release = 0.08 } = {}) {
    const o = this.ctx.createOscillator(), f = this.ctx.createBiquadFilter(), a = this.ctx.createGain();
    o.type = type; o.frequency.value = NOTE(note); o.detune.value = detune;
    f.type = 'lowpass'; f.frequency.setValueAtTime(cutoff, t); f.frequency.exponentialRampToValueAtTime(Math.max(120, cutoff * 0.35), t + dur);
    f.Q.value = q;
    a.gain.setValueAtTime(0.0001, t);
    a.gain.exponentialRampToValueAtTime(g, t + attack);
    a.gain.setValueAtTime(g, t + Math.max(attack, dur - release));
    a.gain.exponentialRampToValueAtTime(0.0001, t + dur + release);
    o.connect(f).connect(a).connect(this.mus);
    o.start(t); o.stop(t + dur + release + 0.02);
  }
}

// ------------------------------------------------------------------ stations
// chord tables: arrays of midi notes
const STATIONS = [
  {
    name: 'KICKBACK 98.3',
    bpm: 118,
    prog: [[57, 60, 64], [53, 57, 60], [48, 52, 55], [55, 59, 62]],
    play(a, step, t, spb) {
      const bar = Math.floor(step / 16) % 4, s = step % 16;
      const ch = this.prog[bar];
      if (s % 4 === 0) a.kick(t, 0.75);
      if (s % 4 === 2) a.hat(t, 0.1, s === 14);
      if (s === 4 || s === 12) a.snare(t, 0.22);
      const bassPat = [0, null, 0, 12, null, 0, null, 7, 0, null, 0, 12, null, 7, 5, null];
      const b = bassPat[s];
      if (b != null) a.synth(t, ch[0] - 24 + b, spb * 0.9, { type: 'sawtooth', g: 0.13, cutoff: 700, q: 4 });
      if (s === 2 || s === 6 || s === 10) for (const n of ch) a.synth(t, n + 12, spb * 1.4, { type: 'sawtooth', g: 0.035, cutoff: 2600, detune: 8 });
      if (s % 2 === 0 && bar % 2 === 1) {
        const arp = [ch[0], ch[1], ch[2], ch[1] + 12];
        a.synth(t, arp[(s / 2) % 4] + 24, spb * 0.8, { type: 'square', g: 0.03, cutoff: 3000 });
      }
    },
  },
  {
    name: 'LATE SHIFT 88.1',
    bpm: 82,
    swing: 0.18,
    prog: [[62, 65, 69, 72], [55, 59, 62, 65], [60, 64, 67, 71], [57, 60, 64, 67]],
    play(a, step, t, spb) {
      const bar = Math.floor(step / 16) % 4, s = step % 16;
      const ch = this.prog[bar];
      if (s === 0 || s === 10) a.kick(t, 0.6);
      if (s === 4 || s === 12) a.snare(t, 0.16);
      if (s % 2 === 0) a.hat(t, 0.06);
      if (s === 0 || s === 8) for (const n of ch) a.synth(t, n, spb * 7, { type: 'triangle', g: 0.05, cutoff: 1500, attack: 0.02, release: 0.4 });
      if (s === 0 || s === 6 || s === 10) a.synth(t, ch[0] - 24, spb * 3, { type: 'sine', g: 0.22, cutoff: 600 });
      if ((s === 3 || s === 13) && rand() < 0.7) a.synth(t, pick(ch) + 12, spb * 2, { type: 'sine', g: 0.05, cutoff: 3000, release: 0.2 });
    },
  },
  {
    name: 'OVERDRIVE 101.7',
    bpm: 152,
    prog: [[52, 55, 59], [48, 52, 55], [50, 53, 57], [47, 50, 54]],
    melody: null,
    play(a, step, t, spb) {
      const bar = Math.floor(step / 16) % 4, s = step % 16;
      const ch = this.prog[bar];
      if (!this.melody || (step % 128 === 0 && s === 0)) {
        const scale = [0, 3, 5, 7, 10, 12, 15];
        this.melody = Array.from({ length: 32 }, () => (rand() < 0.65 ? 64 + pick(scale) : null));
      }
      if (s % 8 === 0) a.kick(t, 0.8);
      if (s % 8 === 4) a.snare(t, 0.3);
      if (s % 2 === 0) a.hat(t, 0.07);
      if (s % 2 === 0) a.synth(t, ch[0] - 12, spb * 1.6, { type: 'square', g: 0.07, cutoff: 900 });
      const m = this.melody[(step % 32)];
      if (m != null && s % 2 === 0) a.synth(t, m, spb * 1.8, { type: 'square', g: 0.04, cutoff: 3500 });
    },
  },
];
export const STATION_COUNT = STATIONS.length;
