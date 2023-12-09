# backend/Dockerfile
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app/backend

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Specify the command to start the backend server
CMD ["node", "server.js"]
