const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@cypress/browserify-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

module.exports = defineConfig({
  projectId: "zq3ggn",
  reporter: "cypress-mochawesome-reporter",
  env: {
    url: "https://rahulshettyacademy.com"
  },
  e2e: {
    chromeWebSecurity: false,
    async setupNodeEvents(on, config) {
      // Mochawesome report
      require("cypress-mochawesome-reporter/plugin")(on);

      // Cucumber plugin
      await addCucumberPreprocessorPlugin(on, config, {
        stepDefinitions: "cypress/support/step_definitions"  // Updated path
      });

      // Browserify preprocessor for Cucumber
      on(
        "file:preprocessor",
        browserify(preprendTransformerToOptions(config, browserify.defaultOptions))
      );

      // Default to QA env if not set
      const env = config.env.environment || "qa";
      const envConfig = require(`./cypress.${env}.json`);

      config.screenshotOnRunFailure = true;

      // Must return config!
      return { ...config, ...envConfig };
    },

    specPattern: [
      "cypress/e2e/RahulShetty/**/*.feature",         // run all feature files (Cucumber)
      "cypress/e2e/RahulShetty/**/*.{cy,spec}.js"     // run all normal Mocha test files
    ],
    supportFile: "cypress/support/e2e.js",
  },
});
