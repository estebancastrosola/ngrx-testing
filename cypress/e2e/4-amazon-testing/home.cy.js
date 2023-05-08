describe('Amazon Basic e2e testing', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.amazon.es/')
        cy.clearCookies()
    })

    it('should visit', ()=>{
        //cy.visit('https://www.amazon.es/')
    })

    it('search input should be',()=>{
        cy.get('#twotabsearchtextbox')
    }) 

    it('search input should have a placholder',()=>{
        cy.get('#twotabsearchtextbox').as('searcherInput')
        cy.get('@searcherInput').should('have.attr', 'placeholder', 'Buscar Amazon.es') //case sensitive!
    }) 

    it('search input can be written',()=>{
        cy.get('#twotabsearchtextbox').as('searcherInput')
        cy.get('@searcherInput').type('Diablo 3 switch')
        cy.get('@searcherInput').should('have.value', 'Diablo 3 switch')
    }) 

    it('search button should be',()=>{
        cy.get('#nav-search-submit-button').as('searcherButton')
    }) 

    it('search button should be able to be clicked',()=>{
        cy.get('#nav-search-submit-button').as('searcherButton')
        cy.get('@searcherButton').click()
    }) 

    it('Amazon logo should be', ()=>{
        cy.get('#nav-logo-sprites').as('logoAmazon');
        cy.get('@logoAmazon').should('have.attr', 'href', '/ref=nav_logo')
    })

    it('Cart should be empty', ()=>{
        cy.get('#nav-cart-count').as('cart');
        cy.get('@cart').should('have.text', '0')
    })


    it.only('If I search some product, te page should show the results page', ()=>{
        cy.get('#twotabsearchtextbox').as('searcherInput')
        cy.get('@searcherInput').type('Diablo 3 switch')
        cy.get('@searcherInput').type('{enter}')

        //cy.get('#nav-search-submit-button').as('searcherButton')
        //cy.get('@searcherButton').click()

        cy.contains('resultados para \"Diablo 3 switch\"')
    })

})