FROM nginx:latest

COPY ./index.html /usr/share/nginx/html/
COPY ./css /usr/share/nginx/html/css/

EXPOSE 80
