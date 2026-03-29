import { test } from "@playwright/test";
import { PracticeFormPage } from "../pages/practiceFormPage";
import testData from "../testdata/practice-form-ass5.json";

testData.dataSets.forEach((dataSet) => {
  test(`Assignment 5 - Form Submission: ${dataSet.firstName} ${dataSet.lastName}`, async ({ page }) => {

    const practiceForm = new PracticeFormPage(page);

    await practiceForm.navigate(dataSet.url);
    await practiceForm.fillForm(dataSet);
    await practiceForm.submitForm();
    await practiceForm.verifyFormHeading(dataSet.successMessage);
  });
});