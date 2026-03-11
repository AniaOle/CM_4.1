// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('login-username').fill(process.env.USER);
  await page.getByTestId('login-password').fill(process.env.PASSWORD);
  await page.getByTestId('login-button').click();
  await expect(page.getByTestId('welcome-msg')).toContainText('Witaj: admin');
});