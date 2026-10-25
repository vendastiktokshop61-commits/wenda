## 2025-10-25 - Bounding Radial Gradients & Hex Pre-calculation in Canvas Loop

**Learning:** Drawing full-screen radial gradients (`fillRect(0, 0, W, H)`) for localized light sources causes massive overdraw (~90% redundant pixel fills per animation frame on 1080p+ screens). Additionally, string operations (`toString(16).padStart(2, '0')`) in high-frequency 60fps render loops add CPU allocations and GC pressure that can be completely eliminated with a precalculated 256-entry lookup table (`HEX_TABLE`).

**Action:**
1. Always bound `ctx.fillRect()` to `[x - r, y - r, 2r, 2r]` when rendering radial light spots.
2. Pre-calculate `HEX_TABLE` for fast 0-255 integer alpha to hex string conversion.
3. Pre-calculate fixed trigonometric vectors (`cos(angle) * len/2`) for stationary angled elements.
4. Avoid `ctx.save()`/`ctx.restore()` in render loops when state changes (like `shadowBlur`) can be explicitly reset.
5. Cache `offsetTop` layout queries and state-guard style changes during `scroll` event listeners to prevent layout thrashing and forced reflows.
