const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
  
    baseUrl:('https://inhouse.decemberlabs.com/'),
    specPattern:'cypress/e2e/austinOffice.cy.js',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});
