/**
 * Test ID: DBT-001
 * Title: Verify that the homepage loads successfully
 * Description: Ensure that the homepage opens without errors and displays all key elements.
 */

import { test, expect } from '@playwright/test';

test('DBT-001: Homepage loads successfully', async ({ page }) => {
  await page.goto('https://debutify.com/');
  await expect(page).toHaveTitle(/Debutify/i);

  // Check main elements
  await expect(page.locator('header')).toBeVisible();
  await expect(page.locator('footer')).toBeVisible();
  await expect(page.getByRole('button', { name: /get started/i })).toBeVisible();
});
