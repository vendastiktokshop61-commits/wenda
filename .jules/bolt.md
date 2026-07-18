# Bolt's Journal

## 2025-05-15 - Canvas Performance Optimizations
**Learning:** Localizing fillRect to a bounding box for radial gradients significantly reduces overdraw and avoids filling the entire canvas. Also, pre-calculating RGB strings and avoiding costly hex-to-rgb conversion inside loops yields significant FPS boosts.
**Action:** Use pre-calculated RGB strings or arrays and localized bounding box `fillRect` call instead of `fillRect(0,0,W,H)` for gradients whenever possible.
