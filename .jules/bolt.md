## 2025-05-14 - Optimized Canvas Animation Loop
**Learning:** Localizing `fillRect` to bounding boxes instead of full canvas clearing, combined with pre-calculating RGB color components to avoid string manipulation (`toString(16)`, `padStart`) in the `requestAnimationFrame` loop, yielded a significant performance boost (~71% FPS increase).
**Action:** Always check high-frequency animation loops for redundant full-canvas operations and expensive string formatting.
