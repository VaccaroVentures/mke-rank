"""Re-cut the Gemini-sourced logo JPEG into a clean transparent PNG.

Source: a JPEG (saved with a .png extension) where the "transparency" in the
original preview was rasterized as a checkerboard of white (255) and gray
(~213) squares. We treat any light, near-neutral pixel as background.

Strategy:
  1. Classify each pixel by "saturation" (max-min channel spread) and
     "lightness" (max channel).
  2. Use an aggressive binary cutoff so both the white AND the gray checker
     squares go fully transparent — partial alpha is reserved only for a
     narrow anti-alias band immediately around the logo edges.
  3. Un-matte against white for edge pixels so the stored RGB is the pure
     logo color, not a white-blended version (kills fringing halos).
"""

from pathlib import Path
from PIL import Image

SRC = Path(
    "/Users/thomasvaccaro/.cursor/projects/"
    "Users-thomasvaccaro-Projects-mke-rank/assets/"
    "Gemini_Generated_Image_gnro67gnro67gnro-0c3e3e4a-c52e-4691-9959-fe163e841346.png"
)
DST = Path("public/brand/badger-automation-group-logo.png")

# A pixel is treated as pure background if it is nearly-neutral AND fairly
# light. These thresholds are tuned so white (255,255,255) AND the light-gray
# checker (~213,213,213) both classify as background, while the light blush
# highlight (#FADADD = 250,218,221, spread 32) classifies as content.
SPREAD_BG = 18   # max - min <= this => neutral
LIGHT_BG = 170   # max >= this => light
# Narrow anti-alias band (just around the logo edges).
SPREAD_AA = 30
LIGHT_AA = 150


def process(src: Path, dst: Path) -> None:
    im = Image.open(src).convert("RGB")
    w, h = im.size
    src_px = im.load()

    out = Image.new("RGBA", (w, h))
    dst_px = out.load()

    for y in range(h):
        for x in range(w):
            r, g, b = src_px[x, y]
            lo = min(r, g, b)
            hi = max(r, g, b)
            spread = hi - lo

            # Pure background — hard zero.
            if spread <= SPREAD_BG and hi >= LIGHT_BG:
                dst_px[x, y] = (0, 0, 0, 0)
                continue

            # Anti-alias band — compute partial alpha.
            if spread <= SPREAD_AA and hi >= LIGHT_AA:
                # More saturated => more opaque (spread going from SPREAD_BG→SPREAD_AA = 0→1)
                t_spread = (spread - SPREAD_BG) / (SPREAD_AA - SPREAD_BG)
                # Darker pixels in the near-neutral band are logo edges (hi going LIGHT_BG→LIGHT_AA = 0→1)
                t_dark = 0.0
                if hi < LIGHT_BG:
                    t_dark = (LIGHT_BG - hi) / (LIGHT_BG - LIGHT_AA)
                alpha = max(0.0, min(1.0, max(t_spread, t_dark)))
                if alpha < 0.2:
                    dst_px[x, y] = (0, 0, 0, 0)
                    continue
                a = int(round(alpha * 255))
                # Un-matte against white.
                k = a / 255.0
                r2 = (r - (1.0 - k) * 255.0) / k
                g2 = (g - (1.0 - k) * 255.0) / k
                b2 = (b - (1.0 - k) * 255.0) / k
                dst_px[x, y] = (
                    max(0, min(255, int(round(r2)))),
                    max(0, min(255, int(round(g2)))),
                    max(0, min(255, int(round(b2)))),
                    a,
                )
                continue

            # Opaque content — saturated or dark.
            dst_px[x, y] = (r, g, b, 255)

    out.save(dst, "PNG", optimize=True)
    print(f"Saved transparent PNG: {dst} ({w}x{h})")


if __name__ == "__main__":
    DST.parent.mkdir(parents=True, exist_ok=True)
    process(SRC, DST)
