## 2025-05-15 - Canvas and Scroll Optimization
**Learning:** Combining canvas overdraw reduction (localized fillRect), pre-calculating RGB components to avoid string manipulation in 60fps loops, and state-guarded event listeners yields significant FPS gains (from ~36 to ~57 FPS) on simple landing pages.
**Action:** Always check for ctx.fillRect(0,0,W,H) inside loops and verify if event listeners are performing redundant DOM updates every scroll/resize tick.
