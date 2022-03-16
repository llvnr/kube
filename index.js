const { app, BrowserWindow } = require('electron')
   
function createWindow () {

    const win = new BrowserWindow({
      width: 1000,
      height: 800,
      autoHideMenuBar: true,
      webPreferences: {
        nodeIntegration: true,
        webviewTag: true
      }
    })

    win.maximize();

    // win.loadURL('https://github.com')
    win.loadURL(`file://${__dirname}/index.html`);
    // win.loadFile('index.html')
}

app.whenReady().then(createWindow)

// ipcRenderer.on('ping', (e, data) => { console.log(data) })

// app.setAppUserModelId(process.execPath)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
})