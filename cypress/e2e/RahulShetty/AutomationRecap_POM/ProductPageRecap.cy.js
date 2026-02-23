import OrderSummaryRecap from "./OrderSummaryRecap.cy"
import OrderSummary from "./OrderSummaryRecap.cy"

class ProductPageRecap{
pageVerification(){
    cy.get("nav>a[class='navbar-brand']").should("have.text", "ProtoCommerce")
}

productNumberVerification(productNumber){
    cy.get("app-card").should("have.length", productNumber)
}

selectingSpecificProduct(phone){
    cy.get("app-card").each(($el, index, $list) => {
        const brand = $el.find("a").text()
        const searchedBrand = phone
        if (brand === searchedBrand) {
            cy.log(brand)
            cy.wrap($el).find(".btn").contains("Add").click()
        }

    })
}
selectingIntendedProduct(number){
    cy.get("app-card").eq(number).contains("Add").click()
}
clickingCheckoutButton(){
    cy.get("a").contains("Checkout").click()
    return new OrderSummaryRecap()
}
}
export default ProductPageRecap