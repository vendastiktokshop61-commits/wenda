## 2025-04-26 - Bounded FillRect & State-Guarded Scroll Mutators

**Learning:** Unbounded canvas radial gradient fillRect calls cause extreme pixel fill-rate overdraw on high-DPI/4K displays. Additionally, un-guarded DOM style mutations during window scroll trigger layout recalculations even when the scroll state hasn't changed.
**Action:** Always bound radial gradient canvas fillRects to the light source radius bounding box, precompute alpha HEX conversions, and state-guard scroll DOM mutations using cached layout offsets.
