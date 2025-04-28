describe("Frames",()=>{
    it("Frames",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //this is like cy.get() but when we are using iframes we should use
        //cy.frameloaded() to find our frame
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href='mentorship']").eq(0).click()
        cy.wait(3000)
        cy.iframe().find("div[class='pricing-footer text-center col-lg-2']").should("have.length",2)
        //div[class='pricing-footer text-center col-lg-2']
        })        

})