const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import LoginPage from "../../e2e/RahulShetty/e2e_eCommerceSite/PageObjects_eCommerce/LoginPage";
import ProductPage from "../../e2e/RahulShetty/e2e_eCommerceSite/PageObjects_eCommerce/ProductPage";
// cypress/support/index.js
import '../hooks';  // Ensure this line is present


const prodObj = new ProductPage();
const loginObj = new LoginPage();

let domain = Cypress.env('url');

Given('I am on Ecommerce page', () => {
    cy.visit(domain + "/loginpagePractise/#");
});

When("I login to the application", function() {
    cy.log('Fetching fixture data alias @eCommerceData'); // Log alias fetch attempt
    cy.get('@eCommerceData').should('exist').then((data) => {
        loginObj.getUserName().type(data.username);
        loginObj.getPassword().type(data.password);
        loginObj.getSignInButton().click();
    });
    cy.wait(5000);
    prodObj.getShopName().should("be.visible");
    prodObj.getPhones().should("have.length", "4");
});
When("I login to the application with cucumber credentials",function(dataTable){
    loginObj.getUserName().type(dataTable.rawTable[1][0])
    loginObj.getPassword().type(dataTable.rawTable[1][1])
    loginObj.getSignInButton().click();

})


When("I add items to cart and checkout", function() {
    cy.get('@eCommerceData').should('exist').then((data) => { // Ensure alias exists
        let phones = data.productName;
        phones.forEach(phone => {
            prodObj.getPhones().filter(`:contains("${phone}")`).then($element => {
                cy.wrap($element).should("have.length", "1");
                cy.wrap($element).contains("button", "Add").click();
            });
        });
    });
    prodObj.getCheckoutButton().click();
});

When("Validate the total price limit", () => {
    let sum = 0;
    prodObj.getPrice().each(($price) => {
        let phonePrice = $price.text();
        phonePrice = phonePrice.replace(/\D/g, "");
        let intPhonePrice = Number(phonePrice);
        sum = sum + intPhonePrice;
    }).then(() => {
        cy.log(sum).then(() => {
            cy.log("Sum of phone prices are $" + sum + " .");
        });

        prodObj.getCalculatedPrice().then(($autoCalculated) => {
            let calcPrice = $autoCalculated.text();
            calcPrice = calcPrice.replace(/\D/g, "");
            let intCalcPrice = Number(calcPrice);
            expect(intCalcPrice).to.equal(sum);
            expect(intCalcPrice).to.lessThan(200000);
        });
        prodObj.getPayButton().click();
    });
});

Then("Select the country and submit and verify Thank you", () => {
    prodObj.getCountryDropdown().type("Tur");
    cy.wait(7000);
    prodObj.getSuggestion().click();
    prodObj.getAgreeCheckbox().check({ force: true });
    prodObj.getPurchaseButton().click();

    prodObj.getCongrats().then((string) => {
        const str = string.text();
        expect(str.includes("Success")).to.be.true;
    });
});


