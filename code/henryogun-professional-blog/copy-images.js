const fs = require('fs');
const path = require('path');

const sourceDir = './Images';
const targetDir = './public/images';

const imagesToCopy = ['h7.jpg', 'h2.jpg', 'h3.jpg', 'h5.jpg', 'h6.jpg', 'h8.jpg'];

imagesToCopy.forEach(image => {
  const sourcePath = path.join(sourceDir, image);
  const targetPath = path.join(targetDir, image);
  
  try {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Copied ${image} successfully!`);
  } catch (error) {
    console.error(`Failed to copy ${image}:`, error.message);
  }
});

console.log('Image copying completed!');