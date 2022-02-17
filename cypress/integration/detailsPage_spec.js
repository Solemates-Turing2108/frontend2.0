describe('details Page', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://turingsolemates.herokuapp.com/api/v1/shoes/2', { fixture: 'detailsShoe' })
            .visit('http://localhost:3000/shoes/2')
    });

    it('should be able to visit the page and render the site\'s title', () => {
        cy.get('div[class="header_layout"]')
            .should('exist')
    });

    it('should have a details description and user id is 1', () => {
        cy.get('li')
            .get('p')
            .contains('Ugg left shoe')
            .next()
            .contains('cool shoes')
            .next()
            .contains('Ugg')
            .next()
            .contains('10')
            .next()
            .contains('I don\'t know')
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