import { test, expect } from '@playwright/test';

test('PBNK023 - Verify error message when user attempts login with empty fields', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await page.click('input[value="Log In"]');

  await expect(page.locator('#rightPanel')).toContainText('The username and password could not be verified');
});
