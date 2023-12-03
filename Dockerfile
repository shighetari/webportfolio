# Build stage
FROM node:18-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve stage
FROM node:18-alpine as production-stage
RUN npm install -g serve
WORKDIR /app
COPY --from=build-stage /app/dist /app
EXPOSE 5000
CMD ["serve", "-s", ".", "-l", "5000"]
