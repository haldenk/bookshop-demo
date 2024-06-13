#!/bin/bash
set -x

# Directory containing posts
POSTS_DIR="content/posts"

# Find all .md files in content/posts, ignoring _index.md
find "$POSTS_DIR" -name "*.md" ! -name "_index.md" | while read -r FILE; do
    # Extract the date from the front matter
    DATE=$(grep "^date: " "$FILE" | cut -d ' ' -f 2 | tr -d '"')

    # If date is not found, use current date
    if [ -z "$DATE" ]; then
        DATE=$(date -I)
    fi

    # Extract year, month, and day from the date
    YEAR=$(echo "$DATE" | cut -d '-' -f 1)
    MONTH=$(echo "$DATE" | cut -d '-' -f 2)
    DAY=$(echo "$DATE" | cut -d '-' -f 3 | cut -d 'T' -f 1)

    # Create target directory based on the date
    TARGET_DIR="$POSTS_DIR/$YEAR/$MONTH/$DAY"
    mkdir -p "$TARGET_DIR"

    # Move the file to the target directory
    mv "$FILE" "$TARGET_DIR"
done
