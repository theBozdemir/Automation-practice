// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress-xpath"/>
import 'cypress-iframe';


// custom command for clicking on link using label
Cypress.Commands.add('clickLink',(label)=>{
  cy.get('a').contains(label).click()
})

Cypress.Commands.add('selectProduct',(productName)=>{
  cy.get(".card-title").each(($title,index,$list)=>{

    const phoneTitle=$title.text()
    if(phoneTitle.includes(productName)){
        cy.get("button[class='btn btn-info']").eq(index).click()
    }
})
})





// Custom command to load saved cookies

//Over writing contains function
/*Cypress.Commands.overwriteQuery('contains', (originalFn, subject, filter, text, options = {}) => {
  // Check if `filter` is a string or if `text` is an object (meaning options were passed instead of text)
  if (typeof filter === 'object') {
    options = filter; // Assign the object to options
    text = text || ''; // Make sure text has a default value if not provided
    filter = undefined; // Set filter to undefined since it was actually options
  } else if (typeof text === 'object') {
    options = text; // If text is an object, assign it to options
    text = filter; // Swap filter to text
    filter = undefined; // Set filter to undefined
  }

  // Set matchCase to false by default
  options.matchCase = false;

  // Call the original `contains` function with the correctly ordered parameters
  return originalFn(subject, filter, text, options);
})
*/
