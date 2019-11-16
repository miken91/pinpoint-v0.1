const {app, BrowserWindow} = require('electron')    
var Excel = require('exceljs');

function createWindow () {   
    win = new BrowserWindow({width: 800, height: 600}) 
    win.loadURL('http://localhost:3000/')   
}      
app.on('ready', createWindow)

var workbook = new Excel.Workbook();
workbook.xlsx.readFile("C:/Users/mikee/Desktop/TestBook.xlsx").then(function(){
    var worksheet = workbook.getWorksheet("Sheet1");
    worksheet.eachRow(function(row, rowNumber) {
        console.log('Row ' + rowNumber + ' = ' + JSON.stringify(row.values));
    });
});



