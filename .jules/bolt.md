## 2025-05-15 - Canvas Rendering Optimization
**Learning:** Localizing `fillRect` to the bounding box of radial gradients and replacing `ctx.save()`/`ctx.restore()` with targeted property resets significantly reduces CPU/GPU overhead in high-frequency animation loops. Pre-calculating color strings (RGB vs Hex) also avoids redundant string manipulation.
**Action:** Always check for full-screen `fillRect` calls within `requestAnimationFrame` loops and localize them to the minimum required bounding box.
