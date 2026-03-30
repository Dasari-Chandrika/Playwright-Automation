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
  // await page.locator('input[type="file"]').setInputFiles({
  //   name: "git commands.txt",
  //   mimeType: "text/plain",
  //   buffer: Buffer.from("test file content")
  // });
  // Build correct path (file must exist in this folder)
  const filePath = "C:/Users/dchandrika/OneDrive - The Emmes Company, LLC/Desktop/Assignment/fileUpload/git commands.txt";

  // Upload using the real input element, not the button
  await page.locator('input[type="file"]').setInputFiles(filePath);

  await page.locator('#state svg').click();
  await page.getByRole('option', { name: 'Haryana' }).click();
  await page.locator('#city svg').click();
  await page.getByRole('option', { name: 'Panipat' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Thanks for submitting the form')).toBeVisible();
});