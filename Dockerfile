# Etapa 1: Build do projeto
FROM node:latest AS builder

WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia todo o código
COPY . .

# Builda o projeto para produção
RUN npm run build

# Etapa 2: Servir os arquivos estáticos
FROM nginx:alpine

# Copia os arquivos compilados para o nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia configuração customizada do nginx (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta padrão
EXPOSE 80

# Comando padrão para rodar nginx
CMD ["nginx", "-g", "daemon off;"]
