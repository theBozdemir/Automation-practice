class LoginPage{

    getUserName(){
        return cy.get("input[name='username']")
    }

    getPassword(){
        return cy.get("input[name='password']")
    }

    getAdmin(){
        return cy.get("input[value='admin']")
    }
    getUser(){
        return cy.get("input[value='user']")
    }
    getTermsCheckbox(){
        return cy.get("#terms")
    }
    getSignInButton(){
        return cy.get("#signInBtn")
    }

}
export default LoginPage;