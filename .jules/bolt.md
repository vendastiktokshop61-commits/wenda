## 2025-05-15 - Canvas Optimization Baseline
**Learning:** Localizing fillRect to the bounding box of radial gradients and pre-calculating RGB components reduced overhead significantly, increasing FPS from ~23 to ~49 (over 100% improvement).
**Action:** Always check for global fillRect calls in canvas loops and replace with localized versions when possible.
