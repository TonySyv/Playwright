/**
 * Test ID: DBT-009
 * Title: Verify that a contact or support link/form exists
 * Description: Check that users can find contact or support information on the website.
 */

import { test, expect } from '@playwright/test';

test('DBT-009: Contact form or link visibility', async ({ page }) => {
  await page.goto('https://debutify.com/');
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  const contactLink = page.getByRole('link', { name: /contact/i });
  const supportLink = page.getByRole('link', { name: /support/i });

  if (await contactLink.count()) {
    await expect(contactLink).toBeVisible();
  } else {
    await expect(supportLink).toBeVisible();
  }
});
