import { test, expect } from '@playwright/test';

test('Login lockout after multiple failed attempts', async ({ page }) => {
  await page.goto('https://swissborg.com/login');

  for (let i = 0; i < 5; i++) {
    await page.fill('input[name="email"]', 'user@example.com');
    await page.fill('input[name="password"]', 'wrongpassword');
    await page.getByRole('button', { name: /Login/i }).click();
  }

  await expect(page.locator('text=Account locked')).toBeVisible();
});
v
