import { test, expect } from '@playwright/test';

test('Market order form validation', async ({ page }) => {
  await page.goto('https://swissborg.com');

  await page.getByRole('link', { name: /Buy Crypto/i }).click();

  // Try blank amount
  await page.getByRole('button', { name: /Buy/i }).click();
  await expect(page.locator('text=Enter amount')).toBeVisible();

  // Try invalid input
  await page.fill('input[name="amount"]', 'abc');
  await page.getByRole('button', { name: /Buy/i }).click();
  await expect(page.locator('text=Invalid amount')).toBeVisible();
});
