## 2026-08-28 - Localizing radial canvas fills and caching scroll layout offsets
**Learning:** In canvas rendering loops, localizing `fillRect` bounds to the bounding box of radial gradients instead of full canvas `(0, 0, W, H)` dramatically cuts overdraw costs. In scroll handlers, caching element vertical offsets (`offsetTop`) on window load/resize and state-guarding DOM style writes prevents layout reflow and DOM thrashing.
**Action:** Always localize canvas gradient draw bounding boxes, pre-calculate RGB strings/trig values, and state-guard scroll-driven DOM style updates.
