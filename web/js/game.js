// Shared game context. Modules import G and read/write the parts they own.
export const G = {
  scene: null,
  camera: null,
  renderer: null,
  city: null,
  q: null, // tile queries
  world: null,
  time: 0, // simulation seconds
  realTime: 0,
  state: 'title', // title | playing | paused | dead | busted | gameover
  player: null,
  vehicles: [],
  peds: [],
  projectiles: [],
  fx: null,
  audio: null,
  hud: null,
  input: null,
  police: null,
  missions: null,
  traffic: null,
  pickups: null,
  pedRender: null,
  cam: null,
  settings: {
    steering: 'direct', // direct | classic
    sound: true,
    music: true,
    quality: 'auto', // auto | high | low
    leftHanded: false,
    daytime: 'cycle', // cycle | day | night
  },
  stats: { kills: 0, cops: 0, cars: 0, missions: 0 },
  light: { night: 0, tint: null }, // set by main: 0 = noon, 1 = midnight
  events: {}, // hook functions set by main: crash, vehicleExploded, pedKilled, pedHurt, shots
  nextId: 1,
};

export function uid() { return G.nextId++; }
