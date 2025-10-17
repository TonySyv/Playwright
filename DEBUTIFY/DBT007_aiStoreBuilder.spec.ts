/**
 * Test ID: DBT-007
 * Title: Verify AI Store Builder page opens correctly
 * Description: Validate navigation and content on AI Store Builder page.
 */

import { test, expect } from '@playwright/test';

test('DBT-007: AI Store Builder page check', async ({ page }) => {
  await page.goto('https://debutify.com/');
  await page.getByRole('link', { name: /AI Store Builder/i }).click();
  await page.waitForLoadState('networkidle');
  expect(page.url()).toContain('/ai-store-builder');
  await expect(page.getByText(/Build/i)).toBeVisible();
});
