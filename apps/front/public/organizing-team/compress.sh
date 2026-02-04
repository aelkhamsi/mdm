#!/bin/bash

# Loop through all JPG files in the current directory
for img in *.jpg; do
  if [[ -f "$img" ]]; then
    # Convert filename to lowercase
    lower=$(echo "$img" | tr '[:upper:]' '[:lower:]')

    # Remove .jpg extension and replace with .webp
    output_name="${lower%.jpg}.webp"

    cwebp -q 30 "$img" -o "$output_name"
    rm "$img"
  fi
done
