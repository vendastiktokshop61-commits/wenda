## 2025-05-15 - Canvas Overdraw and Scroll Reflow Optimization
**Learning:** Localizing radial gradient `fillRect` calls to bounding boxes (`[x-r, y-r, 2r, 2r]`) eliminates full-viewport canvas overdraw. Pre-calculating color strings/trigonometric constants and state-guarding scroll DOM writes prevents style thrashing and forced layout reflows.
**Action:** Always check high-frequency canvas animation loops for full-canvas fills and missing trigonometric/color pre-calculations, and cache section offsets to prevent layout thrashing on scroll.
