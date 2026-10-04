## 2025-10-04 - Localizing Radial Gradients & State-Guarded Scroll Handlers

**Learning:** In full-screen 2D canvas backgrounds, drawing radial gradients with `fillRect(0,0,W,H)` overdraws massive transparent areas every frame. Restricting `fillRect` to the radial bounding box (`x-r, y-r, 2r, 2r`) along with precalculating alpha hex lookup tables and caching scroll section `offsetTop` values increased static idle FPS from ~35.6 to ~59.6 FPS (+67.4%) and scrolling FPS from ~34.2 to ~60.3 FPS (+76.3%).

**Action:** Always bound radial gradient canvas fillRect calls to `[x-r, y-r, 2r, 2r]`, pre-allocate string lookup arrays for frame loop string formatting, and cache DOM offset properties outside scroll handlers.
