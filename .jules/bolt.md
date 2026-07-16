# Bolt's Performance Journal

## 2025-05-15 - Canvas Overdraw and Color Overhead
**Learning:** Localizing `fillRect` to a bounding box for radial gradients significantly reduces overdraw compared to clearing/filling the entire canvas for each light element. Pre-calculating RGB components for theme colors avoids expensive hex-to-string conversions and padding in high-frequency animation loops.
**Action:** Always check for full-canvas `fillRect` calls within loops and use pre-calculated color strings for primary theme colors.
