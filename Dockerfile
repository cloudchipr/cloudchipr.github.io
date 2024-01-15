FROM node:18 as build

WORKDIR /app

COPY . .

ARG NEXT_PUBLIC_TINA_CLIENT_ID, TINA_TOKEN

ENV NEXT_PUBLIC_TINA_CLIENT_ID=$NEXT_PUBLIC_TINA_CLIENT_ID TINA_TOKEN=$TINA_TOKEN

RUN yarn

RUN yarn build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
