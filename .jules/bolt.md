## 2026-05-03 - Optimize Canvas Animation Loop
**Learning:** The canvas animation loop in `index.html` was performing redundant full-screen `fillRect` operations for localized radial gradients (ambient lights) and using expensive string manipulations (`toString(16)`, `padStart`) for colors on every frame.
**Action:** Localize `fillRect` to the bounding box of ambient lights and pre-calculate color components to reduce per-frame CPU overhead and overdraw.

**Baseline Performance:**
- Average Frame Time: 36.97 ms
- Estimated FPS: 27.05
- Measurement: `python3 bench.py` (5s sample)

**Optimized Performance:**
- Average Frame Time: 18.31 ms
- Estimated FPS: 54.61
- Improvement: ~50% reduction in frame time, ~100% increase in FPS.
- Measurement: `python3 bench.py` (5s sample)
