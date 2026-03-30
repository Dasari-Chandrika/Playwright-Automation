import { test, expect } from "@playwright/test";
import { PracticeFormPage } from "../pages/practiceFormPageAss6";
import formData from "../testdata/practice-form.json";

test("Assignment 6: Negative – Border validation on required fields", async ({ page }) => {

  const practiceForm = new PracticeFormPage(page);

  await practiceForm.navigate(formData.url);

  // Submit without filling anything
  await practiceForm.submitBtn.click();

  // Verify red borders (required validation)
  await practiceForm.expectBorderError(practiceForm.firstNameInput);
  await practiceForm.expectBorderError(practiceForm.lastNameInput);
  await practiceForm.expectBorderError(practiceForm.mobileInput);

  await expect(page.getByText(formData.assertion)).not.toBeVisible();
});