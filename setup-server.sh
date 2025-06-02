#!/bin/bash

# Install required packages
sudo apt update && sudo apt install -y nginx

# copy website files
sudo cp -r lost-and-found.me /var/www

# Restore NGINX config
sudo cp -r nginx/sites-available /etc/nginx/
sudo ln -s /etc/nginx/sites-available/lost-and-found.me /etc/nginx/sites-enabled/
sudo cp nginx/nginx.conf /etc/nginx/nginx.conf

# Restart NGINX
sudo systemctl restart nginx
