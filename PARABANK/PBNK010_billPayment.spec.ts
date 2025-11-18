import { test, expect } from '@playwright/test';

test('PBNK010 - Verify bill payment with valid details', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.fill('input[name="username"]', 'john');
  await page.fill('input[name="password"]', 'demo');
  await page.click('input[value="Log In"]');

  await page.click('a[href*="billpay.htm"]');
  await page.fill('input[name="payee.name"]', 'Electric Company');
  await page.fill('input[name="payee.address.street"]', '456 Elm Street');
  await page.fill('input[name="payee.address.city"]', 'Boston');
  await page.fill('input[name="payee.address.state"]', 'MA');
  await page.fill('input[name="payee.address.zipCode"]', '02108');
  await page.fill('input[name="payee.phoneNumber"]', '9876543210');
  await page.fill('input[name="payee.accountNumber"]', '12345');
  await page.fill('input[name="verifyAccount"]', '12345');
  await page.fill('input[name="amount"]', '50');
  await page.click('input[value="Send Payment"]');

  await expect(page.locator('#rightPanel')).toContainText('Bill Payment Complete');
});
