describe('test fixture',()=>{
    it('save fixture flow',()=>{
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/todos/1').as('todos')
        //cy.intercept('GET', 'https://jsonplaceholder.typicode.com/todos/1', { fixture: 'todos.json' }).as('todos') with fixture we can mock the result

       
          
        fetch("https://jsonplaceholder.typicode.com/todos/1", {
            method: "GET", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            }
        })

        cy.wait('@todos').its('response.body.id').should('eq', 1)
    })
})