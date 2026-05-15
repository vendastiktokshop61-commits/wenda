## 2025-05-15 - Canvas Overdraw and Hot Loop String Manipulation
**Learning:** Filling the entire canvas for individual radial gradients inside a 60fps loop causes significant overdraw, especially on mobile or low-end hardware. Additionally, `toString(16)` and string concatenation in the hot loop are expensive operations that can be avoided.
**Action:** Always localize `fillRect` to the bounding box of the element being drawn and pre-calculate RGB values for colors to use template literals for alpha transparency.
