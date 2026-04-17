class HomePage{
    elements ={
        logInButton: () => cy.contains('button', 'Login'),
        signUpButton: () => cy.get('button.btn.btn-fill').contains('Sign Up').should('be.visible'),
        userChip:     () => cy.get('#user-chip'),
        userNameLabel:() => cy.get('#uname-label'),
         logoutButton:  () => cy.get('#user-chip').find('button').contains('Out'),

         // Filter Bar
         filtersBar: () => cy.get('#filters'),

         /// Cart
         cartIcon: () => cy.get('.cart-pill'),
         cartBadge: () => cy.get('#cart-count'),


    } 

    //Filter bar methods
    verifyFiltersBarVisible() {
        this.elements.filtersBar().should('be.visible')
        this.elements.filtersBar().userNameLabel
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
    
    ///// Cart methods
   
    openCart(){
        this.elements.cartIcon().should('be.visible').click()
    }
    verifyCartCount(expectedCount){
        this.elements.cartBadge().should('be.visible').and('contains.text', expectedCount)
    }

}
export default HomePage