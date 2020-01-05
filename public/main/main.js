const {app, BrowserWindow, ipcMain} = require('electron') 
const Excel = require('exceljs');

function createWindow () {   
    win = new BrowserWindow({width: 800, height: 600, webPreferences: { nodeIntegration: true}}) 
    win.loadURL('http://localhost:3000/')  
    ipcMain.on('asynchronous-message', async(event, arg) => {
        row = await pitchDataController.getPitchDataFromWorkbook();
    })
}

function getDemoData (){
        var workbook = new Excel.workbook();
        workbook.xlsx.readFile('C:/Users/mikee/Desktop/Projects/tracer-v.01/demo_data/data.xlsx').then(function(){
            var worksheet = workbook.getWorksheet('Sheet1').;
            worksheet.eachRow(function(row, rowNumber) {
                console.log('Row ' + rowNumber + ' = ' + JSON.stringify(row.values));
            });
    })
}



app.on('ready', createWindow)





