context('My First Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/commands/actions')
    })

    it('has an h1 on the page', () => {
        cy.get('h1').should('exist');
    })









})
        