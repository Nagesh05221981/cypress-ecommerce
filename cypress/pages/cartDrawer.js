class Cart{
    elements = {
        //Cart Drawer elements
        cartDrawer:         () => cy.get('#drawer'),
        cartbody:           () => cy.get('#drawer-body'),
        cartCloseButton:    () => cy.get('.x-btn'),

        // Empty state
        drawerEmpty:        () => cy.get('.drawer-empty'),
        emptyMessage:       () => cy.get('.drawer-empty p'),

        // Cart items
        cartItem:           () => cy.get('.ci'),
        cartItemName:       () => cy.get('.ci-name'),
        cartItemPrice:      () => cy.get('.ci-sub'),
        cartItemQty:        () => cy.get('.qval'),
        cartItemIncrement:  () => cy.get('.qbtn').contains('+'),
        cartItemDecrement:  () => cy.get('.qbtn').contains('−'),
        cartItemDelete:     () => cy.get('.del-btn'),

        //cart Footer
        cartTotal:          () => cy.get('#cart-total'),
        cartCheckoutButton: () => cy.get('#checkout-btn'),

    }
    verifyCartDrawerOpen() {
        this.elements.cartDrawer().should('have.class', 'open').and('be.visible')   
    }
    veryCartDrawerClose() {
        this.elements.cartDrawer().should('not.have.class', 'open').and('not.be.visible')
    }
    closeCart() {
        this.elements.cartCloseButton().should('be.visible').click()
    }

     verifyCartTotal(expectedTotal) {
        this.elements.cartTotal().should('contain.text', expectedTotal)
    }
      clickCheckout() {
        this.elements.checkoutButton().should('not.be.disabled').click()
    }

}
export default Cart