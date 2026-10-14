// Shared constants: tile types, district ids, palettes.

export const TILE = 4; // metres per tile
export const MAP_W = 160;
export const MAP_H = 160;

export const T = {
  WATER: 0,
  ROAD: 1,
  SIDEWALK: 2,
  BUILDING: 3,
  GRASS: 4,
  PLAZA: 5,
  ALLEY: 6,
  PARKING: 7,
  DOCK: 8,
  BRIDGE: 9,
  SAND: 10,
  WALL: 11,
};

export const SOLID = new Uint8Array(16);
SOLID[T.WATER] = 1;
SOLID[T.BUILDING] = 1;
SOLID[T.WALL] = 1;

// pedestrians happily walk on these
export const WALKABLE = new Uint8Array(16);
for (const t of [T.SIDEWALK, T.GRASS, T.PLAZA, T.ALLEY, T.PARKING, T.DOCK, T.SAND]) WALKABLE[t] = 1;

// cost for the police route-finding field (0 = impassable)
export const DRIVE_COST = new Uint8Array(16);
DRIVE_COST[T.ROAD] = 2;
DRIVE_COST[T.BRIDGE] = 2;
DRIVE_COST[T.ALLEY] = 3;
DRIVE_COST[T.PARKING] = 3;
DRIVE_COST[T.PLAZA] = 3;
DRIVE_COST[T.DOCK] = 3;
DRIVE_COST[T.SIDEWALK] = 4;
DRIVE_COST[T.GRASS] = 6;
DRIVE_COST[T.SAND] = 6;

export const D = {
  DOWNTOWN: 0,
  COMMERCIAL: 1,
  RESIDENTIAL: 2,
  INDUSTRIAL: 3,
  PARK: 4,
  WATERFRONT: 5,
  COAST: 6,
};

export const DISTRICT_NAMES = ['Downtown', 'Midtown', 'Elm Heights', 'Dockside', 'Greenway', 'Riverside', 'The Shore'];

// light comes from the north-west, so shadows fall to the south-east
export const SHADOW_DX = 0.42;
export const SHADOW_DZ = 0.32;

export const LIGHT = { x: -0.55, z: -0.42 }; // horizontal direction *towards* the light

export const GROUND_Y = 0;
export const WATER_Y = -1.3;
