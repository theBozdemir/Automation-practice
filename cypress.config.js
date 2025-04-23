const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    async setupNodeEvents(on, config) {
      // Mochawesome report
      require("cypress-mochawesome-reporter/plugin")(on);

      // Cucumber plugin
      await addCucumberPreprocessorPlugin(on, config);

      // Use esbuild bundler with Cucumber plugin
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Default to QA env if not set
      const env = config.env.environment || "qa";
      const envConfig = require(`./cypress.${env}.json`);

      config.screenshotOnRunFailure = true;

      return { ...config, ...envConfig };
    },
    specPattern: "cypress/e2e/**/*.{feature,cy.js,spec.js}",
    supportFile: "cypress/support/e2e.js",
  },
});
