/**
 * Test ID: DBT-003
 * Title: Verify all main navigation links are visible
 * Description: Check for presence of links: Theme, Pricing, Demo, AI Store Builder, Affiliate, Login.
 */

import { test, expect } from '@playwright/test';

test('DBT-003: Navigation menu visibility', async ({ page }) => {
  await page.goto('https://debutify.com/');

  const navItems = ['Theme', 'Pricing', 'Demo', 'AI Store Builder', 'Affiliate', 'Login'];

  for (const item of navItems) {
    const link = page.getByRole('link', { name: new RegExp(item, 'i') });
    await expect(link, `Nav link "${item}" should be visible`).toBeVisible();
  }
});
