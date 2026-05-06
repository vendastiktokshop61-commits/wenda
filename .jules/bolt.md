## 2025-05-15 - [Canvas Animation Optimization]
**Learning:** Localizing `fillRect` to a bounding box instead of the full viewport when drawing radial gradients can significantly reduce overdraw and pixel processing, especially when multiple overlapping gradients are present. Pre-calculating color strings outside the 60fps loop also eliminates unnecessary hex-to-rgb conversions and string manipulations.
**Action:** Always check high-frequency canvas draw loops for redundant full-screen clears/fills and expensive string operations. Use bounding boxes for localized draws.
