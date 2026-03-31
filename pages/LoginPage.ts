import { Page, expect } from "@playwright/test";

export class LoginPage {

  constructor(private page: Page) {}

  async navigate(baseUrl: string) {
    await this.page.goto(baseUrl);
    await this.page.waitForLoadState("domcontentloaded");
  }
  async enterUsername(username: string) {
    await this.page.locator('input[name="username"]').fill(username);
    //await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
    //await this.page.getByPlaceholder("username").fill(username);
  }

  async enterPassword(password: string) {
    await this.page.locator('input[name="password"]').fill(password);
    //await this.page.getByRole('textbox', { name: 'password' }).fill(password);
  }

  async clickLogin() {
    //await this.page.locator('input[value="Log In"]').waitFor();
    await this.page.getByRole('button', { name: 'Log In' }).click();
  }

  async validateSuccess(expected: string) {
    await expect(this.page.getByRole('heading', { name: expected })).toBeVisible();
    
  }
}
