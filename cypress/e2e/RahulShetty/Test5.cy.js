describe("Tables",()=>{
    it("Mouse Events",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get(".mouse-hover-content").invoke('show')
        cy.contains("Top").click()
        cy.url().should('include',"top")
        //handling invisible elements
        cy.contains("Reload").click({force:true}) // This will force to show hidden element


        

    })
})