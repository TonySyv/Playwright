import { test, expect } from '@playwright/test';

test('PBNK026 - Verify loan request fails when entering invalid loan details', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await page.fill('input[name="username"]', 'john');
  await page.fill('input[name="password"]', 'demo');
  await page.click('input[value="Log In"]');

  await page.click('a[href*="loan.htm"]');

  await page.fill('#amount', '-1000');
  await page.fill('#downPayment', '-50');

  await page.click('input[value="Apply Now"]');

  await expect(page.locator('#rightPanel')).toContainText('down payment must be greater');
});
