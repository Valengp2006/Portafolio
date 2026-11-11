# Portafolio de Valentina Garzón — guía para agentes

Portafolio UX/UI y de producto (experiencias interactivas), bilingüe es/en, hecho con Astro y publicado en GitHub Pages bajo `base: '/Portafolio'`. Lee `README.md` para la estructura completa.

## Desarrollo

Para iniciar el servidor de desarrollo usa el modo background:

```
astro dev --background
```

Se gestiona con `astro dev stop`, `astro dev status` y `astro dev logs`. Antes de dar algo por terminado corre `npm run build`.

## Reglas del proyecto

- **Contenido de proyectos:** solo en `src/data/projects.ts`. No hardcodear slugs en páginas.
- **Textos generales y de interfaz:** en `src/i18n/copy.ts`.
- **Bilingüe:** todo texto visible lleva `es` y `en`. Nunca dejar un idioma vacío.
- **Rutas e imágenes:** siempre con `url()`, `asset()` o `pagePath()` de `src/i18n/index.ts` (respetan `base`). Nunca `href="/..."` ni `src="/images/..."`.
- **Páginas nuevas:** la lógica va en `src/views/`; los archivos de `src/pages/es` y `src/pages/en` solo llaman a la vista con su `lang`.
- **Imágenes:** `public/images/projects/<slug>/`, WebP preferido, con `alt` en ambos idiomas. Un proyecto sin `cover` usa su color.
- **Datos personales:** correo, GitHub, LinkedIn y CV viven en `src/data/site.ts`.

## Tono del texto

- Primera persona, concreto y sin frases genéricas.
- Posicionamiento: diseñadora UX/UI y de producto con enfoque en experiencias interactivas, para marcas, patrimonio cultural y problemáticas sociales.
- Cada caso de estudio muestra el problema, la investigación, las decisiones de diseño y el resultado; no afirmar nada que no esté en la documentación del proyecto.
- Marcas de terceros: el título de Encantar no usa la marca original, pero el texto del proyecto sí aclara que es un ejercicio académico para esa marca, sin vínculo ni respaldo oficial (decisión de Valentina). En otros proyectos, no usar marcas de terceros sin esa aclaración.
- Disponibilidad vigente: busca prácticas 2027-2 y está abierta a freelance.

## Mantener este archivo al día (regla obligatoria)

Cada vez que un agente cambie contenido, estructura, textos o tome una decisión de diseño/posicionamiento, debe **actualizar en el mismo cambio** las secciones "Decisiones tomadas", "Estado actual" y "Pendientes" de abajo (y `README.md` si cambia la estructura o cómo se agregan proyectos). CLAUDE.md es copia idéntica de este archivo: editar uno y copiarlo al otro.

## Flujo de publicación

- Trabajar en `main` (decisión de Valentina: sin ramas nuevas).
- **No hacer commit ni push sin que Valentina haya revisado y aprobado los cambios** (revisión con `npm run dev`). Al aprobar, el agente hace el commit y el push a `origin/main`; el push dispara el despliegue a GitHub Pages.
- Mensajes de commit en español, descriptivos, con la línea de coautoría que indique el entorno.

## Decisiones tomadas

- **Posicionamiento (nov 2026):** diseñadora UX/UI y de producto con enfoque en experiencias interactivas; busca prácticas 2027-2 y acepta freelance. Estudiante de 6.º semestre, UPB, Medellín.
- **Bilingüe es/en** con rutas `/es/` y `/en/` (nombres de sección traducidos). La raíz redirige según el idioma del navegador.
- **Proyectos en tres niveles** (`tier`): 1 = Dissonance, Pasos de Tradición, MUSE; 2 = Jardín de Bruma, Contemplar lo infinito, Cosmos; 3 = Orquesta Corporal, Cauce (Why Bother), Encantar. La home muestra los 3 del nivel 1 y 2 del nivel 2.
- **Luna y las Estrellas Perdidas se retiró** del portafolio (no es su enfoque actual).
- **Dissonance** lleva los 4 reconocimientos DEX 2026 (certificados del 10-nov-2026) con la imagen de cada certificado: Mejor Producto: Experiencias Interactivas; Mejor Interacción Jugador-Entorno; Estilo Visual Más Original; Mención de Honor Taller 6. Su rol: dirección creativa. Los certificados se recortaron para quitar la marca de agua de CamScanner (originales en Downloads/ de Valentina).
- **Hechizos pasó a llamarse "Encantar"** (slug `encantar`): el nombre original usaba una marca de terceros y ningún texto la menciona. Viene del verbo central del proyecto.
- **Jardín de Bruma** ya está publicado: es un proyecto real para la marca Bruma (emprendimiento de Medellín), en equipo de 3 (Miranda López Gómez, Nikki Ortiz Ospina y Valentina), octubre 2026. El contenido sale de su presentación "BRUMA X GAMIFICACIÓN"; su rol (confirmado por ella): planteamiento de la idea y presentación de la propuesta, en conjunto con sus compañeras. La portada es una captura de la diapositiva de portada y se queda así por ahora.
- **Fechas:** Dissonance, julio a noviembre 2026; Contemplar lo infinito, septiembre 2026; Orquesta Corporal, Cauce, Encantar y Jardín de Bruma, octubre 2026.
- **Equipos:** no se nombran integrantes en ningún proyecto; solo se indica "Proyecto en equipo" (Dissonance, Pasos de Tradición, MUSE, Jardín de Bruma, Cosmos). Orquesta Corporal, Contemplar lo infinito, Cauce y Encantar se presentan como trabajo individual.
- **Pasos de Tradición** (taller 5): reconocimiento al mejor proyecto del Taller 5: Experiencias (sin imagen de certificado por ahora); sitio https://valengp2006.github.io/pasos-de-tradicion/; galería con imágenes de su propio sitio.
- **MUSE** se amplió con el contenido de su deck de Figma (https://www.figma.com/deck/D16IOQE3BsvhIg70jK0tMP/Portafolio-UX-UI): rol, problema, investigación, usuario objetivo, UI Kit, wireframes, prototipo y reflexión. Las imágenes de la galería son capturas de las diapositivas (800×600): reemplazar por exportaciones de Figma cuando se pueda.
- **Orquesta Corporal** se amplió con la implementación técnica y las decisiones de diseño; documentación completa en Notion (enlace en el proyecto).
- **Cosmos** corrige su stack: público desde el teléfono (Node.js + Socket.io), performer en iPad (Open Stage Control), Strudel y TouchDesigner.
- **Enlaces a repositorios** (`links` con "Repositorio en GitHub"): Dissonance, Contemplar lo infinito, Cauce (why-bother), Encantar, Cosmos (Proyecto_Cosmos) y Pasos de Tradición. Orquesta Corporal, MUSE y Jardín de Bruma no tienen repo enlazado.
- **Repo de Hechizos → `encantar`:** el enlace del sitio ya apunta a `Valengp2006/encantar`. Ya está renombrado (nov 2026) y su sitio vive en valengp2006.github.io/encantar/. La carpeta local y su remoto siguen con el nombre viejo.
- **Videos:** cada proyecto puede tener `videos` en `projects.ts`: `youtube` (ID; se carga solo al hacer clic, vía youtube-nocookie) o `src` (MP4 en `public/videos/`, con `poster`). Todos los videos actuales están en YouTube: Cosmos, Pasos de Tradición (3: Códice, Rastro de los Gestos y Cúpula de Legados), Cauce (mbFWkJXmFDI) y Contemplar lo infinito (ki0KPbzuUF4). No se guardan videos pesados en el repo (límite de GitHub y peso en el historial); `public/videos/` quedó sin uso.
- **Cauce:** su portada y galería salen de fotogramas de su grabación (los de la captura en vivo se descartaron por oscuros). Contemplar sumó dos fotogramas del ensayo.
- **node_modules** salió del repositorio (se agregó `.gitignore`).
- **Retrato:** `public/images/valentina.jpg` (foto nueva de Valentina). Las portadas de Dissonance, Contemplar lo infinito y Orquesta Corporal siguen siendo provisionales (salen de su propio material).

## Estado actual

- 29 páginas generadas (es/en); build sin errores y sin enlaces ni imágenes rotas.
- README real, `.gitignore` y esta guía actualizados.
- Primer despliegue publicado en `main` (commit 310bf1b, aprobado por Valentina el 11-nov-2026). Cambios posteriores (correo, fechas de Dissonance, MUSE, Pasos, Cosmos, Orquesta, galerías, enlaces a repos, sin nombres de equipo) siguen locales hasta su aprobación.
- Galerías con imágenes: todos menos Cosmos (Valentina buscará fotos de mejor calidad). Encantar usa capturas de su sitio en vivo (https://valengp2006.github.io/encantar/); el repo ya fue renombrado a `encantar` en GitHub.

## Pendientes

- Galería de Cosmos (fotos o video de la instalación en buena calidad; Valentina las buscará).
- Actualizar el remoto local de la carpeta `hechizos-disney` al repo `encantar` (GitHub redirige mientras tanto).
- Repo de Orquesta Corporal (si existe) para enlazarlo.
- Portadas finales de los proyectos: **se dejan para después** (decisión de Valentina). Pendientes: MUSE, Pasos de Tradición, Cosmos, Cauce y Encantar; galerías; imágenes de servicios; portadas definitivas de Dissonance, Contemplar y Orquesta; otra imagen para Jardín de Bruma.
- CV: está en Canva y hay que actualizarlo antes de subirlo; luego poner el archivo en `public/` y su nombre en `cv` de `src/data/site.ts`. Además, el perfil de LinkedIn también debe actualizarse (el enlace ya está en el sitio).
- Verificar herramientas del stack de Contemplar lo infinito, Orquesta Corporal, Cauce y Encantar, y revisar las traducciones al inglés.

## Documentación de Astro

Documentación completa: https://docs.astro.build

- [Rutas, páginas dinámicas y middleware](https://docs.astro.build/en/guides/routing/)
- [Componentes Astro](https://docs.astro.build/en/basics/astro-components/)
- [Contenido y colecciones](https://docs.astro.build/en/guides/content-collections/)
- [Estilos](https://docs.astro.build/en/guides/styling/)
- [Internacionalización](https://docs.astro.build/en/guides/internationalization/)
