## 2026-05-30 - [Canvas and Scroll Optimizations]
**Learning:** Significant FPS gains (up to 100%+) can be achieved by combining localized `fillRect` operations with the elimination of high-frequency DOM writes in scroll event listeners. Pre-calculating RGB components for `rgba()` strings in the animation loop further reduces CPU pressure.
**Action:** Always check for `fillRect(0, 0, W, H)` inside loops and attempt to localize to bounding boxes. Implement state-based checks in scroll listeners to prevent redundant style assignments.
