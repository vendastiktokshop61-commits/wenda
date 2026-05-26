## 2025-05-14 - Canvas Draw Loop Optimization
**Learning:** Localizing `fillRect` to light bounding boxes and pre-calculating RGB color components to avoid string manipulation and overdraw in the 60fps loop significantly improves performance on pages with full-screen animated backgrounds.
**Action:** Always check for `fillRect(0, 0, W, H)` inside high-frequency loops and look for opportunities to pre-calculate style strings when using radial gradients or multi-color animations.
