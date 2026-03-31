import { test, expect } from "@playwright/test";
test.describe("Multiple navigations", () =>{ 
  test("Navigate to Elements → Text Box @smoke", async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await page.getByRole('link', { name: 'Elements' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Text Box' }).click();

    await expect(page.getByRole('heading', { name: 'Text Box' })).toBeVisible();
  });

  test("Navigate to Forms → Practice Form", async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await page.getByRole('link', { name: 'Forms' }).click();
    await page.getByRole('link', { name: 'Practice Form' }).click();

    await expect(page.getByRole('heading', { name: 'Practice Form' })).toBeVisible();
  });

  test("Navigate to Widgets → Select Menu", async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await page.getByRole('link', { name: 'Widgets' }).click();
    await page.getByRole('link', { name: 'Select Menu' }).click();
  
    await expect(page.getByRole('heading', { name: 'Select Menu' })).toBeVisible();
  });
});