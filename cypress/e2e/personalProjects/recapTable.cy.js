describe("Recap table reading", () => {

    before(() => {
        // Visit the page and prevent the window.open redirection
        cy.visit("https://verify7.imp.wai.cacentral1.timelessmedical.com/", {
            onBeforeLoad(win) {
                // Stub window.open to prevent any new window/tab
                cy.stub(win, 'open').as('windowOpen');
            }
        });

        // Perform login
        cy.get("input[placeholder='Username']").type("usr000001");
        cy.get("input[placeholder='Password']").type("timeless");
        cy.get("div[class='w-full max-w-[10rem] pt-6']>button:first-child").click();
    });

    it("Reading from report", () => {
        // Navigate to the report section
        cy.get("#sidebar-wrapper>ul>li:last-child>a>span:nth-last-child(2)").click();
        
        // Click on the 'Feed Order Report' link
        cy.contains("Feed Order Report").click();
        
        // Submit the form to generate the report
        cy.get("input[type='submit']").click();

        // Wait for the page to load the report link
        cy.get("div[class='reportpage card']>p:first-child>a")
            .should('have.attr', 'target', '_blank')  // Ensure the target attribute is present
            .invoke('removeAttr', 'target');          // Remove target='_blank' to open in the same tab

        // After clicking the report link, it will now open in the same window
        cy.get("div[class='reportpage card']>p:first-child>a").click();

        // Iterate through table rows and columns
        cy.get("table>tbody>tr").each(($row, index, $rows) => {
            cy.wrap($row).within(() => {
                cy.get("td").each(($col, colIndex, $cols) => {
                    cy.log($col.text()); // Log each cell's text
                });
            });
        });
    });
});
