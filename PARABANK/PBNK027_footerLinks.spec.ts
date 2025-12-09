import { test, expect } from '@playwright/test';

test('PBNK027 - Verify footer links redirect to correct pages', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await page.click('a[href="home.htm"]');
  await expect(page).toHaveURL(/home\.htm/);

  await page.goBack();
  await page.click('a[href="about.htm"]');
  await expect(page).toHaveURL(/about\.htm/);
});
