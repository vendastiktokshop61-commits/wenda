## 2026-06-19 - Canvas Optimization
**Learning:** Localizing fillRect to bounding boxes and pre-calculating color strings significantly improves performance in high-frequency canvas loops. Replacing save/restore with direct property resets also reduces overhead.
**Action:** Always check for full-screen fillRect in animations and avoid hex-to-rgba conversions inside the draw loop.
