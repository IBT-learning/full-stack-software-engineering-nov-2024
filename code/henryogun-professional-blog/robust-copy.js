#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('=== Image Copy Utility ===\n');

// Define absolute paths
const PROJECT_ROOT = '/Users/soundmasterh1/IBT/full-stack-software-engineering-nov-2024/code/henryogun-professional-blog';
const SOURCE_DIR = path.join(PROJECT_ROOT, 'Images');
const TARGET_DIR = path.join(PROJECT_ROOT, 'public', 'images');

console.log(`Project Root: ${PROJECT_ROOT}`);
console.log(`Source Directory: ${SOURCE_DIR}`);
console.log(`Target Directory: ${TARGET_DIR}\n`);

// Images to copy with their descriptions
const IMAGES_TO_COPY = [
    { file: 'h7.jpg', description: 'main profile photo' },
    { file: 'h2.jpg', description: 'music studio' },
    { file: 'h3.jpg', description: 'audio equipment' },
    { file: 'h5.jpg', description: 'circuit board' },
    { file: 'h6.jpg', description: 'React development' },
    { file: 'h8.jpg', description: 'developer workspace' }
];

// Verify directories exist
console.log('Directory Verification:');
console.log(`✓ Source directory exists: ${fs.existsSync(SOURCE_DIR)}`);
console.log(`✓ Target directory exists: ${fs.existsSync(TARGET_DIR)}`);

// Ensure target directory exists
if (!fs.existsSync(TARGET_DIR)) {
    try {
        fs.mkdirSync(TARGET_DIR, { recursive: true });
        console.log('✓ Target directory created successfully');
    } catch (error) {
        console.error('✗ Failed to create target directory:', error.message);
        process.exit(1);
    }
}

console.log('\n=== File Copy Process ===');

let successCount = 0;
let failureCount = 0;
const copyResults = [];

// Process each image
for (const { file, description } of IMAGES_TO_COPY) {
    const sourcePath = path.join(SOURCE_DIR, file);
    const targetPath = path.join(TARGET_DIR, file);
    
    console.log(`\nProcessing: ${file} (${description})`);
    
    try {
        // Check if source file exists
        if (!fs.existsSync(sourcePath)) {
            throw new Error(`Source file not found: ${sourcePath}`);
        }
        
        // Get source file information
        const sourceStats = fs.statSync(sourcePath);
        const sourceSizeKB = Math.round(sourceStats.size / 1024);
        
        console.log(`  Source file size: ${sourceSizeKB} KB`);
        
        if (sourceStats.size === 0) {
            throw new Error('Source file is empty');
        }
        
        // Copy the file using readFileSync and writeFileSync for better control
        const fileData = fs.readFileSync(sourcePath);
        fs.writeFileSync(targetPath, fileData);
        
        // Verify the copy
        const targetStats = fs.statSync(targetPath);
        const targetSizeKB = Math.round(targetStats.size / 1024);
        
        console.log(`  Target file size: ${targetSizeKB} KB`);
        
        if (sourceStats.size !== targetStats.size) {
            throw new Error(`File size mismatch: source=${sourceSizeKB}KB, target=${targetSizeKB}KB`);
        }
        
        console.log(`  ✓ Successfully copied ${file}`);
        successCount++;
        copyResults.push({ file, status: 'success', size: sourceSizeKB });
        
    } catch (error) {
        console.log(`  ✗ Failed to copy ${file}: ${error.message}`);
        failureCount++;
        copyResults.push({ file, status: 'failed', error: error.message });
    }
}

// Summary
console.log('\n=== Copy Summary ===');
console.log(`Total files processed: ${IMAGES_TO_COPY.length}`);
console.log(`Successful copies: ${successCount}`);
console.log(`Failed copies: ${failureCount}`);

if (successCount > 0) {
    console.log('\nSuccessfully copied files:');
    copyResults
        .filter(r => r.status === 'success')
        .forEach(r => console.log(`  ✓ ${r.file} (${r.size} KB)`));
}

if (failureCount > 0) {
    console.log('\nFailed files:');
    copyResults
        .filter(r => r.status === 'failed')
        .forEach(r => console.log(`  ✗ ${r.file}: ${r.error}`));
}

// Final verification
console.log('\n=== Final Verification ===');
const finalResults = [];

for (const { file } of IMAGES_TO_COPY) {
    const targetPath = path.join(TARGET_DIR, file);
    
    if (fs.existsSync(targetPath)) {
        const stats = fs.statSync(targetPath);
        const sizeKB = Math.round(stats.size / 1024);
        
        if (stats.size > 0) {
            console.log(`  ✓ ${file} exists and is valid (${sizeKB} KB)`);
            finalResults.push({ file, valid: true, size: sizeKB });
        } else {
            console.log(`  ✗ ${file} exists but is empty`);
            finalResults.push({ file, valid: false, reason: 'empty' });
        }
    } else {
        console.log(`  ✗ ${file} not found in target directory`);
        finalResults.push({ file, valid: false, reason: 'missing' });
    }
}

const validFiles = finalResults.filter(r => r.valid).length;
console.log(`\n${validFiles}/${IMAGES_TO_COPY.length} files are ready for web serving`);

if (validFiles === IMAGES_TO_COPY.length) {
    console.log('\n🎉 All images successfully copied and verified!');
    console.log('The React application can now serve these images from /images/');
    process.exit(0);
} else {
    console.log('\n⚠️  Some images are missing or invalid');
    process.exit(1);
}