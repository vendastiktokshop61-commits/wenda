# Bolt's Journal - Critical Learnings Only

## 2025-10-31 - Scroll Event Layout Reads & Unconditional DOM Mutations
**Learning:** Querying `offsetTop` on multiple DOM elements inside a `scroll` event listener triggers repeated layout queries on every scroll tick. Combining this with un-guarded DOM style writes (`element.style.color`, `nav.style.background`, etc.) causes redundant layout/style invalidations 60-120 times per second during smooth scrolling.
**Action:** Always pre-calculate and cache static section offsets on initial load and window `resize`. Keep local state variables (e.g. `currentActiveNavId`, `isNavScrolled`) and guard DOM mutations with equality checks so style assignments only occur during actual state transitions.
