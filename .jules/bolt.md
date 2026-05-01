## 2025-05-15 - [Canvas Animation Optimization]
**Learning:** High-frequency string manipulation (hex-to-string) and full-screen `fillRect` calls in a 60fps loop are major performance bottlenecks. Localizing the `fillRect` to the bounding box of the gradient and pre-calculating RGB components reduced frame time by ~30% in this environment.
**Action:** Always check the animation loop for string methods like `toString(16)` or `padStart` and replace with pre-calculated values. Avoid full-screen clears/fills if the content is localized.
