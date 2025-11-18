import { test, expect } from '@playwright/test';

test('PBNK009 - Verify transfer funds between accounts', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.fill('input[name="username"]', 'john');
  await page.fill('input[name="password"]', 'demo');
  await page.click('input[value="Log In"]');

  await page.click('a[href*="transfer.htm"]');
  await page.fill('input[name="amount"]', '100');
  await page.selectOption('#fromAccountId', { index: 0 });
  await page.selectOption('#toAccountId', { index: 1 });
  await page.click('input[value="Transfer"]');

  await expect(page.locator('#rightPanel')).toContainText('Transfer Complete!');
});
