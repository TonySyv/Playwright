import { test, expect } from '@playwright/test';

test('Product features navigation', async ({ page }) => {
  await page.goto('https://swissborg.com');

  const features = ['Auto-Invest', 'Crypto Bundles', 'Earn', 'Alpha Deals'];
  for (const feature of features) {
    await page.getByRole('link', { name: feature }).click();
    await expect(page).toHaveURL(/.+/);
    await page.goBack();
  }
});
