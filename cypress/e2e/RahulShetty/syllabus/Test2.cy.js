
describe('My First Test Suite', ()=>{
    it('My First test Case', ()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.wait(2000)
        cy.get("input[type='search']").type("ca")
        //cy.get(".product").should("be.visible",4)
        // Parent child chaining
        cy.get(".products").as('productLocator') // if we use alias we dont need to declare the element each an every time
        cy.get("@productLocator").find(".product").should("have.length", 4)
        cy.get("@productLocator").find('.product').each(($el, index, $list)=>{ //iterating inside a web element with "each"
        const textVeg = $el.find("h4.product-name").text()
        if(textVeg.includes("Cashews")){
            $el.find('button').click()
        }
        })
        cy.get("a.cart-icon").click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

        })


})