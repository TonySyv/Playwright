// tests/swissborg.smoketest.ts
import { test, expect } from '@playwright/test';

test.describe('SwissBorg site smoke tests', () => {

  test('homepage loads and has expected sections', async ({ page }) => {
    await page.goto('/');

    // Check title
    await expect(page).toHaveTitle(/Buy and Sell Crypto Safely and at Low Fees/i);

    // Check main navigation items exist
    const navLinks = ['Invest', 'Buy Crypto', 'Markets', 'Resources', 'About us', '$BORG'];
    for (const linkText of navLinks) {
      await expect(page.getByRole('link', { name: linkText })).toBeVisible();
    }

    // Check some key features are present
    await expect(page.getByText(/Our Smart Engine finds the best execution route/i)).toBeVisible();
    await expect(page.getByText(/Automate your Investments/)).toBeVisible();

    // Check download/app adjust link exists (QR etc.)
    await expect(page.locator('img[alt*=QR]')).toBeVisible().or(await expect(page.locator('img[src*="qr"]')).toBeVisible());
  });

  test('navigate to Resources / Help Center', async ({ page }) => {
    await page.goto('/');
    await page.click('a:has-text("Help Center")');
    // It may open in new tab or same – handle accordingly
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/help\.swissborg\.com/);

    // Check that FAQ or a specific FAQ item exists
    await expect(page.getByText(/What is SwissBorg\?/i)).toBeVisible();
  });

  test('subscribe to newsletter with valid email', async ({ page }) => {
    await page.goto('/');
    // Scroll/locate newsletter section
    const newsletterInput = page.getByPlaceholder('Email').first();
    await newsletterInput.scrollIntoViewIfNeeded();
    await newsletterInput.fill('test@example.com');

    const submitBtn = page.getByRole('button', { name: /subscribe/i });
    await expect(submitBtn).toBeEnabled();
    await submitBtn.click();

    // Depending on the implementation, you might check for a success message
    await expect(page.getByText(/Thank you|Subscribed|Check your email/)).toBeVisible();
  });

  test('legal pages (Privacy / Terms / Fees) are accessible', async ({ page }) => {
    const legalPages = [
      { name: 'Privacy Policy', urlPart: 'privacy-policy' },
      { name: 'Terms of Use', urlPart: 'terms-of-use' },
      { name: 'Fees', urlPart: 'fees' },
    ];

    for (const { name, urlPart } of legalPages) {
      await page.goto('/');
      await page.click(`a:has-text("${name}")`);

      await page.waitForLoadState('networkidle');
      await expect(page).toHaveURL(new RegExp(`${urlPart}`, 'i'));
      await expect(page.getByRole('heading', { name: new RegExp(name, 'i') })).toBeVisible();
    }
  });

});
