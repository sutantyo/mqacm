#!/bin/bash -e



# Prerequise: is to have Ansible role "bitbucket-pipelines" to create user permission before pipeline will deploy
# Ask FSE-IT System/Web Team to use ansible to create following things
# * create a local user called $BITBUCKET_REPO_SLUG on target server
# * the user has it own home directory and correct permissions
# * the user can run pm2
# * the user can run sudo nginx -s reload
# * generate ssh key pair for the user;
# * add user's public key into target server's ~/.ssh/authorized_keys
# * set up repo environment variable(APP_SSH_KEY) using the user's private key
# * add my_known_hosts under repo directory via  ssh-keyscan -t rsa app-staging.science.mq.edu.au > my_known_hosts
# * create a file /etc/nginx/sites-available/$BITBUCKET_REPO_SLUG and the user has right permissions(scp into it)
# * symbolic link ln -sf /etc/nginx/sites-available/$BITBUCKET_REPO_SLUG /etc/nginx/sites-enabled/$BITBUCKET_REPO_SLUG
# * create a folder /var/log/$BITBUCKET_REPO_SLUG and the user has correct permissions on this folder --- solution: /var/log/$BITBUCKET_REPO_SLUG mode=777
# * Django app need extra: make sure /etc/service/$BITBUCKET_REPO_SLUG exists and user can scp run.conf into /etc/service/$BITBUCKET_REPO_SLUG/run -- solutions: chmod -R 777 /etc/service
# * and user can run sudo sv restart $BITBUCKET_REPO_SLUG -- solution: create a file  /etc/sudoers.d/sudo_pipeline ==== directory ALL=(ALL) NOPASSWD: /usr/bin/sv restart
# * sudo mv $APP_CNAME.crt /etc/ssl/certs/  sudo mv $APP_CNAME.key /etc/ssl/private/
# * assume that DATABASE PASSWORD, LDAP PASSWORD AND DJANGO ENVIRONMENT HAS BEEN INSERTED INTO /etc/profile.d/mq_app.sh


sed -i "s/server_name_replace_here/$APP_CNAME/g" ./deployment/nginx.conf
sed -i "s/database_replaced_by_bitbucket/$DATABASE_PASSWORD_EXAM_PROCESSING/g" ./deployment/docker-compose.yml
sed -i "s/ldap_replaced_by_bitbucket/$AUTH_LDAP_BIND_PASSWORD_EXAM_PROCESSING/g" ./deployment/docker-compose.yml
sed -i "s/django_environment_replaced_by_bitbucket/$DJANGO_ENVIRONMENT/g" ./deployment/docker-compose.yml
sed -i "s/firebase_admin_identifier_replaced_by_bitbucket/$FIREBASE_ADMIN_IDENTIFIER/g" ./deployment/docker-compose.yml
sed -i "s/firebase_admin_password_replaced_by_bitbucket/$FIREBASE_ADMIN_PASSWORD/g" ./deployment/docker-compose.yml
sed -i "s/gapi_client_private_key_replaced_by_bitbucket/$GAPI_CLIENT_PRIVATE_KEY/g" ./deployment/docket-compose.yml
sed -i "s/gapi_client_email_replaced_by_bitbucket/$GAPI_CLIENT_EMAIL/g" ./deployment/docket-compose.yml
sed -i "s/gapi_client_id_replaced_by_bitbucket/$GAPI_CLIENT_ID/g" ./deployment/docket-compose.yml


tar -cf ~/$BITBUCKET_REPO_SLUG.tar.gz .
mkdir -p ~/.ssh
cat ./deployment/my_known_hosts >> ~/.ssh/known_hosts
(umask  077 ; echo $MY_SSH_KEY | base64 --decode -i > ~/.ssh/id_rsa) # On docker - Setup the ssh keys

scp -B ./deployment/nginx.conf $BITBUCKET_REPO_SLUG@$SERVER_NAME:/etc/nginx/sites-available/$BITBUCKET_REPO_SLUG # NGINX - Move the nginx config, note symlinke to enable already exists
scp -B ~/$BITBUCKET_REPO_SLUG.tar.gz $BITBUCKET_REPO_SLUG@$SERVER_NAME:/tmp/

##Config - Running on the deployment server
ssh -o BatchMode=yes $BITBUCKET_REPO_SLUG@$SERVER_NAME << EOF
	rm -rf /home/code/$BITBUCKET_REPO_SLUG/* || exit 1
	tar --strip-components=1 -xf /tmp/$BITBUCKET_REPO_SLUG.tar.gz -C /home/code/$BITBUCKET_REPO_SLUG || exit 1 # remove ./
	sudo docker-compose -f deployment/docker-compose.yml up -d --build || exit 1
	sudo nginx -s reload || exit 1
	curl -sL http://$APP_CNAME
EOF
