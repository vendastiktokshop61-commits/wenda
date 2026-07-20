# Bolt's Performance Journal

This journal tracks critical discoveries, lessons learned, and performance insights for this repository.
Only key architectural bottlenecks, surprising negative results, and custom performance patterns are recorded here.

## 2025-07-20 - HTML5 Canvas Overdraw Localization and Dynamic Hex String Removal
**Learning:** Drawing full-screen radial gradients (`fillRect(0,0,W,H)`) for multiple localized lights results in massive canvas pixel fill-rate overhead. Restricting the draw area to the gradient's bounding box (`(l.x - l.r, l.y - l.r, l.r * 2, l.r * 2)`) avoids severe overdraw. Additionally, avoiding `.toString(16).padStart(2, '0')` and replacing hex string generation with pre-computed RGB components and modern template `rgba()` strings removes high-frequency CPU and garbage collection bottlenecks.
**Action:** Always localize canvas gradient drawing with exact bounding boxes, pre-calculate constant colors, and prefer `rgba()` template strings in high-performance loop animations.
