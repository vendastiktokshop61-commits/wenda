## 2025-05-15 - Canvas Animation Loop Optimization
**Learning:** Localizing `fillRect` to a gradient's bounding box and pre-calculating RGB color objects significantly reduces GPU and CPU overhead in canvas-heavy landing pages, nearly doubling the FPS.
**Action:** Always check for `ctx.save()`/`ctx.restore()` in high-frequency loops and replace with manual property resets when only a few properties (like `shadowBlur`) are changed.
