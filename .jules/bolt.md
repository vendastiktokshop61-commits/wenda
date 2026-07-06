# Bolt's Performance Journal

## 2025-05-15 - Canvas Animation Optimization
**Learning:** Significant performance gains can be achieved by localizing `fillRect` calls to the bounding boxes of animated elements (like radial gradients) instead of clearing or filling the entire canvas repeatedly. Combining this with pre-calculated color components and removing state-heavy `save()`/`restore()` calls can nearly double FPS in complex background animations.
**Action:** Always check for full-canvas overdraw in animation loops. Prefer manual property resets over `ctx.save()`/`ctx.restore()` and use template literals for color strings when RGB components can be pre-calculated.

## 2025-05-15 - Redundant Scroll Event Updates
**Learning:** Scroll listeners that update DOM styles directly on every `scroll` event are a common bottleneck. Simple state tracking (e.g., `isScrolled` boolean or `lastActive` ID) can eliminate thousands of redundant layout/paint cycles.
**Action:** Implement a state check in all high-frequency event listeners (scroll, resize, mousemove) to ensure DOM manipulations only occur when values actually change.
