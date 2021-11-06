FROM node:13-alpine as fresh-susy-web

WORKDIR /susy

COPY assets components layouts logic pages plugins static store \
	tailwind.config.js stylelint.config.js /susy/
COPY tsconfig.json nuxt.config.js package-lock.json package.json /susy/

RUN apk update && apk upgrade && apk add --no-cache bash git openssh \
    && rm -rf /var/cache/apk/* \
    && cd /susy \
    && npm install \
    && npm run build \
    && npm run export

FROM nginx:stable-alpine as nginx
COPY --from=fresh-susy-web /susy/dist /usr/share/nginx/html
RUN mkdir -p /etc/nginx/sites-enabled

RUN chmod -R 0777 /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
