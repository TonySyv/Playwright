import { test, expect } from '@playwright/test';

test('API failure handling', async ({ page }) => {
  await page.route('**/markets/**', route => route.fulfill({ status: 500 }));

  await page.goto('https://swissborg.com/markets');
  await expect(page.locator('text=Unable to load prices')).toBeVisible();
});
