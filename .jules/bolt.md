## 2026-08-14 - Localized Canvas Overdraw and Scroll Reflow Guarding
**Learning:** Localizing radial gradient `fillRect` calls to `(x - r, y - r, 2r, 2r)` bounding boxes avoids huge canvas overdraw. Pre-calculating trigonometric values and RGB strings combined with caching section `offsetTop` and state-guarding DOM mutations eliminates forced synchronous layout reflows on scroll ticks.
**Action:** Always inspect canvas render loops for full-canvas overdraws and scroll event listeners for `offsetTop` reads or un-guarded DOM style mutations in high-frequency events.
