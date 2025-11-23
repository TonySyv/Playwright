import { test, expect } from '@playwright/test';

test('PBNK013 - Verify loan application submission', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.fill('input[name="username"]', 'john');
  await page.fill('input[name="password"]', 'demo');
  await page.click('input[value="Log In"]');

  await page.click('a[href*="loan.htm"]');
  await page.fill('input[name="amount"]', '5000');
  await page.fill('input[name="downPayment"]', '500');
  await page.selectOption('select[name="fromAccountId"]', { index: 0 });

  await page.click('input[value="Apply Now"]');
  await expect(page.locator('#rightPanel')).toContainText('Loan Request Processed');
});
