#!/bin/bash

# Install required packages
sudo apt update && sudo apt install -y nginx

# copy website files
sudo cp -r mavorv.org /var/www

# Restore NGINX config
sudo cp -r nginx/sites-available /etc/nginx/
sudo cp -r nginx/sites-enabled /etc/nginx/
sudo cp ginx/nginx.conf /etc/nginx/nginx.conf

# Restart NGINX
sudo systemctl restart nginx
