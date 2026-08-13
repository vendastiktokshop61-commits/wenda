## 2026-08-13 - bgCanvas Overdraw & Scroll Reflow Optimizations
**Learning:** Limiting the radial gradient rendering bounds to their specific localized bounding boxes instead of full-screen `fillRect` operations significantly cuts down on overdraw. Caching DOM section offsets (`offsetTop`) prevents costly forced synchronous layouts during scrolling.
**Action:** Always pre-calculate static RGB/RGBA patterns and cache critical layout measurements on page load or window resize when handling high-frequency loops or scroll events.
