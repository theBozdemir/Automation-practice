//before -> this will be launched before the it block starts and will be run only one time
//after -> this will be launched after all it blocks completed and will be run only one time
//beforeEach -> this will be launched before the every it block start and will be run only one time
//afterEach -> this will be launched after the completion of every it block start and will be run only one time

describe('MyTestSuite',()=>{
    before(()=>{
        cy.log('**** Launch The App ****')
    })
    after(()=>{
        cy.log('**** Close the app ****')
    })
    beforeEach(()=>{
        cy.log('**** Login the app ****')
    })
    afterEach(()=>{
        cy.log('**** Log out from the app ****')
    })

    it('search',()=>{
        cy.log('*** searching ***');
    })
    it('advanced search',()=>{
        cy.log('*** advanced searching ***');
    })
    it('listing Products',()=>{
        cy.log('*** listing products ***');
    })
})