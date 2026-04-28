## 2025-05-14 - Canvas Animation Optimization
**Learning:** High-frequency string manipulation and canvas overdraw can significantly impact performance on lower-end devices. Pre-calculating color components and localizing fill operations reduces CPU/GPU load.
**Action:** Use `rgba()` with pre-calculated RGB values and restrict `fillRect` to affected areas in 60fps loops.
