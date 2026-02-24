class FinalPage{
    selectCountry(firstLetter,countryName){
        // cy.get("#country").type(firstLetter)
        // cy.wait(3000)
        // cy.get(".suggestions>ul>li>a").each(($el,index,$list)=>{
        //     const suggestion=$el.text()
        //     if(suggestion===countryName)
        //         cy.wrap($el).click()
        // })
        //here we called a custom command that we typed for above. With this way we can globally use that command anywhere needed
        cy.selectCountry(firstLetter,countryName)
    }
   acceptTerms(){
    cy.get("#checkbox2").check({force:true})
   } 
   giveTheOrder(){
    cy.get("input[type='submit']").click()
   }
   validateSuccessMessage(message){
    cy.get(".alert").should("be.visible").should("contain",message)

   }

}
export default FinalPage