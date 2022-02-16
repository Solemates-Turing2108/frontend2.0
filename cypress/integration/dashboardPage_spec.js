describe('Dashboard Page', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://turingsolemates.herokuapp.com/api/v1/users/1/shoes', { fixture: 'dashboardShoes' })
      .visit('http://localhost:3000/dashboard')
    });

    it('should be able to visit the page and render the site\'s title', () => {
        cy.get('h1')
          .contains('Solemates')
      });

    it('should have a link inside of each card', () => {
         cy.get('li')
            .get('a')
            .get('[href="/shoes/:5"]')
    })

    it('should have a details description and user id is 1', () => {
        cy.get('li')
            .get('p')
            .contains('shoes')
            .next()
            .contains('5')
            .next()
            .next()
            .contains('right')
            .next()
            .contains('5')
            .next()
            .contains('sneaker')
            .next()
            .contains('1')
            .next()
            .get('button')
            .contains('Delete')
     })

    it('should have a Home button that links to the base url', () => {
        cy.get('.nav').should('have.attr', 'href').and('include', '/')
    .get('.home').should('have.attr', 'src').should('include', 'imageURL????')
})

    it('should have a Dashboard button that links to the user\'s personal listings', () => {
        cy.get('.nav').should('have.attr', 'href').and('include', '/shoes')
    .get('.home').should('have.attr', 'src').should('include', 'imageURL????')
})

    it('should have an add button that links to the form page to add a listing', () => {
        cy.get('.nav').should('have.attr', 'href').and('include', '/shoes')
    .get('.home').should('have.attr', 'src').should('include', 'imageURL????')
})

}) 