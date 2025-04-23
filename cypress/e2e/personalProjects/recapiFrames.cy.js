describe('Handling Iframe', () => {


    it('Approach-1',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")

        // Select the iframe and access its content
        cy.get("div[class='tox-icon']").click()
        cy.get("iframe[id='mce_0_ifr']").then(($iframe) => {
        // Access the body inside the iframe
        const body = $iframe.contents().find('body#tinymce');
    
        // Check if the body has the contenteditable attribute set to false
        if (body.prop('contenteditable') === 'false') {
        // Wrap the body and change its contenteditable attribute to true
        cy.wrap(body).invoke('attr', 'contenteditable', 'true');
        }
        
        // Now you can interact with the body as needed
        
        cy.wrap(body).clear().type('Selamin Aleykum');
    })
})
})