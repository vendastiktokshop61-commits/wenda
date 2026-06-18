## 2025-05-15 - Canvas and Scroll Optimization
**Learning:** Combining canvas loop optimizations (localizing `fillRect`, removing `save`/`restore`) with scroll listener state guards yields dramatic performance improvements (nearly 90% FPS increase) while maintaining code clarity.
**Action:** Always check for high-frequency DOM/Canvas operations that can be guarded by state checks or localized to smaller regions.
