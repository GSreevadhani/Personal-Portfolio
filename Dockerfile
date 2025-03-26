# Use Nginx as the base image
FROM nginx:alpine

# Copy all website files (HTML, CSS, JS) into Nginx's web directory
COPY src/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
