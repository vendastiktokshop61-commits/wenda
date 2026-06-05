## 2025-05-14 - Canvas and Scroll Optimization in Single-Page App
**Learning:** Localizing fillRect to the bounding box of radial gradients and pre-calculating RGB strings for high-frequency canvas loops significantly reduces overdraw and string manipulation overhead. Additionally, state tracking in scroll listeners avoids expensive layout recalculations caused by redundant DOM style assignments.
**Action:** Always check for full-canvas fills within loops and redundant DOM updates in scroll/resize handlers.
