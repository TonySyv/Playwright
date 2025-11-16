import { test, expect } from '@playwright/test';

test('PBNK007 - Verify registration field validation errors', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/register.htm');
  await page.click('input[value="Register"]');
  await expect(page.locator('#customerForm')).toContainText('is required');
});
