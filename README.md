## CHALLENGE BSALE

Este la parte del backend del challenge para la posicion de fullstack developer en Bsale

Este proyecto esta estructurado de la siguiente forma:

- config -> Archivos de configuración
- controllers -> Archivos donde se extraerán las querys de los endpoints y enviar las respuestas http.
- middlewares -> Funciones que utiles que interceden a las rutas
- models -> Modelos de las tablas de la base de datos
- repositories -> Funciones que interactuan con el ORM Sequelize
- routes -> Rutas para los endpoints
- services -> Donde va la logica del negocio

### Herramientas

- Husky, prettier y eslint -> Para el estilo de programación y para un mejor orden de código gracias al linter
- Nodejs -> Para el backend
- Sequelize -> ORM para conectarnos a la base de datos mysql
- Mysql -> Base de datos que se utilizó
- Postman -> Programa para probar los endpoints creados en este proyecto
- Express -> Framework minimalista para Nodejs basado en middlewares

### Pasos para correr la aplicación en local

Tiene que crear un archivo .env en la raiz del proyecto, tiene esta estructura

```
PORT=
DATABASE=
HOST=
USER=
PASSWORD=
```

La base de datos ya esta realizada y proveida en este challenge asi que la cuestión es solo conectarse, la base de datos esta alojado en AWS RDS

Una vez que haya clonado este repositorio deberá instalar las dependencias del proyecto con el siguiente comando:

```
yarn install
```

y luego para correr el proyecto en modo de desarrollo

```
yarn dev
```

### Deploy

Puede ver desplegado el backend por [aqui](https://bsale-cart.herokuapp.com) y probar la api desde postman o desde el frontend.

Saludos.
