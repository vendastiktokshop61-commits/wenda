## 2026-05-12 - Canvas Animation Bottlenecks
**Learning:** High-frequency (60fps) canvas animations are often bottlenecked by two factors: overdraw (filling the entire canvas multiple times) and high-frequency string manipulation (hex-to-string conversions for alpha transparency).
**Action:** Always localize `fillRect` to the bounding boxes of gradients and pre-calculate RGB color components to use `rgba()` literals instead of dynamic hex-to-string conversions in the draw loop.
