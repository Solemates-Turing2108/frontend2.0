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


})

