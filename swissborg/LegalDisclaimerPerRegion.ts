import { test, expect } from '@playwright/test';

test('Region-specific legal disclaimer', async ({ page }) => {
  await page.goto('https://swissborg.com');

  await page.getByRole('link', { name: /List of Risks/i }).click();
  await expect(page.locator('text=Not available in the US')).toBeVisible();
});
