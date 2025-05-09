const ExcelJs = require('exceljs');

    async function writeExcel(searcText,replaceText,filePath){
        const workbook = new ExcelJs.Workbook();
        await workbook.xlsx.readFile(filePath); 
        const worksheet = workbook.getWorksheet('Sheet1');
        const output=await readExcel(worksheet,searcText)
        const cell = worksheet.getRow(output.row).getCell(output.column);
        cell.value=replaceText
        await workbook.xlsx.writeFile(filePath)

    }
    async function readExcel(worksheet,searcText) {
        let objectElement = {row:-1,column:-1}
        worksheet.eachRow((row, rowNumber) => {
        
            row.eachCell((cell, columnNumber) => {
                if(cell.value===searcText){
                    objectElement.row=rowNumber
                    objectElement.column=columnNumber
    
                }
                
            });
        });
        return objectElement;


        
    }
    writeExcel("Iphone","Samsung",'/Users/sevdis/downloads/exceltest.xlsx')

