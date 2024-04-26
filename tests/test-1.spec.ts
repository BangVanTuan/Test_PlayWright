import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://production.contosotraders.com/');
  await page.getByRole('link', { name: 'All Products' }).first().click();
  await page.getByRole('img', { name: 'Xbox Wireless Controller Mineral Camo Special Edition' }).click();
  await page.getByRole('button', { name: 'Add To Bag' }).click();
});