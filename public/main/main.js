const { app, BrowserWindow, ipcMain } = require('electron')
const Excel = require('exceljs');
const chokidar = require('chokidar');
const jsonfile = require('jsonfile');
const fs = require('fs');
const moment = require('moment');
var path = "";
var rows = [];

function createWindow() {
    var win = new BrowserWindow({ width: 800, height: 600, webPreferences: { nodeIntegration: true } })
    win.loadURL('http://localhost:3000/')
    path = app.getAppPath();
    !fs.existsSync(path + '/data_input') && fs.mkdirSync(path + '/data_input');
    !fs.existsSync(path + '/saved_sessions') && fs.mkdirSync(path + '/saved_sessions');
    const watcher = chokidar.watch(path + "/data_input/data.csv", {
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
    ipcMain.on('getSessions', (event, arg) => {
        getSessions(arg, event)
    })
    ipcMain.on('saveSession', (event, arg)=> {
        saveSession(arg, event)
    })
}

function getCurrentSessionData(rows, win) {
    var workbook = new Excel.Workbook();
    workbook.csv.readFile(path + "/data_input/data.csv")
        .then(worksheet => {
            row = worksheet.getRow(2).values;
            rows.push(row)
            win.webContents.send('sendingRowsToDashboard', rows);
        }, function () {
            console.log("error")
        })
}

function getSessions(arg, event) {
    if(fs.existsSync(path + '/saved_sessions/sessions.json')) {
        jsonfile.readFile(path + '/saved_sessions/sessions.json', function(err, obj){
            if(err){
                console.log(err)
                return;
            }
            event.reply('returningSessions', obj)
        })
    } else {
        jsonfile.writeFile(path + '/saved_sessions/sessions.json', [], function(err, obj) {
            if(err) {
                console.log(err)
                return;
            }
            event.reply('returningSessions', [])
        })
    }
}

function saveSession(arg, event) {
    jsonfile.readFile(path + '/saved_sessions/sessions.json', function(err, obj) {
        if(err) {
            event.reply('savingSessionResult', 'An error has occured while saving session.')
            return
        }
        obj.push({firstName: arg.firstName, lastName: arg.lastName, team: arg.team, date: moment().format("MM-DD-YYYYTHH:mm"), fileString: arg.firstName + arg.lastName + '-' + moment().format("MM-DD-YYYYTHH:mm") + '.json'})
        jsonfile.writeFile(path + '/saved_sessions/sessions.json', obj, function(err, obj){
            if(err) {
                event.reply('savingSessionResult', 'An error has occured while saving session.')
                return
            }
        })
        jsonfile.writeFile(path + '/saved_sessions/' + arg.firstName + arg.lastName + '-' + moment().format("MM-DD-YYYYTHH:mm") + '.json', rows, function(err, obj) {
            if(err) {
                event.reply('savingSessionResult', 'An error has occured while saving session.')
                return
            }
            event.reply('savingSessionResult', 'Session saved succesfully.')
        })
    })
}

function getSavedSessionData(sessionInfo, event) {
    jsonfile.readFile(path + '/saved_sessions/' + sessionInfo.fileString, function(err, obj){
        if(err) {
            console.log(err)
            return
        } else {
            event.reply('returningSessionData', obj)
        }

    })
    
}

app.on('ready', createWindow)





