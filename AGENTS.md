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
- **Pasos de Tradición** (taller 5): reconocimiento «Mejor proyecto del Taller 5: Experiencias Interactivas» (nombre exacto dado por Valentina; sin imagen de certificado por ahora); sitio https://valengp2006.github.io/pasos-de-tradicion/; portada: la página del Códice (cover.webp, aportada por Valentina); galería con imágenes de su propio sitio.
- **MUSE** se amplió con el contenido de su deck de Figma (https://www.figma.com/deck/D16IOQE3BsvhIg70jK0tMP/Portafolio-UX-UI): rol, problema, investigación, usuario objetivo, UI Kit, wireframes, prototipo y reflexión. La galería y la portada salen de diapositivas exportadas en 2000×1299 aportadas por Valentina (wireframes, UI Kit y prototipo; la portada es un recorte de los teléfonos sobre fondo negro). La diapositiva del usuario objetivo (persona "Oscar") sí se publicó tal cual por decisión de Valentina, aunque su foto es de stock con una marca de agua tenue (Vecteezy): si se consigue una imagen con licencia o generada, reemplazar `muse/persona.webp`. Enlace a la presentación completa: https://www.figma.com/deck/D16IOQE3BsvhIg70jK0tMP.
- **Presentación visual en TODOS los proyectos** (`src/components/VisualBlocks.astro`), con colores neutros de la paleta del sitio (papel, tinta, tarjetas cálidas; el color del proyecto solo en detalles como barras y bordes de cita). MUSE usa `blocks` propios (datos clave, problema con etiquetas, objetivos, columnas de rol, hallazgos con insight, persona, paleta/UI Kit con sus colores reales, flujo por pasos, chips y cita; los campos `color` de esos bloques se ignoran a propósito). Los demás proyectos convierten automáticamente `sections` en tarjetas numeradas, `system` en tarjetas de pasos y `stack` en etiquetas. Tipos: facts, statement, cards, sections, steps, columns, insight, persona, palette, flow, chips, quote. La galería, los videos, los reconocimientos y los enlaces se mantienen en todos.
- **Videos centrados:** una sola columna centrada si hay 1 video; 2 columnas si hay varios, y el último queda centrado si son impares.
- **Página /proyectos rediseñada:** nivel 1 = un caso grande (hero) + dos debajo; nivel 2 = tres tarjetas "tile" en 3 columnas (2 en tablet, 1 en móvil); nivel 3 = filas compactas con miniatura. Se evitan filas con una sola tarjeta. Menú móvil ajustado para que ES / EN no se corte.
- **Servicios:** ilustraciones aportadas por Valentina en `public/images/servicios/` (violeta = UX/UI y producto, dorado = experiencias interactivas, verde = patrimonio e impacto social); son decorativas (`alt=""`) y su fondo crema coincide con el del sitio.
- **Filtros en /proyectos:** barra pequeña de píldoras bajo la introducción (Todos · UX/UI y producto · Experiencias interactivas · Patrimonio cultural). Cada proyecto tiene `categories` en `projects.ts` (`ux`, `interactive`, `heritage`; puede tener varias). Al filtrar se muestra una cuadrícula plana de tarjetas; la barra solo aparece con JavaScript, recuerda el filtro en el hash de la URL (`#ux`) y anuncia el conteo a lectores de pantalla. Para agregar una categoría: tipo `Category`, textos en `copy.ts` (`cats`) y el arreglo `cats` de `ProjectsIndex.astro`.
- **Sobre mí, herramientas y habilidades:** se actualizaron según los proyectos publicados (`toolGroups` y `skills` en `copy.ts`, agrupadas por propósito; se quitaron Reaper y Canva, que ya no aparecen en ningún proyecto). Si cambian los proyectos, revisar estas listas.
- **Navegación:** al final de cada proyecto hay una barra compacta de una sola fila: [← miniatura · Proyecto anterior + nombre] · [Todos los proyectos] · [Siguiente proyecto + nombre · miniatura →] (`rel="prev"`/`rel="next"`). Sin tarjetas grandes, para que no resulte confusa. El orden es circular; en móvil se apila.
- **Orquesta Corporal** se amplió con la implementación técnica y las decisiones de diseño; documentación completa en Notion y versión funcionando en el navegador (p5.js Web Editor, requiere cámara); ambos enlaces están en el proyecto.
- **Dissonance** tiene su video "Recorrido completo (versión acelerada)" en YouTube (5wiIbKju99w).
- **Jardín de Bruma** es un proyecto solo conceptual: no tiene videos ni prototipo funcional y no se prevé agregarlos.
- **Cosmos** corrige su stack: público desde el teléfono (Node.js + Socket.io), performer en iPad (Open Stage Control), Strudel y TouchDesigner.
- **Enlaces a repositorios** (`links` con "Repositorio en GitHub"): Dissonance, Contemplar lo infinito, Cauce (why-bother), Encantar, Cosmos (Proyecto_Cosmos) y Pasos de Tradición. Orquesta Corporal (no tiene repo: solo el enlace directo del p5.js Web Editor y su Notion), MUSE y Jardín de Bruma no tienen repo enlazado.
- **Repo de Hechizos → `encantar`:** el enlace del sitio ya apunta a `Valengp2006/encantar`. Ya está renombrado (nov 2026) y su sitio vive en valengp2006.github.io/encantar/. La carpeta local y su remoto siguen con el nombre viejo.
- **Videos:** cada proyecto puede tener `videos` en `projects.ts`: `youtube` (ID; se carga solo al hacer clic, vía youtube-nocookie) o `src` (MP4 en `public/videos/`, con `poster`). Todos los videos actuales están en YouTube: Cosmos, Pasos de Tradición (4: Making of, Códice, Rastro de los Gestos y Cúpula de Legados), Cauce (mbFWkJXmFDI), Contemplar lo infinito (ki0KPbzuUF4) y Encantar (CHbMVxdAO8U). No se guardan videos pesados en el repo (límite de GitHub y peso en el historial); `public/videos/` quedó sin uso.
- **Cauce:** su portada y galería salen de fotogramas de su grabación (los de la captura en vivo se descartaron por oscuros). Contemplar sumó dos fotogramas del ensayo.
- **Favicon:** reemplazado el de Astro por un monograma "V" (fondo tinta #1F1B16, letra papel #FAF7F2): `public/favicon.svg`, `favicon.ico` y `apple-touch-icon.png`, enlazados en `Layout.astro`. Valentina confirmó que funciona bien (nov 2026).
- **node_modules** salió del repositorio (se agregó `.gitignore`).
- **Retrato:** `public/images/valentina.jpg` (foto nueva de Valentina). La portada de Dissonance es la terminal de ATLAS-NET (aportada por Valentina); las de Contemplar lo infinito y Orquesta Corporal siguen siendo provisionales (salen de su propio material).

## Estado actual

- 29 páginas generadas (es/en); build sin errores y sin enlaces ni imágenes rotas.
- README real, `.gitignore` y esta guía actualizados.
- Todo publicado en `main` y desplegado (nov 2026). El despliegue en GitHub Pages estuvo atascado ~24 h (ejecuciones #22, #23 y #25 en cola sin iniciar); se recuperó solo y el 12-nov un commit de prueba desplegó bien. Esas 3 ejecuciones fantasma pueden seguir apareciendo en cola. Para subir cambios sin desplegar, usar `[skip ci]` en el mensaje del commit. El workflow usa el grupo de concurrencia `pages-2`.
- Galerías con imágenes en todos los proyectos. Cosmos usa recortes de fotogramas de su video (visuales de TouchDesigner, terminal de Strudel y controlador), aportados por Valentina; puede reemplazarlos por fotos de la instalación de mejor calidad. Encantar usa capturas de su sitio en vivo (https://valengp2006.github.io/encantar/); el repo ya fue renombrado a `encantar` en GitHub.

## Pendientes

- Fotos de la instalación de Cosmos en mejor calidad (las actuales son recortes de video).
- Actualizar el remoto local de la carpeta `hechizos-disney` al repo `encantar` (GitHub redirige mientras tanto).
- Portadas finales de los proyectos: **se dejan para después** (decisión de Valentina). Pendientes: MUSE, Pasos de Tradición, Cosmos, Cauce y Encantar; galerías; imágenes de servicios; portadas definitivas de Contemplar y Orquesta; otra imagen para Jardín de Bruma.
- CV: está en Canva y hay que actualizarlo antes de subirlo; luego poner el archivo en `public/` y su nombre en `cv` de `src/data/site.ts`. Además, el perfil de LinkedIn también debe actualizarse (el enlace ya está en el sitio).
- Verificar herramientas del stack de Contemplar lo infinito, Orquesta Corporal, Cauce y Encantar, y revisar las traducciones al inglés.

## Documentación de Astro

Documentación completa: https://docs.astro.build

- [Rutas, páginas dinámicas y middleware](https://docs.astro.build/en/guides/routing/)
- [Componentes Astro](https://docs.astro.build/en/basics/astro-components/)
- [Contenido y colecciones](https://docs.astro.build/en/guides/content-collections/)
- [Estilos](https://docs.astro.build/en/guides/styling/)
- [Internacionalización](https://docs.astro.build/en/guides/internationalization/)
