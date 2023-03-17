describe('My first e2e test', ()=>{

    beforeEach(()=>{
        cy.visit('http://localhost:4200');
    })

    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
    
    it('should visit', ()=>{
    })

    it('should visit and find the text', ()=>{
        cy.contains('App components');
    })

    it('should appears loading true and movies when click in load movies', ()=>{
        cy.get('button');
        cy.get('button').click()
        cy.contains('loading true');
        cy.contains('Interstellar');
    })
});