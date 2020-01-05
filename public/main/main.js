const {app, BrowserWindow, ipcMain} = require('electron') 
const Excel = require('exceljs');

function createWindow () {   
    win = new BrowserWindow({width: 800, height: 600, webPreferences: { nodeIntegration: true}}) 
    win.loadURL('http://localhost:3000/')  
    ipcMain.on('asynchronous-message', async(event, arg) => {
        getDemoData().then(function(value){
           event.reply('asynchronous-reply',value) 
        })
    })
}

function getDemoData() {
    return new Promise(function(resolve, reject) {
        var workbook = new Excel.Workbook();
        workbook.xlsx.readFile("./demo_data/data.xlsx")
        .then(function(){
            ws = workbook.getWorksheet('Sheet1')
            row = ws.getRow(1).values;
            resolve(row);
        })
    })
}

app.on('ready', createWindow)





