import HomePage from "../pages/homePage"
import LoginPage from "../pages/loginPage"
import SignUpPage from "../pages/signUpPage"
describe("Verify Login", () => {

    beforeEach(() => {
    localStorage.setItem('nova_users', JSON.stringify({
        'test@example.com': { name: 'Test User', password: 'password123' }
    }))
    cy.visit("http://localhost:8080/eclat-shop.html")
})

    it("should verify  invalidlogin functionality", () => {
        const homePage = new HomePage()
        const loginPage = new LoginPage()
        homePage.clickLogIn()
        loginPage.login()
})

     it("should verify user signup withvalid credentials", () => {
        const homePage = new HomePage()
        const signUpPage = new SignUpPage()
        homePage.clickSignUp()
        signUpPage.signup()
        signUpPage.verifySignupSuccessMessage()
    })

    it("should verify  login with valid credentials functionality", () => {
        const homePage = new HomePage()
        const loginPage = new LoginPage()
        homePage.clickLogIn()
        loginPage.login()
        loginPage.verifySigningInMessage()
})

    
})
