## 2025-07-30 - Localizing fillRect for Radial Gradients
**Learning:** Drawing full-viewport radial gradients with transparent outer boundaries creates substantial fragment shader/rasterization overdraw. Restricting `fillRect` to the exact radial gradient's bounding box `(x - r, y - r, r * 2, r * 2)` eliminates redundant drawing.
**Action:** Always localize canvas fills to the bounding boundaries of localized radial gradients rather than drawing over the entire viewport.
