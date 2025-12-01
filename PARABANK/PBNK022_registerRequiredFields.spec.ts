import { test, expect } from '@playwright/test';

test('PBNK022 - Verify registration required fields validation messages appear', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/register.htm');

  await page.click('input[value="Register"]');

  await expect(page.locator('#customer\\.firstName.errors')).toContainText('is required');
  await expect(page.locator('#customer\\.lastName.errors')).toContainText('is required');
  await expect(page.locator('#customer\\.address\\.street.errors')).toContainText('is required');
  await expect(page.locator('#customer\\.username.errors')).toContainText('is required');
});
