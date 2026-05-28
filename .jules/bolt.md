## 2026-05-28 - Canvas Animation Loop Optimization
**Learning:** Significant performance gains (76%+ FPS increase) can be achieved in this codebase by avoiding expensive string operations (toString, padStart) and minimizing canvas fill area (localizing fillRect to bounding boxes) in the 60fps animation loop.
**Action:** Always inspect the `draw()` function in `index.html` for similar patterns when tasked with performance improvements in this repository.
