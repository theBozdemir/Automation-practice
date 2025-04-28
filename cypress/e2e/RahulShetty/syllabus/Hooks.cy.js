import homePage from "./PageObjects/homepage";
import productPage from "./PageObjects/productPage";
describe("Hooks",()=>{
    let obj =new homePage() //we created an object belonged to homePage(Page objects class)
    let objProd=new productPage()
    let testData;
    before(()=>{//run once before all tests in the block
        cy.fixture('recap').then((data)=>{
            testData=data;
        })

    })
    it("Testing hooks",()=>{
        obj.goTo() //taking url from cypress.config.js file
        //With Page Object Modelling
        obj.getNameBox().type(testData.name)
        obj.getNameBox().should("have.attr","minlength",'2')
        obj.getNameBox().should("have.value",testData.name)
        obj.getGenderOption().select(testData.gender)
        obj.getEmailBox().type(testData.email)
        obj.getPassword().type(testData.password)
        obj.getDisabledRadio().should("be.disabled")
        /* Without using Page Object
        cy.get("input[name='name']:nth-child(2)").should("have.attr","minlength",'2')
        cy.get("input[name='name']:nth-child(1)").should("have.value",testData.name)
        cy.get("select[class='form-control']").select(testData.gender)
        cy.get("input[name='email']").type(testData.email)
        cy.get("input[type='password']").type(testData.password)
        cy.get("#inlineRadio3").should("be.disabled") */

        cy.get("app-navbar>div>nav>ul>li:nth-child(2)").click()
       /* cy.get(".card-title").each(($title,index,$list)=>{

            const phoneTitle=$title.text()
            if(phoneTitle.includes('Blackberry')){
                cy.get("button[class='btn btn-info']").eq(index).click()
            }
        }) */

        //cy.selectProduct('Samsung')
        //cy.get("a[class='nav-link btn btn-primary']").click()

        //parameterizing test data
        //we saved our productname array inside phones variable
        //we iterated phone names from phones array with forEach loop
        let phones= testData.productName
        phones.forEach(phone=>{
            cy.selectProduct(phone)
        })
        objProd.getCheckoutButton().click()
        
        var sum=0

        objProd.getPrice().each(($price,index,$prices)=>{
            let phonePrice=$price.text()
            phonePrice= phonePrice.split(" ")
    // Remove everything except numbers (₹. and spaces get removed)
            //phonePrice = phonePrice.replace(/\D/g, "");
            phonePrice=phonePrice[1].trim()
            let intPhonePrice=Number(phonePrice)
            sum=sum+intPhonePrice
            cy.log(phonePrice)
            
        }).then(()=>{
            
            cy.log("Sum of phone prices are $"+sum+" .")
        })

        objProd.getCalculatedPrice().then((calcPrice)=>{
            let calculated = calcPrice.text().trim()
            calculated=calculated.replace(/\D/g, "")
            let intCalculated=Number(calculated)
            expect(intCalculated).to.equal(sum)
        })

        

        objProd.getPayButton().click()

        objProd.getCountryDropdown().type("Tur")

        cy.wait(7000)
        objProd.getSuggestion().click()

        objProd.getAgreeCheckbox().check({force:true})

        objProd.getPurchaseButton().click()

        objProd.getCongrats().then((string)=>{
            const str= string.text()
            expect(str.includes("Success")).to.be.true

        })
        


        
    })

})
