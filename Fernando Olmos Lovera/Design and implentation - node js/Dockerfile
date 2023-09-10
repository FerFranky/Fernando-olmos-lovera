FROM node:18.15

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "run", "dev"]