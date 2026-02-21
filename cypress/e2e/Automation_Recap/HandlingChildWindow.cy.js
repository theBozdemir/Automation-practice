describe("Handle child window",()=>{
    before("Every test cases",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })
    it("Handling child window",()=>{
        cy.get("#opentab").then(function(el){
            const url=el.prop("href")
            cy.visit(url)
            cy.origin(url,()=>{
            cy.get("nav>div>ul>li:nth-child(4)>a").click()
            cy.get("div[class='page-banner-cont']>h2").should("have.text","About Us")

            })
        })

    })
                    

})