#!/bin/bash
set -e  # Exit on error

SERVER_USER="your-username"
SERVER_IP="your-server-ip"
DEPLOY_DIR="/var/www/html/portfolio"

echo "Deploying project to server..."

# Transfer files via SCP
scp -r build/* $SERVER_USER@$SERVER_IP:$DEPLOY_DIR

echo "Deployment completed."
