import { Page } from '@playwright/test'; // page object from playwright


export class HomePage {

    // private page: Page;
    // constructor( page: Page) {
    //     this.page = page;
    // }

    // The above is the longer version but below is shorthanded written version.

    constructor(private page: Page) {}

    // Navigate to the home page
    async navigatetoHomePage(){
        await this.page.goto('https://automationexercise.com/');
    }

    async navigatetoLoginSignUpPage(){
        await this.page.goto('https://automationexercise.com/login')
    }

     async acceptCookies() {
        await this.page.getByRole('button', {
            name: 'Consent'
        }).click();
    }

    async clickSignupLogin() {
        await this.page.getByRole('link', {
            name:'Signup / Login'
        }).click()

    }


}


