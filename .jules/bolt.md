## 2025-05-18 - Scroll Event Layout Thrashing via Repeated offsetTop Reads

**Learning:** Reading `section.offsetTop` inside unthrottled or frequent `scroll` event listeners forces the browser to perform synchronous layout recalculation on every scroll tick. In tandem with setting DOM style properties on every tick, this creates significant layout thrashing and style invalidation overhead.

**Action:** Precompute and cache section offsets on initialization and `resize`/`load` events, and guard all DOM style writes behind state checks (`currentActiveId !== cur`, `currentIsScrolled !== isScrolled`) so style assignments only happen when the active state actually transitions.
