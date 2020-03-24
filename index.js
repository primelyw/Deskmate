const { app, BrowserWindow ,Menu, Tray } = require('electron')

app.setAboutPanelOptions(
  {
    applicationName: 'Deskmate',
    applicationVersion: 'v1.0',
    authors: 'primelee',
    website: 'https://github.com/primelyw/Deskmate',
    version:'1.0.0'
  }
)

app.dock.setIcon('./images/icn2Template.png')


function createWindow () {   
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {

  if(BrowserWindow.getAllWindows().length===0){
    createWindow()
  }
})


let tray=null
app.on('ready', () => {
  tray = new Tray('./images/icn2tray.png')
  const contextMenu = Menu.buildFromTemplate([
    { label: 'about', role: 'about' },

    { label: 'quit', role: 'quit' },
  ])
  tray.setToolTip("Hi")
  tray.setContextMenu(contextMenu)
})








