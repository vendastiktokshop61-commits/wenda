const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  const filePath = `file://${path.resolve(__dirname, 'index.html')}`;
  await page.goto(filePath, { waitUntil: 'domcontentloaded' });

  // Helper to measure FPS over duration
  async function measureFPS(durationMs, scroll = false) {
    const fpsData = await page.evaluate(async ({ durationMs, scroll }) => {
      return new Promise((resolve) => {
        let frameCount = 0;
        let startTime = performance.now();
        let scrolling = false;

        function step(now) {
          frameCount++;
          const elapsed = now - startTime;
          if (scroll) {
            window.scrollBy(0, 5);
            if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
              window.scrollTo(0, 0);
            }
          }
          if (elapsed < durationMs) {
            requestAnimationFrame(step);
          } else {
            const actualDuration = (performance.now() - startTime) / 1000;
            const fps = frameCount / actualDuration;
            resolve({ fps, frameCount, actualDuration });
          }
        }
        requestAnimationFrame(step);
      });
    }, { durationMs, scroll });
    return fpsData;
  }

  // Warmup
  await measureFPS(1000, false);

  // Measure Static Idle FPS over 3 runs
  let staticFpsTotal = 0;
  for (let i = 0; i < 3; i++) {
    const res = await measureFPS(2000, false);
    staticFpsTotal += res.fps;
  }
  const avgStaticFps = staticFpsTotal / 3;

  // Reset scroll position
  await page.evaluate(() => window.scrollTo(0, 0));

  // Measure Scrolling FPS over 3 runs
  let scrollFpsTotal = 0;
  for (let i = 0; i < 3; i++) {
    const res = await measureFPS(2000, true);
    scrollFpsTotal += res.fps;
  }
  const avgScrollFps = scrollFpsTotal / 3;

  console.log(`Static Idle FPS: ${avgStaticFps.toFixed(2)}`);
  console.log(`Scrolling FPS: ${avgScrollFps.toFixed(2)}`);

  await browser.close();
})();
