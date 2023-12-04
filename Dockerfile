# Build stage
# Use Node.js version 18 based on Alpine Linux for a smaller image size
FROM node:18-alpine as build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Build the application
RUN npm run build

# Serve stage
# Start a new stage with the same Node.js base image
FROM node:18-alpine as production-stage

# Install 'serve' to serve static files
RUN npm install -g serve

# Set the working directory inside the container
WORKDIR /app

# Copy the build artifacts from the build-stage to the production stage
COPY --from=build-stage /app/dist /app

# Expose port 5000 to the outside world
EXPOSE 5000

# Start the server using the 'serve' command
CMD ["serve", "-s", ".", "-l", "5000"]
