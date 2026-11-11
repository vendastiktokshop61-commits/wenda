# Bolt's Performance Journal

## 2026-04-26 - Scroll Listener Layout Queries and Redundant DOM Mutations
**Learning:** In single-page landing pages with multiple sections and fixed glassmorphic headers, querying `offsetTop` on every section element inside a window scroll event listener triggers synchronous layout recalculations. Furthermore, modifying inline styles (such as `nav.style` and `navLinks.forEach(a => a.style.color = ...)`) on every scroll tick causes continuous style invalidation and layout thrashing even when the active section or scroll threshold hasn't changed.
**Action:** Always pre-calculate and cache section top offsets upon load and window resize (`passive: true`). Guard DOM mutations using state tracking (`currentActiveSection`, `currentNavScrolled`) so inline CSS styles are only mutated when the active state actually transitions.
