
import "cypress-real-events";

describe('Instantgaming Basic e2e testing', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.instant-gaming.com/es/')
    })


    it('should visit', ()=>{
        //cy.visit('https://www.chollometro.com/')
    })


    it('RGPD should view in the footer after doing scroll', ()=>{

        cy.isNotInViewport('[href="https://www.instant-gaming.com/es/terminos-y-condiciones/"]')
        cy.get('footer').scrollIntoView();
        cy.isInViewport('[href="https://www.instant-gaming.com/es/terminos-y-condiciones/"]')

    })
    

    it.only('If hover in games, a video should appears', ()=>{
        cy.get('.listing-games > .item ').eq(1).as('gameLi');
        cy.get('@gameLi').find('video').should('have.css', 'opacity', '0')
        cy.get('@gameLi').realHover('mouse') //external chrome library to simulate better the user actions
        cy.get('@gameLi').find('video').should('have.css', 'opacity', '1')
    })
    
})
