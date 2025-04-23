describe('MyFirsttest', () => {  //Suite Name
    it('Verify title-positive',() => { //it functions are for test cases
        //test steps will be added
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        
        cy.title().should('eq','OrangeHRM') //This is assertion eq = equal

    })
    it('Verify title-negative',() => { //it functions are for test cases
        
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        
        cy.title().should('not.eq','OrangeHRM123') 

    })
})