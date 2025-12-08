import { test, expect } from '@playwright/test';

test('PBNK025 - Verify error messages displayed when mandatory Bill Pay fields are empty', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await page.fill('input[name="username"]', 'john');
  await page.fill('input[name="password"]', 'demo');
  await page.click('input[value="Log In"]');

  await page.click('a[href*="billpay.htm"]');

  await page.click('input[value="Send Payment"]');

  await expect(page.locator('#payee\\.name\\.errors')).toContainText('is required');
  await expect(page.locator('#payee\\.address\\.street\\.errors')).toContainText('is required');
  await expect(page.locator('#amount.errors')).toContainText('is required');
});
