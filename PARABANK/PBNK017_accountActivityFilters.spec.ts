import { test, expect } from '@playwright/test';

test('PBNK017 - Verify account activity filter options work', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.fill('input[name="username"]', 'john');
  await page.fill('input[name="password"]', 'demo');
  await page.click('input[value="Log In"]');

  await page.click('a[href*="activity.htm"]');

  await page.selectOption('select[name="criteria.transactionType"]', 'Deposit');
  await page.click('input[value="Go"]');

  await expect(page.locator('#rightPanel')).toContainText('Transactions');
});
