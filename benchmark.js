const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  const filePath = `file://${path.resolve('index.html')}`;

  await page.goto(filePath, { waitUntil: 'domcontentloaded' });

  // Measure Idle FPS over 3 seconds
  const idleFrames = await page.evaluate(async () => {
    return new Promise(resolve => {
      let frames = 0;
      const start = performance.now();
      function step() {
        frames++;
        if (performance.now() - start < 3000) {
          requestAnimationFrame(step);
        } else {
          resolve({ frames, duration: performance.now() - start });
        }
      }
      requestAnimationFrame(step);
    });
  });

  const idleFPS = (idleFrames.frames / (idleFrames.duration / 1000)).toFixed(2);

  // Measure Scroll FPS over 3 seconds of continuous scrolling
  const scrollFrames = await page.evaluate(async () => {
    return new Promise(resolve => {
      let frames = 0;
      const start = performance.now();
      function scrollStep() {
        frames++;
        window.scrollBy(0, 15);
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          window.scrollTo(0, 0);
        }
        if (performance.now() - start < 3000) {
          requestAnimationFrame(scrollStep);
        } else {
          resolve({ frames, duration: performance.now() - start });
        }
      }
      requestAnimationFrame(scrollStep);
    });
  });

  const scrollFPS = (scrollFrames.frames / (scrollFrames.duration / 1000)).toFixed(2);

  console.log(`Baseline Idle FPS: ${idleFPS}`);
  console.log(`Baseline Scroll FPS: ${scrollFPS}`);

  await browser.close();
})();
