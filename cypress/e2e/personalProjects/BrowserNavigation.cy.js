describe('Browser navigation', ()=>{
    it('Test-1',()=>{
        cy.visit('https://www.fanatik.com.tr/')
        cy.wait(5000)
        cy.get("div[class='team-list']>a[title='Fenerbahçe']").invoke('removeAttr','target').click()
        cy.get("div[class='main__title'] h1").should('have.text','\n                Fenerbahçe Haberleri\n            ')
        cy.go('back')
        cy.wait(5000)
        let title=cy.title()
        cy.log(title)
        cy.title().should('eq','Spor Haberleri - Sporda Bugün Son Dakika Haberler, Günün Güncel Spor Gazetesi')
    })
})