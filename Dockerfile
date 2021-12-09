FROM node:13-alpine as fresh-susy-web

WORKDIR /

COPY . /

RUN apk update && apk upgrade && apk add --no-cache bash git openssh \
    && rm -rf /var/cache/apk/* \
    && cd / \
    && npm install \
    && npm run build \
    && npm run generate

FROM nginx:stable-alpine as nginx
COPY --from=fresh-susy-web /dist /usr/share/nginx/html
RUN mkdir -p /etc/nginx/sites-enabled

RUN chmod -R 0777 /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
