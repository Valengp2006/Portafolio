import { defineConfig } from 'astro/config';

export default defineConfig({
  // 1. Cambia "tu-usuario" por tu nombre de usuario de GitHub
  site: 'https://Valengp2006.github.io', 
  
  // 2. Cambia "nombre-del-repo" por el nombre exacto de tu repositorio 
  // (por ejemplo: '/mi-portafolio' o '/portafolio_1')
  // IMPORTANTE: Debe llevar la barra diagonal "/" al principio.
  base: '/Portafolio', 
  
  // 3. Esta línea es clave para que las subpáginas funcionen en GitHub Pages
  trailingSlash: 'always' 
});
