/**
 * Test ID: DBT-014
 * Title: Verify all internal links are valid
 * Description: Ensure no internal link leads to 404 or error pages.
 */

import { test, expect } from '@playwright/test';

test('DBT-014: Broken link detection', async ({ page, request }) => {
  await page.goto('https://debutify.com/');
  const links = await page.locator('a[href^="/"]').evaluateAll(anchors =>
    anchors.map(a => (a as HTMLAnchorElement).href)
  );

  for (const link of links) {
    const response = await request.get(link);
    expect(response.status(), `Broken link: ${link}`).toBeLessThan(400);
  }
});
