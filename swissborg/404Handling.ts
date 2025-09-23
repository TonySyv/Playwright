import { test, expect } from '@playwright/test';

test('404 page handling', async ({ page }) => {
  await page.goto('https://swissborg.com/nonexistentpage');
  await expect(page.locator('text=404')).toBeVisible();
});
