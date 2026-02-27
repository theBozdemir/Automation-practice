describe("Intercepting HTTP Requests", function () {
    it("Intercepting HTTP Requests", function () {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
       
       
        //We will mock our response in here
        //In here  cypress is not going to make an API request. it will wait until this request been made
        //Once the request maden than it will mock our response
        cy.intercept({
            method: "GET",
            url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        },
            {
                statusCode: 200,
                body: [
                    {
                        "book_name": "RestAssured with Java",
                        "isbn": "LSA",
                        "aisle": "2303"
                    }
                ]
            }).as("singleBookRetrieve")
            cy.get("button[class='btn btn-primary']").click()
            cy.wait("@singleBookRetrieve").then(({request,response})=>{
                cy.get('tr').should('have.length',response.body.length+1)
            })
            cy.get("p").should('have.text','Oops only 1 Book available').should('be.visible')

            //length of the response array should be equal to rows of the table
    })
    
})