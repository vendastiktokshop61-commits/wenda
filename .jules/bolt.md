## 2026-08-13 - Canvas Gradient Bounding Box and Reflow Caching Impact
**Learning:** In canvas-heavy landing pages, `fillRect(0, 0, W, H)` for radial lights causes full-viewport overdraw on every frame, and accessing `offsetTop` inside scroll listeners triggers layout thrashing.
**Action:** Always constrain radial canvas gradient `fillRect` calls to the light source bounding box and cache element offsets outside scroll listeners.
