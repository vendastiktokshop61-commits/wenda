## 2025-05-15 - [Canvas Animation Optimization]
**Learning:** High-frequency animation loops (60 FPS) are extremely sensitive to string manipulation (like hex to RGB conversion or padding) and canvas overdraw. Calling `ctx.fillRect(0,0,W,H)` for every light source with a radial gradient creates a massive fill rate bottleneck.
**Action:** Always pre-calculate RGB components for colors and localize `fillRect` calls to the bounding box of the effect/gradient to minimize overdraw.
