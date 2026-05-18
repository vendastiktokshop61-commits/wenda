
## 2026-05-18 - Canvas Bounding Box Optimization
**Learning:** Using `ctx.fillRect(0,0,W,H)` for localized radial gradients in a high-frequency animation loop causes massive overdraw. Localizing the fill to the gradient's bounding box significantly reduces GPU load. Additionally, pre-calculating RGB components avoids expensive hex-to-string conversions in the 60fps path.
**Action:** Always check for full-screen fills within object loops in Canvas animations and replace with localized bounding boxes. Pre-calculate color strings if they are static or vary only by alpha.
