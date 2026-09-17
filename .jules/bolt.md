## 2026-08-13 - Localized canvas gradient bounds & scroll offset caching
**Learning:** Full-screen fillRect calls for small radial gradients and reading element `offsetTop` during scroll events create severe GPU/CPU performance bottlenecks on web pages.
**Action:** Always bound radial gradient `fillRect` calls to `(x - r, y - r, 2r, 2r)`, cache layout offsets on load/resize, and state-guard DOM style writes to prevent layout reflows and thrashing.
