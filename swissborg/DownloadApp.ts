import { test, expect } from '@playwright/test';

test('Download app / QR Code links', async ({ page }) => {
  await page.goto('https://swissborg.com');

  await page.getByRole('link', { name: /App Store/i }).click();
  await expect(page).toHaveURL(/apple\.com/);

  await page.goBack();

  await page.getByRole('link', { name: /Google Play/i }).click();
  await expect(page).toHaveURL(/play\.google\.com/);
});
