## 2025-05-15 - Canvas Overdraw Optimization
**Learning:** Using `ctx.fillRect(0,0,W,H)` for multiple overlapping radial gradients causes massive overdraw and pixel processing overhead. Localizing `fillRect` to the bounding box of the gradient (radius * 2) significantly improves FPS.
**Action:** Always check if canvas operations can be restricted to a specific bounding box instead of the full viewport, especially in high-frequency animation loops.
