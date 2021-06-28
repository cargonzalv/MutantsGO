FROM node:dubnium-alpine

WORKDIR /app

COPY . .

ENV PORT 8080
ENV NODE_ENV production

RUN npm install --no-progress --quiet
RUN npm run build

EXPOSE ${PORT}

CMD [ "npm", "start", "--silent" ]