// tests/locale-switching.spec.ts
import { test, expect } from '@playwright/test';

test.describe('SwissBorg locale / language switching', () => {
  const locales = [
    { code: 'en', expectedText: /Buy and Sell Crypto Safely/i },
    { code: 'fr', expectedText: /Achetez et vendez des cryptomonnaies/i },
    { code: 'de', expectedText: /Kaufen und Verkaufen Sie Krypto/i },
    { code: 'es', expectedText: /Compra y vende criptomonedas/i },
    { code: 'it', expectedText: /Compra e vendi criptovalute/i },
    { code: 'pt', expectedText: /Compre e venda criptomoedas/i }
  ];

  for (const { code, expectedText } of locales) {
    test(`should switch to locale: ${code.toUpperCase()}`, async ({ page }) => {
      await page.goto(`https://swissborg.com/${code}`);

      // Wait for page content to load
      await page.waitForLoadState('domcontentloaded');

      // Verify that some key localized text is visible
      await expect(page.getByText(expectedText)).toBeVisible();

      // (Optional) Verify that the HTML lang attribute is set correctly
      const langAttr = await page.locator('html').getAttribute('lang');
      expect(langAttr?.toLowerCase()).toBe(code);
    });
  }
});
