describe('Amazon Basic e2e testing', ()=>{

    beforeEach(()=>{
        cy.visit('https://amzn.eu/d/2NXojq0')
        cy.clearCookies()
    })

    it('should visit', ()=>{
        //cy.visit('https://amzn.eu/d/2NXojq0')
    })


    it('add to cart button should be', ()=>{
        cy.get('#add-to-cart-button').as('addToCartButton')
    })
    
    it.only('If I add some product to cart, te cart should update the badge', ()=>{
        cy.get('#add-to-cart-button').as('addToCartButton')
        cy.get('@addToCartButton').click(); //Amazon fuck up himself doing this
        cy.get('.a-button-input')

        cy.get('#nav-cart-count').as('cart');
        cy.get('@cart').should('have.text', '0')
    })

})