# Crosstown Heat

A top-down open-city crime game for Android phones, built as a love letter to the very first GTA:
a 3D city seen from straight above, the camera rising as you speed up, buildings leaning out
towards the screen edges, ringing payphones handing out jobs and the cops never far behind.

Everything here is original — city, cars, characters, jobs and sound (all synthesized in code).

![Crosstown Heat](docs/icon.png)

## Play it

- **Android app:** download [`apk/CrosstownHeat.apk`](apk/CrosstownHeat.apk) (or the file attached to the
  [latest release](../../releases/latest)) on your phone and open it. Android will ask you to allow
  installs from your browser or file manager the first time.
- **In the browser:** the `gh-pages` branch holds the web build. Turn on GitHub Pages for this repo
  (Settings → Pages → Deploy from branch → `gh-pages` / root) and it will be playable at
  `https://qcenaman.github.io/Gta1/`. Add it to your home screen for a full-screen, offline-capable app.

Hold the phone sideways for the best view.

## How to play

| Action | Touch | Keyboard |
| --- | --- | --- |
| Move / steer | Drag on the left half of the screen | WASD / arrows |
| Fire (on foot) | **FIRE** | Space |
| Brake / reverse (in a car) | **BRAKE** (hold) | Space / S |
| Enter or leave a car | **ENTER** / **EXIT** | E |
| Swap weapon / horn | **SWAP** / **HORN** | Q / H |
| Change radio station | Tap the station name | R |
| Map / pause | Tap the minimap / ‖ | M / P |

- **Jobs:** a payphone rings somewhere in the city. Follow the green arrow and walk up to it. Ten story
  jobs (deliveries, car thefts, a getaway, a race, a car bomb, a bank job, an armored truck), then
  endless random work. Every job done raises your cash multiplier.
- **Heat:** crimes that police witness light up the siren lamps (up to five). Stay out of sight to cool
  off, grab a bribe badge, or drive onto a **Paint & Go** pad for a $500 respray.
- **Crates** around the city hold pistols, SMGs, shotguns, rockets, a flamethrower, health, armor and cash.
- You have four lives; every $50,000 earns another.

Steering defaults to *Point* (the car turns toward the stick). *Classic* (up = gas, sideways = steer)
and a left-handed layout are in Settings.

## What's inside

- `web/` — the game: plain ES modules on top of [three.js](https://threejs.org) r170.
  - `citygen.js` generates the island city: river, bridges, avenues, districts, lots, parks, docks
    and a lane graph for traffic.
  - `world3d.js` + `shaders.js` turn it into ~a dozen chunked draw calls: procedural asphalt, paving,
    windowed walls, roofs with rooftop clutter, trees, animated water and stencil-merged shadows.
  - `vehicles.js` arcade car physics with drift, collisions, damage, fire and explosions;
    `traffic.js`, `peds.js`, `police.js` the AI; `missions.js` the payphone jobs; `audio.js` the
    synthesizer for every sound effect and three procedural radio stations.
- `android/` — a small Android Studio project: a full-screen WebView that serves the game from inside
  the APK (no internet needed).
- `tools/` — build scripts (see below).

## Building

```sh
python3 tools/build.py          # bundles web/ into dist/www (needs esbuild or npx)
python3 tools/make_icons.py     # regenerates all icons (needs Pillow)
```

Android, with the usual SDK:

```sh
python3 tools/build.py
cd android && ./gradlew assembleRelease   # -> android/app/build/outputs/apk/release/app-release.apk
```

Or with just the bare tools (aapt2, android.jar, dx, apksigner — no Gradle):
`ANDROID_TOOLS=/path/to/tools python3 tools/build_apk.py` → `dist/CrosstownHeat.apk`.

GitHub Actions (`.github/workflows/`) build the APK into a release and publish the web version to
`gh-pages` on every push to `main`.

**Signing:** the APK is signed with `android/keystore/crosstown-heat.jks` (password `crosstownheat`),
committed so anyone can build updates that install over each other. It is a hobby key: replace it with
your own (and the `KEYSTORE_*` repository secrets the workflow reads) before publishing anywhere.

## Testing locally

Serve the repo root (`python3 -m http.server`) and open `http://localhost:8000/web/` — add `#fps` to the
URL for a performance overlay.

## License

MIT for the game code (see `LICENSE`); three.js is MIT (`web/vendor/LICENSE-three.txt`).
