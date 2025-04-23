describe("Tables",()=>{
    it("Web tables",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("table[name='courses']>tbody>tr>td:nth-child(2)").each(($row,index,$rows)=>{
            const text =$row.text()
            if(text.includes("Python")){
                //Below command will try to jump on Price column when we find
                //the intended row
                cy.get("table[name='courses']>tbody>tr>td:nth-child(2)").eq(index).next().then((price)=>{
                   const priceText=price.text()
                   expect(priceText).to.equal('25')
                })
            }
        })
    })
})