FROM node:18.4.0-alpine

WORKDIR /app

COPY . .

RUN npm install --global yarn
RUN yarn

EXPOSE 3000

CMD ["yarn", "dev"]