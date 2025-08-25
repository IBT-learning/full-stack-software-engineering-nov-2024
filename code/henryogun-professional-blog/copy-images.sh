#!/bin/bash
# Copy images from source to public folder

echo "Starting image copy process..."

# Define source and target directories
SOURCE_DIR="Images"
TARGET_DIR="public/images"

# Ensure target directory exists
mkdir -p "$TARGET_DIR"

# Array of images to copy with descriptions
declare -a images=("h7.jpg:main profile photo" "h2.jpg:music studio" "h3.jpg:audio equipment" "h5.jpg:circuit board" "h6.jpg:React development" "h8.jpg:developer workspace")

successful=0
failed=0

# Copy each image
for img_desc in "${images[@]}"; do
    IFS=':' read -r img desc <<< "$img_desc"
    echo "Copying $img ($desc)..."
    
    if [ -f "$SOURCE_DIR/$img" ]; then
        if cp "$SOURCE_DIR/$img" "$TARGET_DIR/$img" 2>/dev/null; then
            # Verify the copy was successful
            if [ -f "$TARGET_DIR/$img" ] && [ -s "$TARGET_DIR/$img" ]; then
                echo "  ✓ Successfully copied $img"
                ((successful++))
            else
                echo "  ✗ Copy failed - target file is empty or missing"
                ((failed++))
            fi
        else
            echo "  ✗ Copy command failed for $img"
            ((failed++))
        fi
    else
        echo "  ✗ Source file $SOURCE_DIR/$img not found"
        ((failed++))
    fi
done

echo ""
echo "=== Copy Summary ==="
echo "Successful: $successful"
echo "Failed: $failed"

if [ $successful -eq ${#images[@]} ]; then
    echo "🎉 All images copied successfully!"
    exit 0
else
    echo "⚠️ Some images failed to copy"
    exit 1
fi