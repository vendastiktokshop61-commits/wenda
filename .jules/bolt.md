## 2025-04-26 - Optimized Canvas Animation Hot Loop

**Learning:** In high-frequency (60fps) Canvas animations, string operations (like hex-to-rgba conversions) and global state changes (like full-screen `fillRect` for localized effects) are significant CPU/GPU bottlenecks. Pre-calculating color components and limiting drawing operations to affected bounding boxes drastically reduces the per-frame overhead.

**Action:** Always audit `requestAnimationFrame` loops for string concatenations, redundant `save/restore` calls, and full-canvas operations that could be localized or pre-calculated.
