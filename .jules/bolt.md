## 2026-05-04 - Canvas overdraw and string manipulation
**Learning:** Filling the entire canvas (`fillRect(0,0,W,H)`) for each light in an animation loop causes significant overdraw. Additionally, using `toString(16).padStart(2,'0')` in every frame adds unnecessary CPU overhead.
**Action:** Localize `fillRect` to the bounding box of the element being drawn. Pre-calculate color strings or use `rgba()` literals to avoid repeated string conversion and concatenation.
