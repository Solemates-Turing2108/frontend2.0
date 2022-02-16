describe('mainPage', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://turingsolemates.herokuapp.com/api/v1/shoes', { fixture: 'mainShoes' })
      .visit('http://localhost:3000/')
    });

    it('should be able to visit the page and render the site\'s title', () => {
        cy.get('h1')
          .contains('Solemates')
      });

    it('should have a link inside of each card', () => {
         cy.get('li')
            .get('a')
            .get('[href="/shoes/:2"]')
    })

    it('should have a description and side on each shoe card', () => {
        cy.get('li')
            .get('p')
            .contains('super slick shoe')
            .next()
            .contains('Nordstrom')
            .next()
            .contains('12')
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

