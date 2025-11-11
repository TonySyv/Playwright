import { test, expect } from '@playwright/test';

test('PBNK002 - Verify navigation links', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  const navLinks = ['About Us', 'Services', 'Products', 'Locations', 'Admin Page'];

  for (const linkText of navLinks) {
    await page.getByRole('link', { name: linkText }).click();
    await expect(page).toHaveURL(/parabank/);
    await page.goBack();
  }
});
