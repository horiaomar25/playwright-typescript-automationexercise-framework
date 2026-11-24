import { Page } from "@playwright/test"

export class AccountInfoPage {
    constructor(private page: Page) {}

    async fillAccountInfoForm(name: string, email: string, password: string, day: string, month: string, year: string) {
        await this.page.getByRole("radio", { name: "Mr" }).check()
        await this.page.fill('input[name="password"]', password)
        await this.page.selectOption('select[name="day"]', day)
        await this.page.selectOption('select[name="month"]', month)
        await this.page.selectOption('select[name="year"]', year)
    }

    async  selectCheckbox(name: string) {
        await this.page.getByRole("checkbox", { name }).check()
    }

    async fillAddressForm(firstName: string, lastName: string, company: string, address1: string, address2: string, country: string, state: string, city: string, zipcode: string, mobileNumber: string) {
        await this.page.fill('input[name="first_name"]', firstName)
        await this.page.fill('input[name="last_name"]', lastName)
        await this.page.fill('input[name="company"]', company)
        await this.page.fill('input[name="address1"]', address1)
        await this.page.fill('input[name="address2"]', address2)
        await this.page.selectOption('select[name="country"]', country)
        await this.page.fill('input[name="state"]', state)
        await this.page.fill('input[name="city"]', city)
        await this.page.fill('input[name="zipcode"]', zipcode)
        await this.page.fill('input[name="mobile_number"]', mobileNumber)

        await this.page.getByRole("button", { name: "Create Account" }).click()
    }

}