## 2025-05-11 - [Canvas Overdraw Optimization]
**Learning:** Performing multiple full-canvas `fillRect` operations (e.g., `fillRect(0,0,W,H)`) inside a high-frequency (60fps) loop for localized elements like radial gradients causes extreme overdraw and blending overhead. String manipulation (hex-to-string conversion) in the same loop further degrades performance.
**Action:** Localize `fillRect` to the bounding box of the animated object (`l.x - l.r, l.y - l.r, l.r * 2, l.r * 2`). Pre-calculate RGB components and use `rgba()` template literals to avoid repeated hex string processing.
