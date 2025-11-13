import { test, expect } from '@playwright/test';

test('PBNK006 - Verify user registration with valid details', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/register.htm');
  
  await page.fill('input[name="customer.firstName"]', 'Jane');
  await page.fill('input[name="customer.lastName"]', 'Doe');
  await page.fill('input[name="customer.address.street"]', '123 Main Street');
  await page.fill('input[name="customer.address.city"]', 'New York');
  await page.fill('input[name="customer.address.state"]', 'NY');
  await page.fill('input[name="customer.address.zipCode"]', '10001');
  await page.fill('input[name="customer.phoneNumber"]', '1234567890');
  await page.fill('input[name="customer.ssn"]', '111-22-3333');
  await page.fill('input[name="customer.username"]', `janedoe${Date.now()}`);
  await page.fill('input[name="customer.password"]', 'demo123');
  await page.fill('input[name="repeatedPassword"]', 'demo123');
  await page.click('input[value="Register"]');

  await expect(page.locator('#rightPanel')).toContainText('Your account was created successfully');
});
