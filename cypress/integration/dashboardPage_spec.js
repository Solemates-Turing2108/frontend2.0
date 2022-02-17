describe('Dashboard Page', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://turingsolemates.herokuapp.com/api/v1/users/1/shoes', { fixture: 'dashboardShoes' })
      .visit('http://localhost:3000/dashboard')
    });

    it('should be able to visit the page and render the site\'s title', () => {
        cy.get('div[class="header_layout"]')
            .should('exist')
    });

    it('should have a link inside of each card to navigate to detailsPage of the shoe', () => {
        cy.get('li')
            .get('a')
            .get('[href="/shoes/:5"]').click()
            .get('li[class="product-card_container"]')
            .should('not.exist')
            .url().should('eq', 'http://localhost:3000/shoes/:5')
    });

    it('should have details on each shoe', () => {
        cy.get('div[class="dashboard_layout"]')
            .first()
            .next()
            .get('ul[class="dashboard_listings"]')
                .children('li[class="product-card_container"]')
                .next()
                .get('p')
                .contains('shoes')
                .next()
                .contains('nike')
                .next()
                .contains('5')
                .next()
                .contains('right')
                .next()
                .contains('sneaker')
                .next()
                .get('button')
                .contains('Delete')
     });

    it('should have a Home button that links to the base url', () => {
        cy.get('.navbar_button').children().should('have.attr', 'href').and('include', '/')
            .get('img[alt="home"]').should('have.attr', 'src').should('include', '/static/media/noun-house-1711906.d012bb1964ee2948e465f46e7b44e02c.svg')
    });

    it('should have a Dashboard button that links to the user\'s personal listings', () => {
        cy.get('.navbar_button').children().eq(2).should('have.attr', 'href').and('include', '/dashboard')
            .get('img[alt="home"]').eq(2).should('have.attr', 'src').should('include', '/static/media/noun-user-4602163.39134a6bc0eddc88594d21ffc73da21d.svg')
    });

    it('should have an add button that links to the form page to add a listing', () => {
        cy.get('.navbar_button').children().eq(1).should('have.attr', 'href').and('include', '/add-listing')
        .get('img[alt="home"]').eq(1).should('have.attr', 'src').should('include', '/static/media/noun-plus-2048209.1423e678f69b25921d6684d548dd04d5.svg')
    });

}) 