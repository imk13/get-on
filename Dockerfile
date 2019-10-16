FROM node:8.12.0-alpine
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
WORKDIR /home/nodejs/app
ENV NODE_ENV prod
ENV NODE_PORT 8080
COPY package*.json ./
RUN npm install --only=production
COPY . ./
CMD /wait && node index.js