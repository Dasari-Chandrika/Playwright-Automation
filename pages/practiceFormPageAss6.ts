import { Page, expect, Locator } from "@playwright/test";
import formData from "../testdata/practice-form.json";

export class PracticeFormPage {

  firstNameInput;
  lastNameInput;
  mobileInput;
  submitBtn;

  constructor(private page: Page) {
    this.firstNameInput = page.getByRole("textbox", { name: "First Name" });
    this.lastNameInput = page.getByRole("textbox", { name: "Last Name" });
    this.mobileInput = page.getByRole("textbox", { name: "Mobile Number" });

    this.submitBtn = page.getByRole("button", { name: "Submit" });
  }

  async navigate(url: string) {
    await this.page.goto(url, { waitUntil: "domcontentloaded" });
  }

        
    async expectBorderError(input: Locator) {
        await expect(input).toHaveCSS("border-color", formData.borderColor);

    }

}