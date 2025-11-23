import { test, expect } from '@playwright/test';

test('PBNK014 - Verify user can update contact information', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.fill('input[name="username"]', 'john');
  await page.fill('input[name="password"]', 'demo');
  await page.click('input[value="Log In"]');

  await page.click('a[href*="updateprofile.htm"]');

  await page.fill('input[name="customer.address.street"]', '999 Updated Ave');
  await page.fill('input[name="customer.address.city"]', 'Chicago');
  await page.fill('input[name="customer.address.state"]', 'IL');
  await page.fill('input[name="customer.address.zipCode"]', '60601');
  await page.fill('input[name="customer.phoneNumber"]', '3125551010');

  await page.click('input[value="Update Profile"]');
  await expect(page.locator('#rightPanel')).toContainText('Your updated address and phone number have been added to the system');
});
