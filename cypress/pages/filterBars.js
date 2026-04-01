class FilterBars {
    elements = {
        
        filtersBar: () => cy.get('.filters-bar'),
        filterBarLabel: () => cy.get('.filters-bar .filter-label'),
        //filterButton:(cat) => cy.get('.fchip active').contains(cat),
        productgrid: () => cy.get('#grid'),
        filterChip:  (cat) => cy.contains('.fchip', cat)

    }

    verifyFiltersBarVisible() {
        this.elements.filtersBar().should('be.visible')
    }
    verifyFilterLabel(label) {
        this.elements.filterBarLabel().should('be.visible').and('contain.text', label)
    }
    clickFilterButton(cat) {
        this.elements.filterChip(cat).should('be.visible').click()
    }
    verifyFilterApplied(cat){
        //this.elements.productgrid().should('be.visible').should(contain, 'tech')
        this.elements.filterChip(cat).should('have.class', 'active')
    }


}
export default FilterBars