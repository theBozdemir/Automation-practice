describe("This is my first recap test suite",()=>{

    it("This is my first recap test case",()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("input[type=search]").type("pumpkin")
        cy.get("a[class='increment']:visible").click()
        cy.get(".quantity").should("have.value",2)
        cy.get("a[class='decrement']:visible").click()
        cy.get(".quantity").should("have.value",1)

        cy.get("input[type=search]").clear().type("ca")

        //when we are using a locator multiple times it is better to use aliasing
        cy.get(".products>.product").as('productLocator')
        cy.get('@productLocator').should("have.length",4)
        cy.get('@productLocator').eq(2).contains("ADD TO CART").click()

        //In here products is an array, we will iterate over an array in order to find what we are looking for
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




    })
    
})