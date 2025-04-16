// tests/wordAppearing.spec.ts
import { test, expect } from '@playwright/test';

test.describe('WordAppearing animation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173'); // Adjust URL to your local development server
  });

  test('should animate words on scroll', async ({ page }) => {
    const words = await page.$$('.word-testimonials');

    // Check initial state (before scroll)
    for (const word of words) {
      const opacity = await word.evaluate(el => getComputedStyle(el).opacity);
      expect(opacity).toBe('0');
    }

    // Scroll to trigger the animation
    await page.evaluate(() => {
      const wrapperText = document.getElementById('wrapper-text');
      if (wrapperText) {
        wrapperText.scrollIntoView({ behavior: 'smooth' });
      }
    });

    // Wait for the animation to complete
    await page.waitForTimeout(3000); // Adjust based on animation duration

    // Check final state (after scroll)
    for (const word of words) {
      const opacity = await word.evaluate(el => getComputedStyle(el).opacity);
      expect(opacity).toBe('1');
    }
  });
});
