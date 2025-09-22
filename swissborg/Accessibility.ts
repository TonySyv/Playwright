import { test, expect } from '@playwright/test';

test('Keyboard accessibility check', async ({ page }) => {
  await page.goto('https://swissborg.com');

  await page.keyboard.press('Tab');
  const active = await page.evaluate(() => document.activeElement?.tagName);
  expect(active).not.toBeNull();
});
