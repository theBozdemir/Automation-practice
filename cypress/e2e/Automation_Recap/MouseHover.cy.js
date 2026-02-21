describe("Mouse Hover suite",()=>{
    before("Every test cases",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })
    it("Mouse hover ",()=>{
        cy.get(".mouse-hover-content").invoke("show")
        cy.contains("Top").click()
        cy.url().should("include","top")

                    })
                    


})