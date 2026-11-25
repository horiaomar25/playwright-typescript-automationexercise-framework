import {test,expect} from '@playwright/test';
import { AccountInfoPage } from '../pages/AccountInfoPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

test('fill account info form and address form', async ({page}) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const accountInfoPage = new AccountInfoPage(page);

    await homePage.navigatetoHomePage();
    await homePage.acceptCookies();
    await homePage.clickSignupLoginButton();

    await loginPage.fillSignUpForm(
        "John Doe",
        `john.doe+${Date.now()}@example.com`
    );
    await expect(page.getByText("ENTER ACCOUNT INFORMATION")).toBeVisible();

    await accountInfoPage.fillAccountInfoForm(
        "password123",
        "1",
        "January",
        "1990"
    );

    await accountInfoPage.selectCheckbox("Sign up for our newsletter!");

    await accountInfoPage.selectCheckbox("Receive special offers from our partners!");

    await accountInfoPage.fillAddressForm(
        "John",
        "Doe",
        "Example Company",
        "123 Main St",
        "Apt 4B",
        "United States",
        "California",
        "Los Angeles",
        "90001",
        "+1234567890"
    );

    await expect(page.getByText("ACCOUNT CREATED!")).toBeVisible();
})