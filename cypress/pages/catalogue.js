class Catalogue {
    elements = {
        resultsInfo : () => cy.get('#results-info'),
        pcardCategory: (cat) => cy.get('.pcard').contains(cat),
        catTitle: () => cy.get('.cat-title'),
        
}
    verifycatTitle(expectedTitle) {
        this.elements.pcardCategory(expectedTitle).should('be.visible').contains(expectedTitle)
    }

}
export default Catalogue