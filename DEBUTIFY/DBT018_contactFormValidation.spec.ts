import { test, expect } from '@playwright/test';

test('Verify validation error messages in Contact form', async ({ page }) => {
  await page.goto('https://debutify.com/contact');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('text=This field is required')).toBeVisible();
});
