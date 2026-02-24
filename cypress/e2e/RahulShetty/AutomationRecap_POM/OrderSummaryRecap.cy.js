import FinalPage from "./FinalPage.cy";

class OrderSummaryRecap{
validateTheTotalPrice(){
    //here we called a custom command that we typed for above. With this way we can globally use that command anywhere needed
    return cy.totalPrice()
}
verifyOrder(){
    cy.get('button[class="btn btn-success"]').click()
    return new FinalPage()
}

}
export default OrderSummaryRecap