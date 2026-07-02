## 2025-05-14 - Canvas Overdraw and Scroll Listener Redundancy
**Learning:** This codebase used full-screen `fillRect` calls for multiple individual ambient light gradients in the background animation, causing massive overdraw. Additionally, the scroll listener was performing redundant DOM property assignments on every scroll tick.
**Action:** Always localize `fillRect` to the gradient's bounding box and implement state guards (`isScrolled`) in scroll listeners to ensure DOM updates only occur on state transitions.
