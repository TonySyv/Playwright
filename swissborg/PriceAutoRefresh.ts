import { test, expect } from '@playwright/test';

test('Crypto price auto-refresh', async ({ page }) => {
  await page.goto('https://swissborg.com/markets');

  const price = page.locator('.price').first();
  const firstValue = await price.textContent();

  await page.waitForTimeout(5000);
  const secondValue = await price.textContent();

  expect(firstValue).not.toEqual(secondValue);
});
