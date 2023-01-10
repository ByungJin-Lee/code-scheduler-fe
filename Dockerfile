FROM node:18-alpine AS node

FROM node AS builder

# Use /app as the CWD
WORKDIR /app            

# Copy package.json and package-lock.json to /app
COPY package*.json ./   
COPY yarn.lock ./   

# Install all dependencies
RUN npm i -g tsc  

RUN yarn install

# Copy the rest of the code
COPY . .                

# Invoke the build script to transpile code to js
RUN yarn build

# Final stage

FROM node AS final

# Prepare a destination directory for js files
RUN mkdir -p /app/.next                  

# Use /app as CWD
WORKDIR /app                            

# Copy package.json and package-lock.json
COPY package*.json ./                   
COPY yarn.lock ./   

# Install only production dependencies
RUN yarn install --production

# Copy transpiled js from builder stage into the final image
COPY --from=builder /app/.next ./.next

# Open desired port
EXPOSE 4444

# Use js files to run the application
CMD ["yarn", "start"]