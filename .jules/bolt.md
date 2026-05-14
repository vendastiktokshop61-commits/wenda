## 2025-05-15 - Canvas Animation Optimization
**Learning:** Localizing `fillRect` to the bounding boxes of animated elements instead of using full-screen overdraw for each element drastically reduces GPU/CPU load. Additionally, pre-calculating RGB components for colors used in high-frequency loops (like `requestAnimationFrame`) avoids expensive string manipulation and numeric-to-hex conversions.
**Action:** Always check for full-screen overdraw in canvas `draw` loops. Localize drawing operations to the minimal necessary area and use `rgba()` template literals with pre-calculated RGB values.
