describe("Handle Dropdowns with <select> tag", ()=>{
    it("Dropdown with select",()=>{
        cy.visit("https://www.automationtesting.co.uk/dropdown.html")
        
        cy.get("select#cars").select('Honda').should('have.value','honda')


    })

    it("Dropdown without <select> tag",()=> {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get("input.select2-search__field[aria-autocomplete='list']").type("turkey").type("{enter}")
        cy.get("#select2-billing_country-container").should('have.text','Turkey') //Assertion of the dropdown

    })

    it("Dropdowns with auto suggestion", ()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get("input#searchInput").type("toronto")
        cy.get("h3.suggestion-title").contains("Maple").click()
        cy.get("title").contains("Maple")

    })
    it("Dynamic dropdown handling",()=> {
        cy.visit("https://www.google.com/")

        cy.get("textarea[title='Search']").type("Cypress automation")

        cy.wait(3000)

        cy.get("div.wM6W7d>span").should("have.length",13)

        cy.get("div.wM6W7d>span").each(($el,index,$list)=>{
            if($el.text()=='cypress automation tutorial'){

                cy.wrap($el).click() 
            }
        })
        cy.get("textarea[name='q']").should("have.value","cypress automation tutorial")
    })
})