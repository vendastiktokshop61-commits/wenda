
## 2025-05-14 - Canvas Context State Management
**Learning:** Replacing `ctx.save()` and `ctx.restore()` with manual property resets (like `ctx.shadowBlur = 0`) in high-frequency loops (60fps) significantly reduces overhead while maintaining correctness if state is fully controlled.
**Action:** Prefer targeted state resets over full stack operations in animation loops.
