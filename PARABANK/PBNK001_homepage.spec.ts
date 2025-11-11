import { test, expect } from '@playwright/test';

test('PBNK001 - Verify homepage loads successfully', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await expect(page).toHaveTitle(/ParaBank/);
  await expect(page.locator('img[title="ParaBank"]').first()).toBeVisible();
});
