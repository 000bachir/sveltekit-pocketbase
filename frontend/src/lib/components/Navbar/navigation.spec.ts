import { test, expect } from '@playwright/test';

test.describe('Side Navigation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/'); // Change to your local server URL
  });

  test('should open and close the side navigation', async ({ page }) => {
    const sideNav = page.locator('#side-navigation');
    const openBtn = page.locator('#open-btn');
    const closeBtn = page.locator('#close-btn');

    // Verify side navigation is initially hidden
    await expect(sideNav).toBeHidden();

    // Open the side navigation
    await openBtn.click();
    await expect(sideNav).toBeVisible();

    // Close the side navigation
    await closeBtn.click();
    await expect(sideNav).toBeHidden();
  });

  test('should display side navigation with animation on open and close', async ({ page }) => {
    const sideNav = page.locator('#side-navigation');
    const openBtn = page.locator('#open-btn');
    const closeBtn = page.locator('#close-btn');

    // Open the side navigation
    await openBtn.click();
    await page.waitForTimeout(1000); // Wait for animation to complete
    await expect(sideNav).toBeVisible();

    // Close the side navigation
    await closeBtn.click();
    await page.waitForTimeout(1000); // Wait for animation to complete
    await expect(sideNav).toBeHidden();
  });

});
