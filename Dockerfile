# File : Dockerfile
# Dockerfile for building the docker for the sample nodejs application
# Author : Vidit Agarwal
#
# Base image we would like to use for our application.
FROM node:12.18.1

ENV NODE_ENV=development

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install 

COPY . .

# Skipping the docker CMD instruction as that can be passed dynamically

CMD ["node", "app.js"]