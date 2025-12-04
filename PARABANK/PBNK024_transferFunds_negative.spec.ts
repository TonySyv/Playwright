import { test, expect } from '@playwright/test';

test('PBNK024 - Verify error displayed when transferring invalid amount', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await page.fill('input[name="username"]', 'john');
  await page.fill('input[name="password"]', 'demo');
  await page.click('input[value="Log In"]');

  await page.click('a[href*="transfer.htm"]');

  await page.fill('#amount', '-500'); // invalid
  await page.click('input[value="Transfer"]');

  await expect(page.locator('#rightPanel')).toContainText('must be a positive number');
});
