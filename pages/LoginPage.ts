import { Page } from '@playwright/test'; // page object from playwright


export class LoginPage {

    // private page: Page;
    // constructor( page: Page) {
    //     this.page = page;
    // }

    // The above is the longer version but below is shorthanded written version.

    constructor(private page: Page) {}

}
