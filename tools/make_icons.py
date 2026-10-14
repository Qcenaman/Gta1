#!/usr/bin/env python3
"""Draws the Crosstown Heat app icon (top-down car at a crossroads, siren glow)
and writes every size needed by the web app manifest and the Android project."""
import math
import os
import random
import sys

from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
S = 1024


def rot(points, ang, cx, cy):
    c, s = math.cos(ang), math.sin(ang)
    return [(cx + x * c - y * s, cy + x * s + y * c) for x, y in points]


def background(size=S):
    img = Image.new('RGB', (size, size), '#15181d')
    d = ImageDraw.Draw(img)
    rnd = random.Random(7)
    for _ in range(9000):
        x, y = rnd.randrange(size), rnd.randrange(size)
        g = rnd.randrange(16, 34)
        d.point((x, y), fill=(g, g + 2, g + 6))
    k = size / S
    road = '#3b3e44'
    side = '#8d897f'
    # sidewalks then roads (a plus shape)
    d.rectangle([0, 330 * k, size, 694 * k], fill=side)
    d.rectangle([330 * k, 0, 694 * k, size], fill=side)
    d.rectangle([0, 372 * k, size, 652 * k], fill=road)
    d.rectangle([372 * k, 0, 652 * k, size], fill=road)
    # crosswalk stripes
    for i in range(7):
        x0 = (386 + i * 38) * k
        for (ya, yb) in ((300, 356), (668, 724)):
            pass
    for i in range(7):
        a = (386 + i * 38) * k
        d.rectangle([a, 300 * k, a + 20 * k, 360 * k], fill='#d9d6cc')
        d.rectangle([a, 664 * k, a + 20 * k, 724 * k], fill='#d9d6cc')
        d.rectangle([300 * k, a, 360 * k, a + 20 * k], fill='#d9d6cc')
        d.rectangle([664 * k, a, 724 * k, a + 20 * k], fill='#d9d6cc')
    # dashed yellow centre lines
    for t in range(0, S, 110):
        if 300 < t < 724:
            continue
        d.rectangle([t * k, 506 * k, (t + 60) * k, 518 * k], fill='#e3b93c')
        d.rectangle([506 * k, t * k, 518 * k, (t + 60) * k], fill='#e3b93c')
    # buildings in the corners
    for (x0, y0) in ((0, 0), (724, 0), (0, 724), (724, 724)):
        d.rectangle([x0 * k + (0 if x0 == 0 else 20 * k), y0 * k + (0 if y0 == 0 else 20 * k), x0 * k + 300 * k - (20 * k if x0 == 0 else 0), y0 * k + 300 * k - (20 * k if y0 == 0 else 0)], fill='#23262c')
    return img


def glow(size, cx, cy, r, color, alpha=170):
    layer = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=color + (alpha,))
    return layer.filter(ImageFilter.GaussianBlur(r * 0.45))


def car_layer(size=S, scale=1.0):
    k = size / S * scale
    layer = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    cx, cy = size / 2, size / 2
    ang = math.radians(-32)
    d = ImageDraw.Draw(layer)
    # shadow
    sh = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    ds = ImageDraw.Draw(sh)
    body = [(-260, -125), (260, -125), (280, -95), (280, 95), (260, 125), (-260, 125), (-280, 95), (-280, -95)]
    ds.polygon(rot([(x * k, y * k) for x, y in body], ang, cx + 34 * k, cy + 40 * k), fill=(0, 0, 0, 130))
    sh = sh.filter(ImageFilter.GaussianBlur(14 * k))
    layer.alpha_composite(sh)
    d = ImageDraw.Draw(layer)
    P = lambda pts: rot([(x * k, y * k) for x, y in pts], ang, cx, cy)
    d.polygon(P(body), fill='#ffc61a')
    # tyres peeking out
    for x in (-170, 170):
        for y in (-132, 132):
            d.polygon(P([(x - 52, y - 10), (x + 52, y - 10), (x + 52, y + 10), (x - 52, y + 10)]), fill='#111214')
    d.polygon(P(body), fill='#ffc61a')
    # cabin: windshield, roof, rear window
    d.polygon(P([(70, -100), (150, -112), (150, 112), (70, 100)]), fill='#1d2733')
    d.polygon(P([(-150, -100), (70, -100), (70, 100), (-150, 100)]), fill='#f2b616')
    d.polygon(P([(-210, -104), (-150, -100), (-150, 100), (-210, 104)]), fill='#1d2733')
    # racing stripes
    d.polygon(P([(-280, -26), (280, -26), (280, -8), (-280, -8)]), fill='#16130a')
    d.polygon(P([(-280, 8), (280, 8), (280, 26), (-280, 26)]), fill='#16130a')
    # lights
    d.polygon(P([(250, -112), (276, -100), (276, -58), (250, -58)]), fill='#fffbe0')
    d.polygon(P([(250, 58), (276, 58), (276, 100), (250, 112)]), fill='#fffbe0')
    d.polygon(P([(-276, -100), (-256, -110), (-256, -64), (-276, -64)]), fill='#d8262b')
    d.polygon(P([(-276, 64), (-256, 64), (-256, 110), (-276, 100)]), fill='#d8262b')
    return layer


def compose(size, rounded=False, car_scale=1.0, with_bg=True):
    base = background(size).convert('RGBA') if with_bg else Image.new('RGBA', (size, size), (0, 0, 0, 0))
    k = size / S
    base.alpha_composite(glow(size, 250 * k, 250 * k, 230 * k * car_scale, (255, 40, 40)))
    base.alpha_composite(glow(size, 780 * k, 780 * k, 230 * k * car_scale, (40, 110, 255)))
    base.alpha_composite(car_layer(size, car_scale))
    if rounded:
        mask = Image.new('L', (size, size), 0)
        ImageDraw.Draw(mask).rounded_rectangle([0, 0, size - 1, size - 1], radius=int(size * 0.2), fill=255)
        out = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        out.paste(base, (0, 0), mask)
        return out
    return base


def save(img, path, size):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    img.resize((size, size), Image.LANCZOS).save(path, optimize=True)


def main():
    big = compose(S, rounded=False, car_scale=0.9)
    rounded = compose(S, rounded=True, car_scale=0.9)
    maskable = compose(S, rounded=False, car_scale=0.72)
    web = os.path.join(ROOT, 'web', 'icons')
    save(rounded, os.path.join(web, 'icon-192.png'), 192)
    save(rounded, os.path.join(web, 'icon-512.png'), 512)
    save(maskable, os.path.join(web, 'maskable-512.png'), 512)
    save(big, os.path.join(web, 'apple-touch-icon.png'), 180)
    # Android legacy + adaptive icons
    res = os.path.join(ROOT, 'android', 'app', 'src', 'main', 'res')
    dens = {'mdpi': 1, 'hdpi': 1.5, 'xhdpi': 2, 'xxhdpi': 3, 'xxxhdpi': 4}
    fg = compose(S, rounded=False, car_scale=0.62, with_bg=False)
    bgimg = background(S).convert('RGBA')
    circle = Image.new('L', (S, S), 0)
    ImageDraw.Draw(circle).ellipse([0, 0, S - 1, S - 1], fill=255)
    round_icon = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    round_icon.paste(compose(S, car_scale=0.8), (0, 0), circle)
    for name, m in dens.items():
        d = os.path.join(res, f'mipmap-{name}')
        save(rounded, os.path.join(d, 'ic_launcher.png'), int(48 * m))
        save(round_icon, os.path.join(d, 'ic_launcher_round.png'), int(48 * m))
        save(fg, os.path.join(d, 'ic_launcher_foreground.png'), int(108 * m))
        save(bgimg, os.path.join(d, 'ic_launcher_background.png'), int(108 * m))
    # store-style feature preview
    save(big, os.path.join(ROOT, 'docs', 'icon.png'), 512)
    print('icons written')


if __name__ == '__main__':
    sys.exit(main())
