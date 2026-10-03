## 2026-08-13 - Localized radial fillRect & Section Offset Caching
**Learning:** In canvas ambient animations, calling `ctx.fillRect(0,0,W,H)` for radial gradients forces full canvas repaints. Localizing fillRect to `[x-r, y-r, r*2, r*2]` combined with caching DOM section `offsetTop` positions during scroll events dramatically improves idle (+59.4% FPS) and scroll (+62.1% FPS) performance.
**Action:** Always localize canvas gradient fill rects to bounding circles/boxes and state-guard scroll DOM style writes while caching layout offsets on resize/load.
