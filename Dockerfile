FROM node:20-alpine AS build

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./
COPY .npmrc ./
ENV PUBLIC_ENDPOINT = "https://cloud.appwrite.io/v1"
ENV PUBLIC_PROJECT = '657df22a1439a12f822a'
RUN npm i -g pnpm
RUN pnpm i
COPY . ./
RUN pnpm run build
RUN pnpm prune --production
EXPOSE 3000:3000
ENV NODE_ENV=production
CMD ["node", "build/index.js"]