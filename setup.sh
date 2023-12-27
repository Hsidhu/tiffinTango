
php artisan cache:clear
#php artisan config:clear
#php artisan config:cache

php artisan storage:link

# check permission
# ls -la /opt/bitnami/apache/htdocs/tiffinTango/public/media

# change permission
# sudo chown -R bitnami:daemon public/media
# sudo chown -R bitnami:daemon storage/framework/cache/
# # sudo chown -R www-data:www-data public/media

# sudo chown -R daemon:daemon /opt/bitnami/apache/htdocs/tiffinTango/public/media
# sudo chmod -R 775 /opt/bitnami/apache/htdocs/tiffinTango/public/media

