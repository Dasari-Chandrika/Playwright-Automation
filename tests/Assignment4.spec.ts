import { test } from "@playwright/test";
import { PracticeFormPage } from "../pages/practiceFormPage";
import formData from "../testdata/practice-form.json";

test("Assignment 4: Fill Practice Form using POM", async ({ page }) => {

  const practiceForm = new PracticeFormPage(page);

  // Navigate
  await practiceForm.navigate(formData.url);

  // Fill using JSON test data
  await practiceForm.fillForm(formData);

  // Submit
  await practiceForm.submitForm();

  // Validate form title
  await practiceForm.verifyFormHeading(formData.assertion);
});
