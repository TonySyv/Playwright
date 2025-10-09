import { test, expect } from '@playwright/test';

test('Cancel a limit order (UI placeholder)', async ({ page }) => {
  await page.goto('https://swissborg.com');

  // Navigate to orders page
  await page.getByRole('link', { name: /Orders/i }).click();

  // Cancel if available
  const cancelBtn = page.getByRole('button', { name: /Cancel Order/i });
  if (await cancelBtn.isVisible()) {
    await cancelBtn.click();
    await expect(page.locator('text=Order cancelled')).toBeVisible();
  }
});
