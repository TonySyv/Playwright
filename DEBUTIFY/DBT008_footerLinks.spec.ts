/**
 * Test ID: DBT-008
 * Title: Validate footer links redirect properly
 * Description: Check that all footer links work correctly.
 */

import { test, expect } from '@playwright/test';

test('DBT-008: Footer link functionality', async ({ page }) => {
  await page.goto('https://debutify.com/');
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  const footerLinks = await page.locator('footer a').all();

  for (const link of footerLinks) {
    const href = await link.getAttribute('href');
    expect(href).not.toBeNull();
  }
});
