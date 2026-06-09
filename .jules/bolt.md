## 2025-05-14 - Canvas and Scroll Optimization
**Learning:** Combining canvas optimizations (localizing fillRect, pre-calculating RGB, removing save/restore) and scroll event state tracking consistently yields significant FPS gains (~77% in this session) by reducing both rendering overdraw and DOM thrashing.
**Action:** Always check high-frequency paths like requestAnimationFrame and scroll listeners for redundant calculations or DOM writes.
