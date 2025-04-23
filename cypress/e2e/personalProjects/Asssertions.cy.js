describe("Assertions Demo",()=> {
   /*
    it("implicit assertions",()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        // "should" and "and"
        cy.url().should('include','orangehrmlive.com')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain', 'orangehrm')

        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrm')
        .and('not.contain', 'fanatic')
        .and('not.eq', 'https://opensource-demo.orangehrmlive.com')

        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        cy.get("img[alt='company-branding']").should('be.visible')// will check the element is visible or not
        .and('exist') // will check the element is exist or not

        cy.xpath("//a").should('have.length', '5') //Number of links

        cy.get("input[placeholder='Username']").type("Admin") //provide a value into input box
        cy.get("input[placeholder='Username']").should('have.value','Admin') //check provided value is typed


    })
        */
    it('Explicit Assertions',()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()


        let expName= "Попов Феликс";
        let notExpName="Tarik"

        cy.get(".oxd-userdropdown-tab").then((x)=> { //captured the element and than started writing our arrow function
            let actName= x.text() //Captured the actual name of the user

            //BDD Style
            expect(actName).to.equal(expName) //Compared actual name with expected name
            expect(actName).to.not.equal(notExpName) //Compared actual name with expected name

            //TDD Style
            assert.equal(actName,expName)
            assert.notEqual(actName,notExpName)

        })


    })
})