import { test, expect } from '@playwright/test';

test('Dark mode toggle', async ({ page }) => {
  await page.goto('https://swissborg.com');

  const toggle = page.getByRole('button', { name: /Dark Mode/i });
  if (await toggle.isVisible()) {
    await toggle.click();
    await expect(page.locator('body')).toHaveClass(/dark/);
  }
});
