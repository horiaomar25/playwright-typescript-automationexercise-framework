import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

test('navigate to Sign Up page and verify text on the page', async ({ page }) => {
   const homePage = new HomePage(page);
   const loginPage = new LoginPage(page);

    await homePage.navigatetoHomePage();
    await homePage.acceptCookies();
    await homePage.clickSignupLoginButton();

   await expect(page.getByText('New User Signup!')).toBeVisible();




})

test('fill the Sign Up form and verify the text on the page', async ({ page }) => {
   const homePage = new HomePage(page);
   const loginPage = new LoginPage(page);

      await homePage.navigatetoHomePage();
      await homePage.acceptCookies();
      await homePage.clickSignupLoginButton();

       
})

