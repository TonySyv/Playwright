import { test, expect } from '@playwright/test';

test('PBNK003 - Verify login with invalid credentials', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.fill('input[name="username"]', 'invalidUser');
  await page.fill('input[name="password"]', 'wrongPass');
  await page.click('input[value="Log In"]');
  await expect(page.locator('#rightPanel')).toContainText('The username and password could not be verified.');
});
