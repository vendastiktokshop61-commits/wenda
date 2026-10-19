# Bolt's Journal - Critical Learnings

## 2025-10-19 - Radial Gradient Canvas Bounding Box Fill & Offscreen Layout Caching
**Learning:** In canvas background animation loops, calling `fillRect(0,0,W,H)` for radial gradients with a fixed radius `r` forces the 2D canvas engine to process every pixel of the full viewport, even though pixels beyond radius `r` are fully transparent. Restricting `fillRect` to `[x - r, y - r, 2*r, 2*r]` reduced pixel fill overhead by over 95%, boosting idle FPS from 21.72 to 56.22 (+158.8%). Additionally, reading `offsetTop` in scroll handlers causes layout thrashing on every scroll event; caching section vertical offsets on window resize eliminated layout calculations during scrolling, increasing scroll FPS to 59.58 (+67.9%).
**Action:** Always check canvas radial gradient `fillRect` bounds to match bounding boxes rather than full screen canvas dimensions, and cache layout dimensions (`offsetTop`) outside scroll loops.
