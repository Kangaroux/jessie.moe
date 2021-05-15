FROM nginx:alpine

RUN mkdir -p /usr/share/letsencrypt/
COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /app/
COPY client/dist/ .
