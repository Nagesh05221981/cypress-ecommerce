
import { BaseTest } from "../base/baseTest"

const test = new BaseTest()

describe("Verify User chip and logout", () => {


    it("should verify user chip displays correct username after login", () => {
        test.homePage.clickLogIn()
        test.loginPage.login(test.users.validUser.email, test.users.validUser.password )
        test.loginPage.verifySigningInMessage()
        cy.get('#user-chip', { timeout: 10000 }).should('be.visible')
        cy.get('#uname-label').should('be.visible').and('contain', test.users.validUser.name)
    })
        it("should verify user can logout successfully", () => {
        
        test.homePage.clickLogIn()
        test.loginPage.login(test.users.validUser.email, test.users.validUser.password )
        test.loginPage.verifySigningInMessage()
        test.homePage.clickLogOut()
        test.homePage.verifyLogout()
        
    })  
})
