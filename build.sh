#!/bin/bash
set -e  # Exit on error

echo "Building the project..."
mkdir -p build
cp -r src/* build/

echo "Build completed successfully."
