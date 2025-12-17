import { test, expect } from '@playwright/test';

test('PBNK035 - Verify navigation to account details page', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.fill('input[name="username"]', 'john');
  await page.fill('input[name="password"]', 'demo');
  await page.click('input[value="Log In"]');

  await page.click('a[href*="activity.htm"]');
  await expect(page).toHaveURL(/activity\.htm/);
});
