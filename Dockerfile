FROM node:14
WORKDIR /disney-app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000