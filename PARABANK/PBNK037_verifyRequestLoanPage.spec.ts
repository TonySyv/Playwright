import { test, expect } from '@playwright/test';

test('PBNK037 - Verify Request Loan page loads', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.fill('input[name="username"]', 'john');
  await page.fill('input[name="password"]', 'demo');
  await page.click('input[value="Log In"]');

  await page.click('a[href*="loan.htm"]');
  await expect(page.locator('h1.title')).toHaveText('Apply for a Loan');
});
