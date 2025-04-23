describe("Child Windows",()=>{
    it("Child Windows",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#openwindow").then((el)=>{
            const url= el.prop('href')
            cy.visit(url)
        })        

    })
})