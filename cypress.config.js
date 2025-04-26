const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

module.exports = defineConfig({
  projectId: "zq3ggn",
  reporter: "cypress-mochawesome-reporter",
  env:{
    url:"https://rahulshettyacademy.com"
  },
  e2e: {
    chromeWebSecurity: false,
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
    specPattern: "cypress/e2e/RahulShetty/**/*.{feature,cy.js,spec.js}",
    supportFile: "cypress/support/e2e.js",
  },
});

