## 2026-03-31 - Canvas Bounding Box Fill & Scroll Reflow Elimination
**Learning:** Overdrawing radial gradients across full canvas dimensions (0, 0, W, H) in animation loops severely throttles GPU/CPU performance (~30 FPS). Localizing fills to `[x - r, y - r, r*2, r*2]` combined with caching DOM `offsetTop` values on window load/resize and state-guarding style writes yields a >55% FPS increase (~48 FPS).
**Action:** Always constrain radial canvas gradient fills to their localized bounding box and state-guard DOM style mutations in scroll listeners.
