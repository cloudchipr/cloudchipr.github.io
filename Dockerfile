FROM node:19.9.0 as build

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
