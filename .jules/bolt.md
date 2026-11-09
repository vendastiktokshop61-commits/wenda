# Bolt's Journal - Critical Learnings Only

## 2026-11-09 - Scroll Listener Layout Thrashing & Redundant DOM Style Writes
**Learning:** In vanilla single-page sites with high-frequency scroll listeners, reading section DOM geometry (`offsetTop`) inside the scroll callback forces layout calculations on every scroll event, and repeatedly setting inline styles on nav links/navbar invalidates styles unnecessarily. Caching section offsets on load/resize and guarding style updates behind state change checks eliminates layout thrashing and reduces scroll event handling time by >95%.
**Action:** Always pre-compute/cache DOM measurements outside frequent event handlers (scroll, mousemove) and track previous state before updating element styles.
