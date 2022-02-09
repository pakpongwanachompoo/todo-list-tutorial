describe('Input form', () => {

    beforeEach(() => {
        cy.visit("/")
    })

    it.only('Search test', () => {
        const typeText1 = 'Go to shopping'

        cy.get('.form-control')
            .type(typeText1)
            .should('have.value', typeText1)

        cy.get('.btn-outline-secondary')
            .click()
            
        cy.get('.list-group li')
            .should('contain',typeText1)
    })
    
    it('Search Not found test', () => {
        const typeText2 = 'Buy SLP'

        cy.get('.form-control')
            .type(typeText2)
            .should('have.value', typeText2)

        cy.get('.btn-outline-secondary')
            .click()

        cy.get('.list-group li')
            .should('have.length', 0)
    })

    it('Information test', () => {
        const typeText3 = 'Go to shopping'
        const typeText4 = 'today at 12:00'
        const typeText5 = 'Not finish'

        cy.get('.list-group li')
            .contains(typeText3)
            .click()
        cy.get('.col-md-6')
            .should('contain',typeText3)
            .should('contain',typeText4)
            .should('contain',typeText5)
    })

    it('Removeall test', () => {
        
        cy.get('.btn-danger')
            .click()

        cy.get('.list-group li')
            .should('have.length', 0)
    })

})