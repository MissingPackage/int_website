# Node Base image
FROM node:18-alpine

# Working DIR
WORKDIR /app

# iCopy the package.json to install dependencies
COPY package.json ./

RUN npm install

# Install router here for safety
RUN npm install react-router-dom @material-tailwind/react

# Copia all project files
COPY . .

# Reference Vite standard port
EXPOSE 5173

# Default command
CMD ["npm", "run", "dev"]
