describe("Handle alerts suites",()=>{
    before("Every test cases",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })
    it("Confirm",()=>{
        cy.get("#alertbtn").click()
        cy.get("#confirmbtn").click()
        //window:alert
        cy.on('window:alert',(str)=>{
            //Coming from Mocha framework
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })
        //window:confirm
        cy.on("window:confirm",(str2)=>{
            expect(str2).to.equal("Hello , Are you sure you want to confirm?")

        })

    })
})