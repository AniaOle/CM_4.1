// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('login-username').fill(process.env.USER);
  await page.getByTestId('login-password').fill(process.env.PASSWORD);
  await page.getByTestId('login-button').click();
  await expect(page.getByTestId('welcome-msg')).toContainText('Witaj: admin');

  console.log('test');
});

test('test', async ({ page }) => {
  await page.goto('playground/');
  test.setTimeout(5000);

  let text = await page.getByTestId('state-select').allInnerTexts;
  console.log(text);
  console.log('-----');

  // let text2 = await page.getByTestId('state-select').locator('option').nth(4).textContent();
  // let text2 = await page.getByRole('option').nth(0).innerText();
  let text2 = await page.getByTestId('state-select').getByRole('option').nth(1).innerText();
  let nrOfStates = await page.getByTestId('state-select').getByRole('option').count();
  console.log(text2);

  let states = []

  for (let i=0;i<nrOfStates;i++){
    states.push(await page.getByTestId('state-select').getByRole('option').nth(i).innerText());
  }

  const states2 = ['-- choose state --', 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  console.log(states);

  await expect(states).toEqual(states2);

});