/**
 * Test ID: DBT-011
 * Title: Check “Get Started” or “Try for Free” button
 * Description: Ensure main CTA button is visible and functional.
 */

import { test, expect } from '@playwright/test';

test('DBT-011: Homepage CTA button check', async ({ page }) => {
  await page.goto('https://debutify.com/');
  const ctaButton = page.getByRole('button', { name: /get started|try for free/i });
  await expect(ctaButton).toBeVisible();
  await ctaButton.click();
  await page.waitForLoadState('networkidle');
  expect(page.url()).not.toBe('https://debutify.com/');
});
