# get-on
Local setup
* make sure node version is > 8.x. To install node version nvm `nvm install 8.x`
* install mongodb | follow this link  https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-18-04
* make sure `mongod` service is running `sudo service mongod status` (for ubunutu)
* `npm start` to start app in dev env


Test Setup
* make sure `docker` and `docker-compose` is installed. If now, follow link https://docs.docker.com/install/
* `npm run app:test` to run
  
Prod setup
* `npm run app:build:up` to build & run node app in prod env
* `npm run app:build`  to build node app image in prod env
* `npm run app:prod` to run node app in prod env 

### App will listen on http://localhost:9090/
### Swagger doc link http://localhost:9090/api-docs/

* NOTE: https://stackoverflow.com/questions/48957195/how-to-fix-docker-got-permission-denied-issue 