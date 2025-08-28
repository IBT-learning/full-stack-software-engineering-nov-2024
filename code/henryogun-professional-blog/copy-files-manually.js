const fs = require('fs');
const path = require('path');

console.log('Starting image copy process...');

// Use absolute paths to avoid any directory issues
const sourceDir = '/Users/soundmasterh1/IBT/full-stack-software-engineering-nov-2024/code/henryogun-professional-blog/Images';
const targetDir = '/Users/soundmasterh1/IBT/full-stack-software-engineering-nov-2024/code/henryogun-professional-blog/public/images';

console.log('Source directory:', sourceDir);
console.log('Target directory:', targetDir);

// Check directories exist
console.log('Source exists:', fs.existsSync(sourceDir));
console.log('Target exists:', fs.existsSync(targetDir));

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log('Target directory created');
}

const imagesToCopy = [
    { file: 'h7.jpg', description: 'main profile photo' },
    { file: 'h2.jpg', description: 'music studio' },
    { file: 'h3.jpg', description: 'audio equipment' },
    { file: 'h5.jpg', description: 'circuit board' },
    { file: 'h6.jpg', description: 'React development' },
    { file: 'h8.jpg', description: 'developer workspace' }
];

let successful = 0;
let failed = 0;

imagesToCopy.forEach(({ file, description }) => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);
    
    try {
        // Check if source file exists
        if (!fs.existsSync(sourcePath)) {
            console.error(`Source file not found: ${sourcePath}`);
            failed++;
            return;
        }
        
        // Get source file stats
        const sourceStats = fs.statSync(sourcePath);
        console.log(`Source ${file} size: ${sourceStats.size} bytes`);
        
        // Copy the file
        fs.copyFileSync(sourcePath, targetPath);
        
        // Verify copy by checking target file stats
        const targetStats = fs.statSync(targetPath);
        console.log(`Target ${file} size: ${targetStats.size} bytes`);
        
        if (sourceStats.size === targetStats.size && targetStats.size > 0) {
            console.log(`✓ Successfully copied ${file} (${description})`);
            successful++;
        } else {
            console.error(`✗ Copy verification failed for ${file}`);
            failed++;
        }
    } catch (error) {
        console.error(`✗ Failed to copy ${file}: ${error.message}`);
        failed++;
    }
});

console.log(`\nCopy process completed:`);
console.log(`- Successful: ${successful} files`);
console.log(`- Failed: ${failed} files`);

if (successful === imagesToCopy.length) {
    console.log('🎉 All images copied successfully!');
} else {
    console.log('⚠️  Some images failed to copy properly');
}