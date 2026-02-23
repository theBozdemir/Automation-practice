import FinalPage from "./FinalPage.cy";

class OrderSummaryRecap{
validateTheTotalPrice(sumLessThan){
    let total = 0
    cy.get("table>tbody>tr>td:nth-child(4)>strong").each(($el, index, $list) => {
        const price = $el.text();
        const SlicedPrice = price.slice(2)
        const priceToInteger = parseInt(SlicedPrice)
        total = total + priceToInteger
    }).then(() => {
        cy.log(total) 
        expect(total).to.be.lessThan(sumLessThan)
    })
}
verifyOrder(){
    cy.get('button[class="btn btn-success"]').click()
    return new FinalPage()
}

}
export default OrderSummaryRecap