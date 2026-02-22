describe("Creating ecommerce test suite", () => {
    it("Submit order", () => {
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/")
        cy.get("#username").type("rahulshettyacademy")
        cy.get("#password").type("Learning@830$3mK2")
        cy.get("input[type='checkbox']").check()
        cy.get("#signInBtn").click()

        //When you sign in
        cy.get("nav>a[class='navbar-brand']").should("have.text", "ProtoCommerce")
        cy.get("app-card").should("have.length", 4)
        cy.get("app-card").each(($el, index, $list) => {
            const brand = $el.find("a").text()
            const searchedBrand = "Blackberry"
            if (brand === searchedBrand) {
                cy.log(brand)
                cy.wrap($el).find(".btn").contains("Add").click()
            }

        })
        cy.get("app-card").eq(0).contains("Add").click()
        cy.get("a").contains("Checkout").click()
            //Sum of products price
        let total = 0
        cy.get("table>tbody>tr>td:nth-child(4)>strong").each(($el, index, $list) => {
            const price = $el.text();
            const SlicedPrice = price.slice(2)
            const priceToInteger = parseInt(SlicedPrice)
            total = total + priceToInteger
        }).then(() => {
            cy.log(total) 
            expect(total).to.be.lessThan(200000)
        })
        cy.get('button[class="btn btn-success"]').click()
        cy.get("#country").type("t")
        cy.wait(3000)
        cy.get(".suggestions>ul>li>a").each(($el,index,$list)=>{
            const suggestion=$el.text()
            if(suggestion==="Turkey")
                cy.wrap($el).click()
        })
        cy.get("#checkbox2").check({force:true})
        cy.get("input[type='submit']").click()
        cy.get(".alert").should("be.visible").should("contain","Success! Thank you! Your order will be delivered in next few weeks :-).")



    })
})