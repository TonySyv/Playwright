import { test, expect } from '@playwright/test';

test('Supported crypto assets list', async ({ page }) => {
  await page.goto('https://swissborg.com');

  await page.getByRole('link', { name: /View all supported crypto assets/i }).click();
  await expect(page).toHaveURL(/crypto/);

  const firstAsset = page.locator('table tr').first();
  await expect(firstAsset).toBeVisible();
});
