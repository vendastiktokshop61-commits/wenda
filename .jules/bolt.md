# Bolt's Journal

Critical learnings and codebase-specific performance insights.

## 2025-05-18 - Canvas & Scroll Performance Bottlenecks in Single-Page Landing

**Learning:**
In `index.html`:
1. In `requestAnimationFrame` loops, filling full viewport canvas (`0,0,W,H`) for multiple radial ambient light gradients causes significant fill-rate overhead. Restricting `fillRect` to gradient bounding boxes (`l.x - l.r, l.y - l.r, l.r * 2, l.r * 2`) drastically reduces pixel fill cost.
2. Converting numbers to hex strings via `.toString(16).padStart(2, '0')` in high-frequency animation loops allocates string objects every frame. Pre-computing a 256-entry `HEX_TABLE` lookup array completely eliminates string allocation overhead.
3. Querying `element.offsetTop` inside `window.onscroll` causes layout thrashing/reflow on every scroll event. Caching section vertical offsets on load and window resize eliminates reflows.
4. Mutating `element.style` inside high-frequency scroll callbacks without checking whether state changed triggers unnecessary DOM style recalculations and repaints. State-guarding style writes ensures DOM mutations only occur when scroll thresholds or active sections transition.

**Action:**
When optimizing HTML5 Canvas and scroll listeners:
- Localize gradient fill rects to bounding boxes.
- Use lookup tables for alpha/color hex conversions.
- Cache DOM layout dimensions (`offsetTop`, `getBoundingClientRect`).
- State-guard DOM style modifications on scroll events.
