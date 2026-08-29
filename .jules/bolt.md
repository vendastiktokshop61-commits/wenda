## 2026-08-13 - Localized Canvas Fills & Section Offset Caching
**Learning:** Localizing radial gradient `fillRect` calls to bounding boxes reduces canvas overdraw by over 90%. Pre-calculating trigonometric values and RGB strings in high-frequency 60 FPS loops eliminates string parsing and math overhead. Caching `section.offsetTop` on window `load`/`resize` and state-guarding DOM mutations in scroll handlers prevents layout thrashing.
**Action:** Always check canvas loops for full-screen fills with radial gradients and check high-frequency scroll handlers for uncached `offsetTop` queries.
