import { Page } from '@playwright/test';

export class LoginPage {
     constructor(private page: Page){}

     async navigatetoSignUpPage(){
        await this.page.goto('https://automationexercise.com/login')
     }
}