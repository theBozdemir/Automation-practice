describe('My test suite', () => {  //Suite Name
    it('FixturesDemoTest',() => { //it functions are for test cases
        //test steps will be added
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        //Approach-1
        cy.fixture('orangeHRM.json').then((data)=>{
            
        

        cy.get("input[placeholder='Username']").type(data.username)
        cy.get("input[placeholder='Password']").type(data.password)
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', data.expected)

    })
    })
    //Approach-2
    let userData;
    before(()=>{
        cy.fixture('orangeHRM.json').then((data)=>{
            userData=data;
        })
    })
    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
    })
    it.only('FixturesDemoTest - Correct Credentials',() => { //it functions are for test cases
        //test steps will be added
        cy.log("Data come from hook")
        
        cy.get("input[placeholder='Username']").type(userData.username)
        cy.get("input[placeholder='Password']").type(userData.password)
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', userData.expected)

    })
    })