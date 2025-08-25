const { spawn } = require('child_process');
const path = require('path');

// Change to the project directory
process.chdir(__dirname);

console.log('Installing dependencies...');
const npmInstall = spawn('npm', ['install'], { stdio: 'inherit' });

npmInstall.on('close', (code) => {
  if (code !== 0) {
    console.error(`npm install failed with code ${code}`);
    return;
  }
  
  console.log('Starting development server...');
  const npmDev = spawn('npm', ['run', 'dev'], { stdio: 'inherit' });
  
  npmDev.on('close', (code) => {
    console.log(`Development server exited with code ${code}`);
  });
});