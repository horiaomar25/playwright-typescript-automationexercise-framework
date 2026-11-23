import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async navigatetoSignUpPage() {
    await this.page.goto("https://automationexercise.com/login");
  }

  // locator for the sign up form

  async fillSignUpForm(name: string, email: string) {
    await this.page.getByPlaceholder("Name").fill(name);
    await this.page.getByPlaceholder("Email").fill(email);
    await this.page.getByText('Signup').click();
  }
}
