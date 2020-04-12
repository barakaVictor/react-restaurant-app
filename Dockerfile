FROM node:10.16.3

WORKDIR /app

ENV 

COPY package.json /app/package.json

RUN npm install --silent

CMD ["npm", "start"]