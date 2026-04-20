"""Crop the shield/badger icon out of the full logo PNG and save it as
`badger-automation-group-mark.png`. The wordmark "BADGER AUTOMATION GROUP"
stays only in the full `...-logo.png`.

The source 1024x558 Gemini-generated image has the mark centered roughly in
the top two-thirds. The soft-alpha de-matte in `strip-logo-bg.py` leaves a
smattering of low-alpha JPEG speckle across the "transparent" zones, which
defeats auto-bbox detection, so we use a known-good crop window instead.
Tweak MARK_CROP if the source image ever changes.
"""

from pathlib import Path
from PIL import Image

PUB = Path("public/brand")
SRC = PUB / "badger-automation-group-logo.png"
MARK_OUT = PUB / "badger-automation-group-mark.png"

MARK_CROP = (335, 35, 700, 410)  # (left, top, right, bottom) — ~365x375

im = Image.open(SRC).convert("RGBA")
mark = im.crop(MARK_CROP)
mark.save(MARK_OUT, "PNG", optimize=True)
print(f"Saved mark: {MARK_OUT} ({mark.size[0]}x{mark.size[1]})  crop={MARK_CROP}")
