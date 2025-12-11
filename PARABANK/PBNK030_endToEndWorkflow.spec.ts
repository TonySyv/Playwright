import { test, expect } from '@playwright/test';

test('PBNK030 - End-to-End: Login → Transfer Funds → Logout', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  // Login
  await page.fill('input[name="username"]', 'john');
  await page.fill('input[name="password"]', 'demo');
  await page.click('input[value="Log In"]');
  await expect(page.locator('#leftPanel')).toContainText('Accounts Overview');

  // Transfer Funds
  await page.click('a[href*="transfer.htm"]');
  await page.fill('#amount', '50');
  await page.selectOption('#fromAccountId', { index: 0 });
  await page.selectOption('#toAccountId', { index: 1 });
  await page.click('input[value="Transfer"]');

  await expect(page.locator('#rightPanel')).toContainText('Transfer Complete');

  // Logout
  await page.click('a[href*="logout.htm"]');
  await expect(page.locator('#loginPanel')).toBeVisible();
});
