import { test, expect } from '@playwright/test';

test('PBNK033 - Verify successful login with valid credentials', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.fill('input[name="username"]', 'john');
  await page.fill('input[name="password"]', 'demo');
  await page.click('input[value="Log In"]');

  await expect(page.locator('h1.title')).toHaveText('Accounts Overview');
});
