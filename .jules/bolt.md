## 2025-05-23 - Canvas Draw Loop Optimization
**Learning:** Localizing `fillRect` to the bounding box of a radial gradient and pre-calculating RGB components for `rgba()` strings in a 60fps loop significantly reduces overdraw and CPU/GPU overhead.
**Action:** Always check for full-canvas `fillRect` calls within animation loops and replace them with targeted fills. Avoid hex-to-RGB or hex-to-string conversions inside high-frequency frames.
