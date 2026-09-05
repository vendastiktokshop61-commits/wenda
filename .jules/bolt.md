## 2026-09-05 - Radial Gradient Bounding Box Localisation & Scroll State Guarding
**Learning:** Overdrawing full-canvas fillRect for radial light gradients causes massive GPU/CPU composite overhead in HTML5 canvas loops. In scroll listeners, reading section offsetTop repeatedly causes layout thrashing.
**Action:** Restrict fillRect to bounding boxes (x - r, y - r, 2r, 2r), precompute RGB templates, and cache section offsetTop values on load/resize while state-guarding DOM style writes.
