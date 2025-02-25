// RadioFlow - A cross-platform radio automation software
// Built with Electron.js for Windows and Mac compatibility

// Main application structure
const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const mm = require('music-metadata');
const Store = require('electron-store');

// Initialize settings store
const store = new Store();

let mainWindow;

// Create the main application window
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
    icon: path.join(__dirname, 'assets/icons/icon.png')
  });

  // Load the main HTML interface
  mainWindow.loadFile('index.html');
}

// When app is ready, create window and set up event listeners
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit the app when all windows are closed (except on macOS)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// Handle browsing for music files
ipcMain.handle('select-music', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openFile', 'multiSelections'],
    filters: [
      { name: 'Audio Files', extensions: ['mp3', 'wav', 'ogg', 'flac', 'm4a'] }
    ]
  });
  
  if (!result.canceled) {
    // Process selected files and extract metadata
    const tracks = [];
    for (const filePath of result.filePaths) {
      try {
        const metadata = await mm.parseFile(filePath);
        tracks.push({
          path: filePath,
          title: metadata.common.title || path.basename(filePath),
          artist: metadata.common.artist || 'Unknown Artist',
          album: metadata.common.album || 'Unknown Album',
          duration: metadata.format.duration,
          year: metadata.common.year || '',
          genre: metadata.common.genre ? metadata.common.genre[0] : 'Unknown'
        });
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
      }
    }
    return tracks;
  }
  return [];
});

// Handle saving playlist
ipcMain.handle('save-playlist', async (event, playlist) => {
  try {
    const result = await dialog.showSaveDialog(mainWindow, {
      filters: [{ name: 'Playlist', extensions: ['json'] }]
    });
    
    if (!result.canceled) {
      fs.writeFileSync(result.filePath, JSON.stringify(playlist, null, 2));
      return { success: true, path: result.filePath };
    }
  } catch (error) {
    console.error('Error saving playlist:', error);
    return { success: false, error: error.message };
  }
  return { success: false };
});

// Handle loading playlist
ipcMain.handle('load-playlist', async () => {
  try {
    const result = await dialog.showOpenDialog(mainWindow, {
      properties: ['openFile'],
      filters: [{ name: 'Playlist', extensions: ['json'] }]
    });
    
    if (!result.canceled) {
      const data = fs.readFileSync(result.filePaths[0], 'utf8');
      return { success: true, playlist: JSON.parse(data) };
    }
  } catch (error) {
    console.error('Error loading playlist:', error);
    return { success: false, error: error.message };
  }
  return { success: false };
});

// Save application settings
ipcMain.on('save-settings', (event, settings) => {
  store.set('settings', settings);
});

// Load application settings
ipcMain.handle('load-settings', () => {
  return store.get('settings') || { 
    fadeTime: 3, 
    autoPlay: true,
    defaultVolume: 80
  };
});