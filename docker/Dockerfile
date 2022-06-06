FROM node:14-alpine as builder

USER root

WORKDIR /app

ADD . /app

RUN yarn

RUN yarn build


FROM node:14-alpine

USER root

ENV TZ=America/Sao_Paulo

RUN apk add tzdata

WORKDIR /app

COPY --from=builder /app/package.json package.json
COPY --from=builder /app/node_modules/ node_modules/
COPY --from=builder /app/dist src/

WORKDIR /

ADD docker/cron /etc/crontabs/root

ADD docker/script.sh /startup/script.sh

RUN chmod 0644 /etc/crontabs/root && chmod +x /startup/script.sh

ENTRYPOINT ["sh", "/startup/script.sh"]