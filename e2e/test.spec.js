const { test, expect } = require('@playwright/test');

test('open subscription page', async ({ page }) => {
  await page.goto('http://localhost:3000/subscription');
  const text = await page.textContent('body');
  expect(text).toContain('userId');
});

test('check subscription endpoint loads', async ({ page }) => {
  const response = await page.goto('http://localhost:3000/subscription');
  expect(response.status()).toBe(200);
});