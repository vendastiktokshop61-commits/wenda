## 2025-05-14 - Canvas Overdraw and Scroll Listener Redundancy
**Learning:** Localizing `fillRect` to bounding boxes instead of full-screen clears for every light source significantly reduces overdraw and improves FPS in canvas animations. Additionally, guarding scroll event listeners with state variables prevents redundant DOM writes that cause layout thrashing.
**Action:** Always check for full-screen operations inside 60fps loops and use state guards in event listeners for scroll/resize.
