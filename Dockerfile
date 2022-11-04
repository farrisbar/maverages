FROM node:16.15.0

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

RUN npm run build

WORKDIR /dist/
ENTRYPOINT ["npm", "test"]
