/// <reference types="cypress" />


describe('Routing tests',()=>{
    
    
    beforeEach(()=>{
        cy.visit('http://localhost:4200');
    })

    it('Change a route',()=>{
        cy.getBySel('page1Link').click()
        cy.contains('page1 works!')
    })

})