FROM node:18
WORKDIR /disney-app
COPY package.json .
RUN npm install
COPY . .
RUN npm run db:migrate
CMD npm start