## 2025-05-14 - Localized Canvas Rendering and Scroll State Tracking
**Learning:** Filling the entire canvas for multiple light layers (`fillRect(0,0,W,H)`) creates extreme overdraw that kills FPS. Additionally, DOM writes in scroll listeners without state checks cause unnecessary layout thrashing.
**Action:** Always localize `fillRect` to the bounding box of the element being drawn and use `wasScrolled`/`lastActive` flags in scroll listeners to guard DOM updates.
