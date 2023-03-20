
describe('Chollometro Basic e2e testing', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.chollometro.com/')
        cy.get('button[data-t=acceptAllBtn]').click()
    })

    it('should visit', ()=>{
        //cy.visit('https://www.chollometro.com/')
    })


    it('input search click show dropdown', ()=>{
        cy.get('[name=q]').as('inputSearch')
        cy.get('@inputSearch').click()
        
        cy.get('[data-t=autoSuggest]')
    })

    it('share button opens register modal ', ()=>{
        cy.get('[data-t=addThreadDropdown').as('shareButton')
        cy.get('@shareButton').click()
        cy.get('.popover--modal').should('have.css', 'display', 'block')
    })

    it('click button closes register modal ', ()=>{
        cy.get('[data-t=addThreadDropdown').as('shareButton')
        cy.get('@shareButton').click()
        cy.get('.popover--modal').should('have.css', 'display', 'block')
        cy.get('.popover--modal').get('[data-handler=popover-close]').eq(0).click()
        cy.get('.popover--modal').should('not.exist')
    })

    it('popular brands should be visible after scroll', ()=>{
        cy.viewport('macbook-15')
        cy.get('[data-t=topMerchantsWidget]').as('topMerchands')
        //cy.get('@topMerchands').should('not.be.visible') -> This assert doesn't check if element is outside viewport
        cy.isNotInViewport('[data-t=topMerchantsWidget]')
        cy.get('@topMerchands').scrollIntoView();
        //cy.get('@topMerchands').should('be.visible')
        cy.isInViewport('[data-t=topMerchantsWidget]')
    })

    it.only('In version mobile side right bar should not appear', ()=>{
        cy.viewport('iphone-x')
        cy.get('[data-t=side]').as('side')
        cy.get('@side').should('not.be.visible') 
    })

})
