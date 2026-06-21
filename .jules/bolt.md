## 2025-05-15 - Localized Canvas Redrawing
**Learning:** Filling the entire canvas for every radial gradient in an animation loop is a major performance bottleneck. Localizing the `fillRect` call to the gradient's bounding box significantly reduces GPU/CPU load.
**Action:** Always check if canvas drawing operations can be localized to their affected bounding boxes instead of using the full canvas dimensions.
