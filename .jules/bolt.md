## 2025-04-27 - [Canvas Animation Overdraw & String Manipulation]
**Learning:** The canvas drawing loop was performing full-screen `fillRect` operations for every animated light, causing massive overdraw. Additionally, hex string manipulation and `padStart` were being used in every frame (60fps), which is inefficient compared to pre-calculating RGB values and using `rgba()` strings.
**Action:** Localize `fillRect` to the bounding box of the lights and pre-calculate color components.
