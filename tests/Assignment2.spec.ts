import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByRole('textbox', { name: 'First Name' }).fill('Chandrika');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Dasari');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('Chandrika@gmail.com');
  await page.getByRole('radio', { name: 'Female' }).check();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('6432267900');
  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('gridcell', { name: 'Choose Tuesday, March 10th,' }).click();
  await page.locator('div').filter({ hasText: /^Reading$/ }).click();
  await page.locator('#state svg').click();
  await page.getByRole('option', { name: 'Haryana' }).click();
  await page.locator('#city svg').click();
  await page.getByRole('option', { name: 'Panipat' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Thanks for submitting the form')).toBeVisible();
});