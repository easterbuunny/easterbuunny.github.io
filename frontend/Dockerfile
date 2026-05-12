# Étape 1 : Build avec Node 23
FROM node:23-slim AS build
WORKDIR /app
# Optimisation réseau pour éviter ECONNRESET
RUN npm config set fetch-retries 5 && \
    npm config set fetch-retry-mintimeout 20000 && \
    npm config set fetch-retry-maxtimeout 120000

COPY package*.json ./
RUN npm install --legacy-peer-deps --no-audit
COPY . .
RUN npm run build -- --configuration production

RUN ls -R /app/dist
# Étape 2 : Serveur de production Nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist/*/browser /usr/share/nginx/html
# Copie d'une config nginx personnalisée pour gérer le routage Angular (SPA)
# COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
