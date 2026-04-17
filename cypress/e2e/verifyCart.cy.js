import {BaseTest} from "../base/baseTest"
const test = new BaseTest()

describe("Verify Cart functionality", () => {
    it("should verify cart icon is visible on the homepage", () => {
    cy.get('#grid').should('not.be.empty')  // wait here temporarily
    test.homePage.openCart()
    test.cart.verifyCartDrawerOpen()             
    })

})