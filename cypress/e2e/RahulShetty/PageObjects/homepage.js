class homePage{

    goTo(){
        return cy.visit(Cypress.config('url'))
    }

    getNameBox(){
        return cy.get("input[name='name']:nth-child(2)")
    }
    getEmailBox(){
        return cy.get("input[name='email']")
    }
    getPassword(){
        return cy.get("input[type='password']")
    }
    getGenderOption(){
        return cy.get("select[class='form-control']")
    }
    getDisabledRadio(){
        return cy.get("#inlineRadio3")
    }

}

export default homePage;

