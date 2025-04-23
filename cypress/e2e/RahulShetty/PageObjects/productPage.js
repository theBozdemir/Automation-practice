class productPage{

    getCheckoutButton(){
        return cy.get("a[class='nav-link btn btn-primary']")
    }
    getRemoveButton(){
        return cy.get("button[class='btn btn-danger']")
    }
    getContinueShoppingButton(){
        return cy.get("button[class='btn btn-default']")
    }
    getPayButton(){
        return cy.get("button[class='btn btn-success']")
    }
    getQuantityBox(){
        return cy.get("#exampleInputEmail1")
    }
    getCountryDropdown(){
        return cy.get("#country")
    }
    getAgreeCheckbox(){
        return cy.get("#checkbox2")
    }
    getSuggestion(){
        return cy.get(".suggestions>ul>li>a")
    }
    getCongrats(){
        return cy.get(".alert.alert-success.alert-dismissible")
    }
    getPurchaseButton(){
        return cy.get("input[value='Purchase']")
    }
    getPrice(){
        return cy.get("tbody>tr>td:nth-child(4)>strong")
    }
    getCalculatedPrice(){
        return cy.get("h3>strong")
    }




}
export default productPage