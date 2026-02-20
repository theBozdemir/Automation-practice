describe("My second test suite",()=>{
    it("My second test case",()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("input[type=search]").clear().type("ca")
        cy.get(".products>.product").as('productLocator')
        cy.get('@productLocator').should("have.length",4)
        cy.get('@productLocator').eq(2).contains("ADD TO CART").click()
        cy.get('@productLocator').each(($el, index, $list)=>{
            const productName= $el.find('h4.product-name').text()
            if(productName.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }

        })
                //Assert if logo is typed correct
                cy.get(".brand").should('have.text','GREENKART').then((logoElement)=>{
                    const logo=logoElement.text()
                    
                    cy.log(logo)
            
            
                    })
                    cy.get("img[alt='Cart']").click()
                    cy.get('button').contains('PROCEED').click()
                    cy.get("td:nth-child(4)>.amount").each(($el,index,$list)=>{
                        const price=$el.text()
                        cy.log(price)
    })
    cy.contains("Place Order").click()
})
})