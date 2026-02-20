describe("Handle different UI elements suite",()=>{
    before("Every test cases",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })
    it.skip("Checkboxes",()=>{

        cy.get("#checkBoxOption1").check().should("be.checked").should("have.value","option1")
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked")
        cy.get("input[type='checkbox'").check()
        cy.get("input[type='checkbox'").uncheck()
        //OR
        cy.get("input[type='checkbox']").check(['option2','option3'])
        cy.get("input[type='checkbox']").uncheck(['option2','option3'])
        cy.get("input[type='checkbox']").each(($el,index, $list)=>{
            const checkText= $el.val()
            if(checkText.includes("option3")){
                cy.wrap($el).check()
            }

        })
    }) 
    it.skip("Static dropdowns",()=>{
        cy.get("select").select("option2").should("have.value","option2")
    })
    it.skip("Dynamic dropdowns",()=>{
        cy.get("#autocomplete").as("dynamicDropdown")
        cy.get("@dynamicDropdown").type('ca')
        cy.get('.ui-menu-item>div').each(($el,index,$list)=>{
            const country = $el.text()
            if(country==='Canada'){
                cy.wrap($el).click()
            }
        })
        cy.get("@dynamicDropdown").should("have.value","Canada")

    })
    it("Validation of visible/Invisible items",()=>{
        cy.get("#hide-textbox").as("hide")
        cy.get("#show-textbox").as("show")
        cy.get("#displayed-text").as("proof")
        cy.get("@hide").click()
        cy.get("@proof").should("not.be.visible")
        cy.get("@show").click()
        cy.get("@proof").should("be.visible")
    })

})