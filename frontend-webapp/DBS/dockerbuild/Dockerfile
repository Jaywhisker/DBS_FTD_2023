FROM node:latest as build

USER root

RUN apt-get update

WORKDIR /dbs-kopilo

COPY ../package.json ./package.json
COPY ../package-lock.json ./package-lock.json

RUN npm install