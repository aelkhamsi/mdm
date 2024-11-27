FROM node:21

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

RUN rm -rf ./src

EXPOSE 6000

CMD ["npm", "run", "start:prod"]
