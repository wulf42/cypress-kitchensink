context('My First Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/commands/actions')
    })

    it('has an h1 on the page', () => {
        cy.get('h1').should('exist');
    })
    it('renders the correct h1 text', () => {
        cy.get('h1').should('contain.text', 'Actions')
    })

    it('renders a paragraph under the h1', () => {
        cy.get('.container').find('p').should('exist');
    })






})
        