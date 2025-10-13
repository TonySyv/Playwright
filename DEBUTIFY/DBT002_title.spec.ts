/**
 * Test ID: DBT-002
 * Title: Validate the website title is correctly displayed
 * Description: Ensure that the page title in the browser contains "Debutify".
 */

import { test, expect } from '@playwright/test';

test('DBT-002: Page title verification', async ({ page }) => {
  await page.goto('https://debutify.com/');
  const title = await page.title();
  expect(title).toContain('Debutify');
});
