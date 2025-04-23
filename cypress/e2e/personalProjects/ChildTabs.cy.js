describe("Handle child tab",()=> {
    it.skip("Deleting <target> attribute",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")

        cy.get("a[href='/windows/new']").invoke('removeAttr','target').click()

        cy.get("div>h3").should('have.text','New Window')
        cy.wait(5000)

        //operations
        cy.go('back'); //back to parent tab
    })
    it("Second approach - capture href attribute and visit the new url",()=> {
        cy.visit("https://the-internet.herokuapp.com/windows")

        //This approach have limitation that parent tab and child tab should be under same domain
        cy.get('.example>a').then((e)=>{ //we are capturing href attribute into e
            let url=e.prop('href'); //this will return the value of href attribute
            cy.visit(url)
        })
        cy.get("div>h3").should('have.text','New Window')
        cy.wait(5000)

        //operations
        cy.go('back'); //back to parent tab

    })    
})