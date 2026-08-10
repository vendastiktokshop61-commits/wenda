# Bolt's Performance Journal

## 2026-08-10 - Preventing Scroll Layout Thrashing via Cached Offsets
**Learning:** Reading `.offsetTop` on DOM elements inside high-frequency scroll event listeners causes synchronous layout reflows (layout thrashing), dragging down scroll performance and causing UI stutter. State-guarding styling writes (like active link updates) is also crucial to avoid redundant DOM updates.
**Action:** Always cache vertical offsets (`offsetTop`) of key sections during initial page load and update them on window resize. Use these cached values in scroll handlers, and apply state-guards (`lastCur`, `lastIsGlass`) to execute DOM writes only during state transitions.
