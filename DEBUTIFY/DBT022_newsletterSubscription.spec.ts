import { test, expect } from '@playwright/test';

test('Verify newsletter subscription flow', async ({ page }) => {
  await page.goto('https://debutify.com/');
  await page.locator('input[type="email"]').fill('test@example.com');
  await page.getByRole('button', { name: /subscribe/i }).click();
  await expect(page.locator('text=Thank you for subscribing')).toBeVisible();
});
