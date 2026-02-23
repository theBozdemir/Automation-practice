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
        //cy.visit("https://rahulshettyacademy.com/loginpagePractise/")
        // cy.get("#username").type(this.data.username)
        // cy.get("#password").type(this.data.password)
        // cy.get("input[type='checkbox']").check()
        // cy.get("#signInBtn").click()
        this.homePageRecap.goTo("https://rahulshettyacademy.com/loginpagePractise/")
        //we are using the ProductPageRecap objectwhic generated within homepage
        const prodPage=this.homePageRecap.login(this.data.username,this.data.password)


        //When you sign in
        //cy.get("nav>a[class='navbar-brand']").should("have.text", "ProtoCommerce")
        prodPage.pageVerification()
        prodPage.productNumberVerification(4)
        // cy.get("app-card").each(($el, index, $list) => {
        //     const brand = $el.find("a").text()
        //     const searchedBrand = "Blackberry"
        //     if (brand === searchedBrand) {
        //         cy.log(brand)
        //         cy.wrap($el).find(".btn").contains("Add").click()
        //     }

        // })
        prodPage.selectingSpecificProduct(this.data.productName)
        // cy.get("app-card").eq(0).contains("Add").click()
        prodPage.selectingIntendedProduct(0)
        // cy.get("a").contains("Checkout").click()
        const orderSummary=prodPage.clickingCheckoutButton()
            //Sum of products price
        orderSummary.validateTheTotalPrice(200000)
        // let total = 0
        // cy.get("table>tbody>tr>td:nth-child(4)>strong").each(($el, index, $list) => {
        //     const price = $el.text();
        //     const SlicedPrice = price.slice(2)
        //     const priceToInteger = parseInt(SlicedPrice)
        //     total = total + priceToInteger
        // }).then(() => {
        //     cy.log(total) 
        //     expect(total).to.be.lessThan(200000)
        // })

        // cy.get('button[class="btn btn-success"]').click()
        const finalPage= orderSummary.verifyOrder()
        finalPage.selectCountry("t","Turkey")
        // cy.get("#country").type("t")
        // cy.wait(3000)
        // cy.get(".suggestions>ul>li>a").each(($el,index,$list)=>{
        //     const suggestion=$el.text()
        //     if(suggestion==="Turkey")
        //         cy.wrap($el).click()
        // })
        // cy.get("#checkbox2").check({force:true})
        finalPage.acceptTerms()
        // cy.get("input[type='submit']").click()
        finalPage.giveTheOrder()
        finalPage.validateSuccessMessage("Success! Thank you! Your order will be delivered in next few weeks :-).")
        // cy.get(".alert").should("be.visible").should("contain","Success! Thank you! Your order will be delivered in next few weeks :-).")



    })
})