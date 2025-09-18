import { test, expect } from '@playwright/test';

test('Mobile responsiveness check', async ({ browser }) => {
  const iPhone = playwright.devices['iPhone 13'];
  const context = await browser.newContext({ ...iPhone });
  const page = await context.newPage();

  await page.goto('https://swissborg.com');

  // Check menu collapses into hamburger
  await page.getByRole('button', { name: /menu/i }).click();
  await expect(page.getByRole('link', { name: /Invest/i })).toBeVisible();

  await context.close();
});
