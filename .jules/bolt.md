# Bolt's Performance Journal

This journal documents critical, codebase-specific learnings regarding performance bottlenecks, optimizations, and patterns.

## 2025-05-15 - Canvas Background Optimization
**Learning:** High-frequency canvas loops rendering global radial gradients are bound by CPU overhead in hex-to-rgb conversion and full-canvas overdraw (e.g. `fillRect(0,0,W,H)` for radial gradients). Localizing radial fillRects to bounding boxes `(l.x - l.r, l.y - l.r, l.r * 2, l.r * 2)` and pre-constructing RGBA string templates reduces processing and increases FPS dramatically. Removing standard `ctx.save()` and `ctx.restore()` in favor of direct property reset reduces canvas context transition overhead.
**Action:** Always pre-calculate color strings and use precise bounding-box localized clearing/drawing in heavy background animations.
