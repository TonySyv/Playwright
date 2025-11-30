import { test, expect } from '@playwright/test';

test('PBNK020 - Basic accessibility check: images, labels, and ARIA roles', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  // Check logo alt text
  await expect(page.locator('img[alt="ParaBank"]')).toBeVisible();

  // Check login fields have labels
  await expect(page.locator('label[for="username"]')).toBeVisible();
  await expect(page.locator('label[for="password"]')).toBeVisible();

  // Check navigation roles
  await expect(page.locator('nav')).toBeVisible();
});
