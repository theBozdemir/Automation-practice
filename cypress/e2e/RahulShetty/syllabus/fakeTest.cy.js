describe("My first test suite with itercept method",()=>{
    it("My first test case with intercept",()=>{
        cy.visit("https://rahulshettyacademy.com/angularAppdemo")
        
        cy.intercept({
             //We need to make our API request first
            method:"GET",
            url:"https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        },
            //Once we make the API request we need to mock our response data in order to prevent flaky results for dynamic responses
        {
            statusCode:200,
            body:[
                    {
                        "book_name":"RestAssured With Java",
                        "isbn":"RSU",
                        "aisle":"2301"
                    }       
                ]
            
        }) .as('bookRetrievals')
        cy.wait(2000)
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@bookRetrievals').then(({request,response})=>{
            cy.get('tr').should('have.length',response.body.length+1)
        }
            )
        cy.get('p').should("have.text","Oops only 1 Book available")

        //Length of the response array should be equal to number of rows in the table


 
    })
})