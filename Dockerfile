# Step 1: Use Node.js base image
FROM node:20-slim

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json first to install dependencies
COPY package.json package-lock.json ./

# Step 4: Install dependencies (including dev dependencies for development)
RUN npm install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Expose the port Vite is running on (default is 5173)
EXPOSE 3000

# Step 7: Run the development server using `npm run dev`
CMD ["npm", "run", "dev"]