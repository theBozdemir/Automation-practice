const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@cypress/browserify-preprocessor");
const sqlServer = require('cypress-sql-server');
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const ExcelJs = require('exceljs');
const { preprendTransformerToOptions } = require("@badeball/cypress-cucumber-preprocessor/browserify");

// Helper function to read Excel (optional, for future)
async function readExcel(worksheet, searchText) {
  let objectElement = { row: -1, column: -1 };

  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, columnNumber) => {
      if (cell.value === searchText) {
        objectElement.row = rowNumber;
        objectElement.column = columnNumber;
      }
    });
  });

  return objectElement;
}

async function setupNodeEvents(on, config) {
  // ✅ Database config
  config.db = {
    userName: "tbozdemir",
    password: "Sevdis2602+",
    server: "tarikdb.database.windows.net",
    options: {
      database: "dbtesting",
      encrypt: true,
      rowCollectionOnRequestCompletion: true
    }
  };

  // ✅ Mochawesome reporter
  require("cypress-mochawesome-reporter/plugin")(on);

  // ✅ Cucumber plugin
  await addCucumberPreprocessorPlugin(on, config, {
    stepDefinitions: "cypress/support/step_definitions"
  });

  // ✅ SQL tasks
  const sqlTasks = sqlServer.loadDBPlugin(config.db);

  // ✅ Custom tasks
  on('task', {
    ...sqlTasks,

    excelToJsonConverter(filePath) {
      const result = excelToJson({
        source: fs.readFileSync(filePath)
      });
      return result;
    },

    async writeExcel({ searchText, replaceText, filePath }) {
      const workbook = new ExcelJs.Workbook();
      await workbook.xlsx.readFile(filePath);

      const worksheet = workbook.getWorksheet('Sheet1');
      let found = false;

      worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
          if (cell.value === searchText) {
            cell.value = replaceText;
            found = true;
          }
        });
      });

      if (found) {
        await workbook.xlsx.writeFile(filePath);
        return 'Replaced and saved';
      } else {
        console.log('Text not found in the file.');
        return null;
      }
    }
  });

  // ✅ Browserify preprocessor for cucumber
  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions))
  );

  // ✅ Load env config
  const env = config.env.environment || "qa";
  const envConfig = require(`./cypress.${env}.json`);

  config.screenshotOnRunFailure = true;

  return { ...config, ...envConfig };
}



module.exports = defineConfig({
  env:{
  url : "https://rahulshettyacademy.com"
},
  e2e: {
    async setupNodeEvents(on, config) {
      return setupNodeEvents(on, config);
    },

    // ✅ Allow both: feature files + normal Cypress .cy.js specs
    specPattern: [
      "cypress/e2e/**/*.feature",
      "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"
    ],

    supportFile: "cypress/support/e2e.js",
  },
});
