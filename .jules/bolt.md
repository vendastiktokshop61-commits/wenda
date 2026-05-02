## 2025-05-15 - [Canvas Overdraw and String Manipulation]
**Learning:** In high-frequency 60fps animation loops, full-screen `fillRect` operations (especially multiple times per frame) and dynamic hex-to-string conversions (`toString(16)`) cause measurable frame time spikes.
**Action:** Always localize canvas fill operations to the minimum required bounding box and pre-calculate color strings or components to avoid redundant processing in the `draw` loop. Localizing `fillRect` and pre-calculating RGB components reduced frame times from ~30ms to ~18ms in this project.
