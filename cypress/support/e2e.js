// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import sqlServer from 'cypress-sql-server';
sqlServer.loadDBCommands();
import './commands'
require('cypress-xpath')

Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore errors that contain the text 'bootstrap is not defined'
    if (err.message.includes('bootstrap is not defined')) {
      return false; // Prevents Cypress from failing the test
    }
  });

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test due to the uncaught exception
  if (err.message.includes('Script error')) {
    return false;
  }
  
});
import 'cypress-mochawesome-reporter/register';