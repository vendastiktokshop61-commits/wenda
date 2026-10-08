## 2025-05-10 - Bounding box radial fills and cached scroll offsets in HTML landing page

**Learning:** Drawing ambient radial light gradients using full-screen `ctx.fillRect(0, 0, W, H)` calls in `requestAnimationFrame` forces excessive pixel shader/fill calculations across the entire canvas every frame. Restraining `fillRect` to each radial light's bounding box `[x - r, y - r, 2r, 2r]` eliminates redundant fill calculations. Additionally, calling `s.offsetTop` repeatedly inside a `scroll` listener causes layout thrashing, which can be completely avoided by caching section vertical offsets on window load and resize, and state-guarding DOM style mutations.

**Action:**
1. In canvas animation loops with radial gradients, calculate bounding rects `[x - r, y - r, 2r, 2r]` rather than clearing or filling the full canvas bounds.
2. Pre-calculate lookup arrays (e.g. `HEX_TABLE[256]`) and static trigonometric values (`cosAngle`, `sinAngle`) to prevent string allocations and repeated math operations per frame.
3. Cache layout properties (`offsetTop`, `offsetHeight`) on window `load` and `resize` events instead of querying DOM offsets during high-frequency events like `scroll`.
