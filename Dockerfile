FROM node:20.12.0-alpine3.19

WORKDIR /src

COPY package.json package-lock.json tsconfig.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "dev"]