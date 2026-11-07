# Bolt's Journal

Critical performance learnings and codebase-specific patterns.

## 2025-05-18 - Scroll handler layout thrashing in landing page
**Learning:** In vanilla landing pages that synchronize nav states with sections, reading `section.offsetTop` on every scroll tick causes repeated style calculations and layout thrashing. Furthermore, writing inline styles to `nav` and `navLinks` on every scroll tick triggers style invalidations even when the active section or scrolled state hasn't changed.
**Action:** Always cache section `offsetTop` values on page load and window resize (`{ passive: true }`), and guard DOM mutations with a state check so that styling is only modified when crossing state thresholds (e.g. crossing `scrollY > 50` or transitioning to a different active section).
