# Bolt's Journal

## 2025-05-15 - Canvas Overdraw and State Optimizations
**Learning:** In landing pages with high-frequency animation loops (like background canvases), drawing radial gradients to fill the entire viewport (`fillRect(0,0,W,H)`) is highly inefficient and causes substantial GPU/CPU overdraw. Additionally, reconstructing hex strings dynamically (`l.c + Math.round(l.o*255).toString(16).padStart(2,'0')`) or invoking `ctx.save()` and `ctx.restore()` for small state variations introduces costly micro-overhead.
**Action:** Always pre-calculate parsed RGB/RGBA values to construct `rgba` string literals directly, localize the `fillRect` execution to the bounding box of the gradients, and manually reset changed properties instead of relying on `ctx.save()` / `ctx.restore()`.
