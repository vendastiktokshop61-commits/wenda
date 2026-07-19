## 2025-05-15 - Canvas Overdraw and Color Allocation Bottlenecks
**Learning:** Drawing full-canvas radial gradients (`fillRect(0,0,W,H)`) multiple times per animation frame is a massive rendering bottleneck. In addition, high-frequency hex-to-rgb string parsing/padding and shadow state save/restore push/pop cycles create significant CPU overhead.
**Action:** Always localize radial gradients using bounding boxes, pre-calculate RGB components for template literal interpolation, and eliminate ctx.save()/restore() in favor of targeted manual state resets.
