## 2025-05-15 - Canvas Overdraw and Color Processing Bottleneck
**Learning:** The canvas background in `index.html` used full-canvas `fillRect` for every ambient light (4 times per frame) and performed hex-to-string/padStart operations in the main loop, leading to significant CPU/GPU overhead.
**Action:** Always localize `fillRect` to the bounding box of radial gradients and pre-calculate color strings (RGBA template literals) outside the animation loop to maximize FPS.
