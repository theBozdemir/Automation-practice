describe("Upload and download Test",()=>{
    it("Verify excel upload and download",()=>{
        const FilePath=Cypress.config('fileServerFolder') + "/cypress/downloads/download.xlsx"
        cy.visit("https://rahulshettyacademy.com/upload-download-test/index.html")
        cy.get("#downloadButton").click()
        cy.wait(3000)
        cy.task('writeExcel',{searchText:"Apple",replaceText:"portakal",filePath:FilePath})
        cy.get("#fileinput").selectFile(FilePath)
cy.contains('portakal') // Find the parent element containing 'portakal'
  .parent() // Get the parent of the parent
  .parent() // Get the grandparent
  .find('#cell-4-undefined') // Find the element with the id `#cell-4-undefined`
  .invoke('text') // Get the text content of the element
  .then((textValue) => {
    cy.log('Value of #cell-4-undefined:', textValue);  // Log the number in Cypress runner
  });
    })
})