const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',  // your test specs
    supportFile: 'cypress/support/e2e.js',       // must exist
    baseUrl: 'https://example.com',              // replace with your app URL

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
