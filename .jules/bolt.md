## 2026-06-08 - Canvas and Scroll Optimization
**Learning:** Localizing canvas `fillRect` to light bounding boxes and pre-calculating RGB components significantly reduces rendering overhead in 60fps loops. Removing `ctx.save()`/`ctx.restore()` further boosts performance. State tracking in scroll listeners prevents redundant DOM assignments.
**Action:** Always check for full-canvas `fillRect` inside loops and high-frequency string manipulation in animation frames. Implement state tracking for DOM updates in event listeners.
