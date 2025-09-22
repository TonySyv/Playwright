import { test, expect } from '@playwright/test';

test('Legal and compliance pages', async ({ page }) => {
  await page.goto('https://swissborg.com');

  const links = ['Privacy Policy', 'Terms of Use', 'Fees', 'List of Risks'];
  for (const link of links) {
    await page.getByRole('link', { name: link }).click();
    await expect(page).toHaveURL(/.+/);
    await page.goBack();
  }
});
