const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
<<<<<<< HEAD
    baseUrl: "https://inhouse.decemberlabs.com/",
    viewportWidth: 1536,
    viewportHeight: 960,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      austinUrl: "https://inhouse.decemberlabs.com/locations/austin/",
=======
  
    baseUrl:('https://inhouse.decemberlabs.com/'),
    specPattern:'cypress/e2e/austinOffice.cy.js',

    setupNodeEvents(on, config) {
      // implement node event listeners here
>>>>>>> c44d7ae00cfac571b2ebbf70663b8fcaa8d71262
    },
    
  },
});
