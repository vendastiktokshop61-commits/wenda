## 2025-05-14 - Canvas & Scroll Optimizations
**Learning:** Localizing `fillRect` to bounding boxes for radial gradients and pre-calculating RGB values significantly reduces rendering overhead in high-frequency animation loops. Additionally, state tracking in scroll listeners prevents redundant DOM assignments.
**Action:** Always check for full-canvas `fillRect` calls in animation loops and implement state guards for DOM property updates in event listeners.
