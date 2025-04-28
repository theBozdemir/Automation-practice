beforeEach(function() {
    cy.fixture('eCommerce').then((data) => {
        cy.wrap(data).as('eCommerceData'); // Alias the fixture data
        cy.log('Fixture data loaded:', data); // Log the data to check if it loads correctly
    });
});
