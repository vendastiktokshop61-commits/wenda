# Bolt's Performance Journal

## 2025-05-15 - Canvas Radial Gradient Overdraw & Hot Loop String Formatting
**Learning:** Drawing a full-canvas (0,0,W,H) radial gradient for animated ambient lights causes severe overdraw because the gradient fades to transparent at a smaller radius `r`. Localizing the `fillRect` to the gradient's bounding box `(l.x - l.r, l.y - l.r, l.r * 2, l.r * 2)` eliminates full-screen pixel overdraw. Additionally, dynamic string concatenation and `.toString(16).padStart(2,'0')` conversion inside high-frequency animation loops create massive CPU and memory garbage collection overhead.
**Action:** Always localize `fillRect` for localized drawing like radial gradients and use pre-calculated RGB components with fast template literals to construct `rgba()` color strings. Avoid unnecessary `ctx.save()` and `ctx.restore()` in high-frequency loops by manually resetting altered properties (e.g. `ctx.shadowBlur = 0`).
