# Usamos una imagen base de Node.js (LTS)
FROM node:lts

# Creamos un directorio llamado 'app' dentro del contenedor
WORKDIR /app

# Clonamos el repositorio en el directorio app
RUN git clone https://github.com/jhonvalladolid/2024-II_Lab3_DesAplWav.git

# Nos movemos al directorio del proyecto clonado
WORKDIR /app/2024-II_Lab3_DesAplWav

# Instalamos las dependencias del proyecto
RUN npm install

# Exponemos el puerto 3000 (donde la aplicación está configurada para correr)
EXPOSE 3000

# Comando que ejecuta la aplicación al iniciar el contenedor
CMD ["npm", "run", "dev"]