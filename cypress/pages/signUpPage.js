class SignUpPage{
    elements = {
        signUpButton: () => cy.get('#tab-signup'),
        form: () => cy.get('#form-signup'),
        emailInput: () => cy.get('#s-email').should('be.visible'),
        passwordInput: () => cy.get('#s-pass').should('be.visible'),
        fullName: () => cy.get('#s-name').should('be.visible'),
        createAccountButton: () => cy.get('button.msubmit').contains('Create Account').should('be.visible'),
        successMessage: () => cy.get('#form-signup').find('#s-msg')
}
    signup(name,email,password){
        this.elements.signUpButton().click()
        this.elements.form().within(() => {
        this.elements.emailInput().type(email)
        this.elements.passwordInput().type(password)
        this.elements.fullName().type(name)
        this.elements.createAccountButton().click()
    })
    }
    verifySignupSuccessMessage() {
    this.elements.successMessage()
      .should('be.visible')
      .and('contain.text', 'Account created')
  }
}
export default SignUpPage