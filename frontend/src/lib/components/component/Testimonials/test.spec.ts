import { test, expect } from '@playwright/test';

test.describe('GSAP ScrollTrigger Test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173'); // Change to your local server URL
  });

  test('should animate sections on scroll', async ({ page }) => {
    // Check if sections are initially positioned off-screen
    const sectionOne = await page.$('.one');
    const sectionTwo = await page.$('.two');
    const sectionThree = await page.$('.three');

    const sectionOneBox = await sectionOne.boundingBox();
    const sectionTwoBox = await sectionTwo.boundingBox();
    const sectionThreeBox = await sectionThree.boundingBox();

    expect(sectionOneBox.x).toBeLessThan(0); // Initially off the screen to the left
    expect(sectionTwoBox.x).toBeGreaterThan(page.viewportSize().width); // Initially off the screen to the right
    expect(sectionThreeBox.x).toBeLessThan(0); // Initially off the screen to the left

    // Scroll down the page
    await page.evaluate(() => window.scrollTo(0, 1500)); // Scroll to trigger the animations

    // Check if sections are now in view
    const updatedSectionOneBox = await sectionOne.boundingBox();
    const updatedSectionTwoBox = await sectionTwo.boundingBox();
    const updatedSectionThreeBox = await sectionThree.boundingBox();

    expect(updatedSectionOneBox.x).toBeGreaterThanOrEqual(0); // Should be in view
    expect(updatedSectionTwoBox.x).toBeLessThanOrEqual(page.viewportSize().width); // Should be in view
    expect(updatedSectionThreeBox.x).toBeGreaterThanOrEqual(0); // Should be in view
  });
});
