const navbarText = Cypress.env('navbarText');

context('My First Test', () => {
    beforeEach(() => {
        cy.visit('/commands/actions')
    })

    // it('has an h1 on the page', () => {
    //     cy.get('h1').should('exist');
    // })
    // it('renders the correct h1 text', () => {
    //     cy.get('h1').should('contain.text', 'Actions')
    // })

    // it('renders a paragraph under the h1', () => {
    //     cy.get('.container').find('p').should('exist');
    // })

    // it('renders a paragraph under the h1 in specific conteiner', () => {
    //     cy.get('.container').eq(1).find('p').should('exist');
    // })

    // it('renders a section with the correct elements', () => {
    //     cy.get('.container').eq(2).within(()=>{
    //         cy.get('h4').should('exist');
    //         cy.get('p').should('exist');
    //     })
    // })

    // it('correctly renders the cypress website link',() => { 
    // cy.findByText(navbarText).should('exist')  
    // })

    // it('types into an email field', () => {
    // cy.visit('/commands/actions')
    // cy.findByPlaceholderText('Email').type('test@email.com')
    // cy.wait(2000).then(() => {
    //     fetch('https://api.spacexdata.com/v3/missions')
    //     .then((res) => res.json())
    //     .then((data)=>{
    //         console.log(data)
    //     })
    // })    
    // })

   //   it('shows an active class for the current page',()=>{
   //      cy.visit('/commands/actions')
   //      cy.get('.dropdown-menu').find('li').eq(2).should('have.class','active')
   //   })

   //   it('should not have an active class for not active pages',()=>{
   //      cy.visit('/commands/actions')
   //      cy.get('.dropdown-menu').find('li').first()
   //      .should('not.have.class','active')
   //      .find('a')
   //      .should('have.attr','href','/commands/querying')
   //   })

   it('triggers a popover on click', ()=>{
      cy.get('.action-btn').click()
      cy.findByText('This popover shows up on click').should('be.visible')
   })


})
        