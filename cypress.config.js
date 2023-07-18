const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://inhouse.decemberlabs.com/",
    viewportWidth: 1536,
    viewportHeight: 960,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      austinUrl: "https://inhouse.decemberlabs.com/locations/austin/",
    },
  },
});
