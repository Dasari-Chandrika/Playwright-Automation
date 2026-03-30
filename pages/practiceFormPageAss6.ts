import { Page, expect, Locator } from "@playwright/test";

export class PracticeFormPage {

  firstNameInput;
  lastNameInput;
  userEmailInput;
  mobileInput;
  submitBtn;

  constructor(private page: Page) {
    this.firstNameInput = page.getByRole("textbox", { name: "First Name" });
    this.lastNameInput = page.getByRole("textbox", { name: "Last Name" });
    this.userEmailInput = page.getByRole("textbox", { name: "name@example.com" });
    this.mobileInput = page.getByRole("textbox", { name: "Mobile Number" });

    this.submitBtn = page.getByRole("button", { name: "Submit" });
  }

  async navigate(url: string) {
    await this.page.goto(url, { waitUntil: "domcontentloaded" });
  }

//   // Assertion: required field validation
//   async expectRequiredValidation(input: Locator) {
//     // HTML5 validation: required inputs get :invalid when empty
//     await expect(input).toHaveAttribute("aria-invalid", "true");
//   }
        
    async expectBorderError(input: Locator) {
        await expect(input).toHaveCSS("border-color", "rgb(220, 53, 69)");
    }

}