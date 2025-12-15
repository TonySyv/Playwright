import { test, expect } from '@playwright/test';

test('PBNK032 - Verify login panel is visible on homepage', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await expect(page.locator('#loginPanel')).toBeVisible();
});
