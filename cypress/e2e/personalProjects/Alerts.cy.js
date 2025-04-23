
describe('Alert handling',()=>{

    // 1) Javascript alert : It will have some text and 'OK' button
    it.skip("JS Alert",()=> {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsAlert()']").click() //Cypress handle automatically with alert boxes
        cy.on('window:alert',(t)=>{ // (t) is alert window that pops up 
            expect(t).to.contains('I am a JS Alert') // we are checking does alert window contain our message
        })
        cy.get("p#result").should("be.exist")
    })
    // 2) Javascript confirm alert: It will have some text with and 'OK' and 'CANCEL' buttons
    it.skip('Confirmation alert handling with OK button',()=>{
        //by default cypress automatially clicking on OK button. Closing with Cancel button we need to write code
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on("window:confirm",(t)=>{
            expect(t).to.contains("I am a JS Confirm");

        })
        //by default cypress automatially clicking on OK button. Closing with Cancel button we need to write code
        cy.get('#result').should('have.text','You clicked: Ok')

    })
    it.skip('Confirmation alert handling with Cancel Button',()=>{
        //by default cypress automatially clicking on OK button. Closing with Cancel button we need to write code
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on("window:confirm",()=>false); //cypres closes alert window using cancel button
            
        cy.get('#result').should('have.text','You clicked: Cancel')



    })
    // 3) Javascript prompt alert: It will have some text with textbox for user input along with 'OK' and 'Cancel' button
    it.skip("Handling prompt alert boxes",()=> {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        let prompt= "Fuck you"

        cy.window().then((win)=>{ //we captured the window in win 
            
            cy.stub(win, 'prompt').returns(prompt)
            
        }) //this should be need to run before alert box pop up
        //cypress will automatically close prompted alert - it will use OK button - by default
        cy.get("button[onclick='jsPrompt()']").click()

        cy.get('#result').should('have.text','You entered: '+prompt)
    
        
    })
    it.skip("Handling prompt alert boxes with Cancel button",()=> {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        let prompt= null

        cy.window().then((win)=>{ //we captured the window in win 
            
            cy.stub(win, 'prompt').returns(prompt)
            
        }) //this should be need to run before alert box pop up
        //cypress will automatically close prompted alert - it will use OK button - by default
        cy.get("button[onclick='jsPrompt()']").click()
        cy.get('#result').should('have.text','You entered: '+prompt)
    
        
    })

    // 4) Authenticated alert

    it("Authenticated alert",()=> {
        
        //Approach-1
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{ auth: { 
                                                                        username:"admin", 
                                                                        password:"admin"}})
        cy.get("div[class='example']").should('have.contain', "Congratulations")

        //Approach-2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example']").should('have.contain', "Congratulations")

    })
})