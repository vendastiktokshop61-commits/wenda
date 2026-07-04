## 2025-05-15 - Canvas Animation Overdraw and State Overhead
**Learning:** High-frequency canvas animations using `fillRect(0,0,W,H)` for every light/gradient cause significant overdraw. `ctx.save()` and `ctx.restore()` in loops add measurable CPU overhead compared to manual property resets.
**Action:** Localize `fillRect` to bounding boxes, pre-calculate RGB components to avoid string parsing, and use manual property resets (e.g., `ctx.shadowBlur = 0`) instead of state stack manipulation.
