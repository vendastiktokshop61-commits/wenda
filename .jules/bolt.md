## 2025-05-15 - Synchronizing Color Formats
**Learning:** When pre-calculating different color formats (e.g., RGB string and Hex) for the same object, ensure they are synchronized by using a single boolean flag. Randomizing them independently leads to visual inconsistencies like mismatched shadow colors.
**Action:** Always derive all color-related properties from a single randomization source when initializing objects in high-performance loops.
