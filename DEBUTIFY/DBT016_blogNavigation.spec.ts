import { test, expect } from '@playwright/test';

test('Verify Blog page navigation', async ({ page }) => {
  await page.goto('https://debutify.com/');
  await page.getByRole('link', { name: 'Blog' }).click();
  await expect(page).toHaveURL(/.*blog/);
  await expect(page.locator('h1')).toContainText('Blog');
});
