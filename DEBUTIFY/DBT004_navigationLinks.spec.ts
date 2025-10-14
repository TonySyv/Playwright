/**
 * Test ID: DBT-004
 * Title: Validate that clicking navigation links redirects correctly
 * Description: Ensure each top navigation link opens the correct page and loads without error.
 */

import { test, expect } from '@playwright/test';

test('DBT-004: Navigation link functionality', async ({ page }) => {
  await page.goto('https://debutify.com/');

  const navLinks = [
    { name: 'Theme', path: '/theme' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Demo', path: '/demo' },
    { name: 'AI Store Builder', path: '/ai-store-builder' },
    { name: 'Affiliate', path: '/affiliate' }
  ];

  for (const { name, path } of navLinks) {
    const link = page.getByRole('link', { name: new RegExp(name, 'i') });
    await link.click();
    await page.waitForLoadState('networkidle');
    expect(page.url()).toContain(path);
    await page.goBack();
  }
});
