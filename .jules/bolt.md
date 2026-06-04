## 2025-05-15 - Localize Canvas fillRect to Bounding Boxes
**Learning:** In high-frequency canvas animation loops (60fps), calling `ctx.fillRect(0, 0, W, H)` multiple times per frame for small elements like radial gradient glows causes significant overdraw and performance bottlenecks.
**Action:** Always localize `fillRect` calls to the bounding box of the element being drawn (`l.x - l.r, l.y - l.r, l.r * 2, l.r * 2`) to minimize the number of pixels processed.
