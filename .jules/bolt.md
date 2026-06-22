## 2025-01-24 - Canvas Optimization Performance Gains
**Learning:** Localizing `fillRect` to bounding boxes for radial gradients and removing `ctx.save()`/`ctx.restore()` in favor of manual property resets resulted in a ~72% FPS increase (from 34 to 58 FPS). Pre-calculating color components also reduced string manipulation overhead significantly.
**Action:** Always check for full-canvas overdraw in radial/linear gradients and replace state-saving calls with targeted property resets in high-frequency loops.
