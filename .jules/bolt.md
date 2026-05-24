## 2025-05-22 - Canvas Overdraw and String Manipulation
**Learning:** Filling the entire canvas with a radial gradient for small localized lights is extremely inefficient as it triggers a full-screen fill rate penalty 60 times per second. Hex string concatenation and `Math.round` inside the loop also add avoidable CPU overhead.
**Action:** Always localize `fillRect` to the bounding box of the gradient and pre-calculate color components (RGB) outside the high-frequency animation loop.
