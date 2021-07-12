# Start with the node 12 base image from Docker Hub
FROM node:12

RUN apt-get update && apt-get install -y default-jre && apt-get clean

# Create app directory
WORKDIR /usr/src/app

# Bundle source, assuming the Dockerfile lives in the app's code
COPY src/app/ ./

RUN npm install
# Install app dependencies
#RUN npm ci --only=production

COPY . .

# Expose the port the server runs on
EXPOSE 1080

# Define a default command to start the server
CMD [ "node", "server.js" ]
