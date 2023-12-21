
FROM node:20-alpine AS build

WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
COPY .npmrc ./
ENV PUBLIC_ENDPOINT="https://api.officialurban.xyz/v1"
ENV PUBLIC_PROJECT='657df22a1439a12f822a'
ARG GITHUB_TOKEN
ENV NODE_AUTH_TOKEN=$GITHUB_TOKEN
RUN npm i -g pnpm
RUN pnpm config set @theofficialurban:registry https://npm.pkg.github.com
RUN pnpm i
COPY . ./
RUN pnpm run check
RUN pnpm run build
RUN pnpm prune --production
EXPOSE 3000:3000
ENV NODE_ENV=production
CMD ["node", "build/index.js"]
