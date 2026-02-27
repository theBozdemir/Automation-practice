describe("Intercepting HTTP Requests", function () {
    it("Intercepting HTTP Requests", function () {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',((req)=>{

            //We are catching the above request than changing the url using with request object
            req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'

            //Once the reqest resolves we are verifying server request answer
            req.continue((res)=>{
                //expect(res.statusCode).to.equal(403)
            })
        })).as("dummyUrl")
        cy.get("button[class='btn btn-primary']").click().wait("@dummyUrl")

    
    
    
    
    
    })
    })