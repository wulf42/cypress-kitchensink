const navbarText = Cypress.env('navbarText');

context('My First Test', () => {
  beforeEach(() => {
    cy.visit('/commands/actions')
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

  it('renders a paragraph under the h1 in specific conteiner', () => {
    cy.get('.container').eq(1).find('p').should('exist');
  })

  it('renders a section with the correct elements', () => {
    cy.get('.container').eq(2).within(()=>{
      cy.get('h4').should('exist');
      cy.get('p').should('exist');
    })
  })

  it('correctly renders the cypress website link',() => { 
    cy.findByText(navbarText).should('exist')  
  })

  it('types into an email field', () => {
   cy.visit('/commands/actions');
   cy.findByPlaceholderText('Email').type('test@email.com');
 })
 

  it('shows an active class for the current page',()=>{
    cy.visit('/commands/actions')
    cy.get('.dropdown-menu').find('li').eq(2).should('have.class','active')
  })

  it('should not have an active class for not active pages',()=>{
    cy.visit('/commands/actions')
    cy.get('.dropdown-menu').find('li').first()
        .should('not.have.class','active')
        .find('a')
        .should('have.attr','href','/commands/querying')
  })

  it('triggers a popover on click', ()=>{
    cy.get('.action-btn').click()
    cy.findByText('This popover shows up on click').should('be.visible')
  })

  it('can click on diferent section of a canvas',()=>{
    cy.get('#action-canvas').click('top')
    cy.get('#action-canvas').click('bottomRight')
    cy.get('#action-canvas').click(80,100)
  })

  it('can double click to edit',()=>{
    cy.get('.action-div').dblclick().should('not.be.visible')
    cy.get('.action-input-hidden').should('be.visible')
  })
  it('can right click to edit',()=>{
    cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
    cy.get('.rightclick-action-input-hidden').should('be.visible')
  })

  it('shows the nav links on hover',()=>{
    cy.get('.dropdown-toggle').trigger('mouseover')
    cy.get('.dropdown-menu').should('be.visible')
  })

})

        