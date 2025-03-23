FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn run build

EXPOSE 3000

# Chạy ứng dụng Next.js
CMD ["yarn", "start"]

# docker build . -t img-gwd-fe

# docker run -d -p 3000:3000 --name cons-gwd-fe img-gwd-fe
