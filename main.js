const {app, BrowserWindow, dialog} = require('electron')
const {autoUpdater} = require("electron-updater");
const log = require('electron-log');
autoUpdater.logger = log;

if (process.platform == 'darwin') {
  app.whenReady().then(() => {
    global.frame = false;
    global.titleBarStyle = 'hiddenInset';
})}
else if(process.platform == 'win32'){
  app.whenReady().then(() => {
    global.frame = false;
    global.titleBarStyle = 'hidden';
})}
else{
  app.whenReady().then(() => {
    global.frame = true;
})}

autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
  const dialogOpts = {
    type: 'info',
    buttons: ['Restart', 'Later'],
    title: 'Update Ready',
    message: process.platform === 'win32' ? releaseNotes : releaseName,
    detail: 'A new update is ready!'
  }
  dialog.showMessageBox(dialogOpts).then((returnValue) => {if (returnValue.response === 0) autoUpdater.quitAndInstall()})
})

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true,
    transparent: true,
    frame: global.frame,
    titleBarStyle: global.titleBarStyle,
    trafficLightPosition: { x: 10, y: 10 },
    titleBarOverlay: {
      color: '#303136',
      symbolColor: 'white'
    },
    webPreferences: {
      webviewTag: true
    }
  })
  mainWindow.loadFile('index.html')
}
app.whenReady().then(() => {createWindow();autoUpdater.checkForUpdatesAndNotify();})