import { test, expect } from '@playwright/test';

test('PBNK016 - Verify user can open a new account successfully', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.fill('input[name="username"]', 'john');
  await page.fill('input[name="password"]', 'demo');
  await page.click('input[value="Log In"]');

  await page.click('a[href*="openaccount.htm"]');

  await page.selectOption('select#type', '1'); // Checking
  await page.selectOption('select#fromAccountId', { index: 0 });

  await page.click('input[value="Open New Account"]');

  await expect(page.locator('#newAccountId')).toBeVisible();
  await expect(page.locator('#rightPanel')).toContainText('Congratulations');
});
