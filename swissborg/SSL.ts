import { test, expect } from '@playwright/test';

test('SSL certificate check', async ({ page }) => {
  await page.goto('https://swissborg.com');
  expect(page.url().startsWith('https://')).toBeTruthy();
});
