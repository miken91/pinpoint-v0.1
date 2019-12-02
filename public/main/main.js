const {app, BrowserWindow} = require('electron') 

function createWindow () {   
    win = new BrowserWindow({width: 800, height: 600}) 
    win.loadURL('http://localhost:3000/')
    openTracer()   
}      

function openTracer() {
    var child = require('child_process').execFile;
    var executablePath = "C:\\Users\\mikee\\Desktop\\Projects\\pinpoint-v0.1\\app.publish\\WpfApp1.exe";
    child(executablePath,{windowsHide: true});
}

app.on('ready', createWindow)





