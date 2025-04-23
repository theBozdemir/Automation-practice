describe("Check UI Elements", ()=> {
    it("Checking radio buttons", ()=> {
        cy.visit("https://testautomationpractice.blogspot.com/")

        //visibility of radio buttons
        cy.get("#male").should("be.visible")
        cy.get("#female").should("be.visible")

        //selecting male radio button and verifying it is checked and veifying female radio button is not selected
        cy.get("#male").check().should("be.checked")
        cy.get("#female").should("not.be.checked")

        //selecting female radio button and verifying it is checked and veifying male radio button is not selected
        cy.get("#female").check().should("be.checked")
        cy.get("#male").should("not.be.checked")
    })
    it("Checking checkboxes", ()=> {
        //Checking visibilibty of element
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#monday").should("be.visible");

        //Selecting single checkbox and check it
        cy.get("#monday").check().should("be.checked")

        cy.get("#monday").uncheck().should("not.be.checked")

        //Selecting all the checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")
        cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")

        //Select First Checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check()

        //Select Last Checkbox
        cy.get("input.form-check-input[type='checkbox']").last().check()
        

    })
})