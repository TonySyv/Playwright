/**
 * Test ID: DBT-013
 * Title: Verify accessibility of key elements
 * Description: Check for alt text on images and proper heading hierarchy.
 */

import { test, expect } from '@playwright/test';

test('DBT-013: Accessibility basic checks', async ({ page }) => {
  await page.goto('https://debutify.com/');
  const images = await page.locator('img').all();
  for (const img of images) {
    const altText = await img.getAttribute('alt');
    expect(altText).not.toBeNull();
  }
  await expect(page.locator('h1')).toBeVisible();
});
