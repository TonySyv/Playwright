import { test, expect } from '@playwright/test';

test('PBNK005 - Verify logout functionality', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.fill('input[name="username"]', 'john');
  await page.fill('input[name="password"]', 'demo');
  await page.click('input[value="Log In"]');
  await page.click('a[href="/parabank/logout.htm"]');
  await expect(page).toHaveURL(/index.htm/);
  await expect(page.locator('input[value="Log In"]')).toBeVisible();
});
