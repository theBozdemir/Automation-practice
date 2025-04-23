describe("Frames",()=>{
    it("Frames",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //this is like cy.get() but when we are using iframes we should use
        //cy.frameloaded() to find our frame
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href='mentorship']").eq(0).click()
        cy.iframe().find(".pricing-container>.pricing-header>div>h1").should("have.length",2)
        })        

})