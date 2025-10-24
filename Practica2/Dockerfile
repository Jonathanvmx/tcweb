FROM node:18.12.0-alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json* ./
RUN npm install --no-audit --no-fund
COPY . .
EXPOSE 8080
CMD ["npm", "start"]
