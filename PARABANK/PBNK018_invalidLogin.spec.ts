import { test, expect } from '@playwright/test';

test('PBNK018 - Verify user cannot login using invalid credentials', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await page.fill('input[name="username"]', 'wrongUser');
  await page.fill('input[name="password"]', 'wrongPassword');
  await page.click('input[value="Log In"]');

  await expect(page.locator('#rightPanel')).toContainText('The username and password could not be verified');
});
