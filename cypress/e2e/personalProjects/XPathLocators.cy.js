describe("Xpath Locators", ()=>{
    it('find number of products',()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.xpath("//a[normalize-space()='Best Sellers']").click()
        cy.xpath("//ul[@id='blockbestsellers']/li").should('have.length',6) // Assertion
    })
    it('chained-xpath',()=> {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.xpath("//a[normalize-space()='Best Sellers']").click()
        cy.xpath("//ul[@id='blockbestsellers']").xpath("./li").should('have.length',6) // Same functionality of above 
    })

})