import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async navigatetoSignUpPage() {
    await this.page.goto("https://automationexercise.com/login");
  }


  async fillSignUpForm(name: string, email: string) {
    await this.page.locator('input[data-qa="signup-name"]').fill(name);
    await this.page.locator('input[data-qa="signup-email"]').fill(email);
    await this.page.locator('button[data-qa="signup-button"]').click();
   
  }
}
