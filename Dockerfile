FROM node:18
WORKDIR /home/app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
EXPOSE 3333
CMD [ "yarn", "dev" ]