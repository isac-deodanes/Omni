Omni

prueba compuesta por una API REST (omni_api) y una interfaz web (omni-frontend).

Tabla de contenido
Arquitectura general
Tecnologías utilizadas
omni_api (backend)
omni-frontend (frontend)
Cómo correr el proyecto completo
Endpoints disponibles
Arquitectura general
Cliente (navegador)
        │
        ▼
 omni-frontend  (React + Vite)  ──── fetch ────▶  omni_api  (Express)
                                                        │
                                                        ▼
                                                   MySQL (base de datos)

El frontend consume la API vía fetch, apuntando a http://localhost:8080/api/v1. El backend expone los endpoints REST y se conecta a MySQL mediante un pool de conexiones.





TECNOLOGIAS UTILIZADAS:

Backend — omni_api
Tecnología	Uso
Node.js	Entorno de ejecución de JavaScript en el servidor
Express 5	Framework para definir rutas y manejar peticiones HTTP
MySQL2	Driver para conectarse a MySQL (usado con promise para async/await)
dotenv	Carga de variables de entorno desde .env
cors	Habilita peticiones cross-origin desde el frontend
MySQL	Base de datos relacional
Frontend — omni-frontend
Tecnología	Uso
React 19	Librería para construir la interfaz por componentes
Vite	Servidor de desarrollo y bundler
ESLint	Linting y buenas prácticas de código
Fetch API (nativa)	Peticiones HTTP hacia el backend
CSS plano	Estilos, sin librerías de UI externas


Arquitectura de código
Capa	Backend	Frontend
Entrada	app.js	main.jsx
Enrutamiento / navegación	routes.js, usuario.routes.js	Componentes bajo src/components
Lógica de negocio y acceso a datos	usuario.service.js	hook/useFetch.js
Manejo de petición/respuesta HTTP	usuario.controller.js	—
Configuración	app/config/mysql.js, .env	vite.config.js
omni_api (backend)

API REST construida en Express, organizada en capas: routes → controller → service → base de datos.

omni_api/
├── .env                      # Variables de entorno
├── app.js                     # Punto de entrada del servidor
├── package.json
└── app/
    ├── config/
    │   └── mysql.js             # Pool de conexiones a MySQL
    ├── controller/
    │   └── usuario.controller.js # Maneja las peticiones y respuestas HTTP
    ├── service/
    │   └── usuario.service.js    # Lógica de negocio y consultas SQL
    └── routes/
        ├── routes.js               # Router principal
        └── usuario.routes.js        # Endpoints del recurso usuario
Variables de entorno (.env)
PORT=8080
HOST_DB=localhost
USER_DB=root
PASSWORD_DB=
DATABASE_NAME=OMNI
Instalación y ejecución
bash
cd omni_api
npm install
npm start

El servidor queda disponible en http://localhost:8080, con todas las rutas bajo el prefijo /api/v1.

Requiere una base de datos MySQL local llamada OMNI, con al menos las tablas usuario y rol.

omni-frontend (frontend)

Interfaz en React que consume omni_api para listar y eliminar usuarios.

omni-frontend/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                    # Punto de entrada de React
    ├── App.jsx                      # Componente raíz, maneja el estado de usuarios
    ├── hook/
    │   └── useFetch.js                # Hook para llamar a omni_api
    └── components/
        ├── list/List.jsx                # Renderiza la lista de usuarios
        ├── item/Item.jsx                 # Una fila de usuario
        └── button/Button.jsx              # Botón para borrar un usuario
Instalación y ejecución
bash
cd omni-frontend
npm install
npm run dev

La app queda disponible en http://localhost:5173 (puerto por defecto de Vite).

La URL del backend está definida en src/hook/useFetch.js (BASE_URL = 'http://localhost:8080/api/v1'). Para que la app funcione, omni_api debe estar corriendo al mismo tiempo.

Cómo correr el proyecto completo
Levantar MySQL localmente y crear la base de datos OMNI con sus tablas.
En una terminal, iniciar el backend:
bash
   cd omni_api
   npm install
   npm start
En otra terminal, iniciar el frontend:
bash
   cd omni-frontend
   npm install
   npm run dev
Abrir http://localhost:5173 en el navegador.
Endpoints disponibles
Método	Ruta	Descripción	Usado en el frontend

GET	/api/v1/usuario/obtener	Lista los usuarios activos
DELETE	/api/v1/usuario/eliminar/:id	Elimina un usuario por id