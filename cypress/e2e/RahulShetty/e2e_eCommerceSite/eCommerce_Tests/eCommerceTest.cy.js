import LoginPage from "../PageObjects_eCommerce/LoginPage"
import ProductPage from "../PageObjects_eCommerce/ProductPage";
let loginObj;
let testData;
let prodObj
before(()=>{
    loginObj= new LoginPage();
    prodObj= new ProductPage();
    cy.fixture('eCommerce').then((data)=>{
        testData=data;
    })

})
describe("End to end eCommerce Test",()=>{

    it('Submit Order', () => {
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/#")
        loginObj.getUserName().type(testData.username)
        loginObj.getPassword().type(testData.password)
        loginObj.getSignInButton().click()
        cy.wait(5000)
        
        prodObj.getShopName().should("be.visible")
        prodObj.getPhones().should("have.length","4")
        let phones = testData.productName
        phones.forEach(phone => {
            prodObj.getPhones().filter(`:contains("${phone}")`).then($element=>{
                cy.wrap($element).should("have.length","1")
                cy.wrap($element).contains("button","Add").click()
            })
        })
       /* phones.forEach(phone => {
            cy.selectProduct(phone)
        }); */
        prodObj.getCheckoutButton().click()
        let sum =0
        prodObj.getPrice().each(($price, index, $prices)=>{
            let phonePrice=$price.text()
            phonePrice=phonePrice.replace(/\D/g, "")
            let intPhonePrice=Number(phonePrice)
            sum =sum+intPhonePrice
        })
        cy.log(sum).then(()=>{
            cy.log("Sum of phone prices are $"+sum+" .")
        })
        
        prodObj.getCalculatedPrice().then(($autoCalculated)=>{
            let calcPrice=$autoCalculated.text()
            calcPrice=calcPrice.replace(/\D/g,"")
            let intCalcPrice=Number(calcPrice)
            expect(intCalcPrice).to.equal(sum)
            expect(intCalcPrice).to.lessThan(200000)
        })
        prodObj.getPayButton().click()

        prodObj.getCountryDropdown().type("Tur")

        cy.wait(7000)
        prodObj.getSuggestion().click()

        prodObj.getAgreeCheckbox().check({force:true})

        prodObj.getPurchaseButton().click()

        prodObj.getCongrats().then((string)=>{
            const str= string.text()
            expect(str.includes("Success")).to.be.true
        })
        
      })
})