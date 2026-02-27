import { DataTable, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePageRecap from "../../../RahulShetty/AutomationRecap_POM/HomePageRecap.cy";

Given("I am on Ecommerce page -recap",function(){
    this.homePage=new HomePageRecap()
    this.homePage.goTo(Cypress.env("url")+"/loginpagePractise/")
    
})
When("I login to the application -recap",function(){
    this.productPage= this.homePage.login(this.data.username,this.data.password)
    this.productPage.pageVerification()
    this.productPage.productNumberVerification(4)

})
When("I add items to cart and checkout -recap",function(){
        this.productPage.selectingSpecificProduct(this.data.productName)
        this.productPage.selectingIntendedProduct(0)
        this.orderSummary=this.productPage.clickingCheckoutButton()
})
When("Validate the total price limit -recap",function(){
            this.orderSummary.validateTheTotalPrice().then(function(sum){
            expect(sum).lessThan(200000)
        })
            this.finalPage= this.orderSummary.verifyOrder()
})
When("I login to the application portal -recap",function(dataTable){
    this.productPage= this.homePage.login(dataTable.rawTable[1][0],dataTable.rawTable[1][1])
    this.productPage.pageVerification()
    this.productPage.productNumberVerification(4)

})
Then("select the country submit and verify thank you -recap",function(){
        this.finalPage.selectCountry("t","Turkey")
        this.finalPage.acceptTerms()
        this.finalPage.giveTheOrder()
        this.finalPage.validateSuccessMessage("Success! Thank you! Your order will be delivered in next few weeks :-).")
})