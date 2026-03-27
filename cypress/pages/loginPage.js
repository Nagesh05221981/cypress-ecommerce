class LoginPage{
    elements = {
        loginTab: () => cy.get('#tab-login'),
        emailInput: () => cy.get('#l-email').should('be.visible'),
        passwordInput:() => cy.get('#l-pass').should('be.visible'),
        signInButton: () => cy.get('#form-login').find('button.msubmit').contains('button','Sign In'),
        loginStatus: () => cy.get('#form-login').find('#l-msg')

 }
    
    login(){
       // this.elements.logInIcon().click()
        this.elements.loginTab().click()
        this.elements.emailInput().should('be.visible').clear().type('Test@example.com').blur()
        this.elements.passwordInput().should('be.visible').clear().type('password123').blur()
        this.elements.signInButton().should('be.visible').click()

    }
    verifySigningInMessage() {
    this.elements.loginStatus()
      .should('be.visible')
      .and('contain.text', 'Signing you in…')
  }
}
export default LoginPage