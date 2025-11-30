import { test, expect } from '@playwright/test';

test('PBNK019 - Verify homepage UI elements load correctly (Smoke Test)', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await expect(page.locator('#headerPanel')).toBeVisible();
  await expect(page.locator('#loginPanel')).toBeVisible();
  await expect(page.locator('#footerPanel')).toBeVisible();
  await expect(page.locator('text=Customer Login')).toBeVisible();
});
