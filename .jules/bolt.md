## 2025-05-15 - Canvas Overdraw and String Manipulation
**Learning:** In high-frequency animation loops (60fps), `fillRect(0,0,W,H)` for individual elements causes massive overdraw. Additionally, repeated hex string manipulation and `toString(16)` math create significant CPU overhead.
**Action:** Always localize `fillRect` to the bounding boxes of animated elements and pre-calculate RGB components to use `rgba()` template literals in the `draw` loop.
