/// <reference types="cypress" />

describe('Some tests for buttons', ()=>{

    beforeEach(()=>{
        cy.visit('http://localhost:4200');
    })

    it('Disabled button should be gotten', ()=>{
        cy.getBySel('disabled-button');
    })

    it('Disabled button should be disabled', ()=>{
        cy.getBySel('disabled-button')
            .should('be.visible')
            .should('be.disabled')
    })

    //With this test, we can check test will fail if the button is not clickable and we make the click
    /**
        it('Disabled button should NOT be clicked', ()=>{
            cy.get('[data-cy="disabled-button"]').click()
        }) 
     */

    
    it('Display none button should be gotten', ()=>{
        cy.getBySel('display-none-button')
            .should('be.not.visible')
            .should('be.hidden')
    }) 

    //With this test, we can check test will fail if the button is not clickable and we make the click
    /**
        it('Display none button should NO be clicked', ()=>{
            cy.get('[data-cy="display-none-button"]').click()
        }) 
     */
    

    it('Opacity 0  button should be gotten', ()=>{
        cy.getBySel('opacity-0-button')
            .should('be.not.visible')
            .should('be.not.disabled')
            
    }) 

    //Opacity 0 button is click indeed
    it('Opacity 0 button should be clicked', ()=>{
        cy.getBySel('opacity-0-button').click()
        cy.getBySel('opacity-0-button').should('have.focused')
    }) 


    it('Clickable button should be gotten', ()=>{
        cy.getBySel('clickable-button')
        .should('be.visible')
        .should('be.not.disabled')
    }) 

    it('Clickcable 0 button should be clicked', ()=>{
        cy.getBySel('clickable-button').click()
        cy.getBySel('clickable-button').should('have.focused')
    }) 


    it('hiden when clicked button should be gotten', ()=>{
        cy.getBySel('hide-when-clicked-button')
        .should('be.visible')
        .and('be.not.disabled')
    }) 

    it('hiden when clicked 0 button should be clicked', ()=>{
        cy.getBySel('hide-when-clicked-button').as('myButton')
        cy.get('@myButton').click()
        cy.get('@myButton').should('be.hidden')
    }) 


})