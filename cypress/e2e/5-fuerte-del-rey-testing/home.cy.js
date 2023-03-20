describe('Fuerte del rey Basic e2e testing', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.fuertedelrey.es/')
        cy.clearCookies()
    })

    it('should visit', ()=>{
        //cy.visit('https://www.fnac.es/')
    })

    it('Ayuntamiento menu should be and should redirect to Saluda del Alcalde page', ()=>{
        cy.get('#menu_lateral > ul > li').eq(2).find('a').click()
        cy.get('#contenido_cuerpo').contains('Saluda del Alcalde')
    })

    it('search flow should works', ()=>{
        cy.get('#search').as('searchInput')
        cy.get('@searchInput').type('concejalías')

        cy.get('.btn_buscar').click()

        cy.get('#contenido_cuerpo').contains('Buscador')
    })

})
