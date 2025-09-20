import { test, expect } from '@playwright/test';

test('Homepage load & navigation', async ({ page }) => {
  await page.goto('https://swissborg.com');

  await expect(page).toHaveTitle(/SwissBorg/i);

  const navLinks = [
    'Invest',
    'Buy Crypto',
    'Markets',
    'Resources',
    'About us',
    '$BORG'
  ];

  for (const linkText of navLinks) {
    await page.getByRole('link', { name: linkText }).click();
    await expect(page).toHaveURL(/.+/);
    await page.goBack();
  }

  await page.getByRole('link', { name: /Get started/i }).click();
  await expect(page).toHaveURL(/.+/);
});
