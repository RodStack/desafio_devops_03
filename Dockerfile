FROM node:14-alpine

WORKDIR /my-node-app

COPY my-node-app/package*.json ./

RUN npm install

COPY my-node-app/ ./

EXPOSE 3000

CMD ["node","app.js"]

