## 2025-05-15 - Canvas Overdraw and String Manipulation in 60fps Loop
**Learning:** In canvas-based animations, performing `fillRect(0,0,W,H)` for multiple translucent layers creates significant overdraw overhead. Additionally, hex-to-RGB conversion and string concatenation in a 60fps loop are surprisingly expensive bottlenecks.
**Action:** Always localize `fillRect` to the bounding box of the element being drawn and pre-calculate RGB components for frequently used colors to use with `rgba()` template literals.
