## 2025-05-14 - Canvas Loop Optimization Patterns
**Learning:** High-frequency canvas loops in this landing page often suffer from full-screen overdraw (fillRect(0,0,W,H)) and repeated hex-to-string conversions for colors. Localizing fills to bounding boxes and pre-calculating RGB components consistently yields >50% FPS gains.
**Action:** Always inspect for full-screen fills within loops and replace with targeted bounding box fills using pre-calculated RGBA template literals.
