import { test, expect } from '@playwright/test';

test('PBNK028 - Verify main navigation menu links work after login', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await page.fill('input[name="username"]', 'john');
  await page.fill('input[name="password"]', 'demo');
  await page.click('input[value="Log In"]');

  const menuOptions = [
    'overview.htm',
    'transfer.htm',
    'billpay.htm',
    'accountactivity.htm',
    'requestloan.htm'
  ];

  for (const link of menuOptions) {
    await page.click(`a[href*="${link}"]`);
    await expect(page).toHaveURL(new RegExp(link));
  }
});
