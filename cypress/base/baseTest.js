import HomePage from "../pages/homePage"
import LoginPage from "../pages/loginPage"
import SignUpPage from "../pages/signUpPage"
export class BaseTest {
    homePage = new HomePage()
    loginPage = new LoginPage()
    signUpPage = new SignUpPage()
    users = {}
    constructor() {
        before(() => {  
        cy.fixture('users').then((data) => {
            this.users = data
        })
    })
        beforeEach(() => {
            cy.seedUser(this.users.validUser)
            cy.visit("http://localhost:8080/eclat-shop.html")
        })
    }
}
