describe('Handling iframe cross origin', () => {
    it('Handle iframe using cy.origin', () => {
    
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    
    cy.get('#courses-iframe')
    .invoke('attr', 'src')
    .then((iframeSrc) => {
    
    cy.origin('https://legacy.rahulshettyacademy.com/', () => {
    
    cy.visit('/')
    
    cy.contains('Mentorship').click()
    cy.get('.pricing-container').should('have.length', 2)
    
    })
    })
    })
    })