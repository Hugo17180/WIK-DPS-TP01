FROM node:14-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npx tsc
RUN adduser hugo
USER hugo
FROM node:14-slim
CMD node ./build/index.js