#!/bin/bash
# copy website files
sudo rm -rf /var/www/lost-and-found.me

# Restore NGINX config
sudo rm -rf /etc/nginx/sites-available
sudo rm -rf /etc/nginx/sites-enabled
sudo rm /etc/nginx/nginx.conf

# Restart NGINX
sudo systemctl restart nginx
