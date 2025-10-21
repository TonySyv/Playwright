/**
 * Test ID: DBT-012
 * Title: Measure basic load performance
 * Description: Check that homepage loads within acceptable time.
 */

import { test, expect } from '@playwright/test';

test('DBT-012: Homepage load time', async ({ page }) => {
  const start = Date.now();
  await page.goto('https://debutify.com/');
  await page.waitForLoadState('networkidle');
  const loadTime = Date.now() - start;
  console.log(`Page load time: ${loadTime} ms`);
  expect(loadTime).toBeLessThan(4000);
});
