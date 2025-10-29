import { test, expect } from '@playwright/test';

test('Verify all pricing plans are visible', async ({ page }) => {
  await page.goto('https://debutify.com/pricing');
  const plans = ['Free', 'Starter', 'Pro', 'Enterprise'];
  for (const plan of plans) {
    await expect(page.locator(`text=${plan}`)).toBeVisible();
  }
});
