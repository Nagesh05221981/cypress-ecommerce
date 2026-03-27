class HomePage{
    elements ={
        logInButton: () => cy.contains('button', 'Login'),
        signUpButton: () => cy.get('button.btn.btn-fill').contains('Sign Up').should('be.visible')
    } 
    clickLogIn(){
        this.elements.logInButton().should('be.visible').click()
        
    }
    clickSignUp(){
        this.elements.signUpButton().should('be.visible').click()
    }

}
export default HomePage