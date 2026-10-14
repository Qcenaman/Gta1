#!/usr/bin/env python3
"""Build and sign the Android APK without Gradle, using the bare SDK tools:
aapt2 (resources + manifest), javac + dx (code), apksigner (signing).

Point $ANDROID_TOOLS at a folder containing aapt2, dx.jar, apksigner.jar and
platforms/android-34/android.jar. Run tools/build.py first so dist/www exists.
Output: dist/CrosstownHeat.apk
"""
import glob
import os
import re
import shutil
import struct
import subprocess
import sys
import zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TOOLS = os.environ.get('ANDROID_TOOLS', '/home/claude/androidtools')
AAPT2 = os.path.join(TOOLS, 'aapt2')
ANDROID_JAR = os.path.join(TOOLS, 'platforms', 'android-34', 'android.jar')
DX = os.path.join(TOOLS, 'dx.jar')
APKSIGNER = os.path.join(TOOLS, 'apksigner.jar')
APP = os.path.join(ROOT, 'android', 'app')
BUILD = os.path.join(ROOT, 'build', 'apk')
OUT = os.path.join(ROOT, 'dist', 'CrosstownHeat.apk')
PACKAGE = 'com.qcenaman.crosstownheat'
KEYSTORE = os.path.join(ROOT, 'android', 'keystore', 'crosstown-heat.jks')
# this apksigner build reaches into JDK internals; newer JDKs need them exported
JVM_EXPORTS = [f'--add-exports=java.base/sun.security.{m}=ALL-UNNAMED' for m in ('x509', 'pkcs', 'util', 'provider')]


def gradle_value(key):
    with open(os.path.join(APP, 'build.gradle')) as f:
        m = re.search(key + r"\s+'?([^'\n]+)'?", f.read())
    return m.group(1).strip()


def run(cmd, **kw):
    print('+', ' '.join(str(c) for c in cmd))
    subprocess.run([str(c) for c in cmd], check=True, **kw)


def align_zip(src, dst):
    """Rewrite a zip so stored entries start on 4-byte boundaries (like zipalign)."""
    with zipfile.ZipFile(src) as zin, open(dst, 'wb') as raw:
        zout = zipfile.ZipFile(raw, 'w')
        for info in zin.infolist():
            data = zin.read(info.filename)
            ni = zipfile.ZipInfo(info.filename, date_time=(2008, 1, 1, 0, 0, 0))
            ni.external_attr = info.external_attr
            stored = info.filename == 'resources.arsc' or info.filename.endswith(('.png', '.arsc')) or info.compress_type == zipfile.ZIP_STORED
            ni.compress_type = zipfile.ZIP_STORED if stored else zipfile.ZIP_DEFLATED
            if stored:
                align = 4096 if info.filename.endswith('.so') else 4
                name_len = len(info.filename.encode('utf-8'))
                offset = raw.tell()
                base = offset + 30 + name_len + 6
                pad = (align - base % align) % align
                # 0xD935 is the extra-field id zipalign uses for alignment padding
                ni.extra = struct.pack('<HHH', 0xD935, 2 + pad, align) + b'\0' * pad
            zout.writestr(ni, data)
        zout.close()


def check_alignment(path):
    with zipfile.ZipFile(path) as z, open(path, 'rb') as f:
        for info in z.infolist():
            if info.compress_type != zipfile.ZIP_STORED:
                continue
            f.seek(info.header_offset)
            hdr = f.read(30)
            n, e = struct.unpack('<HH', hdr[26:30])
            data_off = info.header_offset + 30 + n + e
            if data_off % 4:
                raise SystemExit(f'misaligned stored entry: {info.filename} @ {data_off}')
    print('alignment ok')


def main():
    for p in (AAPT2, ANDROID_JAR, DX, APKSIGNER):
        if not os.path.exists(p):
            raise SystemExit(f'missing tool: {p}')
    www = os.path.join(ROOT, 'dist', 'www')
    if not os.path.exists(os.path.join(www, 'index.html')):
        raise SystemExit('run tools/build.py first')
    version_code = gradle_value('versionCode')
    version_name = gradle_value('versionName')
    shutil.rmtree(BUILD, ignore_errors=True)
    os.makedirs(BUILD)

    # manifest: aapt2 needs the package attribute that Gradle supplies via `namespace`
    with open(os.path.join(APP, 'src', 'main', 'AndroidManifest.xml')) as f:
        manifest = f.read()
    manifest = manifest.replace('<manifest xmlns:android="http://schemas.android.com/apk/res/android">',
                                f'<manifest xmlns:android="http://schemas.android.com/apk/res/android" package="{PACKAGE}">')
    man_path = os.path.join(BUILD, 'AndroidManifest.xml')
    with open(man_path, 'w') as f:
        f.write(manifest)

    # resources
    res_zip = os.path.join(BUILD, 'res.zip')
    run([AAPT2, 'compile', '--dir', os.path.join(APP, 'src', 'main', 'res'), '-o', res_zip])
    assets = os.path.join(BUILD, 'assets')
    shutil.copytree(www, os.path.join(assets, 'www'))
    linked = os.path.join(BUILD, 'linked.apk')
    run([AAPT2, 'link', '-o', linked, '-I', ANDROID_JAR, '--manifest', man_path,
         '--min-sdk-version', '24', '--target-sdk-version', '34',
         '--version-code', version_code, '--version-name', version_name,
         '-A', assets, '--auto-add-overlay', res_zip])

    # code
    classes = os.path.join(BUILD, 'classes')
    os.makedirs(classes)
    sources = glob.glob(os.path.join(APP, 'src', 'main', 'java', '**', '*.java'), recursive=True)
    run(['javac', '-nowarn', '--release', '8', '-encoding', 'UTF-8', '-cp', ANDROID_JAR, '-d', classes] + sources)
    dex = os.path.join(BUILD, 'classes.dex')
    run(['java', '-jar', DX, '--dex', '--min-sdk-version=24', f'--output={dex}', classes])

    # assemble, align, sign
    unaligned = os.path.join(BUILD, 'unaligned.apk')
    shutil.copy(linked, unaligned)
    with zipfile.ZipFile(unaligned, 'a', compression=zipfile.ZIP_DEFLATED) as z:
        z.write(dex, 'classes.dex')
    aligned = os.path.join(BUILD, 'aligned.apk')
    align_zip(unaligned, aligned)
    check_alignment(aligned)
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    if os.path.exists(OUT):
        os.remove(OUT)
    run(['java'] + JVM_EXPORTS + ['-jar', APKSIGNER, 'sign', '--ks', KEYSTORE, '--ks-key-alias', 'crosstown',
         '--ks-pass', 'pass:' + os.environ.get('KEYSTORE_PASSWORD', 'crosstownheat'),
         '--key-pass', 'pass:' + os.environ.get('KEY_PASSWORD', 'crosstownheat'),
         '--min-sdk-version', '24', '--v1-signing-enabled', 'false', '--v2-signing-enabled', 'true', '--out', OUT, aligned])
    check_alignment(OUT)
    run(['java'] + JVM_EXPORTS + ['-jar', APKSIGNER, 'verify', '--verbose', '--print-certs', OUT])
    run([AAPT2, 'dump', 'badging', OUT])
    print(f'APK: {OUT} ({os.path.getsize(OUT) / 1024:.0f} KB)')


if __name__ == '__main__':
    sys.exit(main())
