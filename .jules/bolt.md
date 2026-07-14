## 2025-05-15 - Background Canvas Optimization
**Learning:** Localizing `fillRect` to a bounding box `(x-r, y-r, 2r, 2r)` instead of clearing/redrawing the entire canvas for radial gradients provides a massive performance boost by reducing pixel overdraw. Additionally, pre-calculating RGB strings for high-frequency loops avoids the overhead of repeated hex-to-string conversions or template literal evaluations.
**Action:** Always check if canvas elements can be drawn to localized regions rather than the full context, especially for repeated background effects.
