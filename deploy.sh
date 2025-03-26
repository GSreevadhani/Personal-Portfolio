#!/bin/bash
set -e  # Stop script if any command fails

# Define variables
IMAGE_NAME="subiksha17/personal-portfolio"
TAG="latest"

echo "Running build script..."
chmod +x build.sh
./build.sh

# Docker Hub Login
echo "s1705sha17" | docker login -u "subiksha17" --password-stdin

# Push image to Docker Hub
echo "Pushing Docker image to Docker Hub..."
docker push $IMAGE_NAME:$TAG
echo "Image pushed successfully!"

# Deploy: Stop and remove existing container if running
docker stop personal-portfolio || true
docker rm personal-portfolio || true

# Pull latest image
docker pull $IMAGE_NAME:$TAG

# Run new container
docker run -d -p 8000:80 --name=personal-portfolio $IMAGE_NAME:$TAG

echo "Deployment completed! Access your portfolio at http://localhost:8000"
