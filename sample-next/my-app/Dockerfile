FROM node:current

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY ./.next .
COPY ./graphql .
COPY ./pages .
COPY ./public .
COPY ./styles .

EXPOSE 8080

CMD ["npm","run","dev"]