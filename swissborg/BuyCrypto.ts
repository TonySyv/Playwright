import { test, expect } from '@playwright/test';

test('Buy crypto flow placeholder', async ({ page }) => {
  await page.goto('https://swissborg.com');

  // UI-only check since trading requires account
  await expect(page.getByText(/Buy Crypto/i)).toBeVisible();
});
