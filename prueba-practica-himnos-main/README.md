# Prueba Práctica de Himnos

Este es un proyecto de [Next.js](https://nextjs.org) creado con [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Comenzar

Primero, ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

Puedes comenzar a editar la página modificando `pages/index.js`. La página se actualiza automáticamente mientras editas el archivo.

Las [rutas de API](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) se pueden acceder en [http://localhost:3000/api/hello](http://localhost:3000/api/hello). Este endpoint se puede editar en `pages/api/hello.js`.

El directorio `pages/api` está mapeado a `/api/*`. Los archivos en este directorio son tratados como [rutas de API](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) en lugar de páginas de React.

Este proyecto usa [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) para optimizar y cargar automáticamente [Geist](https://vercel.com/font), una nueva familia de fuentes para Vercel.

## Especificaciones. Funcionalidades del Proyecto

Esta aplicación permite:

- Buscar y seleccionar himnos por idioma (Español, Inglés, Portugués)
- En la página web [Himnos de la Iglesia] (https://www.churchofjesuschrist.org/media/music/collections/hymns) existe un API no documentada para acceder a la lista de himnos, con el numero, nombre y rutas a los archivos de audio, tanto de sólo la música, asi como con voz
- La pantalla administra una lista de himnos para reproducción
- En la columna del nombre se muestra una lista de seleción con los nombres de los himnos ordenados alfabeticamente en el idioma correspondiente
- Al seleccionar un himno de la lista, ya sea por número o por nombre se activan los controles de reproducción de música. Cuando el renglón está vacío o el himno no está seleccionado, no se muestran los controles de reprodución, al introducir el número de himno éste se debe validar con la lista.
- Una columna de la pantalla muestra un control que permite reproducir himnos con o sin voces
- De forma predeterminada se muestran cuatro renglones vacíos, pero se pueden agregar o eliminar renglones
- La lista de himnos y las opciones de reproducción (con o sin voz) se guardan en el servidor cada vez que el usuario hace un cambio, si el servidor se reinicia los datos quedan vacíos, mostrando sólo 4 renglones vacíos predeterminados
- Desde otra sesión se deben poder ver los cambios al refrescar la pantalla, además que se pueden hacer cambios que también se guardarán en el servidor.
- Elemento opcional: En el elipsis, se muestra un diálogo para sincronización automática, si se activa, esto permite que al hacer un cambio en alguna parte de la pantalla se debe mostrar en todas las sesiones activas

## Estructura del Proyecto

```
prueba-practica-himnos/
├── helpers/                 # Elementos de ayuda, incluye función para obtener los himnos
├── public/                  # Archivos estáticos públicos
├── src/
│   ├── pages/
│   │   ├── _app.js          # Componente raíz de la aplicación
│   │   ├── _document.js     # Documento HTML personalizado
│   │   ├── index.js         # Página principal con tabla de himnos
│   │   └── api/
│   │       └── hello.js     # Endpoint de API de ejemplo
│   └── styles/
│       ├── globals.css      # Estilos globales
│       └── index.Table.module.css  # Estilos específicos de la tabla
├── jsconfig.json           # Configuración de JavaScript
├── next.config.mjs         # Configuración de Next.js
├── package.json            # Dependencias y scripts del proyecto
└── README.md               # Este archivo
```

## Aprender Más

Para aprender más sobre Next.js, echa un vistazo a los siguientes recursos:

- [Documentación de Next.js](https://nextjs.org/docs) - aprende sobre las características y API de Next.js.
- [Aprende Next.js](https://nextjs.org/learn-pages-router) - un tutorial interactivo de Next.js.

Puedes revisar [el repositorio de GitHub de Next.js](https://github.com/vercel/next.js) - ¡tus comentarios y contribuciones son bienvenidos!

## Despliegue en Vercel

La forma más fácil de desplegar tu aplicación Next.js es usar la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.

Consulta nuestra [documentación de despliegue de Next.js](https://nextjs.org/docs/pages/building-your-application/deploying) para más detalles.
