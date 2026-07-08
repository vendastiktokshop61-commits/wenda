# BOLT JOURNAL

## 2025-01-24 - Canvas Overdraw and Color Manipulation
**Learning:** Localizing fillRect to the bounding box of a gradient instead of filling the entire canvas provides a massive performance boost (reduced fill rate). Pre-calculating RGB components and using rgba() template literals is significantly faster than runtime hex string manipulation and toString(16) calls in high-frequency loops.
**Action:** Always check for full-canvas fillRect calls inside animation loops that could be localized, and pre-calculate color strings/components during initialization.
