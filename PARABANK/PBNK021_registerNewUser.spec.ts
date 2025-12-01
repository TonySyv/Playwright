import { test, expect } from '@playwright/test';

test('PBNK021 - Verify user can register a new account', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/register.htm');

  await page.fill('#customer\\.firstName', 'Test');
  await page.fill('#customer\\.lastName', 'User');
  await page.fill('#customer\\.address\\.street', '123 Main St');
  await page.fill('#customer\\.address\\.city', 'Metro City');
  await page.fill('#customer\\.address\\.state', 'CA');
  await page.fill('#customer\\.address\\.zipCode', '90001');
  await page.fill('#customer\\.phoneNumber', '1234567890');
  await page.fill('#customer\\.ssn', '123-45-6789');

  const user = `user${Date.now()}`;
  await page.fill('#customer\\.username', user);
  await page.fill('#customer\\.password', 'password123');
  await page.fill('#repeatedPassword', 'password123');

  await page.click('input[value="Register"]');

  await expect(page.locator('#rightPanel')).toContainText('Your account was created successfully');
});
