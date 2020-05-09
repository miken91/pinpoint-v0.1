const { app, BrowserWindow, ipcMain } = require('electron')
const Excel = require('exceljs');
const chokidar = require('chokidar');

function createWindow() {
    var win = new BrowserWindow({ width: 800, height: 600, webPreferences: { nodeIntegration: true } })
    win.loadURL('http://localhost:3000/')
    var rows = [];
    const watcher = chokidar.watch("./demo_data/data.csv", {
        ignored: /(^|[\/\\])\../,
        persistent: true
    })
    watcher.on(
        'change', ()=> {
            getCurrentSessionData(rows, win)
        }
    )
    ipcMain.on('getRowData', (event, arg) => {
        getSavedSessionData(arg, event)
    })
}

function getCurrentSessionData(rows, win) {
    var workbook = new Excel.Workbook();
    workbook.csv.readFile("./demo_data/data.csv")
        .then(worksheet => {
            row = worksheet.getRow(2).values;
            rows.push(row)
            win.webContents.send('sendingRowsToDashboard', rows);
        }, function () {
            console.log("error")
        })
}

function getSavedSessionData(sessionInfo, event) {
    var workbook = new Excel.Workbook();
    var rows = [];
    workbook.csv.readFile("./demo_data/" + sessionInfo.pitcherName + "-" + sessionInfo.dateRecorded + ".csv")
    .then(worksheet => {
        row = worksheet.getRow(1).values;
        rows.push(row)
        event.sender.send('returningSessionData', rows);
    }, function () {
        console.log("error")
    })
}

app.on('ready', createWindow)





