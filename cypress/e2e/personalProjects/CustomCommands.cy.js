describe ('Custom commands',()=>{
    it('handling links',()=>{
        cy.visit("https://www.amazon.ca/")
        cy.wait(5000)
        cy.get("#twotabsearchtextbox").click().type('god of war')
        cy.get("#nav-search-submit-button").click()
        cy.clickLink('God of War Ragnarök - PlayStation 5')
        cy.get('#productTitle').should('have.text',"        God of War Ragnarök - PlayStation 5       ")

        

    })
    //Over writing contains() command
    it.only('Overwriting existing command',()=>{
        cy.visit("https://www.amazon.ca/")
        cy.wait(5000)
        cy.get("#twotabsearchtextbox").click().type('god of war')
        cy.get("#nav-search-submit-button").click()
        cy.clickLink('God of War Ragnarök - PlayStation 5')
        cy.get('#productTitle').should('have.text',"        God of War Ragnarök - PlayStation 5       ")        
    })
    it('Login command',()=>{
        
    })

})