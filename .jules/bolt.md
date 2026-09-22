## 2026-08-13 - HTML Canvas & Scroll Listener Optimization
**Learning:** Overdraw in HTML canvas radial gradient fills and forced synchronous reflows/style writes in scroll event handlers severely bottleneck animation frame rates.
**Action:** Always localize radial gradient fillRect calls to bounding boxes, pre-calculate trigonometric values and alpha hex lookup strings, eliminate ctx.save()/ctx.restore() overhead, cache section vertical offsets on load/resize, and state-guard DOM style updates.
