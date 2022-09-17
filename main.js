const {app, BrowserWindow} = require('electron')

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
app.whenReady().then(() => {createWindow()})
