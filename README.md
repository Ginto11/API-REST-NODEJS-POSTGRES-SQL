![Badge en Desarollo](https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green)


# API REST con Node.js, Express y PostgreSQL

Esta es una API RESTful construida con **Node.js**, **Express** y **PostgreSQL**. La API se realizo para ser desplegada en **Heroku** y es recomendable utilizar **Visual Studio Code** para el desarrollo. 

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución de JavaScript para el servidor.
- **Express**: Framework de Node.js para construir la API.
- **PostgreSQL**: Base de datos relacional.
- **Heroku**: Plataforma para desplegar la aplicación en la nube.
- **Visual Studio Code**: Editor recomendado para desarrollo.

## Desarrollado por  
Nelson Muñoz

## Requisitos

Asegúrate de tener instaladas las siguientes herramientas en tu máquina:

1. **Node.js**: [Descargar Node.js](https://nodejs.org/)
2. **PostgreSQL**: [Descargar PostgreSQL](https://www.postgresql.org/download/)
3. **Heroku CLI**: [Descargar Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

## Instalación

Sigue estos pasos para configurar y ejecutar la API en tu entorno local:

1. Clona este repositorio:
```
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git cd nombre-del-repositorio
```
3. Instala las dependencias del proyecto:
```
npm install
```

4. Crea una base de datos en PostgreSQL (si aún no la tienes):
```
psql -U tu-usuario -d postgres CREATE DATABASE nombre_de_tu_basedatos;
```

5. Crea un archivo `.env` en la raíz del proyecto y agrega las variables de entorno necesarias. Usa la URL de conexión para PostgreSQL, similar a la siguiente:
```
DATABASE_URL=postgres://usuario:contraseña@localhost:5432/nombre_de_tu_basedatos
```

Reemplaza `usuario`, `contraseña` y `nombre_de_tu_basedatos` con los datos correspondientes de tu base de datos.

## Ejecución en Desarrollo

1. Para iniciar el servidor en modo desarrollo, usa el siguiente comando:
```
npm run dev
```
Esto ejecutará el servidor y lo recargará automáticamente cada vez que realices cambios en los archivos.

2. Si prefieres ejecutar el servidor en producción (sin Nodemon), usa:
```
npm start
```

## Despliegue en Heroku

Para desplegar la API en Heroku, sigue estos pasos:

1. Inicia sesión en Heroku desde la terminal:
```
heroku login
```

2. Crea una nueva aplicación en Heroku:
```
heroku create nombre-de-tu-aplicacion
```

3. Configura las variables de entorno en Heroku para la base de datos:
```
heroku config:set DATABASE_URL=postgres://usuario:contraseña@host:puerto/nombre_de_tu_basedatos
```

4. Inicializa un repositorio Git en el proyecto (si aún no lo has hecho):
```
git init <br /> git add .<br /> git commit -m "Primer commit"
```

5. Agrega el remoto de Heroku:
```
git remote add heroku https://git.heroku.com/nombre-de-tu-aplicacion.git
```

6. Despliega la aplicación a Heroku:
```
git push heroku master
```

7. La API estará disponible en la URL proporcionada por Heroku, como por ejemplo:
```
https://nombre-de-tu-aplicacion.herokuapp.com/
```

## Endpoints de la API

### `GET /api/usuarios`

Obtiene todos los usuarios registrados.

**Respuesta:**
```json
[
{
 "id": 1,
 "nombre": "Juan",
 "email": "juan@example.com"
},
...
]
```

### `POST /api/usuario`
Crea un nuevo usuario.
Cuerpo de la solicitud:
```
{
  "nombre": "Ana",
  "email": "ana@example.com"
}
```
Respuesta:
```
{
  "id": 2,
  "nombre": "Ana",
  "email": "ana@example.com"
}
```

Desarrollo con Visual Studio Code
Para desarrollar eficientemente con Visual Studio Code:

1. Abre el proyecto con VSCode:
```
   code .
```
2. Instala las extensiones recomendadas para Node.js, como:

- **ESLint:** Para la validación de código.
- **Prettier:** Para el formateo automático del código.
- **Node.js Modules Intellisense:** Para autocompletar los módulos de Node.js.

3. Usa el terminal integrado de VSCode para ejecutar los comandos de desarrollo y gestión del proyecto.




