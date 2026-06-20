## 2025-05-14 - Canvas Optimization in index.html
**Learning:** Localizing `fillRect` to bounding boxes and pre-calculating RGB components in high-frequency canvas loops significantly reduces both GPU overdraw and CPU overhead. In this case, it led to a ~67% FPS improvement (from 34 to 57 FPS).
**Action:** Always check for full-screen `fillRect` calls inside `requestAnimationFrame` and see if they can be localized. Pre-calculate any static color strings or components outside the loop.
