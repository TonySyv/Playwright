import { test, expect } from '@playwright/test';

test('PBNK034 - Verify accounts table is displayed', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.fill('input[name="username"]', 'john');
  await page.fill('input[name="password"]', 'demo');
  await page.click('input[value="Log In"]');

  await expect(page.locator('table#accountTable')).toBeVisible();
});
