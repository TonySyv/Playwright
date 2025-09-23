import { test, expect } from '@playwright/test';

test('Cookie consent banner', async ({ page }) => {
  await page.goto('https://swissborg.com');

  const banner = page.locator('text=Cookie');
  if (await banner.isVisible()) {
    await page.getByRole('button', { name: /Accept/i }).click();
    await expect(banner).toBeHidden();
  }
});
