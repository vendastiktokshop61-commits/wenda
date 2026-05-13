## 2025-05-15 - Canvas Overdraw Optimization
**Learning:** In ambient light animations using radial gradients, calling `ctx.clearRect(0, 0, W, H)` or `ctx.fillRect(0, 0, W, H)` every frame is a massive bottleneck. Localizing the clear/draw to a bounding box `[x-r, y-r, r*2, r*2]` significantly reduces GPU fill-rate requirements.
**Action:** Always check if canvas background animations can be optimized using localized bounding box updates or by using multiple layered canvases.
