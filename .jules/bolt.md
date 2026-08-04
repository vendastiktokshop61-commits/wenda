# Bolt's Journal

## 2025-05-15 - Canvas optimizations and reflow avoidance in landing page
**Learning:** Localizing radial gradients using bounding boxes inside draw loops significantly reduces canvas overdraw. Pre-calculating color constants as strings avoids hex-to-rgb conversion overhead. Removing ctx.save() and ctx.restore() in favor of manual style resets saves considerable GPU/CPU resources.
**Action:** Apply bounding box optimization for radial gradients and pre-calculate color strings. Cache section offsets on window resize/load to prevent forced reflows during scroll handling.
