import { test, expect } from '@playwright/test';

test('PBNK015 - Verify logout successfully ends session', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.fill('input[name="username"]', 'john');
  await page.fill('input[name="password"]', 'demo');
  await page.click('input[value="Log In"]');

  await page.click('a[href*="logout.htm"]');
  
  await expect(page.locator('#loginPanel')).toBeVisible();
  await expect(page.locator('#leftPanel')).toContainText('Customer Login');
});
