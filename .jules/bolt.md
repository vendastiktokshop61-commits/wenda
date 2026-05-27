## 2025-05-15 - Canvas Animation Optimization
**Learning:** Localizing `fillRect` to bounding boxes and pre-calculating RGB components for theme colors significantly reduces overdraw and string manipulation overhead in high-frequency animation loops.
**Action:** Always check canvas `draw` loops for full-canvas fills that could be localized, and avoid hex-to-string conversions for colors used in 60fps loops.
