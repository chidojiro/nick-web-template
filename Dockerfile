FROM node:16-alpine

ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

RUN rm -rf node_modules && yarn install --production --frozen-lockfile

EXPOSE 3000

CMD [ "yarn", "start" ]

