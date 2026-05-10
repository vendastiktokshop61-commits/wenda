## 2025-05-10 - Canvas Animation Overdraw and String Manipulation
**Learning:** High-frequency canvas animations (60fps) are significantly throttled by full-canvas clear/fill operations and string manipulation within the loop. Localizing `fillRect` to the object's bounding box and pre-calculating RGB components for `rgba()` strings can lead to >80% FPS improvements.
**Action:** Always check for `fillRect(0,0,W,H)` inside loops and replace with localized fills. Pre-calculate color strings if they are static or partially static.
