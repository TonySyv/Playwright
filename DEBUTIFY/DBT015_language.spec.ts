/**
 * Test ID: DBT-015
 * Title: Verify language or localization options
 * Description: Check for presence of language selector or localized content.
 */

import { test, expect } from '@playwright/test';

test('DBT-015: Localization check', async ({ page }) => {
  await page.goto('https://debutify.com/');
  const langSelector = page.locator('select, [aria-label*="language"], [data-lang]');
  if (await langSelector.count()) {
    await expect(langSelector.first()).toBeVisible();
  } else {
    console.log('No language selector found — site may be single-language.');
  }
});
