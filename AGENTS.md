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
- No usar marcas de terceros en nombres o textos de proyectos (por ejemplo, Hechizos no menciona la marca original).
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
- **Fechas:** Contemplar lo infinito, septiembre 2026; Orquesta Corporal, Cauce, Encantar y Jardín de Bruma, octubre 2026.
- **node_modules** salió del repositorio (se agregó `.gitignore`).
- **Retrato:** `public/images/valentina.jpg` (foto nueva de Valentina). Las portadas de Dissonance, Contemplar lo infinito y Orquesta Corporal siguen siendo provisionales (salen de su propio material).

## Estado actual

- 29 páginas generadas (es/en); build sin errores y sin enlaces ni imágenes rotas.
- README real, `.gitignore` y esta guía actualizados.
- Publicado en `main` (commit y push aprobados por Valentina el 11-nov-2026); LinkedIn ya enlazado en Contacto.

## Pendientes

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
