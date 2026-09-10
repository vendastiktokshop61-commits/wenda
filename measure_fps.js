const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const fileUrl = 'file://' + path.resolve('index.html');
  await page.goto(fileUrl, { waitUntil: 'domcontentloaded' });

  // Measure FPS during idle animation (2 seconds)
  const idleFps = await page.evaluate(async () => {
    return new Promise((resolve) => {
      let frameCount = 0;
      const startTime = performance.now();
      function step() {
        frameCount++;
        if (performance.now() - startTime < 2000) {
          requestAnimationFrame(step);
        } else {
          const duration = (performance.now() - startTime) / 1000;
          resolve(frameCount / duration);
        }
      }
      requestAnimationFrame(step);
    });
  });

  // Measure FPS during scrolling (2 seconds)
  const scrollFps = await page.evaluate(async () => {
    return new Promise((resolve) => {
      let frameCount = 0;
      const startTime = performance.now();
      let scrollY = 0;
      function step() {
        frameCount++;
        scrollY += 15;
        window.scrollTo(0, scrollY);
        if (performance.now() - startTime < 2000) {
          requestAnimationFrame(step);
        } else {
          const duration = (performance.now() - startTime) / 1000;
          resolve(frameCount / duration);
        }
      }
      requestAnimationFrame(step);
    });
  });

  console.log(`Idle FPS: ${idleFps.toFixed(2)}`);
  console.log(`Scroll FPS: ${scrollFps.toFixed(2)}`);

  await browser.close();
})();
