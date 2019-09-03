FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
COPY yarn* ./

RUN  yarn install

COPY . .

EXPOSE 9000

CMD ["yarn", "start"]