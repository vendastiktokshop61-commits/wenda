## 2025-05-15 - Canvas Optimization in index.html
**Learning:** Localizing fillRect to the bounding box of radial gradients and pre-calculating RGB color components significantly reduces overdraw and CPU overhead in high-frequency animation loops.
**Action:** Always check for full-screen clear/fill operations within loops and replace with localized versions where possible. Avoid expensive string operations (toString(16), padStart) inside requestAnimationFrame.
