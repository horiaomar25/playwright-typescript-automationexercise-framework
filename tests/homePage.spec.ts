import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('navigate to Automation Exercise home page', async ({page}) => {
    const homePage = new HomePage(page);

    await homePage.navigatetoHomePage();
    
    await expect(page).toHaveURL('https://automationexercise.com/');
})
