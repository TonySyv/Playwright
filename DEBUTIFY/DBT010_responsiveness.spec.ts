/**
 * Test ID: DBT-010
 * Title: Validate homepage responsiveness (mobile view)
 * Description: Ensure website layout adapts properly on mobile viewport.
 */

import { test, expect } from '@playwright/test';

test('DBT-010: Responsive layout on mobile', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await context.newPage();
  await page.goto('https://debutify.com/');
  await expect(page.locator('header')).toBeVisible();
  await expect(page.locator('footer')).toBeVisible();
  await context.close();
});
