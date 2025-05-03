describe("Continuing Intercept Method",()=>{
    it("Continue to intercept",()=>{
        cy.visit("https://rahulshettyacademy.com/angularAppdemo")
        cy.intercept("GET","https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
            (req)=>
            {
                req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra",
                req.continue((res)=>{
                    expect(res.statusCode).to.equal(403) // we are trying to hit different user. WE should get 403 instead of 200 status code
                })
            }
        ).as("dummyURL")
        cy.get("button[class='btn btn-primary']").click()
        cy.wait("@dummyURL")
        
    })
})