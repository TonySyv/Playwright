// tests/newsletter-invalid.spec.ts
import { test, expect } from '@playwright/test';

test.describe('SwissBorg newsletter invalid email tests', () => {
  const invalidEmails = [
    '',                // blank
    'plainaddress',    // no @
    'missing-at.com',  // missing @
    '@no-local.com',   // missing local part
    'test@',           // missing domain
    'test@.com',       // missing domain name
    'test@@domain.com' // double @
  ];

  for (const email of invalidEmails) {
    test(`should reject invalid email: "${email || 'blank'}"`, async ({ page }) => {
      await page.goto('https://swissborg.com');

      const newsletterInput = page.getByPlaceholder('Email').first();
      await newsletterInput.scrollIntoViewIfNeeded();
      await newsletterInput.fill(email);

      const submitBtn = page.getByRole('button', { name: /subscribe/i });
      await submitBtn.click();

      // Verify error feedback (adjust to real error message on the site)
      await expect(
        page.getByText(/invalid email|please enter a valid email|required/i)
      ).toBeVisible();
    });
  }
});
