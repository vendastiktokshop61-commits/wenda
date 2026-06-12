# Bolt's Performance Journal

This journal records critical performance-related learnings for this repository.

## 2025-06-12 - Initial Baseline
**Learning:** The application's canvas background and scroll listener are primary bottlenecks, achieving ~27.5 FPS in the initial state.
**Action:** Targeted optimizations in the canvas loop (localizing fillRect, avoiding save/restore, pre-calculating colors) and scroll listener (state tracking) to reach 60 FPS.

## 2025-06-12 - Canvas and Scroll Optimizations
**Learning:** Localizing `fillRect` to the object's bounding box and pre-calculating RGB strings instead of manipulating hex strings in every frame significantly reduces CPU overhead, nearly doubling FPS.
**Action:** Always prefer localized drawing and string pre-calculation in high-frequency animation loops.
