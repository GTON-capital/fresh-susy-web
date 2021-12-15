FROM node:13-alpine as susy

WORKDIR /susy

COPY . /susy

RUN apk update && apk upgrade && apk add --no-cache bash git openssh \
    && rm -rf /var/cache/apk/* \
    && cd /susy \
    && npm install \
    && npm run build \
    && npm run generate

FROM nginx:stable-alpine as nginx
COPY --from=susy /susy/dist /usr/share/nginx/html
RUN mkdir -p /etc/nginx/sites-enabled

RUN chmod -R 0777 /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
