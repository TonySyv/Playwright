import { test, expect } from '@playwright/test';

test('Verify blog search works', async ({ page }) => {
  await page.goto('https://debutify.com/blog');
  await page.getByPlaceholder('Search').fill('Shopify');
  await page.keyboard.press('Enter');
  await expect(page.locator('.post-card')).toHaveCountGreaterThan(0);
});
