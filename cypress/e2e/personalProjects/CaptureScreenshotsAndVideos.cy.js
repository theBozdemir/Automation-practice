describe('Capture Screenshots and Videos',()=>{
    it('Capture screenshots and videos',()=>{
                cy.visit('https://www.fanatik.com.tr/')
                cy.wait(5000)
                //cy.screenshot()
                //cy.get("div[class='team-list']>a[title='Fenerbahçe']").screenshot('fener')

                //Automatically capture screenshot and videos on failure - only when you execute through terminal
                cy.get("div[class='team-list']>a[title='Fenerbahçe']").invoke('removeAttr','target').click()
                cy.get("div[class='main__title'] h1").should('have.text','6alatasaray Haberleri')
    })
})