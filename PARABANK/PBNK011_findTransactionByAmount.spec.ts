import { test, expect } from '@playwright/test';

test('PBNK011 - Verify Find Transactions by Amount', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.fill('input[name="username"]', 'john');
  await page.fill('input[name="password"]', 'demo');
  await page.click('input[value="Log In"]');

  await page.click('a[href*="findtrans.htm"]');
  await page.fill('input[name="amount"]', '100');
  await page.click('button[value="Find Transactions"]');

  await expect(page.locator('#rightPanel')).toContainText('Transaction Results');
});
