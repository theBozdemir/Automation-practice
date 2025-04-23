describe (" Recap alerts for interview",()=>{

    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    })

    it.skip("Testing Javascript alerts",()=>{

        cy.get("button[onclick='jsAlert()']").click()

        cy.on("window:alert",(t)=>{
            cy.expect(t).to.contains("I am a JS Alert")
        })
        

    })
    it.skip("Testing JS Confirm Alert with OK Button",()=>{
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on("window:confirm",(t)=>{
            cy.expect(t).to.contains("I am a JS Confirm")
        })
        cy.get("#result").should("be.visible").should("have.text", "You clicked: Ok")

    })

    it.skip("Testing JS Confirm Alert with Cancel button",()=>{
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on("window:confirm",()=>false)
        cy.get("#result").should("be.visible").should("have.text", "You clicked: Cancel")
    })

    it.skip("Testing JS alert with prompt",()=>{
        let prompt=" interview prep"

        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns(prompt)
        })
        cy.get("button[onclick='jsPrompt()']").click()
        cy.get("#result").should("be.visible").should("have.text", "You entered: "+prompt)
    })

    it("Testing Js alert with prompt with cancel button",()=>{
        let prompt=null
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns(prompt)
        })
        cy.get("button[onclick='jsPrompt()'").click()

    })


})