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

- Trabajar en `main` (decisión de Valentina, reafirmada el 27-nov-2026: sin ramas secundarias salvo que ella la pida).
- **No hacer commit ni push sin que Valentina haya revisado y aprobado los cambios** (revisión con `npm run dev`). Al aprobar, el agente hace el commit y el push a `origin/main`; el push dispara el despliegue a GitHub Pages.
- Mensajes de commit en español, descriptivos, con la línea de coautoría que indique el entorno.

## Decisiones tomadas

- **Orden y niveles (27-nov-2026):** el inicio destaca solo tres (`featured`): Dissonance, MUSE y Orquesta Corporal. Casos principales (`tier: 1`, página completa): Dissonance, MUSE, Orquesta Corporal, Pasos de Tradición y Cosmos. "También" (`tier: 2`, versión corta): Jardín de Bruma y Contemplar lo infinito. "Laboratorio" (`tier: 3`, versión corta): Cauce y Encantar. Astrozoa queda fuera. El orden del arreglo es el de prev/siguiente. La home ya no tiene la fila extra de proyectos de nivel 2.
- **Estructura de caso principal (27-nov-2026):** nueve secciones numeradas (constante `CH` en `projects.ts`): 1 Resumen (materia y año) · 2 Rol y equipo (Mi parte / En equipo / No fue mío) · 3 Reto · 4 Investigación y concepto · 5 Diseño y proceso · 6 Evidencias · 7 Pruebas o resultados (en Dissonance, "Pruebas de usabilidad": 5 participantes, hallazgo → cambio) · 8 Aprendizajes · 9 Enlaces. Las versiones cortas usan solo resumen, idea, evidencias y enlaces.
- **Todo el contenido de un proyecto son `blocks`** (`VisualBlocks.astro`): chapter, text, facts, statement, quote, steps, cards, columns, pairs, flow, chips, metrics, gallery, videos (con `vertical` para videos de móvil), awards y links. `Project.astro` solo pinta banner, aviso, bloques y navegación. Ya no existen los campos sections/decisions/system/stack/outcome. Colores neutros del sitio, el color del proyecto solo en detalles y sin cajas oscuras para resaltar (decisión de Valentina).
- **Tarjetas (27-nov-2026):** título, año, etiquetas, "Proyecto académico", marcador "Individual" o "En equipo", texto de 2-3 líneas y "Mi rol" en una línea. La tarjeta grande pone la imagen arriba y el texto debajo. Dissonance lleva "★ 4 distinciones DEX 2026" y aclara que la portada es ATLAS-NET, "la web ficticia de la misión" (no usar "Dissonance-1" en títulos ni pies).
- **Filtros en /proyectos:** Todos · Experiencia inmersiva · UX/UI · Visión artificial · Audiovisual (`immersive`, `ux`, `vision`, `av`; un proyecto puede tener varias). La barra solo aparece con JavaScript, recuerda el filtro en el hash y anuncia el conteo.
- **Pendientes visibles:** lo que no está confirmado se escribe como "[PENDIENTE: …]" en la propia página (pedido de Valentina). Reemplazar cada uno cuando llegue el dato; nunca inventarlo.
- **Primera persona solo para lo propio;** lo del equipo, en plural. No se nombran integrantes. Niveles reales: Figma intermedio-avanzado, Unity básico, TouchDesigner básico-intermedio, programación con apoyo de IA.
- **Dissonance:** parte de Valentina: dirección creativa, diseño de experiencia, diseño e implementación del sitio web y organización de la documentación (con apoyo de IA). En equipo: los tres actos y la traducción de la investigación. El desarrollo en VR no es suyo.
- **Pasos de Tradición:** Valentina implementó la realidad aumentada en Unity (Vuforia) con apoyo de IA y tutoriales, hizo 4 entrevistas con el equipo, escribió el guion del Códice y diseñó la arquitectura de información.
- **Cosmos es un proyecto individual** (según el caso documentado en Notion, exportado en julio de 2026, y el repositorio); antes figuraba como proyecto en equipo.
- **MUSE:** investigación en números (27 respuestas, 5 entrevistas) en la sección 4 y 5 pruebas de usabilidad en la 7. Video del prototipo: YouTube R69ZPx201gw (vertical).
- **Orquesta Corporal (27-nov-2026):** la experiencia en vivo es https://valengp2006.github.io/orquesta-corporal/ (reemplaza el enlace del editor de p5.js), con repo https://github.com/Valengp2006/orquesta-corporal, documentación en Notion y video en YouTube (PO6iQugyyH8). Portada: gran final (`orquesta/cover.jpg`); galería de 12 capturas de la experiencia en orden + 3 diagramas de diseño. Las capturas originales (1920×1080 PNG) vienen de `fotos-orquesta-corporal.zip` y se guardan como JPG a 1600 px.

- **MUSE como trabajo en equipo (CV, nov 2026):** los textos dicen que Valentina participó en la investigación UX y en el diseño de wireframes, flujos, UI kit y prototipo, con el trabajo repartido entre el equipo; sus aportes destacados son el flujo de eventos, «Artista de la Semana», el UI Kit y la navegación. La identidad gráfica se atribuye al equipo ("Con el equipo construimos…"). Evitar frases que presenten MUSE como trabajo individual.


- **Atribución en Dissonance (CV actualizado):** los textos distinguen lo del equipo de lo propio. "Con el equipo traducimos la investigación en seis intenciones…"; la dirección creativa y la coherencia sí son de Valentina; ella diseñó e implementó el sitio web (con apoyo de IA) y organizó la documentación del proceso. Rol: Dirección creativa · Diseño de experiencia · Diseño del sitio web · Documentación del proceso.
- **Orquesta Corporal:** la materia se llama "Visión Artificial" (ES; en inglés se deja "Computer Vision", que es el término equivalente) y el 60 FPS se describe como "estables durante casi todas las pruebas".

- **PRINCIPIO DE TRANSPARENCIA (CV, nov 2026):** el aporte de Valentina es la investigación, el diseño de interacción y de experiencia; la programación (p5.js, ml5.js, JavaScript, HTML/CSS) la hace con apoyo de IA y debe decirse con claridad, sin esconderlo ni inflarlo. Unity y TouchDesigner son nivel básico / básico-intermedio. Por eso los roles de Cosmos, Contemplar y Orquesta dicen "Prototipado con apoyo de IA" (no "Programación creativa" ni "Visión por computador"), Orquesta aclara en "Implementación" quién diseñó y quién programó, y Servicios dice que la implementación se hace con apoyo de IA. No agregar texto que atribuya programación propia.
- **CV publicado (nov 2026):** `public/cv/CV-Valentina-Garzon-Perez-UX-UI.pdf`, tomado de "Hoja de vida contexto profesional.pdf" (versión de 1 página hecha en Canva). El botón "Descargar CV" está en Contacto (`site.cv` y `site.cvFilename` en `site.ts`); el enlace usa `download` para que se guarde con ese nombre, y el PDF lleva título y autor propios (sin "Canva"). Es solo en español (el botón en inglés dice "in Spanish"). El PDF contiene el celular y el correo institucional (UPB) de Valentina: decisión suya publicarlos. Para actualizarlo: reemplazar el archivo conservando el nombre (o cambiar `site.ts`) y volver a fijar título/autor. El CV solo lista Dissonance, Pasos, MUSE y Orquesta; el sitio muestra 9 proyectos.
- **Sobre mí (habilidades y herramientas):** cinco grupos con nivel en palabras (Diseño e investigación; Experiencias interactivas; Desarrollo web; IA generativa; Producción y documentación sin nivel), más Idiomas ("Inglés: intermedio-alto, B2") y "Formación en curso" (Especialización de diseño UX/UI de Domestika y Basics: Unity de Domestika). Tone.js, Strudel, Open Stage Control, WebGPU, Node.js, Socket.io y Vuforia NO van ahí; solo como stack de cada proyecto. "Gamificación (propuesta de diseño)" se conserva por coherencia con Servicios y Bruma. Hay un párrafo de transparencia en el texto de Sobre mí.

- **Posicionamiento (nov 2026):** diseñadora UX/UI y de producto con enfoque en experiencias interactivas; busca prácticas 2027-2 y acepta freelance. Ingeniería en Diseño de Entretenimiento Digital, UPB, Medellín. Semestre: "séptimo semestre" (Sobre mí) y "7.º semestre" (hero de Inicio), solo con el número, sin periodo ni año; hay comentarios TODO en `copy.ts` para actualizarlo al pasar a octavo. Ya no se escribe "graduación prevista 2028".
- **Bilingüe es/en** con rutas `/es/` y `/en/` (nombres de sección traducidos). La raíz redirige según el idioma del navegador.
- **Luna y las Estrellas Perdidas se retiró** del portafolio (no es su enfoque actual).
- **Dissonance** lleva los 4 reconocimientos DEX 2026 (certificados del 10-nov-2026) con la imagen de cada certificado: Mejor Producto: Experiencias Interactivas; Mejor Interacción Jugador-Entorno; Estilo Visual Más Original; Mención de Honor Taller 6. Su rol: dirección creativa. Los certificados se recortaron para quitar la marca de agua de CamScanner (originales en Downloads/ de Valentina).
- **Hechizos pasó a llamarse "Encantar"** (slug `encantar`): el nombre original usaba una marca de terceros y ningún texto la menciona. Viene del verbo central del proyecto.
- **Jardín de Bruma** ya está publicado: es un proyecto real para la marca Bruma (emprendimiento de Medellín), en equipo de 3 (Miranda López Gómez, Nikki Ortiz Ospina y Valentina), octubre 2026. El contenido sale de su presentación "BRUMA X GAMIFICACIÓN"; su rol (confirmado por ella): planteamiento de la idea y presentación de la propuesta, en conjunto con sus compañeras. La portada es una captura de la diapositiva de portada y se queda así por ahora.
- **Fechas:** Dissonance, julio a noviembre 2026; Contemplar lo infinito, septiembre 2026; Orquesta Corporal, Cauce, Encantar y Jardín de Bruma, octubre 2026.
- **Pasos de Tradición** (taller 5): reconocimiento «Mejor proyecto del Taller 5: Experiencias Interactivas» (nombre exacto dado por Valentina; sin imagen de certificado por ahora); sitio https://valengp2006.github.io/pasos-de-tradicion/; portada: la página del Códice (cover.webp, aportada por Valentina); galería con imágenes de su propio sitio.
- **MUSE** se amplió con el contenido de su deck de Figma (https://www.figma.com/deck/D16IOQE3BsvhIg70jK0tMP/Portafolio-UX-UI): rol, problema, investigación, usuario objetivo, UI Kit, wireframes, prototipo y reflexión. La galería y la portada salen de diapositivas exportadas en 2000×1299 aportadas por Valentina (wireframes, UI Kit y prototipo; la portada es un recorte de los teléfonos sobre fondo negro). La diapositiva del usuario objetivo (persona "Oscar") sí se publicó tal cual por decisión de Valentina, aunque su foto es de stock con una marca de agua tenue (Vecteezy): si se consigue una imagen con licencia o generada, reemplazar `muse/persona.webp`. Enlace a la presentación completa: https://www.figma.com/deck/D16IOQE3BsvhIg70jK0tMP.
- **Videos centrados:** una sola columna centrada si hay 1 video; 2 columnas si hay varios, y el último queda centrado si son impares.
- **Servicios (4 bloques, nov 2026):** 1) Investigación UX y diseño UI de producto; 2) Gamificación y fidelización para emprendimientos (nuevo, basado en Jardín de Bruma); 3) Experiencias interactivas para eventos e instalaciones; 4) Patrimonio cultural e impacto social (texto sin cambios). Textos en `copy.ts` (`services`), con la intro dada por Valentina. Ilustraciones en `public/images/servicios/`: `ux-ui` (violeta), `gamificacion` (verde isométrica: progreso y niveles), `experiencias-interactivas` (dorada) y `patrimonio-cultural` (verde de navegador con código). Son decorativas (`alt=""`). Sobra la ilustración violeta de audio, por si se quiere usar en otro lugar. Las preguntas se muestran abiertas (no colapsables).
- **Redacción académica:** Sobre mí dice "He desarrollado proyectos académicos para marcas, patrimonio cultural y problemáticas sociales"; evitar frases que suenen a experiencia profesional. En Sobre mí, la mención se muestra como "Mención de Honor, Taller 6: Experiencias Interactivas" (campo `kind` del premio).
- **Íconos ↗ solo en enlaces externos** (correo, LinkedIn, GitHub, sitios, repos). Los internos (tarjetas, "Ver proyecto", "Escríbeme", "Sobre mí", "Ver todos", reconocimientos) no llevan ícono; la tarjeta grande de la home usa →, y "Descargar CV" usa ↓.
- La gamificación ya se refleja en Inicio (área «Marcas y producto digital», que ahora menciona gamificación y fidelización para emprendimientos) y en Contacto («Enfoque» suma «Gamificación»).
- La portada de Jardín de Bruma es la diapositiva de portada recortada para que no se vean los nombres de las integrantes (`public/images/projects/jardin-de-bruma/cover.jpg`, sin la fila inferior).
- **Sobre mí, herramientas y habilidades:** se actualizaron según los proyectos publicados (`toolGroups` y `skills` en `copy.ts`, agrupadas por propósito; se quitaron Reaper y Canva, que ya no aparecen en ningún proyecto). Si cambian los proyectos, revisar estas listas.
- **Pie de página:** solo "Medellín, Colombia — 2026" (Valentina pidió quitar la frase de prácticas 2027-2 del footer; la disponibilidad se sigue mostrando en la home y en Contacto).
- **Navegación:** al final de cada proyecto hay una barra compacta de una sola fila: [← miniatura · Proyecto anterior + nombre] · [Todos los proyectos] · [Siguiente proyecto + nombre · miniatura →] (`rel="prev"`/`rel="next"`). Sin tarjetas grandes, para que no resulte confusa. El orden es circular; en móvil se apila.
- **Orquesta Corporal** se amplió con la implementación técnica y las decisiones de diseño; documentación completa en Notion y versión funcionando en el navegador (p5.js Web Editor, requiere cámara); ambos enlaces están en el proyecto.
- **Dissonance** tiene su video "Recorrido completo (versión acelerada)" en YouTube (5wiIbKju99w).
- **Jardín de Bruma** es un proyecto solo conceptual: no tiene videos ni prototipo funcional y no se prevé agregarlos.
- **Cosmos** corrige su stack: público desde el teléfono (Node.js + Socket.io), performer en iPad (Open Stage Control), Strudel y TouchDesigner.
- **Enlaces a repositorios** (`links` con "Repositorio en GitHub"): Dissonance, Contemplar lo infinito, Cauce (why-bother), Encantar, Cosmos (Proyecto_Cosmos) y Pasos de Tradición. MUSE y Jardín de Bruma no tienen repo enlazado.
- **Repo de Hechizos → `encantar`:** el enlace del sitio ya apunta a `Valengp2006/encantar`. Ya está renombrado (nov 2026) y su sitio vive en valengp2006.github.io/encantar/. La carpeta local y su remoto siguen con el nombre viejo.
- **Videos:** cada proyecto puede tener `videos` en `projects.ts`: `youtube` (ID; se carga solo al hacer clic, vía youtube-nocookie) o `src` (MP4 en `public/videos/`, con `poster`). Todos los videos actuales están en YouTube: Cosmos, Pasos de Tradición (4: Making of, Códice, Rastro de los Gestos y Cúpula de Legados), Cauce (mbFWkJXmFDI), Contemplar lo infinito (ki0KPbzuUF4) y Encantar (CHbMVxdAO8U). No se guardan videos pesados en el repo (límite de GitHub y peso en el historial); `public/videos/` quedó sin uso.
- **Cauce:** su portada y galería salen de fotogramas de su grabación (los de la captura en vivo se descartaron por oscuros). Contemplar sumó dos fotogramas del ensayo.
- **Favicon:** reemplazado el de Astro por un monograma "V" (fondo tinta #1F1B16, letra papel #FAF7F2): `public/favicon.svg`, `favicon.ico` y `apple-touch-icon.png`, enlazados en `Layout.astro`. Valentina confirmó que funciona bien (nov 2026).
- **node_modules** salió del repositorio (se agregó `.gitignore`).
- **Retrato:** `public/images/valentina.jpg` (foto nueva de Valentina). La portada de Dissonance es la terminal de ATLAS-NET (aportada por Valentina); las de Contemplar lo infinito y Orquesta Corporal siguen siendo provisionales (salen de su propio material).

## Estado actual

- 29 páginas generadas (es/en); build sin errores, sin enlaces ni imágenes rotas y con la misma estructura en ambos idiomas.
- Reestructura de los 9 proyectos publicada en `main` (27-nov-2026), por pedido de Valentina, con marcas [PENDIENTE] visibles. Para subir cambios sin desplegar, usar `[skip ci]` en el mensaje del commit. El workflow usa el grupo de concurrencia `pages-2`.
- Capturas de la web ficticia y del sitio de Dissonance en `public/images/projects/dissonance/` (tomadas de las versiones publicadas).

## Pendientes

- [PENDIENTE] en páginas: Dissonance (fecha y perfil de las pruebas, cuáles dos puzzles quedaron, cambios en VR, aprendizaje como directora creativa); MUSE (materia, qué no fue suyo, cambios tras las pruebas); Orquesta (pruebas con personas, aprendizajes); Pasos (pruebas con personas); Cosmos (materia, resultados medidos).
- Confirmar atribuciones del sitio web de Dissonance y de la realidad aumentada de Pasos frente a los créditos publicados en los sitios de cada proyecto.
- Portadas finales de los proyectos, fotos de Cosmos en mejor calidad, remoto local de `hechizos-disney` al repo `encantar`, actualizar CV y LinkedIn.
- Actualizar el semestre al pasar a octavo (TODO en `copy.ts`).

## Documentación de Astro

Documentación completa: https://docs.astro.build

- [Rutas, páginas dinámicas y middleware](https://docs.astro.build/en/guides/routing/)
- [Componentes Astro](https://docs.astro.build/en/basics/astro-components/)
- [Contenido y colecciones](https://docs.astro.build/en/guides/content-collections/)
- [Estilos](https://docs.astro.build/en/guides/styling/)
- [Internacionalización](https://docs.astro.build/en/guides/internationalization/)
