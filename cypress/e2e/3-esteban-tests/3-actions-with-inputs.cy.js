/// <reference types="cypress" />


describe('Inputs tests',()=>{
    
    
    beforeEach(()=>{
        cy.visit('http://localhost:4200');
    })

    it.only('Write an input',()=>{
        cy.getBySel('basic-input').as('basicInput')
        cy.get('@basicInput').type('New text');
        cy.get('@basicInput').should('have.value', 'New text')
        cy.get('@basicInput').should('be.focused')
    })

    it('change title text',()=>{
        cy.getBySel('basic-input').as('basicInput')
        cy.get('@basicInput').type('New text');
        cy.getBySel('buttonInput').click('topLeft');
        cy.getBySel('titleInput').should('contain', 'New text')

        cy.reload()
        cy.getBySel('titleInput').should('contain', 'Default text')
    })
})