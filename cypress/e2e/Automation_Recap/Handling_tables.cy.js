describe("Handle child window",()=>{
    before("Every test cases",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })
    it("finding the courtse",()=>{
        cy.get("table[name='courses']>tbody>tr>td:nth-child(2)").each(($el,index,$list)=>{
                const className =$el.text()
                const originalCLassname="Master Selenium Automation in simple Python Language"
                let coursePrice
                if(className===originalCLassname){
                    coursePrice=cy.get("table[name='courses']>tbody>tr>td:nth-child(2)").eq(index).next().then(function(price){
                        const cPrice=price.text()
                        cy.log("Course price is : "+cPrice)
                    })
                    
                    
                }
        })
    })

})