describe('CSSLocators',() => {
    it("cssLocators", ()=> {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get('#search_query_top').type("T-Shirts") // Used ID tag is optional
        cy.get("[name='submit_search']").click()
        cy.get(".lighter").contains("T-Shirts")//assertion
        
    })
} )