#!/bin/bash
set -e  # Stop script if any command fails

# Define variables
IMAGE_NAME="sreevadhani/personal-portfolio"
TAG="latest"

echo "Building Docker image..."
docker build -t $IMAGE_NAME:$TAG .

echo "Docker image built successfully!"
