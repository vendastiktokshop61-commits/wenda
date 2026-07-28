## 2025-07-28 - Canvas Context Churn & Overdraw in bgCanvas
**Learning:** High-frequency rendering loops benefit tremendously from localizing canvas operations to bounding boxes, pre-calculating dynamic parameters (like trigonometric values and RGB strings) at initialization, and avoiding state management overhead (`ctx.save()`/`ctx.restore()`).
**Action:** Always inspect canvas scripts for global `fillRect` calls, math calculations inside `requestAnimationFrame`, dynamic string manipulation, and save/restore cycles, and optimize them safely using direct properties and local bounding boxes.
