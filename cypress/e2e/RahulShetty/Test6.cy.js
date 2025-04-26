describe("Child Windows",()=>{
    it("Child Windows",()=>{
        cy.visit("https://www.fanatik.com.tr/");
        cy.get("a[title='Fenerbahçe']:nth-child(2)").then((el)=>{
            const myURL= el.prop('href')
            cy.log(myURL)
            cy.visit(myURL)
            cy.url().should('eq', myURL);

        })        

    })
})