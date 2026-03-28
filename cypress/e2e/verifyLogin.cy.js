//import HomePage from "../pages/homePage"
//import LoginPage from "../pages/loginPage"
//import SignUpPage from "../pages/signUpPage"
import { BaseTest } from "../base/baseTest"
const test = new BaseTest()
describe("Verify Login", () => {

    it("should verify  invalidlogin functionality", () => {
        
        test.homePage.clickLogIn()
        test.loginPage.login('wrong username', 'wrong password')
})

     it("should verify user signup withvalid credentials", () => {
        test.homePage.clickSignUp()
        test.signUpPage.signup(test.users.newUser.name, test.users.newUser.email, test.users.newUser.password   )
        test.signUpPage.verifySignupSuccessMessage()
    })

    it("should verify  login with valid credentials functionality", () => {
        
        test.homePage.clickLogIn()
        test.loginPage.login(test.users.validUser.email, test.users.validUser.password )
        test.loginPage.verifySigningInMessage()
})

    
})
