describe("API Testing",()=>{
    it("API Testing",()=>{
        cy.request('POST','http://216.10.245.166/Library/Addbook.php',
                {

                    "name":"Learn Appium Automation with Java",
                    "isbn":"abcdefghjkl",
                    "aisle":"22s7",
                    "author":"John Gray"
                    }

           
        ).then(function(response){
            expect(response.body).to.have.property("Msg","successfully added")
            expect(response.status).to.equal(200)
        }
    )

    })


})