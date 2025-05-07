const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
describe("JWT Session",()=>{
    it("Is logged in through local storage",()=>{
        let realProductName
        let realOrderNumber
        cy.LoginAPI().then(async function(){// This command is a custom command thats why cypress doesn't know how to resolve the 
                                        //promes thas wht we need to resolve the promes with then() method.
            cy.visit("https://rahulshettyacademy.com/client/",{
                //If we visit the given url directly we will see login page. Hpowever if we use
                //onBeforeLoad property we are able to write a Javascript code in order to set 
                //session token into the localstorage. With this we dont't need to login for each tests
                onBeforeLoad : function(window){
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })

        })
        //below locator finds multiple cards first and each card has 2 buttons. with button:last-of-type
        //CSS selector we are able to select last button belonged to the each card
        //when we use eq(1) this will select second card from the UI and it will click on second button.
        cy.get(".card-body b").eq(1).then(function(el){

             realProductName=el.text()
        })
        cy.get(".card-body button:last-of-type").eq(1).click()
        cy.get("button[routerlink='/dashboard/cart']").click()
        cy.contains("Checkout").click() // We are looking for a button which contains""Checkout"
        cy.get("input[placeholder='Select Country']").type("ca")
        cy.get(".ta-results button").each(($el, index, $list)=>{
            if($el.text()===" Canada"){
                cy.wrap($el).click()
            }

        })
        cy.get(".action__submit").click()
        cy.wait(2000)
        cy.get("label[class='ng-star-inserted']").then((el)=>{
            let textFromScreen=el.text().trim()
            let cleanedOrderNumber=''
            for(let i=0; i<textFromScreen.length; i++){
                let char=textFromScreen[i]
                if(char!=="|" && char!==" "){
                    cleanedOrderNumber=cleanedOrderNumber+char
                }
            }
            realOrderNumber=cleanedOrderNumber
            cy.log("Invoice from screen is = "+ realOrderNumber)


        })
        cy.get(".order-summary button").contains("Excel").click()
        const filePath=Cypress.config('fileServerFolder') + "/cypress/downloads/order-invoice_tarikbozdemir2602.xlsx"

        cy.task('excelToJsonConverter',filePath).then(function(result){
            cy.log(result)
            let invoiceNumberExcel=result.data[1].A
            let productNameExcel=result.data[1].B
            expect(realProductName).to.equal(productNameExcel)
            expect(realOrderNumber).to.equal(invoiceNumberExcel)

        })

        //Browser(Engine)- JS Code -> Client Side Environment( Front End ) -> Cypress
        //Node(Engine) - Js code -> Back end applications/Environment
        //Node engine is more powerful than browser engine. It has wider border
        // cy.task() helps cypress to execude code in node engine


    })


})