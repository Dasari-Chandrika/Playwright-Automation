import { Page, expect } from "@playwright/test";

export class PracticeFormPage {
  // Declare locator fields
  firstNameInput;
  lastNameInput;
  userEmailInput;
  genderRadio;
  mobileInput;

  submitBtn;

  constructor(private page: Page) {
    // Initialize locators
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' })
    this.userEmailInput = page.getByRole('textbox', { name: 'name@example.com' });
    this.genderRadio  = page.getByRole('radio', { name: 'Female' });
    this.mobileInput = page.getByRole('textbox', { name: 'Mobile Number' }); 

    this.submitBtn = page.getByRole('button', { name: 'Submit' });
  }

  // async navigate(url: string) {
  //   await this.page.goto(url);
  // }

  
  async navigate(url: string) {
    await this.page.goto(url, { waitUntil: "domcontentloaded" });
  }


  async fillForm(data: { firstName: string; lastName: string; email: string; mobile: string}) {
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.userEmailInput.fill(data.email);
    await this.genderRadio.click();
    await this.mobileInput.fill(data.mobile);    
  }

  async submitForm() {
    await this.submitBtn.click();
  }
  
  async verifyFormHeading(expectedMessage: string) {
    await expect(this.page.getByText(expectedMessage, { exact: true })).toBeVisible();
  }

}