// Takes a screenshot of each live project and saves it to src/assets/previews/<id>.png.
//
//   npx playwright install chromium   (once)
//   npm run previews
//
// Optional: PREVIEW_ONLY=splitly npm run previews   (capture a single project)
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { projects } from '../src/data/content.js';

const outDir = new URL('../src/assets/previews/', import.meta.url);
await mkdir(outDir, { recursive: true });

const only = process.env.PREVIEW_ONLY;
const targets = projects.filter((p) => p.live && (!only || p.id === only));

const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined });
let failed = 0;

for (const p of targets) {
  const url = process.env.PREVIEW_BASE || p.live; // PREVIEW_BASE is for local testing only
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  try {
    // Free hosting can take a while to wake up, so allow a generous timeout.
    await page.goto(url, { waitUntil: 'networkidle', timeout: 90_000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: new URL(`${p.id}.png`, outDir).pathname });
    console.log(`saved  ${p.id}.png  (${url})`);
  } catch (err) {
    failed += 1;
    console.error(`failed ${p.id}: ${err.message.split('\n')[0]}`);
  } finally {
    await page.close();
  }
}

await browser.close();
if (failed) process.exitCode = 1;
