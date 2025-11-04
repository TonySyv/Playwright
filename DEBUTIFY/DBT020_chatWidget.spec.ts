import { test, expect } from '@playwright/test';

test('Verify chat widget loads', async ({ page }) => {
  await page.goto('https://debutify.com/');
  const chatButton = page.frameLocator('iframe').locator('button');
  await expect(chatButton).toBeVisible();
});
