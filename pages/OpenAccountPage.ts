import { Page, expect } from "@playwright/test";

export class OpenAccountPage {

  constructor(private page: Page) {}
  
  async navigateToOpenNewAccount() {
    const link = this.page.getByRole('link', { name: 'Open New Account' }).click();
  }

  async openNewCheckingAccount() {
    await this.page.locator('#type').selectOption('1');
    await this.page.getByRole('button', { name: 'Open New Account' }).click();
  }

  async validateSuccess(expected: string) {
    //await expect(this.page.getByRole('heading', { name: expected })).toBeVisible();
    await expect(this.page.locator('#rightPanel')).toContainText(expected);
  }
}
