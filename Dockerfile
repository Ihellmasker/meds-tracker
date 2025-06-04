# Use Node Alpine image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Build Next.js app
RUN npm run build

# Expose port
EXPOSE 3000

# Start Next.js app
CMD ["npm", "start"]
