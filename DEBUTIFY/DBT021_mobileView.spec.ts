import { test, expect, devices } from '@playwright/test';

test.use({ ...devices['iPhone 12'] });

test('Verify mobile view loads correctly', async ({ page }) => {
  await page.goto('https://debutify.com/');
  await expect(page.locator('button[aria-label="Menu"]')).toBeVisible();
});
