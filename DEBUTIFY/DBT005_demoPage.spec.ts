/**
 * Test ID: DBT-005
 * Title: Verify Demo page link redirects correctly
 * Description: Ensure clicking the Demo link opens the correct page.
 */

import { test, expect } from '@playwright/test';

test('DBT-005: Demo page access', async ({ page }) => {
  await page.goto('https://debutify.com/');
  await page.getByRole('link', { name: /Demo/i }).click();
  await page.waitForLoadState('networkidle');
  expect(page.url()).toContain('/demo');
  await expect(page.getByText(/Try Shopify Theme Free/i)).toBeVisible();
});
