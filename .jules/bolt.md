## 2025-05-15 - Canvas Animation Optimization
**Learning:** High-frequency animation loops (60fps) are sensitive to string manipulation and unnecessary overdraw. Repeatedly filling the entire canvas with radial gradients instead of bounding boxes causes significant GPU overhead.
**Action:** Pre-calculate color strings and restrict `fillRect` to the affected area (bounding box of the light) to reduce overdraw.

## 2025-05-15 - Scroll Event Optimization
**Learning:** Updating DOM styles on every scroll pixel, even when the state hasn't changed, leads to unnecessary style recalculations.
**Action:** Use a state variable (e.g., `isScrolled`) to gate style updates in scroll listeners.
