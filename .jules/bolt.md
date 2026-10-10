# Bolt's Journal

## 2025-02-23 - Canvas & Scroll Optimization in Static HTML Landing Pages
**Learning:** Localizing canvas radial gradient `fillRect` calls to `[x - r, y - r, 2r, 2r]` bounding boxes instead of full-screen fills (`0, 0, W, H`), along with pre-calculated `HEX_TABLE` lookup arrays and caching section vertical offsets (`s.offsetTop`) for scroll listeners, boosts animation frame rates from ~39.5 FPS to 60 FPS (+52% FPS boost).
**Action:** Always check canvas loops for full-viewport fills and scroll handlers for `offsetTop` DOM reflow thrashing.
