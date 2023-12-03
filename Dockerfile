# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Bundle app source inside Docker image
COPY . .

# Build the app for production
RUN npm run build

# Install `serve` to run the application
RUN npm install -g serve

# The port that your container will run on
EXPOSE 5000

# Run the app when the container launches
CMD ["serve", "-s", "dist", "-l", "5000"]
