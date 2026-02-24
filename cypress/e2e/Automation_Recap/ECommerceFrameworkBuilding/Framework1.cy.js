import FinalPage from "../../RahulShetty/AutomationRecap_POM/FinalPage.cy"
import HomePageRecap from "../../RahulShetty/AutomationRecap_POM/HomePageRecap.cy"
import OrderSummary from "../../RahulShetty/AutomationRecap_POM/OrderSummaryRecap.cy"
import ProductPageRecap from "../../RahulShetty/AutomationRecap_POM/ProductPageRecap.cy"


describe("Creating ecommerce test suite", () => {
    before(function(){
                cy.fixture("AutomationRecapNew").then(function(data){
            //when we use "this.variable" this makes that variable globally available outside that scope
            //"this" method is not working when we declare function as arrow function
            this.data=data
            this.homePageRecap=new HomePageRecap()

        })

    })
    it("Submit order", function(){

        this.homePageRecap.goTo(Cypress.env('url')+"/loginpagePractise/")
        //we are using the ProductPageRecap objectwhic generated within homepage
        const prodPage=this.homePageRecap.login(this.data.username,this.data.password)


        //When you sign in

        prodPage.pageVerification()
        prodPage.productNumberVerification(4)

        prodPage.selectingSpecificProduct(this.data.productName)
        prodPage.selectingIntendedProduct(0)
        const orderSummary=prodPage.clickingCheckoutButton()
            //Sum of products price
        orderSummary.validateTheTotalPrice().then(function(sum){
            expect(sum).lessThan(200000)
        })

        const finalPage= orderSummary.verifyOrder()
        finalPage.selectCountry("t","Turkey")

        finalPage.acceptTerms()
        finalPage.giveTheOrder()
        finalPage.validateSuccessMessage("Success! Thank you! Your order will be delivered in next few weeks :-).")
    })
})