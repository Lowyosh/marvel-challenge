![marvelLogo](/public/img/marvel-logo.jpg)

# Marvel Characters App 🪜 🚧

## Descripción

Este proyecto es una prueba técnica que consiste en el desarrollo de una aplicación web que consume la API de Marvel para mostrar información sobre los super heroes.

El proyecto sigue en construcción. Necesita mejoras de rendimiento en la llamada a la API, que no permite el filtrado al consumirla, de manera que se ralentiza el proceso de descarga y filtrado posterior. También necesita la reestructuración de la página de detalle de cada personaje para su correcto renderizado y visualización.

Además, el manejo de errores parece estar mostrando un error por una llamada duplicada a la API que concadena una serie de errores al leer la data a renderizar.

Por último, después de resolver estos problemas necesito hacer testing y despliegue.

## Responsive

![responsive](/public/img/responsive.jpg)

## Favorites

![favpage](/public/img/favpage.png)

## SearchBar

![searchbar](/public/img/searchbar.png)

## Tech Stack

- **Lenguaje de programación:** TypeScript
- **Frameworks y Librerías:** React, Next.js
- **Llamadas a API:** Fetch API
- **Estilos:** SCSS Modules
- **Autenticación y Seguridad:** API de Marvel (autenticación con API key y hash con Md5)
- **Control de Versiones:** Git y Github

## Instalación

Para clonar y ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/Lowyosh/marvel-challenge.git
   ```

2. **Navega al directorio del proyecto:**

   ```bash
   cd marvel-challenge
   ```

3. **Instala las dependencias:**

   ```bash
   npm install
   ```

4. **Configura las variables de entorno:**

   Crea un archivo `.env.local` en la raíz del proyecto y agrega tus claves de la API de Marvel:

   ```env
   NEXT_PUBLIC_MARVEL_PUBLIC_KEY=tu_public_key
   NEXT_PUBLIC_MARVEL_PRIVATE_KEY=tu_private_key
   ```

5. **Ejecuta la aplicación en modo de desarrollo:**

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:3000`.

## En construcción
