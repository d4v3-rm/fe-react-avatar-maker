# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Enable Corepack for Yarn v4
RUN corepack enable

# Copy package files and yarn config
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

# Install dependencies
RUN corepack yarn install

# Copy project files
COPY . .

# Build the app
RUN corepack yarn build:prod

# Production stage with Nginx
FROM nginx:stable-alpine

# Copy built app from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
