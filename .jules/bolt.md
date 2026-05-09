## 2026-05-09 - [Canvas Overdraw Optimization]
**Learning:** Filling the entire canvas for every radial light source is a major performance bottleneck, especially when the light has a limited radius and the gradient ends in transparency.
**Action:** Always localize `fillRect` operations to the bounding box of the visual element (e.g., `l.r * 2`) to minimize pixel fill operations and increase FPS.
