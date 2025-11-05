import { test, expect } from '@playwright/test';

test('Check homepage performance and accessibility elements', async ({ page }) => {
  const start = Date.now();
  await page.goto('https://debutify.com/');
  const loadTime = Date.now() - start;
  console.log(`Page load time: ${loadTime} ms`);
  expect(loadTime).toBeLessThan(4000);

  await expect(page.locator('header')).toBeVisible();
  await expect(page.locator('footer')).toBeVisible();
});
