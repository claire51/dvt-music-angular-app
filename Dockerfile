# docker  build -t kelvin/dvt:latest .
# docker  run -p 82:82 kelvin/dvt:latest
FROM node:14-alpine AS builder
ENV NODE_ENV production

# Add a work directory
WORKDIR /app

# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm ci
RUN npm --verbose install

# Copy app files
COPY . .

RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

COPY  --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY  --from=builder /app/dist/musicdb-app-angular /usr/share/nginx/html

EXPOSE 82
CMD ["nginx", "-g", "daemon off;"]
