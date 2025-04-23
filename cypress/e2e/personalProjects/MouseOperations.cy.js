import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')
describe("Mouse operations",()=>{

    it('MouseHover',()=>{
        cy.visit("https://demo.opencart.com/")
        cy.get("div[id='narbar-menu']>ul>li:nth-child(1)>div>div>ul>li:nth-child(2)").should('not.be.visible')
        cy.get("div[id='narbar-menu']>ul>li:nth-child(1)>a").trigger('mouseover').click()
        cy.get("div[id='narbar-menu']>ul>li:nth-child(1)>div>div>ul>li:nth-child(2)").should('be.visible')

    })
    it('Right Click',()=>{
        
        cy.visit("http://swisnl.github.io/jQuery-contextMenu/demo.html")

        //approach-1
        /*
        cy.get("div[class='document']>p>span").trigger("contextmenu").should("be.visible")
        */
        //approach-2
        cy.get("div[class='document']>p>span").rightclick()
        cy.get("div[class='document']>p>span").should('be.visible')


    })
    it('Double Click',()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.frameLoaded('#iframeResult') //load the frame
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick')
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')
        
    })
    it('Drag and drop with plugin',()=>{
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.wait(3000)
        cy.get('#box6').drag('#box106',{force:true}); //source to target -> we are forcing because giving Cypress error 
    })
    it.only('Scrolling the page',()=>{
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html",{ failOnStatusCode: false })
        cy.wait(25000)
        cy.get("div[class='container']>div:nth-child(2)>table:nth-child(2)>tbody>tr:nth-child(88)>td:nth-child(2)").contains("Turkey").scrollIntoView()
        cy.get("div[class='container']>div:nth-child(2)>table:nth-child(2)>tbody>tr:nth-child(88)>td:nth-child(2)").should("be.visible")

        cy.get(':nth-child(1) > tbody > :nth-child(2) > :nth-child(2)').contains("Afghanistan").scrollIntoView()
        cy.get(':nth-child(1) > tbody > :nth-child(2) > :nth-child(2)').should("be.visible")
    })
})