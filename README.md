# ProyectoWeb 2

Este es un proyecto de ejemplo de un ecommerce utilizando tecnologías como Vue.js, Express.js y MongoDB. El proyecto tiene como objetivo proporcionar una base sólida para el desarrollo de un sitio web de comercio electrónico.


Ecommerce con Vue.js, Express.js y MongoDB
Este es un proyecto de ejemplo de un ecommerce utilizando tecnologías como Vue.js, Express.js y MongoDB. El proyecto tiene como objetivo proporcionar una base sólida para el desarrollo de un sitio web de comercio electrónico.

Requisitos previos
Antes de comenzar, asegúrate de tener instalados los siguientes componentes en tu máquina:

Node.js: puedes descargarlo e instalarlo desde https://nodejs.org
MongoDB: puedes descargarlo e instalarlo desde https://www.mongodb.com/
Configuración del proyecto
Sigue estos pasos para configurar y ejecutar el proyecto:

Clona este repositorio en tu máquina local o descárgalo como archivo ZIP.

Abre una terminal y navega hasta la carpeta raíz del proyecto.

Ejecuta el siguiente comando para instalar las dependencias del backend:

Copy code
npm install
Navega a la carpeta client dentro del proyecto y ejecuta el siguiente comando para instalar las dependencias del frontend:

Copy code
npm install
Vuelve a la carpeta raíz del proyecto y crea un archivo .env para configurar las variables de entorno necesarias. Asegúrate de proporcionar los siguientes valores en el archivo .env:

javascript
Copy code
MONGODB_URI=<URL_de_conexión_de_tu_base_de_datos_MongoDB>
Puedes obtener la URL de conexión de tu base de datos MongoDB local o utilizar un servicio en la nube como MongoDB Atlas.

Ejecución del proyecto
Una vez configurado el proyecto, puedes ejecutarlo utilizando los siguientes comandos:

Ejecutar el backend (Express.js) en modo de desarrollo:


Copy code
npm run dev
Esto iniciará el servidor Express.js y se ejecutará en http://localhost:3000.

Ejecutar el frontend (Vue.js) en modo de desarrollo:


Copy code
npm run serve
Esto iniciará el servidor de desarrollo de Vue.js y se ejecutará en http://localhost:8080.

Despliegue en Heroku
Puedes desplegar fácilmente este proyecto en la plataforma Heroku siguiendo estos pasos:

Crea una cuenta en https://www.heroku.com/ si aún no tienes una.

Instala la CLI de Heroku siguiendo las instrucciones en https://devcenter.heroku.com/articles/heroku-cli.

Abre una terminal y ejecuta el siguiente comando para iniciar sesión en Heroku:

Copy code
heroku login
Navega hasta la carpeta raíz del proyecto y ejecuta los siguientes comandos para crear una nueva aplicación de Heroku y realizar el despliegue:

Copy code
heroku create nombre-de-tu-app
git push heroku main
heroku open
Reemplaza nombre-de-tu-app con el nombre deseado para tu aplicación en Heroku.


¡Gracias








## Comandos

## Front End
### npm install    
### npm install -g @vue/cli    
### npm run serve (para ver el app)


## Back End
### npm install xpress
### npm install --save-dev @babel/core @babel/node @babel/preset-env @babel/cli @babel/plugin-transform-runtime
### npm install @babel/runtime
### npx babel-node src/server.js (para lanzar el server)
### npm install body-parser
### npm install --save-dev nodemon
