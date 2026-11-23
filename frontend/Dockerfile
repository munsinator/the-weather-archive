FROM node:22.23-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 80
RUN npm run build

FROM nginx:stable-alpine
#COPY /app/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
#Tells Nginx to stay in the foreground and not daemonize, which is necessary for Docker containers
ENTRYPOINT ["nginx", "-g", "daemon off;"]
