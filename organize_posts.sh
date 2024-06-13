#!/bin/bash

# Directory containing posts
POSTS_DIR="content/posts"

# Find all .md files in content/posts
find "$POSTS_DIR" -name "*.md" | while read -r FILE; do
    # Get the creation date of the file
    DATE=$(git log --diff-filter=A --follow --format=%aI -1 -- "$FILE")
    if [ -z "$DATE" ]; then
        # Use current date if the file is new and not yet in the git log
        DATE=$(date -I)
    fi

    # Extract year, month, and day from the date
    YEAR=$(echo "$DATE" | cut -d '-' -f 1)
    MONTH=$(echo "$DATE" | cut -d '-' -f 2)
    DAY=$(echo "$DATE" | cut -d 'T' -f 1 | cut -d '-' -f 3)

    # Create target directory based on the date
    TARGET_DIR="$POSTS_DIR/$YEAR/$MONTH/$DAY"
    mkdir -p "$TARGET_DIR"

    # Move the file to the target directory
    mv "$FILE" "$TARGET_DIR"
done
