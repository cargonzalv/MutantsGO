FROM node:dubnium-alpine

WORKDIR /app

COPY . .

ENV PORT 8080

RUN npm install --no-progress --quiet
RUN npm run build

EXPOSE ${PORT}

CMD [ "npm", "start", "--silent" ]