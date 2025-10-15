/**
 * Test ID: DBT-006
 * Title: Verify pricing plans are visible
 * Description: Check that the Pricing page loads and displays pricing options.
 */

import { test, expect } from '@playwright/test';

test('DBT-006: Pricing page visibility', async ({ page }) => {
  await page.goto('https://debutify.com/');
  await page.getByRole('link', { name: /Pricing/i }).click();
  await page.waitForLoadState('networkidle');
  expect(page.url()).toContain('/pricing');
  await expect(page.getByText(/\$\d+/)).toBeVisible();
});
