import { test, expect } from '@playwright/test';

test('Password reset flow', async ({ page }) => {
  await page.goto('https://swissborg.com/login');

  await page.getByRole('link', { name: /Forgot password/i }).click();
  await page.fill('input[type="email"]', `test${Date.now()}@example.com`);
  await page.getByRole('button', { name: /Reset/i }).click();

  await expect(page.locator('text=Check your email')).toBeVisible();
});
