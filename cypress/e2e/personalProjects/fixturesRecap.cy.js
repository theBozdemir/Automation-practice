describe("fixture recap",()=>{
    it("fixture recap",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.fixture("orangeHRM.json").then((data)=>{

            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password").type(data.password)
            cy.get("button[type='submit']").click()
            cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").should('have.text', data.expected)
        })
        

    })
})