describe("Handle child window",()=>{
    before("Every test cases",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })
    it("Handle child tabs",()=>{
        cy.get("#opentab").invoke('removeAttr','target').click()

        //When we clicked on the new tab button it navigated us to different domain. Thats why we need to use cy.origin()
        cy.origin("https://www.qaclickacademy.com/",()=>{
            cy.url().should('include',"qaclickacademy")
            cy.get("a").contains("About us").click()
            cy.get("h2:first-child").should("have.text","About Us")
        })

    })
    

})