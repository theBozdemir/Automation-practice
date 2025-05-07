const ExcelJs = require('exceljs');

async function excelTest() {
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile('/Users/sevdis/downloads/exceltest.xlsx');
    const worksheet = workbook.getWorksheet('Sheet1');

    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((column, columnNumber) => {
            console.log(`Row ${rowNumber}, Column ${columnNumber}: ${column.value}`);
        });
    });
}

excelTest().catch(console.error);
