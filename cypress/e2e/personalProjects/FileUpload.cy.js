
import 'cypress-file-upload';

describe("File Uploads",()=>{
    beforeEach("Open page", ()=>{
        //cy.visit("https://the-internet.herokuapp.com/upload")
        //cy.visit("https://www.davidwalsh.name/demo/multiple-file-upload.php")
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
       // https:  //www.htmlelements.com/demos/fileupload/shadow-dom/index.htm
    })

    it("Single File Upload", ()=>{
        cy.get("#file-upload").attachFile('myDump.rar') //attachFile() method reads file only from fixtures folder
        cy.get('#file-submit').click()
        cy.wait(3000)
        cy.get("div[class='example']>h3").should('have.text','File Uploaded!')
    })
    it("Single Upload - Rename the file during upload", ()=>{
        cy.get("#file-upload").attachFile({filePath:'myDump.rar', fileName:'myDumpCopy.rar'}) //attachFile() method reads file only from fixtures folder
        cy.get('#file-submit').click()
        cy.wait(3000)
        cy.get("div[class='example']>h3").should('have.text','File Uploaded!')

    })
    it("Single File Upload - Drag and drop", ()=>{
        cy.get("#drag-drop-upload").attachFile('myDump.rar',{subjectType:'drag-n-drop'}) //attachFile() method reads file only from fixtures folder
        //cy.get('#file-submit').click()
        cy.wait(3000)
        cy.get("div#drag-drop-upload>div:first-child>div:first-child>div:first-child>span").contains('myDump.rar')
    })
    it("Multiple Files Upload", ()=>{
        cy.get("#filesToUpload").attachFile(["myDump.rar",'response.txt'])
        cy.get("#fileList").should('contain.text','response.txt')
        cy.get("#fileList").should('contain.text','myDump.rar')
    })
    it.only("File Upload - Shadow DOM", ()=>{
        cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile('myDump.rar')
        cy.wait(5000)
        cy.get("span[class='smart-item-name']",{includeShadowDom:true}).contains('myDump.rar')
    })

})