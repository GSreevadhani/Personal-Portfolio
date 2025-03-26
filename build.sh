#!/bin/bash

# Set variables
IMAGE_NAME="sreevadhani/personal-portfolio"
TAG="latest"

# Build Docker image
docker build -t $IMAGE_NAME:$TAG .

# Log in to Docker Hub (non-interactive)
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

# Push the image to Docker Hub
docker push $IMAGE_NAME:$TAG
