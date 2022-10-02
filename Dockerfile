FROM alpine/git:latest as cloner
WORKDIR /repository
RUN git clone https://github.com/galatolofederico/me.json.git

FROM node:18.4.0-alpine3.16 as builder
WORKDIR /website
COPY package*.json ./
RUN npm install
COPY pages ./pages
COPY components ./components
COPY styles ./styles
COPY next.config.js .
COPY --from=cloner /repository/me.json ./me.json
RUN npm run build

FROM bash:latest as compressor
WORKDIR /website
COPY --from=builder /website/out /website
COPY static-compression.sh /
RUN chmod +x /static-compression.sh
RUN bash /static-compression.sh

FROM nginx:latest
WORKDIR /website
COPY --from=compressor /website /website
RUN rm -rf /etc/nginx/conf.d/*
COPY ./nginx.conf /etc/nginx/conf.d/nginx.conf
