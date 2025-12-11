import { test, expect } from '@playwright/test';

test('PBNK029 - Verify user is redirected to login page after logging out', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await page.fill('input[name="username"]', 'john');
  await page.fill('input[name="password"]', 'demo');
  await page.click('input[value="Log In"]');

  await page.click('a[href*="logout.htm"]');

  await expect(page).toHaveURL(/index\.htm/);
  await expect(page.locator('#loginPanel')).toBeVisible();
});
