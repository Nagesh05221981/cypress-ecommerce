class HomePage{
    elements ={
        logInButton: () => cy.contains('button', 'Login'),
        signUpButton: () => cy.get('button.btn.btn-fill').contains('Sign Up').should('be.visible'),
        userChip:     () => cy.get('#user-chip'),
        userNameLabel:() => cy.get('#uname-label'),
         logoutButton:  () => cy.get('#user-chip').find('button').contains('Out')
    } 
    clickLogIn(){
        this.elements.logInButton().should('be.visible').click()
        
    }
    clickLogOut(){
        //cy.get('#user-chip').should('be.visible').click()
        //cy.contains('Logout').should('be.visible').click()
        this.elements.logoutButton().should('be.visible').click()
    }
    verifyLogout() {
    this.elements.userChip().should('not.be.visible')
    cy.get('#auth-btns').should('be.visible')
    cy.contains('button', 'Login').should('be.visible')
    cy.contains('button', 'Sign Up').should('be.visible')
}
    clickSignUp(){
        this.elements.signUpButton().should('be.visible').click()
    }
    verifyUserChipAfterLogin(exptctedUserName){
        this.elements.userChip().should('be.visible')
        this.elements.userNameLabel().should('be.visible').and('contain', exptctedUserName)
    }
    

}
export default HomePage