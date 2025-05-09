const ExcelJs = require('exceljs');
const path = require('path'); // For resolving the correct file path

async function writeExcel(searchText, replaceText, filePath) {
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filePath); // Try reading the correct path

    const worksheet = workbook.getWorksheet('Sheet1');
    const output = await readExcel(worksheet, searchText);
    
    // If a match is found, replace the value
    if (output.row !== -1 && output.column !== -1) {
        const cell = worksheet.getRow(output.row).getCell(output.column);
        cell.value = replaceText;
        await workbook.xlsx.writeFile(filePath);
    } else {
        console.log('Text not found in the file.');
    }
}

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
    writeExcel("Apple","Samsung",'cypress/support/fruit_test.xlsx')

