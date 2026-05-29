# Build stage
FROM node:22-alpine AS build
WORKDIR /app

COPY site/package*.json site/pnpm-lock.yaml* ./
RUN npm ci

COPY site/ ./

ARG PUBLIC_UMAMI_URL=""
ARG PUBLIC_UMAMI_WEBSITE_ID=""
ENV PUBLIC_UMAMI_URL=$PUBLIC_UMAMI_URL
ENV PUBLIC_UMAMI_WEBSITE_ID=$PUBLIC_UMAMI_WEBSITE_ID

RUN npm run build

# Serve stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
