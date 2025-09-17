// tests/open-in-new-tab.spec.ts
import { test, expect } from '@playwright/test';

test.describe('SwissBorg external links open in new tab', () => {
  // List of links we expect to open in a new tab
  const externalLinks = [
    { text: 'Help Center', expectedUrl: /help\.swissborg\.com/ },
    { text: 'Blog', expectedUrl: /swissborg\.com\/blog/ },
    { text: 'Careers', expectedUrl: /jobs\.lever\.co|swissborg\.com\/careers/ },
    { text: 'LinkedIn', expectedUrl: /linkedin\.com/ },
    { text: 'Twitter', expectedUrl: /twitter\.com/ },
    { text: 'YouTube', expectedUrl: /youtube\.com/ },
  ];

  for (const { text, expectedUrl } of externalLinks) {
    test(`"${text}" link should open in new tab`, async ({ page, context }) => {
      await page.goto('https://swissborg.com');

      // Locate link by text
      const link = page.getByRole('link', { name: new RegExp(text, 'i') });

      // Verify it has target="_blank"
      await expect(link).toHaveAttribute('target', '_blank');

      // Listen for the new tab (popup)
      const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        link.click(),
      ]);

      // Ensure the new tab loaded the expected URL
      await newPage.waitForLoadState();
      expect(newPage.url()).toMatch(expectedUrl);

      // Close the new tab to avoid clutter
      await newPage.close();
    });
  }
});
