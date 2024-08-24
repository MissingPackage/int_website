# Usa l'immagine di Node.js come base
FROM node:18-alpine

# Imposta la directory di lavoro nel container
WORKDIR /app

# Copia solo il package.json e package-lock.json per installare le dipendenze
COPY package.json ./

# Installa le dipendenze
RUN npm install

# Copia tutti i file del progetto nella directory di lavoro
COPY . .

# Espone la porta usata da Vite
EXPOSE 5173

# Comando di default per avviare il server di sviluppo
CMD ["npm", "run", "dev"]
