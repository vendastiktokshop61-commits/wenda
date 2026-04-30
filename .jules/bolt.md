## 2025-05-15 - [Canvas Animation Optimization]
**Learning:** High-frequency 60fps animation loops are often bottlenecked by two common anti-patterns:
1. **Canvas Overdraw:** Calling `fillRect` on the entire canvas for every object (e.g., ambient lights) is extremely expensive. Localizing the `fillRect` to the object's bounding box can drastically reduce the number of pixels processed.
2. **String Manipulation:** Repeatedly calling `toString(16)` and `padStart` inside the loop for color generation is wasteful. Pre-calculating RGB components or using template literals with pre-calculated values is much faster.

**Action:** Always inspect `requestAnimationFrame` loops for redundant full-canvas operations and move all possible calculations (especially string formatting) outside the loop or to the initialization phase.
