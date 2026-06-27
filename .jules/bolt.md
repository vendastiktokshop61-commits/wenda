## 2026-06-27 - Canvas Optimization in Landing Page
**Learning:** Localizing `fillRect` to the bounding box of radial gradients and replacing `ctx.save()`/`ctx.restore()` with manual property resets provides a massive performance boost (nearly 50% FPS increase) in high-frequency animation loops.
**Action:** Always check for `fillRect(0,0,W,H)` with gradients and evaluate if `save()`/`restore()` can be replaced by targeted property resets.
