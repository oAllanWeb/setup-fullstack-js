FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
COPY yarn* ./

RUN  yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]