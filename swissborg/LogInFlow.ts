import { test, expect } from '@playwright/test';

test('Login form validation', async ({ page }) => {
  await page.goto('https://swissborg.com/login');

  await page.fill('input[name="email"]', 'invalid');
  await page.fill('input[name="password"]', 'wrongpass');
  await page.getByRole('button', { name: /Login/i }).click();

  await expect(page.locator('text=Invalid')).toBeVisible();
});
