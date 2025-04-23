class LoginPage{
    getUsernameField(){
        return cy.get("input[placeholder='Username'")
    }
    getPasswordField(){
        return cy.get("input[placeholder='Password'")
    }
    getLoginButton(){
        return cy.get("div[class='flex justify-center']>div>button:first-child")
    }

    enterUsername(username){
        this.getUsernameField().clear().type(username)
    }
    enterPassword(password){
        this.getPasswordField().clear().type(password)
    }
    clickLoginButton(){
        this.getLoginButton().click()
    }
}
export default LoginPage;