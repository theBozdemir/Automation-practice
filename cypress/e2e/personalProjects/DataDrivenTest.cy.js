
describe('Data driven test', () => {
    it.only('FixturesDemoTest - Correct Credentials', () => {
        cy.fixture('orangeHRM2.json').then((data) => {
            // Visit the login page only once
            cy.visit("https://opensource-demo.orangehrmlive.com/");

            // Iterate through each set of test data
            data.forEach((userdata) => {
                // Reload the page before each login attempt to start fresh
                cy.reload();

                // Input the username and password from the test data
                cy.get("input[placeholder='Username']").clear().type(userdata.username);
                cy.get("input[placeholder='Password']").clear().type(userdata.password);
                cy.get("button[type='submit']").click();

                // Wait for URL change or page load after clicking submit
                cy.url().then((url) => {
                    if (url.includes('/dashboard')) {
                        // If navigated to the dashboard, it's a successful login
                        cy.log("I am in the if block");
                        cy.get("header>div:first-child>div:first-child>span>h6")
                            .should('be.visible')
                            .and('have.text', userdata.expected); // Expected to be "Dashboard"

                        // Logout actions
                        cy.get('.oxd-userdropdown-name').click();
                        cy.get("div[class='oxd-topbar-header-userarea']>ul:first-child>li:first-child>ul>li:nth-child(4)>a")
                            .should('be.visible')
                            .click();
                    } else {
                        // If URL does not change to /dashboard, handle incorrect credentials
                        cy.log("I am in the else block");
                        cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text', { timeout: 10000 })
                            .should('be.visible')
                            .and('have.text', userdata.expected); // Expected to be "Invalid credentials"
                    }
                });
            });
        });
    });
});

