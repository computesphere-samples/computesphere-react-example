FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4173

# The platform sets PORT to the service's port; 4173 when it isn't set.
CMD ["sh", "-c", "exec npm run preview -- --port ${PORT:-4173} --strictPort"]