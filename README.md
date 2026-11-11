# Portafolio · Valentina Garzón Pérez

Portafolio de diseño **UX/UI y de producto** con enfoque en **experiencias interactivas** para marcas, patrimonio cultural y problemáticas sociales. Bilingüe (español / inglés).

Sitio publicado: <https://valengp2006.github.io/Portafolio/>

## Stack

- [Astro](https://astro.build) 7 (sitio estático, sin framework de UI)
- Node.js ≥ 22.12
- Despliegue en GitHub Pages con GitHub Actions (`.github/workflows/astro.yml`) al hacer push a `main`

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:4321/Portafolio/
npm run build    # genera dist/
npm run preview  # sirve dist/ para probar el build
```

> El sitio vive bajo `/Portafolio` (ver `base` en `astro.config.mjs`). Abre siempre la URL con ese prefijo.

## Estructura

```
src/
  data/
    projects.ts        ← TODOS los proyectos (textos es/en, imágenes, enlaces)
    site.ts            ← correo, GitHub, LinkedIn, CV
  i18n/
    index.ts           ← idiomas, rutas y helpers (url, asset, pagePath)
    copy.ts            ← textos de home, sobre mí, servicios, contacto y de la interfaz
  views/               ← una vista por página; reciben `lang`
  pages/
    index.astro        ← redirige a /es/ o /en/ según el idioma del navegador
    es/…  en/…         ← páginas finas que solo llaman a la vista con su idioma
  components/          Nav, Footer, ProjectCard
  layouts/Layout.astro
  styles/global.css
public/
  images/              ← fotos (ver "Imágenes")
```

URLs:

| Español | English |
|---|---|
| `/es/` | `/en/` |
| `/es/proyectos/` · `/es/proyectos/<slug>/` | `/en/projects/` · `/en/projects/<slug>/` |
| `/es/sobre-mi/` | `/en/about/` |
| `/es/servicios/` | `/en/services/` |
| `/es/contacto/` | `/en/contact/` |

## Agregar un proyecto

1. Abre `src/data/projects.ts` y copia un objeto de `projects`.
2. Cambia `slug`, `title` y todos los textos (siempre `es` **y** `en`).
3. Elige `tier`: `1` destacado (home), `2` segundo nivel, `3` experimento (versión corta).
4. Ubícalo en el arreglo: el orden del arreglo es el orden en el sitio.
5. Pon las imágenes en `public/images/projects/<slug>/` y referéncialas sin `public` ni base, por ejemplo `images/projects/mi-proyecto/cover.webp`.
6. `draft: true` oculta el proyecto de todo el sitio hasta que esté listo.

Las secciones del caso de estudio son opcionales: `question`, `sections`, `metrics`, `decisions`, `system`, `awards`, `gallery`, `links`. Si faltan, no se muestran.

## Imágenes

- Formato recomendado: **WebP** (o JPG/PNG optimizados), idealmente < 300 KB por imagen.
- Retrato: `public/images/valentina.webp`, vertical 4:5, mínimo 800 × 1000 px.
- Portada de proyecto: 16:9, mínimo 1920 × 1080 px, sin texto encima.
- Galería: 3 a 6 imágenes por proyecto, escribe siempre el texto alternativo (`alt`) en español e inglés.
- Si un proyecto no tiene `cover`, la tarjeta usa el color del proyecto.
- Nunca escribas rutas con `/images/...` a mano: usa los helpers `asset()` y `pagePath()` de `src/i18n`, que respetan `base`.

## Idiomas

Todo texto visible está en dos idiomas (`{ es: "…", en: "…" }`). Si agregas una sección nueva, agrega ambos.

## Pendientes

- `src/data/site.ts`: completar `cv` cuando el CV esté actualizado (si está vacío, el enlace no se muestra).
- Portadas y galerías finales (ver "Imágenes").
- Revisar las traducciones al inglés.
