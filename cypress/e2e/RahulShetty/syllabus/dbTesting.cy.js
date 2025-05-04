context("DB Testing",()=>{
    it("DB Testing",()=>{

        cy.sqlServer("select * from Persons").then(function(result){

            console.log(result[0][3])
        })

    })


})