describe("Checkbox validations",()=>{

    it.skip("Checkbox validations",()=>{
        
        cy.get("#checkBoxOption1").check()
        cy.get("#checkBoxOption1").should("be.checked")
        cy.get("#checkBoxOption1").should("have.value","option1")
        //if we want to make it 1 line
        //cy.get("#checkBoxOption1").check().should("be.checked").should("have.value","option1")
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked")

        cy.get("input[type='checkbox'").check(["option1", 'option2']) // checking multiple checkbox using checkbox value property.

    })
    it.skip("Static Dropdowns",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //Static dropdowns tag is "select"
        cy.get("select").select("option2").should("have.value","option2")
    })
    it.skip("Dynamic Dropdowns",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //Static dropdowns tag is "select"
        cy.get("#autocomplete").type("ca") //we expanded the dynamic dropdown
        cy.get(".ui-menu-item div").each(($el,index,$list)=>{ //we found the smallest element and iterate that element's text to find what we search for
            if($el.text()==="Canada"){
                $el.click()
            }
        })
        cy.get("#autocomplete").should("have.value","Canada")
    })
    it.skip("Visible and Invisible Elements", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    
        cy.get("#displayed-text").then(($textbox) => {
            if ($textbox.is(":visible")) {
                cy.get("#hide-textbox").click();
            } else {
                cy.get("#show-textbox").click();
            }
        });
    });
    it.skip("Radio Buttons", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    
        cy.get("[value='radio2']").check().should("be.checked");
    });    
    it.skip("Alerts, and pop up windows", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    
        cy.get("#alertbtn").click()

        cy.get("#confirmbtn").click()
        //window:alert
        cy.on("window:alert", (string)=>{
            expect(string).to.equal("Hello , share this practice page and share your knowledge")
        })
        //window:confirm
        cy.on("window:confirm",(string)=>{
            expect(string).to.equal("Hello , Are you sure you want to confirm?")
        })
    });
    it.skip("Child tab combinations", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //Target  attribute fire the new tab when you click on a link
        //We removed the target attribute and forced to webpage open the new page in the same tab
        cy.get("#opentab").invoke('removeAttr','target').click()
        cy.wait(3000)
        cy.url().should('include','qaclickacademy')
        //cy.go('back')
    });

})