import ProductPageRecap from "./ProductPageRecap.cy"

class HomePageRecap{
    login(username,password){
        cy.get("#username").type(username)
        cy.get("#password").type(password)
        cy.get("input[type='checkbox']").check()
        cy.get("#signInBtn").click()
        return new ProductPageRecap()
    }
    goTo(url){
        cy.visit(url)
    }
    
}
export default HomePageRecap