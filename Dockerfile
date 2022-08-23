FROM node:18-alpine3.14 as builder 

WORKDIR /app

COPY package*.json ./

RUN npm ci 

COPY . .

RUN npm run build 

FROM node:18-alpine3.14 

WORKDIR /app

COPY --from=builder /app .

COPY . . 

ENV PORT 80

EXPOSE 80

CMD ["node", "./build"]
