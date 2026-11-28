import type { L } from "../i18n";

// ─────────────────────────────────────────────────────────────────────────────
// TODO EL CONTENIDO DE PROYECTOS VIVE AQUÍ.
// Para agregar uno: copia un objeto, cambia `slug` y los textos (es/en) y
// déjalo en el lugar del arreglo que quieras (el orden del arreglo es el orden
// en el sitio). `draft: true` lo oculta de todo el sitio hasta que esté listo.
//
// tier 1 = caso principal (página completa con las 9 secciones de `CH`)
// tier 2 = "También" (versión corta)
// tier 3 = laboratorio (versión corta)
// featured = aparece en el inicio (solo tres)
//
// Lo que falte por confirmar se escribe como "[PENDIENTE: …]": se ve en
// `astro dev` y se oculta en el sitio publicado (ver `pending.ts`).
// Imágenes: archivos en public/images/projects/<slug>/ ; aquí se escribe la
// ruta SIN `public` y SIN base, p. ej. "images/projects/dissonance/cover.webp".
// Si `cover` falta, la tarjeta usa el color del proyecto (no se rompe nada).
// ─────────────────────────────────────────────────────────────────────────────

export interface Award {
  /** Tipo de distinción (p. ej. "Mención de Honor"); Sobre mí lo antepone al título. */
  kind?: L;
  title: L;
  detail: L;
  image?: string;
}
export interface GalleryItem {
  src: string;
  alt: L;
}
export interface Video {
  title: L;
  /** ID de YouTube (lo que va después de youtu.be/). Se carga solo al hacer clic. */
  youtube?: string;
  /** Archivo en public/ (ruta sin base), p. ej. "videos/mi-video.mp4". */
  src?: string;
  /** Imagen de portada del video (ruta sin base). */
  poster?: string;
  /** Video vertical (grabación de móvil o Short). */
  vertical?: boolean;
}
export interface Link {
  label: L;
  url: string;
}
export type Block =
  /** Encabezado numerado de sección (la numeración es automática). */
  | { type: "chapter"; title: L }
  | { type: "text"; label?: L; body: L }
  | { type: "facts"; label?: L; items: { label: L; value: L }[] }
  | { type: "statement"; label?: L; body: L }
  | { type: "quote"; label?: L; body: L }
  | { type: "steps"; label?: L; body?: L; items: { title: L; body: L }[] }
  | { type: "cards"; label?: L; body?: L; items: { title: L; body: L }[] }
  | { type: "columns"; label?: L; body?: L; items: { title: L; bullets: L[] }[] }
  /** Parejas "hallazgo → cambio", "reto → solución" o "prueba → resultado". */
  | { type: "pairs"; label?: L; a: L; b: L; items: { title?: L; a: L; b: L }[] }
  | { type: "flow"; label?: L; body?: L; steps: L[] }
  | { type: "chips"; label?: L; body?: L; items: L[] }
  | { type: "metrics"; label?: L; items: { value: L; label: L }[] }
  | { type: "gallery"; label?: L; items: GalleryItem[] }
  | { type: "videos"; label?: L; items: Video[] }
  | { type: "awards"; label?: L; items: Award[] }
  | { type: "links"; label?: L; items: Link[] };

export type Category = "immersive" | "ux" | "vision" | "av";

export interface Project {
  slug: string;
  tier: 1 | 2 | 3;
  featured?: boolean;
  /** Categorías para los filtros de /proyectos (puede tener varias). */
  categories: Category[];
  draft?: boolean;
  title: string;
  year: string;
  mode: "individual" | "team";
  tags: L[];
  /** Texto de 2-3 líneas de la tarjeta. */
  summary: L;
  /** Rol personal en una línea. */
  roleLine: L;
  /** Distintivo de la tarjeta. */
  badge?: L;
  color: string;
  tint: string;
  textColor: string;
  cover?: string;
  coverAlt: L;
  /** Encuadre de la portada en el banner del proyecto (CSS object-position). */
  coverPosition?: string;
  /** Aclaración visible sobre la imagen de portada. */
  coverNote?: L;
  /** Aviso visible bajo el banner (p. ej. ejercicio académico). */
  note?: L;
  /** También se listan en Sobre mí. */
  awards?: Award[];
  blocks: Block[];
}

const t = (es: string, en: string): L => ({ es, en });
const same = (x: string): L => ({ es: x, en: x });

/** Las 9 secciones de un caso principal, en orden. */
const CH = {
  resumen: { type: "chapter", title: t("Resumen", "Overview") },
  rol: { type: "chapter", title: t("Rol y equipo", "Role and team") },
  reto: { type: "chapter", title: t("Reto", "Challenge") },
  investigacion: { type: "chapter", title: t("Investigación y concepto", "Research and concept") },
  diseno: { type: "chapter", title: t("Diseño y proceso", "Design and process") },
  evidencias: { type: "chapter", title: t("Evidencias", "Evidence") },
  pruebas: { type: "chapter", title: t("Pruebas o resultados", "Testing and results") },
  usabilidad: { type: "chapter", title: t("Pruebas de usabilidad", "Usability testing") },
  aprendizajes: { type: "chapter", title: t("Aprendizajes", "Learnings") },
  enlaces: { type: "chapter", title: t("Enlaces", "Links") },
} satisfies Record<string, Block>;

const L_ = {
  materia: t("Materia", "Course"),
  anio: t("Año", "Year"),
  contexto: t("Contexto", "Context"),
  tools: t("Herramientas", "Tools"),
  mine: t("Mi parte", "My part"),
  team: t("En equipo", "As a team"),
  solo: t("No aplica: proyecto individual", "Not applicable: individual project"),
  challenge: t("Reto", "Challenge"),
  solution: t("Solución", "Solution"),
};

/** Las dos columnas de "Rol y equipo". El crédito a lo que hicieron otras personas va como última línea de `team`. */
const roles = (mine: L[], team: L[]): Block => ({
  type: "columns",
  items: [
    { title: L_.mine, bullets: mine },
    { title: L_.team, bullets: team },
  ],
});

const dissonanceAwards: Award[] = [
  {
    title: { es: "Mejor Producto: Experiencias Interactivas", en: "Best Product: Interactive Experiences" },
    detail: { es: "Reconocimiento · Muestra DEX UPB, 10 de noviembre de 2026", en: "Recognition · DEX UPB Showcase, November 10, 2026" },
    image: "images/dex/mejor-producto.jpg",
  },
  {
    title: { es: "Mejor Interacción Jugador-Entorno", en: "Best Player–Environment Interaction" },
    detail: { es: "Reconocimiento · Muestra DEX UPB, 10 de noviembre de 2026", en: "Recognition · DEX UPB Showcase, November 10, 2026" },
    image: "images/dex/interaccion-jugador-entorno.jpg",
  },
  {
    title: { es: "Estilo Visual Más Original", en: "Most Original Visual Style" },
    detail: { es: "Reconocimiento · Muestra DEX UPB, 10 de noviembre de 2026", en: "Recognition · DEX UPB Showcase, November 10, 2026" },
    image: "images/dex/estilo-visual.jpg",
  },
  {
    kind: { es: "Mención de Honor", en: "Honorable Mention" },
    title: { es: "Taller 6: Experiencias Interactivas", en: "Workshop 6: Interactive Experiences" },
    detail: { es: "Mención de Honor · Muestra DEX UPB, 10 de noviembre de 2026", en: "Honorable Mention · DEX UPB Showcase, November 10, 2026" },
    image: "images/dex/mencion-honor-taller-6.jpg",
  },
];

const pasosAwards: Award[] = [
  {
    title: { es: "Mejor proyecto del Taller 5: Experiencias Interactivas", en: "Best project of Workshop 5: Interactive Experiences" },
    detail: { es: "Reconocimiento · Taller 5, Ingeniería en Diseño de Entretenimiento Digital, UPB", en: "Recognition · Workshop 5, Digital Entertainment Design Engineering, UPB" },
  },
];

export const projects: Project[] = [
  // ───────────────────────────── CASOS PRINCIPALES ──────────────────────────
  {
    slug: "dissonance",
    tier: 1,
    featured: true,
    categories: ["immersive", "av"],
    title: "Dissonance",
    year: "2026",
    mode: "team",
    tags: [t("Experiencia inmersiva", "Immersive experience"), t("Narrativa interactiva", "Interactive narrative"), t("Dirección creativa", "Creative direction")],
    summary: t(
      "Ecosistema narrativo en tres actos (video interactivo, sitio web y VR cooperativa) sobre una misión espacial de dos personas, astronauta y operador en Tierra, que resuelven puzzles bajo un sonido que altera lo que perciben.",
      "A three-act narrative ecosystem (interactive video, website and cooperative VR) about a two-person space mission, astronaut and ground operator, who solve puzzles under a sound that alters what they perceive.",
    ),
    roleLine: t("Dirección creativa y diseño de experiencia", "Creative direction and experience design"),
    badge: t("★ 4 distinciones DEX 2026", "★ 4 DEX 2026 distinctions"),
    color: "#2B3A67",
    tint: "#E3E8F6",
    textColor: "#1F2B52",
    cover: "images/projects/dissonance/cover.webp",
    coverPosition: "center bottom",
    coverAlt: t(
      "Terminal de ATLAS-NET, web ficticia de la misión: «Revise la convocatoria y envíe su postulación»",
      "ATLAS-NET terminal, the mission's fictional website: “Review the call and submit your application”",
    ),
    coverNote: t("En la imagen, ATLAS-NET: la web ficticia de la misión.", "In the image, ATLAS-NET: the mission's fictional website."),
    awards: dissonanceAwards,
    blocks: [
      CH.resumen,
      {
        type: "text",
        body: t(
          "Dissonance es un ecosistema narrativo de terror cósmico en tres actos: video interactivo, sitio web y VR cooperativa. La persona cree entrar a un proceso de reclutamiento para una misión espacial; a medida que decide, investiga y coopera, aparecen contradicciones que debilitan su confianza en la organización, en la información y en su propia percepción.",
          "Dissonance is a cosmic-horror narrative ecosystem in three acts: interactive video, website and cooperative VR. Participants believe they are joining a recruitment process for a space mission; as they decide, investigate and cooperate, contradictions erode their trust in the organization, in the information and in their own perception.",
        ),
      },
      {
        type: "facts",
        items: [
          { label: L_.materia, value: t("Taller 6: Experiencias Interactivas", "Workshop 6: Interactive Experiences") },
          { label: L_.anio, value: t("2026 (julio – noviembre)", "2026 (July – November)") },
          { label: L_.contexto, value: t("Proyecto académico en equipo · UPB, Medellín", "Academic team project · UPB, Medellín") },
          { label: t("Resultado", "Outcome"), value: t("4 distinciones en la muestra DEX 2026", "4 distinctions at the DEX 2026 showcase") },
        ],
      },

      CH.rol,
      roles(
        [
          t("Dirección creativa", "Creative direction"),
          t("Diseño de experiencia", "Experience design"),
          t("Redacté e implementé el sitio público del proyecto, con apoyo de Claude Code", "I wrote and implemented the project's public website, with Claude Code's support"),
          t("Hice el diseño inicial del sitio ficticio ATLAS-NET", "I made the initial design of the fictional ATLAS-NET site"),
          t("Organicé la documentación del proceso, con apoyo de IA", "I organized the process documentation, with AI support"),
        ],
        [
          t("Diseñamos los tres actos", "We designed the three acts"),
          t("Traducimos la investigación en decisiones de diseño", "We translated the research into design decisions"),
          t("ATLAS-NET se desarrolló entre un compañero y yo, con varias versiones; él implementó el sitio", "ATLAS-NET was developed by a teammate and me, across several versions; he implemented the site"),
          t("El desarrollo en VR fue producido por compañeros del equipo", "The VR development was produced by teammates"),
        ],
      ),
      {
        type: "text",
        body: t(
          "Desde la dirección creativa mantuve la coherencia entre narrativa, recorrido del participante, sonido e imagen.",
          "As creative director I kept narrative, participant journey, sound and visuals coherent.",
        ),
      },

      CH.reto,
      {
        type: "quote",
        body: t(
          "¿Cómo hacer que una persona experimente la incertidumbre desde adentro, en lugar de observarla desde afuera?",
          "How can we make people experience uncertainty from the inside, instead of watching it from the outside?",
        ),
      },
      {
        type: "text",
        body: t(
          "Queríamos que la tensión creciera sin depender de sobresaltos ni de violencia explícita: información incompleta, contradicciones entre lo que dice la organización y lo que muestran sus archivos, y un sonido que aumenta de forma gradual.",
          "We wanted tension to grow without relying on jump scares or explicit violence: incomplete information, contradictions between what the organization says and what its files show, and a sound that builds gradually.",
        ),
      },

      CH.investigacion,
      {
        type: "text",
        body: t(
          "Antes de diseñar investigamos cómo las personas viven el universo y el miedo desde cinco ejes (geográfico, temporal, sociocultural, emocional y tecnológico), con una encuesta, entrevistas y la revisión de 12 fuentes, de Burke y Lovecraft a estudios sobre el «efecto panorámico» en VR.",
          "Before designing, we researched how people relate to the universe and to fear through five lenses (geographic, temporal, sociocultural, emotional and technological), with a survey, interviews and a review of 12 sources, from Burke and Lovecraft to studies on the overview effect in VR.",
        ),
      },
      {
        type: "metrics",
        items: [
          { value: same("39"), label: t("respuestas de encuesta", "survey responses") },
          { value: same("11"), label: t("entrevistas", "interviews") },
          { value: same("12"), label: t("fuentes revisadas", "sources reviewed") },
          { value: t("69,2 %", "69.2%"), label: t("siente mucha incomodidad ante estar solo/a en el espacio", "feel very uncomfortable at the idea of being alone in space") },
        ],
      },
      {
        type: "cards",
        label: t("Cuatro hallazgos", "Four findings"),
        items: [
          { title: t("Inmersión y sentidos", "Immersion and senses"), body: t("La inmersión aumenta al perder las referencias del mundo real y al involucrar varios sentidos.", "Immersion grows when real-world references fade and several senses are involved.") },
          { title: t("Inmensidad y soledad", "Immensity and loneliness"), body: t("El miedo espacial se intensifica cuando la inmensidad se combina con el aislamiento.", "Fear of space intensifies when immensity meets isolation.") },
          { title: t("Incertidumbre y control", "Uncertainty and control"), body: t("Perder el control sobre el propio destino perturba más que la posibilidad de morir.", "Losing control over one's fate is more disturbing than the possibility of dying.") },
          { title: t("Sonido", "Sound"), body: t("Con poca visibilidad, el sonido es la herramienta principal para generar alerta.", "With limited visibility, sound is the main tool to create alertness.") },
        ],
      },
      {
        type: "chips",
        label: t("De ahí salieron seis decisiones de diseño", "They led to six design decisions"),
        items: [
          t("Priorizar el diseño sonoro", "Put sound design first"),
          t("VR como base, con poca interfaz", "VR as the base, with minimal interface"),
          t("La vulnerabilidad como fuente de miedo", "Vulnerability as the source of fear"),
          t("Una historia previa que no se explica", "A backstory that is never spelled out"),
          t("Mostrar la inmensidad y la pequeñez", "Show immensity and smallness"),
          t("Incertidumbre entre el asombro y el terror", "Uncertainty between awe and terror"),
        ],
      },

      CH.diseno,
      {
        type: "steps",
        label: t("Tres actos", "Three acts"),
        items: [
          { title: t("Acto I · Decidir", "Act I · Decide"), body: t("Video interactivo con una convocatoria de Atlas Corporation, la organización ficticia, y puntos de decisión. Una persona.", "Interactive video with a call from Atlas Corporation, the fictional organization, and decision points. One person.") },
          { title: t("Acto II · Buscar", "Act II · Search"), body: t("La web ficticia de la misión: historia, documentos y postulación. Una persona.", "The mission's fictional website: history, documents and application. One person.") },
          { title: t("Acto III · Sobrevivir", "Act III · Survive"), body: t("VR cooperativa y estación de control en PC, con roles complementarios: astronauta y operador en Tierra. Dos personas.", "Cooperative VR and a PC control station, with complementary roles: astronaut and ground operator. Two people.") },
        ],
      },
      {
        type: "flow",
        label: t("Flujo del participante", "Participant flow"),
        steps: [
          t("Ve el video y decide", "Watches the video and decides"),
          t("Entra a la web ficticia de la misión", "Enters the mission's fictional website"),
          t("Revisa la misión y los documentos", "Reviews the mission and the documents"),
          t("Se postula: individual o en pareja, y puesto", "Applies: alone or as a pair, and picks a position"),
          t("Coopera como astronauta u operador", "Cooperates as astronaut or operator"),
          t("Resuelve los puzzles", "Solves the puzzles"),
          t("Cinemática final", "Final cinematic"),
        ],
      },
      {
        type: "cards",
        label: t("Cinco puzzles que diseñamos", "Five puzzles we designed"),
        body: t(
          "El diseño planteó cinco puzzles con la información repartida entre los dos roles. La versión final quedó con dos puzzles probados y una cinemática final. [PENDIENTE: cuáles dos quedaron]",
          "The design proposed five puzzles with information split between the two roles. The final version ended with two tested puzzles and a final cinematic. [PENDIENTE: which two made it]",
        ),
        items: [
          { title: t("Recolección de muestras", "Sample collection"), body: t("Introductorio. El operador guía un dron mientras el astronauta, con un mapa, le indica dónde hay buena señal; ambos activan el lanzamiento a la vez.", "Introductory. The operator drives a drone while the astronaut, with a map, points to where the signal is good; both trigger the launch at once.") },
          { title: t("Lanzamiento de señal", "Signal launch"), body: t("Introductorio. El operador identifica el Sol y su ángulo; el astronauta ajusta la palanca y lanza la sonda.", "Introductory. The operator identifies the Sun and its angle; the astronaut sets the lever and launches the probe.") },
          { title: t("Interferencias", "Interference"), body: t("Supervivencia. El astronauta ya no puede leer los números y describe colores y símbolos; el operador decide el orden de los diales.", "Survival. The astronaut can no longer read the numbers and describes colors and symbols; the operator decides the order of the dials.") },
          { title: t("Insonorización", "Soundproofing"), body: t("Supervivencia. El astronauta repara grietas en la cabina mientras el operador completa un recorrido de datos.", "Survival. The astronaut repairs cracks in the cabin while the operator completes a data path.") },
          { title: t("Información oculta", "Hidden information"), body: t("Resolutorio. Cruzan los archivos de la sonda con los registros oficiales hasta encontrar una contradicción.", "Resolution. They cross-check the probe's files against official records until they find a contradiction.") },
        ],
      },
      {
        type: "cards",
        label: t("La web ficticia de la misión: cinco easter eggs", "The mission's fictional website: five easter eggs"),
        body: t(
          "ATLAS-NET es la convocatoria de la misión dentro de la historia. Escondimos cinco secretos que premian la curiosidad; el recorrido se puede completar sin encontrarlos todos.",
          "ATLAS-NET is the mission's call for applicants inside the story. We hid five secrets that reward curiosity; the route can be completed without finding them all.",
        ),
        items: [
          { title: t("Memorando oculto", "Hidden memo"), body: t("Mantener presionado un bloque de la cronología lo revela.", "Pressing and holding a block in the timeline reveals it.") },
          { title: t("Celdas tachadas", "Redacted cells"), body: t("Seleccionar el texto censurado permite leerlo.", "Selecting the censored text makes it readable.") },
          { title: t("Acceso denegado", "Access denied"), body: t("Abrir un archivo restringido produce un fallo y registra el intento.", "Opening a restricted file triggers a glitch and logs the attempt.") },
          { title: t("Censura activa", "Live censorship"), body: t("Los datos censurados parpadean y se revelan al mantenerlos presionados.", "Censored data flickers and is revealed by pressing and holding.") },
          { title: t("Mapa del sitio", "Site map"), body: t("En el pie de página, unos puntos de luz siguen al cursor.", "In the footer, points of light follow the cursor.") },
        ],
      },
      {
        type: "text",
        label: t("El sitio web del proyecto", "The project website"),
        body: t(
          "Aparte de la ficción, redacté e implementé, con apoyo de Claude Code, el sitio público que presenta el proyecto real, y organicé allí la documentación del proceso.",
          "Outside the fiction, I wrote and implemented, with Claude Code's support, the public website that presents the real project, and organized the process documentation there.",
        ),
      },

      CH.evidencias,
      {
        type: "gallery",
        label: t("La web ficticia de la misión", "The mission's fictional website"),
        items: [
          { src: "images/projects/dissonance/acto-ii.webp", alt: t("Acto II: inicio de la web ficticia de la misión", "Act II: home of the mission's fictional website") },
          { src: "images/projects/dissonance/atlas-documentos.jpg", alt: t("Web ficticia de la misión: documentos con datos tachados", "The mission's fictional website: documents with redacted data") },
          { src: "images/projects/dissonance/atlas-solicitud.jpg", alt: t("Web ficticia de la misión: el formulario empieza por la modalidad, individual o en pareja", "The mission's fictional website: the form starts with the mode, alone or as a pair") },
        ],
      },
      {
        type: "gallery",
        label: t("El sitio web del proyecto", "The project website"),
        items: [
          { src: "images/projects/dissonance/sitio-inicio.jpg", alt: t("Sitio del proyecto: portada", "Project website: home") },
          { src: "images/projects/dissonance/sitio-proceso.jpg", alt: t("Sitio del proyecto: página de Proceso", "Project website: Process page") },
        ],
      },
      {
        type: "gallery",
        label: t("Los actos", "The acts"),
        items: [
          { src: "images/projects/dissonance/acto-i.webp", alt: { es: "Acto I: presentación del video interactivo", en: "Act I: interactive video presentation" } },
          { src: "images/projects/dissonance/vr-astronauta.webp", alt: { es: "Acto III: vista del astronauta en VR", en: "Act III: astronaut's VR view" } },
          { src: "images/projects/dissonance/vr-operador.webp", alt: { es: "Acto III: operador terrestre conectado desde la estación de control", en: "Act III: ground operator connected from the control station" } },
          { src: "images/projects/dissonance/estacion-control.webp", alt: { es: "Monitor de señal en la estación de control", en: "Signal monitor at the control station" } },
        ],
      },
      {
        type: "videos",
        items: [
          { title: { es: "Recorrido completo (versión acelerada)", en: "Full walkthrough (sped-up version)" }, youtube: "5wiIbKju99w" },
        ],
      },
      { type: "awards", label: t("Reconocimientos", "Recognitions"), items: dissonanceAwards },

      CH.usabilidad,
      {
        type: "text",
        body: t(
          "Probamos Dissonance con un grupo pequeño de participantes y registramos las sesiones con notas de observación. Separamos la desorientación que diseñamos a propósito de la fricción que había que corregir. [PENDIENTE: fecha de las sesiones y perfil de las personas participantes]",
          "We tested Dissonance with a small group of participants and recorded the sessions as observation notes. We separated the disorientation we designed on purpose from the friction we had to fix. [PENDIENTE: session dates and participant profiles]",
        ),
      },
      {
        type: "pairs",
        a: t("Qué encontramos", "What we found"),
        b: t("Qué cambió", "What changed"),
        items: [
          {
            title: t("La web: costaba llegar al formulario", "Website: the form was hard to reach"),
            a: t("Tenía demasiado texto y poca guía: tardaron 4 minutos en llegar al formulario, su objetivo principal. Faltaba preguntar primero si se participaba de forma individual o en pareja.", "Too much text and little guidance: it took 4 minutes to reach the form, the site's main goal. It also needed to ask first whether people were joining alone or as a pair."),
            b: t("Acortamos el recorrido: cuatro secciones en orden, menos texto y un botón «Siguiente». El formulario ahora empieza por la modalidad, individual o en pareja.", "We shortened the route: four sections in order, less text and a “Next” button. The form now starts with the mode, alone or as a pair."),
          },
          {
            title: t("El video: dependía del entorno", "Video: it depended on the surroundings"),
            a: t("El ruido externo hacía perder información de la historia y no había subtítulos.", "Outside noise made people miss parts of the story, and there were no subtitles."),
            b: t("Agregamos subtítulos y en las pruebas finales usamos audífonos.", "We added subtitles and used headphones in the final tests."),
            },
          {
            title: t("La VR: el primer puzzle no se entendía", "VR: the first puzzle was unclear"),
            a: t("Tardó cerca de 15 minutos en la primera prueba y 7 en la segunda, sin tutorial, con poco feedback y un botón principal poco claro.", "It took about 15 minutes in the first test and 7 in the second, with no tutorial, little feedback and an unclear main button."),
            b: t("Planteamos como prioridad un tutorial corto, feedback visible y un botón principal con más jerarquía. [PENDIENTE: confirmar cuáles quedaron implementados]", "We set as priorities a short tutorial, visible feedback and a more prominent main button. [PENDIENTE: confirm which were implemented]"),
          },
        ],
      },

      CH.aprendizajes,
      {
        type: "cards",
        items: [
          { title: t("La explicación inicial", "The first explanation"), body: t("En el segundo intento avanzaban rápido: el problema estaba en cómo explicábamos, no en la mecánica.", "On a second attempt people moved fast: the problem was how we explained it, not the mechanic.") },
          { title: t("El entorno también se diseña", "The surroundings are design too"), body: t("El audio y los tiempos cambiaban según el ruido y el espacio.", "Audio comprehension and timing changed with noise and space.") },
          { title: t("Misterio no es fricción", "Mystery is not friction"), body: t("En una experiencia de terror se aclaran los controles y el objetivo, no el misterio.", "In a horror experience you clarify the controls and the goal, not the mystery.") },
        ],
      },
      { type: "text", body: t("Mi aprendizaje como directora creativa: [PENDIENTE]", "What I learned as creative director: [PENDIENTE]") },

      CH.enlaces,
      {
        type: "links",
        items: [
          { label: t("Sitio del proyecto", "Project website"), url: "https://valengp2006.github.io/Dissonance/" },
          { label: t("Documentación", "Documentation"), url: "https://valengp2006.github.io/Dissonance/paginas/documentacion.html" },
          { label: t("Las tres experiencias y sus prototipos web", "The three experiences and their web prototypes"), url: "https://valengp2006.github.io/Dissonance/paginas/experiencias.html" },
          { label: t("Video del recorrido", "Walkthrough video"), url: "https://youtu.be/5wiIbKju99w" },
          { label: t("Video del making of", "Making-of video"), url: "https://youtu.be/FelQVvzuw-k" },
          { label: t("Repositorio en GitHub", "GitHub repository"), url: "https://github.com/Valengp2006/Dissonance" },
        ],
      },
    ],
  },

  {
    slug: "muse",
    tier: 1,
    featured: true,
    categories: ["ux"],
    title: "MUSE",
    year: "2026",
    mode: "team",
    tags: [same("UX/UI"), t("Investigación UX", "UX research"), t("Prototipado", "Prototyping")],
    summary: t(
      "App para que artistas emergentes compartan su obra y su proceso sin miedo al juicio ni al robo de contenido. Prototipo de alta fidelidad en Figma, validado en 5 pruebas de usabilidad.",
      "An app where emerging artists share their work and process without fear of judgment or content theft. A high-fidelity Figma prototype, validated in 5 usability tests.",
    ),
    roleLine: t("Investigación UX y diseño UX/UI, con el trabajo repartido", "UX research and UX/UI design, with the work shared"),
    color: "#8C2F52",
    tint: "#F7E4EC",
    textColor: "#6E2140",
    cover: "images/projects/muse/cover.jpg",
    coverAlt: t("Tres pantallas de la aplicación MUSE: concurso Artista de la Semana, galería de obras y eventos", "Three screens of the MUSE app: Artist of the Week contest, artwork gallery and events"),
    blocks: [
      CH.resumen,
      {
        type: "text",
        body: t(
          "MUSE es una propuesta de aplicación social para artistas emergentes: un espacio seguro para compartir obras y procesos creativos, descubrir a otras personas artistas y construir comunidad.",
          "MUSE is a proposal for a social app for emerging artists: a safe space to share work and creative process, discover other artists and build community.",
        ),
      },
      {
        type: "facts",
        items: [
          { label: L_.materia, value: same("[PENDIENTE]") },
          { label: L_.anio, value: t("2026 (marzo – mayo)", "2026 (March – May)") },
          { label: L_.contexto, value: t("Proyecto académico en equipo", "Academic team project") },
          { label: L_.tools, value: t("Figma (nivel intermedio-avanzado) · FigJam · Notion · Google Forms", "Figma (intermediate-advanced) · FigJam · Notion · Google Forms") },
        ],
      },

      CH.rol,
      roles(
        [
          t("Participé en la investigación UX: encuesta y entrevistas", "I took part in the UX research: survey and interviews"),
          t("Participé en la persona, el point of view y el journey map", "I took part in the persona, point of view and journey map"),
          t("Participé en wireframes, flujos, UI kit y prototipo de alta fidelidad en Figma", "I took part in wireframes, flows, UI kit and the high-fidelity Figma prototype"),
          t("Mis aportes destacados: flujo de eventos, «Artista de la Semana», UI kit y navegación", "My highlighted contributions: events flow, “Artist of the Week”, UI kit and navigation"),
        ],
        [
          t("Repartimos el trabajo de investigación y diseño", "We shared the research and design work"),
          t("Construimos la identidad gráfica a partir de investigación visual y referentes", "We built the graphic identity from visual research and references"),
          t("[PENDIENTE: crédito a mis compañeros por las partes que hicieron]", "[PENDIENTE: credit to my teammates for the parts they did]"),
        ],
      ),

      CH.reto,
      {
        type: "quote",
        body: t(
          "¿Cómo diseñar una plataforma donde artistas compartan su obra y su proceso sintiéndose seguros y parte de una comunidad, sin sacrificar una experiencia de uso atractiva e intuitiva?",
          "How might we design a platform where artists share their work and process feeling safe and part of a community, without giving up an appealing, intuitive experience?",
        ),
      },
      {
        type: "text",
        body: t(
          "Compartir arte en plataformas digitales se volvió incómodo para muchos artistas emergentes: miedo al juicio, robo de contenido y saturación de contenido generado con IA.",
          "Sharing art on digital platforms has become uncomfortable for many emerging artists: fear of judgment, content theft and a flood of AI-generated content.",
        ),
      },
      { type: "chips", items: [t("Seguridad", "Safety"), t("Comunidad", "Community"), t("Autenticidad", "Authenticity"), t("IA", "AI")] },

      CH.investigacion,
      {
        type: "metrics",
        items: [
          { value: same("27"), label: t("respuestas de encuesta", "survey responses") },
          { value: same("5"), label: t("entrevistas", "interviews") },
        ],
      },
      {
        type: "cards",
        label: t("Hallazgos clave", "Key findings"),
        items: [
          { title: t("Seguridad del contenido", "Content safety"), body: t("Preocupación por el robo o uso no autorizado de obras.", "Concern about theft or unauthorized use of artwork.") },
          { title: t("Comunidad con apoyo", "A supportive community"), body: t("Se valora el apoyo creativo y la retroalimentación constructiva por encima de la exposición o la viralidad.", "Creative support and constructive feedback are valued over exposure or virality.") },
          { title: t("Interés por el arte humano", "Interest in human-made art"), body: t("Deseo de plataformas donde el contenido generado con IA no opaque el trabajo de artistas.", "A wish for platforms where AI-generated content doesn't overshadow artists' work.") },
        ],
      },
      {
        type: "statement",
        label: t("Concepto", "Concept"),
        body: t(
          "Los artistas no solo buscan plataformas para publicar contenido, sino espacios donde sentirse seguros, valorados y representados visualmente.",
          "Artists don't just look for platforms to publish content, but for spaces where they feel safe, valued and visually represented.",
        ),
      },
      {
        type: "gallery",
        label: t("Usuario objetivo", "Target user"),
        items: [
          { src: "images/projects/muse/persona.webp", alt: { es: "Usuario objetivo: Oscar, estudiante de Diseño Gráfico e ilustrador digital, con sus motivaciones, frustraciones y necesidades", en: "Target user: Oscar, graphic design student and digital illustrator, with his motivations, frustrations and needs" } },
        ],
      },

      CH.diseno,
      {
        type: "flow",
        label: t("Proceso", "Process"),
        steps: [
          t("Encuesta y entrevistas", "Survey and interviews"),
          t("Persona, point of view y journey map", "Persona, point of view and journey map"),
          t("Ideación", "Ideation"),
          t("Wireframes de baja fidelidad", "Low-fidelity wireframes"),
          t("UI kit", "UI kit"),
          t("Prototipo de alta fidelidad", "High-fidelity prototype"),
        ],
      },
      {
        type: "pairs",
        label: t("Retos y soluciones", "Challenges and solutions"),
        a: L_.challenge,
        b: L_.solution,
        items: [
          { a: t("Transmitir creatividad sin comprometer la claridad de navegación.", "Convey creativity without compromising navigation clarity."), b: t("Varias iteraciones de wireframes antes de la interfaz visual, ajustando jerarquías, composición y organización del contenido.", "Several wireframe iterations before the visual interface, adjusting hierarchy, composition and content organization.") },
          { a: t("Adaptarme a nuevas herramientas (Figma y FigJam).", "Adapting to new tools (Figma and FigJam)."), b: t("Exploración autónoma con documentación, tutoriales y referencias visuales.", "Self-directed exploration with documentation, tutorials and visual references.") },
          { a: t("Construir componentes interactivos que acercaran el prototipo a una app real.", "Build interactive components that bring the prototype closer to a real app."), b: t("Investigué recursos y ejemplos para entender la lógica de interacción: menús desplegables, selección y transiciones.", "I studied resources and examples to understand interaction logic: dropdowns, selection and transitions.") },
          { a: t("Lograr una dirección visual coherente.", "Achieve a coherent visual direction."), b: t("Con el equipo construimos una identidad gráfica a partir de la investigación visual y el análisis de referentes.", "With the team we built a graphic identity from visual research and reference analysis.") },
        ],
      },

      CH.evidencias,
      {
        type: "gallery",
        label: t("Capturas", "Screens"),
        items: [
          { src: "images/projects/muse/wireframes.webp", alt: { es: "De wireframes a diseño visual: flujo de postulación a Artista de la Semana", en: "From wireframes to visual design: Artist of the Week entry flow" } },
          { src: "images/projects/muse/ui-kit.webp", alt: { es: "UI Kit: colores, tipografías, botones y componentes", en: "UI Kit: colors, typography, buttons and components" } },
          { src: "images/projects/muse/prototipo.webp", alt: { es: "Mapa del prototipo interactivo en Figma", en: "Interactive prototype map in Figma" } },
        ],
      },
      {
        type: "videos",
        label: t("Prototipo en video", "Prototype video"),
        items: [{ title: t("Recorrido por el prototipo de MUSE", "A walk through the MUSE prototype"), youtube: "R69ZPx201gw", vertical: true }],
      },

      CH.pruebas,
      { type: "metrics", items: [{ value: same("5"), label: t("pruebas de usabilidad", "usability tests") }] },
      {
        type: "columns",
        items: [
          {
            title: t("Lo que valoraron", "What people valued"),
            bullets: [
              t("La estética llamativa y alternativa", "The striking, alternative look"),
              t("La intención de un espacio centrado en artistas humanos", "The intention of a space centered on human artists"),
              t("La facilidad de navegación en los flujos principales", "How easy the main flows were to navigate"),
              t("Las dinámicas de comunidad, como «Artista de la Semana»", "Community dynamics such as “Artist of the Week”"),
            ],
          },
          {
            title: t("Oportunidades de mejora", "Opportunities to improve"),
            bullets: [t("Jerarquía visual", "Visual hierarchy"), t("Organización de algunas pantallas", "Organization of some screens")],
          },
        ],
      },
      { type: "text", body: t("[PENDIENTE: qué se cambió en el prototipo a partir de las pruebas]", "[PENDIENTE: what changed in the prototype after testing]") },

      CH.aprendizajes,
      {
        type: "quote",
        body: t(
          "MUSE fue mi primer acercamiento completo a un proceso de diseño UX/UI: la investigación, la iteración y la exploración autónoma fueron fundamentales para una propuesta más humana, funcional y significativa.",
          "MUSE was my first complete UX/UI design process: research, iteration and self-directed exploration were essential to a more human, functional and meaningful proposal.",
        ),
      },

      CH.enlaces,
      {
        type: "links",
        items: [
          { label: t("Prototipo interactivo en Figma", "Interactive Figma prototype"), url: "https://www.figma.com/proto/kE5cEvOlPf5jMQrcUmHbem/Equipo-1?node-id=859-617" },
          { label: { es: "Presentación completa del caso de estudio en Figma", en: "Full case study presentation on Figma" }, url: "https://www.figma.com/deck/D16IOQE3BsvhIg70jK0tMP" },
        ],
      },
    ],
  },

  {
    slug: "orquesta-corporal",
    tier: 1,
    featured: true,
    categories: ["vision", "av"],
    title: "Orquesta Corporal",
    year: "2026",
    mode: "individual",
    tags: [t("Visión artificial", "Computer vision"), t("Interacción con el cuerpo", "Body interaction"), t("Audiovisual", "Audiovisual")],
    summary: t(
      "Dirige una versión simplificada del «Himno a la alegría» con el cuerpo: la cámara detecta tus gestos con MoveNet y ml5.js en p5.js, y la orquesta responde.",
      "Conduct a simplified “Ode to Joy” with your body: the camera detects your gestures with MoveNet and ml5.js in p5.js, and the orchestra responds.",
    ),
    roleLine: t("Diseño de interacción y sonoro; programación con apoyo de IA", "Interaction and sound design; AI-assisted coding"),
    color: "#C2563A",
    tint: "#F8E6DF",
    textColor: "#7E3220",
    cover: "images/projects/orquesta/cover.jpg",
    coverAlt: t("Gran final de Orquesta Corporal: el esqueleto del director frente a las tres secciones de la orquesta iluminadas", "Orquesta Corporal grand finale: the conductor's skeleton in front of the three lit orchestra sections"),
    blocks: [
      CH.resumen,
      {
        type: "text",
        body: t(
          "Una experiencia de pie frente a una pantalla: la persona dirige una orquesta de muestras reales que toca una versión simplificada del «Himno a la alegría».",
          "An experience you stand in front of a screen for: you conduct an orchestra of real samples playing a simplified version of “Ode to Joy”.",
        ),
      },
      {
        type: "facts",
        items: [
          { label: L_.materia, value: t("Visión Artificial (proyecto final)", "Computer Vision (final project)") },
          { label: L_.anio, value: t("2026 (octubre)", "2026 (October)") },
          { label: L_.contexto, value: t("Proyecto académico individual", "Individual academic project") },
          { label: L_.tools, value: same("p5.js · ml5.js (MoveNet) · Tone.js") },
        ],
      },

      CH.rol,
      roles(
        [
          t("Diseñé los gestos, las reglas y el recorrido", "I designed the gestures, the rules and the journey"),
          t("Diseñé la experiencia sonora", "I designed the sound experience"),
          t("Programé con apoyo de IA", "I coded it with AI support"),
          t("Documenté el storyboard, la planificación técnica y la bitácora", "I documented the storyboard, technical planning and design log"),
        ],
        [
          L_.solo,
          t("Créditos a terceros: el modelo MoveNet, las librerías p5.js, ml5.js y Tone.js, las muestras de tonejs-instruments y la música de Beethoven (Sinfonía n.º 9, dominio público)", "Third-party credits: the MoveNet model, the p5.js, ml5.js and Tone.js libraries, the tonejs-instruments samples and Beethoven's music (Symphony No. 9, public domain)"),
        ],
      ),

      CH.reto,
      {
        type: "quote",
        body: t(
          "¿Cómo hacer que alguien sin formación musical sienta lo que es dirigir una orquesta, usando solo su cuerpo?",
          "How can someone with no musical training feel what it's like to conduct an orchestra using only their body?",
        ),
      },
      {
        type: "text",
        body: t(
          "Dirigir una orquesta parece reservado a especialistas: casi nadie ha sentido cómo cada gesto cambia el sonido de decenas de músicos.",
          "Conducting an orchestra seems reserved for specialists: hardly anyone has felt how each gesture changes the sound of dozens of musicians.",
        ),
      },

      CH.investigacion,
      {
        type: "text",
        body: t(
          "Revisé referentes de dirección con el cuerpo: un anuncio publicitario, una experiencia del Parque Explora, videojuegos de baile, una versión simplificada del himno, los ejemplos de detección de ml5.js y la dirección de orquesta real.",
          "I reviewed references on conducting with the body: an advertisement, an experience at Parque Explora, dance video games, a simplified version of the anthem, ml5.js detection examples and real orchestral conducting.",
        ),
      },
      {
        type: "cards",
        label: t("Concepto", "Concept"),
        items: [
          { title: t("Un gesto, una parte del cuerpo, un efecto", "One gesture, one body part, one effect"), body: t("Nada se cruza con nada, así que es fácil de aprender y difícil de romper.", "Nothing overlaps, so it is easy to learn and hard to break.") },
          { title: t("La pantalla como orquesta", "The screen as an orchestra"), body: t("Copia dónde se sienta cada sección (cuerdas agudas a la izquierda, maderas al centro, chelos a la derecha): apuntar hacia una sección es llamarla.", "It mirrors where each section sits (high strings on the left, woodwinds in the center, cellos on the right): pointing at a section is calling it.") },
          { title: t("Una simplificación declarada", "A stated simplification"), body: t("Las violas suenan con las cuerdas agudas para mantener tres zonas claras y fáciles de señalar.", "Violas sound with the high strings to keep three clear zones that are easy to point at.") },
        ],
      },

      CH.diseno,
      {
        type: "cards",
        label: t("Los cuatro gestos", "The four gestures"),
        items: [
          { title: t("Pulso", "Pulse"), body: t("Un golpe suave con la mano derecha marca el tempo.", "A gentle stroke with the right hand sets the tempo.") },
          { title: t("Entradas", "Cues"), body: t("Señalar con la mano izquierda hace entrar una sección.", "Pointing with the left hand brings a section in.") },
          { title: t("Dinámica", "Dynamics"), body: t("Agacharse o estirarse baja o sube el volumen.", "Crouching or stretching lowers or raises the volume.") },
          { title: t("Corte", "Cut-off"), body: t("Cruzar los brazos en X cierra la obra.", "Crossing the arms in an X ends the piece.") },
        ],
      },
      {
        type: "flow",
        label: t("El recorrido", "The journey"),
        steps: [t("Inicio", "Start"), t("Historia", "Story"), t("Calibración", "Calibration"), t("Tutorial de cuatro gestos", "Four-gesture tutorial"), t("Dirección", "Conducting"), t("Gran final", "Grand finale")],
      },
      {
        type: "pairs",
        label: t("Decisiones", "Decisions"),
        a: L_.challenge,
        b: L_.solution,
        items: [
          { a: t("Un gesto de corte que fuera visible, intuitivo y no chocara con los otros gestos.", "A cut-off gesture that was visible, intuitive and didn't clash with the other gestures."), b: t("Pasé de manos juntas o dedos a brazos cruzados: se ve bien, se entiende sin explicación y no se confunde con señalar una sección.", "I moved from joined hands or fingers to crossed arms: it reads clearly, needs no explanation and isn't confused with pointing at a section.") },
          { a: t("Controlar el volumen sin ocupar la mano que llama a las secciones.", "Control volume without using the hand that calls the sections."), b: t("El volumen pasó de la altura de la mano izquierda a la postura del cuerpo: libera esa mano y es más fácil de calibrar.", "Volume moved from the left hand's height to body posture: it frees that hand and is easier to calibrate.") },
          { a: t("Evitar el cansancio al marcar el pulso durante toda la obra.", "Avoid fatigue from beating the pulse throughout the piece."), b: t("Un golpe equivale a dos pulsos en lugar de uno, lo que reduce el esfuerzo físico.", "One stroke now equals two beats instead of one, reducing physical effort.") },
          { a: t("Que la obra se escuchara completa aunque la persona no dirigiera a todas las secciones.", "Make the piece sound complete even if the person doesn't conduct every section."), b: t("Siempre suena una base, las secciones no señaladas suenan suave, las llamadas suben al 60 % y la señalada al 100 %; el final se escucha con toda la orquesta.", "A base always plays, uncalled sections stay soft, called ones rise to 60% and the pointed one to 100%; the finale plays with the full orchestra.") },
        ],
      },
      {
        type: "text",
        label: t("Implementación", "Implementation"),
        body: t(
          "La cámara detecta 17 puntos del cuerpo con ml5.js BodyPose (MoveNet), en espejo y con un filtro One Euro que suaviza la señal. El pulso se detecta como un golpe en el punto más bajo de la muñeca derecha; el tempo se limita entre 0,5× y 1,5× del escrito (80 BPM). El volumen se calcula desde la postura y el corte exige separar y luego cruzar los brazos durante 300 ms. El audio usa Tone.js con muestras reales, reverberación suave y un limitador. Programé todo con apoyo de IA.",
          "The camera detects 17 body keypoints with ml5.js BodyPose (MoveNet), mirrored and smoothed with a One Euro filter. The pulse is detected as a stroke at the lowest point of the right wrist; tempo is limited between 0.5× and 1.5× of the written one (80 BPM). Volume comes from posture, and the cut-off requires separating and then crossing the arms for 300 ms. Audio uses Tone.js with real samples, soft reverb and a limiter. I coded it all with AI support.",
        ),
      },

      CH.evidencias,
      {
        type: "gallery",
        label: t("Capturas", "Screens"),
        items: [
          { src: "images/projects/orquesta/portada.jpg", alt: { es: "Pantalla de inicio: «Dirige el Himno a la alegría con tu cuerpo»", en: "Start screen: “Conduct Ode to Joy with your body”" } },
          { src: "images/projects/orquesta/introduccion.jpg", alt: { es: "Historia de apertura: «Esta noche, el director eres tú»", en: "Opening story: “Tonight, you are the conductor”" } },
          { src: "images/projects/orquesta/calibracion.jpg", alt: { es: "Calibración: verificación de cámara, hombros y posición frente a la pantalla", en: "Calibration: camera, shoulders and position checks" } },
          { src: "images/projects/orquesta/tutorial-pulso.jpg", alt: { es: "Tutorial del gesto 1: el pulso con la mano derecha", en: "Tutorial, gesture 1: the pulse with the right hand" } },
          { src: "images/projects/orquesta/tutorial-entradas.jpg", alt: { es: "Tutorial del gesto 2: las entradas de cada sección con la mano izquierda", en: "Tutorial, gesture 2: cueing each section with the left hand" } },
          { src: "images/projects/orquesta/tutorial-dinamica.jpg", alt: { es: "Tutorial del gesto 3: la dinámica, controlada con todo el cuerpo", en: "Tutorial, gesture 3: dynamics controlled with the whole body" } },
          { src: "images/projects/orquesta/tutorial-corte.jpg", alt: { es: "Tutorial del gesto 4: el corte cruzando los brazos", en: "Tutorial, gesture 4: the cut-off with crossed arms" } },
          { src: "images/projects/orquesta/direccion-cuerdas.jpg", alt: { es: "Dirección: entrada de las cuerdas agudas", en: "Conducting: cueing the high strings" } },
          { src: "images/projects/orquesta/direccion-maderas.jpg", alt: { es: "Dirección: entrada de las maderas", en: "Conducting: cueing the woodwinds" } },
          { src: "images/projects/orquesta/direccion-chelos.jpg", alt: { es: "Dirección: entrada de los chelos", en: "Conducting: cueing the cellos" } },
          { src: "images/projects/orquesta/gran-final.jpg", alt: { es: "Gran final con la orquesta completa", en: "Grand finale with the full orchestra" } },
          { src: "images/projects/orquesta/fin.jpg", alt: { es: "Cierre: «Fin de la obra»", en: "Ending: “End of the piece”" } },
          { src: "images/projects/orquesta/c-cuatro-gestos.png", alt: { es: "Los cuatro gestos: pulso, entradas, dinámica y corte", en: "The four gestures: pulse, cues, dynamics and cut-off" } },
          { src: "images/projects/orquesta/b-orquesta-real.png", alt: { es: "De la orquesta real a la distribución en pantalla", en: "From the real orchestra to the on-screen layout" } },
          { src: "images/projects/orquesta/j-arquitectura.png", alt: { es: "Arquitectura del sistema", en: "System architecture" } },
        ],
      },
      {
        type: "videos",
        items: [
          { title: { es: "Orquesta Corporal en funcionamiento", en: "Orquesta Corporal in action" }, youtube: "PO6iQugyyH8" },
        ],
      },

      CH.pruebas,
      {
        type: "pairs",
        a: t("Prueba", "Test"),
        b: t("Resultado", "Result"),
        items: [
          { a: t("Lógica con datos sintéticos (pulso, zonas y corte).", "Logic with synthetic data (pulse, zones and cut-off)."), b: t("Los brazos cruzados desde el inicio no disparan el corte; separarlos y cruzarlos sí; señalar con la izquierda no lo activa.", "Arms crossed from the start don't trigger the cut-off; separating and crossing them does; pointing with the left hand doesn't.") },
          { a: t("Flujo completo con una persona simulada.", "Full flow with a simulated person."), b: t("Pasa del tutorial a la dirección sin cortes falsos.", "It goes from the tutorial to conducting with no false cut-offs.") },
          { a: t("Rendimiento.", "Performance."), b: t("60 FPS estables durante casi todas las pruebas.", "A stable 60 FPS during almost all tests.") },
        ],
      },
      { type: "text", body: t("[PENDIENTE: pruebas con personas usuarias y sus hallazgos]", "[PENDIENTE: tests with real users and their findings]") },

      CH.aprendizajes,
      { type: "text", body: t("[PENDIENTE: mis aprendizajes]", "[PENDIENTE: what I learned]") },

      CH.enlaces,
      {
        type: "links",
        items: [
          { label: { es: "Probar la experiencia en el navegador (requiere cámara)", en: "Try it in the browser (camera required)" }, url: "https://valengp2006.github.io/orquesta-corporal/" },
          { label: { es: "Documentación completa en Notion", en: "Full documentation on Notion" }, url: "https://app.notion.com/p/Orquesta-Corporal-401bd8838a788043a17ec992ffc8473c" },
          { label: { es: "Repositorio en GitHub", en: "GitHub repository" }, url: "https://github.com/Valengp2006/orquesta-corporal" },
        ],
      },
    ],
  },

  {
    slug: "pasos-de-tradicion",
    tier: 1,
    categories: ["immersive", "av"],
    title: "Pasos de Tradición",
    year: "2026",
    mode: "team",
    tags: [t("Experiencia inmersiva", "Immersive experience"), t("Realidad aumentada", "Augmented reality"), t("Patrimonio cultural", "Cultural heritage")],
    summary: t(
      "Experiencia transmedia sobre quienes sostienen la Semana Santa de Santa Fe de Antioquia desde el anonimato. Mejor proyecto del Taller 5: Experiencias Interactivas.",
      "A transmedia experience about the people who sustain Holy Week in Santa Fe de Antioquia from anonymity. Best project of Workshop 5: Interactive Experiences.",
    ),
    roleLine: t("Guion, arquitectura de información y chroma key en Unity, con apoyo de IA", "Script, information architecture and chroma key in Unity, with AI support"),
    color: "#B5651D",
    tint: "#F2E4D3",
    textColor: "#7A4718",
    cover: "images/projects/pasos-de-tradicion/cover.webp",
    coverAlt: t("El Códice de los Pasos: bitácora de oficios abierta, con la página «El maestro de las andas» y una ilustración animada del tallador", "El Códice de los Pasos: an open logbook of trades, with the page “The master of the andas” and an animated illustration of the carver"),
    awards: pasosAwards,
    blocks: [
      CH.resumen,
      {
        type: "text",
        body: t(
          "Pasos de Tradición divulga el patrimonio de la Semana Santa de Santa Fe de Antioquia con un sitio web, realidad aumentada y contenido audiovisual. Plantea los oficios de la celebración como actos de transmisión, en los que unos cuerpos aprenden de otros.",
          "Pasos de Tradición shares the heritage of Holy Week in Santa Fe de Antioquia through a website, augmented reality and audiovisual content. It frames the trades of the celebration as acts of transmission, where some bodies learn from others.",
        ),
      },
      {
        type: "facts",
        items: [
          { label: L_.materia, value: t("Taller 5: Experiencias Interactivas", "Workshop 5: Interactive Experiences") },
          { label: L_.anio, value: t("2026 (enero – mayo)", "2026 (January – May)") },
          { label: L_.contexto, value: t("Proyecto académico en equipo · UPB", "Academic team project · UPB") },
          { label: L_.tools, value: t("Unity (nivel básico) · Vuforia · Figma · Visual Studio Code · GitHub · Luma AI · CapCut", "Unity (basic) · Vuforia · Figma · Visual Studio Code · GitHub · Luma AI · CapCut") },
        ],
      },

      CH.rol,
      roles(
        [
          t("Implementé en Unity la integración con chroma key para la realidad aumentada, con apoyo de IA y tutoriales", "I implemented the chroma key integration in Unity for the augmented reality, with AI support and tutorials"),
          t("Realicé 4 entrevistas con el equipo", "I conducted 4 interviews with the team"),
          t("Escribí el guion de El Códice de los Pasos", "I wrote the script of El Códice de los Pasos"),
          t("Produje sus secuencias audiovisuales con IA", "I produced its audiovisual sequences with AI"),
          t("Diseñé la arquitectura de información y organicé la documentación", "I designed the information architecture and organized the documentation"),
          t("Implementé el sitio web con Astro, HTML, CSS y JavaScript, con apoyo de IA", "I implemented the website with Astro, HTML, CSS and JavaScript, with AI support"),
        ],
        [
          t("Investigamos la historia, los oficios y los referentes", "We researched the history, the trades and the references"),
          t("Planteamos tres experiencias complementarias", "We proposed three complementary experiences"),
          t("Un compañero estuvo a cargo de programar el flujo de realidad aumentada, integrar los elementos en Unity y probar los prototipos en Android", "A teammate was in charge of programming the augmented reality flow, integrating the elements in Unity and testing the prototypes on Android"),
          t("Cúpula de Legados y El Rastro de los Gestos fueron producidos por compañeros del equipo", "Cúpula de Legados and El Rastro de los Gestos were produced by teammates"),
        ],
      ),

      CH.reto,
      {
        type: "quote",
        body: t(
          "¿Cómo pueden las experiencias digitales complementar la preservación del patrimonio cultural sin reemplazar el valor de vivirlo en el territorio?",
          "How can digital experiences complement the preservation of cultural heritage without replacing the value of living it in its place?",
        ),
      },
      {
        type: "text",
        body: t(
          "Gran parte de los saberes, oficios y relatos que hacen posibles las procesiones permanece invisible: se transmite de forma oral y práctica, y la documentación suele concentrarse en lo que se ve de la celebración.",
          "Much of the knowledge, trades and stories that make the processions possible remains invisible: it is passed on orally and by practice, while documentation tends to focus on the visible side of the celebration.",
        ),
      },

      CH.investigacion,
      {
        type: "text",
        body: t(
          "Revisamos fuentes históricas y referentes de patrimonio digital y recopilamos testimonios de quienes participan en los oficios, como carpinteros, mayordomos, sahumadoras y cargueros.",
          "We reviewed historical sources and digital-heritage references and gathered testimonies from people in the trades, such as carpenters, stewards, incense bearers and float carriers.",
        ),
      },
      {
        type: "metrics",
        items: [
          { value: same("4"), label: t("entrevistas semiestructuradas", "semi-structured interviews") },
          { value: same("3"), label: t("experiencias complementarias", "complementary experiences") },
          { value: same("4"), label: t("etapas del archivo: investigación, inmersión, documental y autores", "archive stages: research, immersion, documentary and authors") },
        ],
      },
      {
        type: "statement",
        label: t("Hallazgo central", "Core finding"),
        body: t("«Los que hacen posible la procesión rara vez aparecen en las fotografías».", "“The people who make the procession possible rarely appear in the photographs.”"),
      },
      {
        type: "cards",
        label: t("Concepto: tres capas de memoria", "Concept: three layers of memory"),
        items: [
          { title: same("El Códice de los Pasos"), body: t("El conocimiento técnico y artesanal.", "Technical and craft knowledge.") },
          { title: same("Cúpula de Legados"), body: t("La memoria colectiva y su dimensión simbólica.", "Collective memory and its symbolic dimension.") },
          { title: same("El Rastro de los Gestos"), body: t("Las historias humanas y su transmisión entre generaciones.", "Human stories and how they pass between generations.") },
        ],
      },

      CH.diseno,
      {
        type: "steps",
        label: t("Cómo funciona la realidad aumentada", "How the augmented reality works"),
        items: [
          { title: t("Entrada", "Input"), body: t("Marcadores de realidad aumentada e interacción a través de la aplicación en Unity.", "Augmented reality markers and interaction through the Unity app.") },
          { title: t("Procesamiento", "Processing"), body: t("Vuforia reconoce los marcadores y activa los contenidos audiovisuales y narrativos integrados en Unity.", "Vuforia recognizes the markers and triggers the audiovisual and narrative content integrated in Unity.") },
          { title: t("Salida", "Output"), body: t("Realidad aumentada, video y narrativa digital que complementan la exploración de la Semana Santa.", "Augmented reality, video and digital narrative that complement the exploration of Holy Week.") },
        ],
      },
      {
        type: "pairs",
        label: t("Retos y soluciones", "Challenges and solutions"),
        a: L_.challenge,
        b: L_.solution,
        items: [
          { a: t("Representar una tradición ligada a lo presencial sin reducirla a un archivo estático.", "Represent a tradition tied to being there without reducing it to a static archive."), b: t("Tres experiencias que la exploran desde el conocimiento técnico, la memoria colectiva y las historias humanas.", "Three experiences that explore it through technical knowledge, collective memory and human stories.") },
          { a: t("Integrar narrativa, audiovisual y realidad aumentada en una sola experiencia coherente.", "Integrate narrative, audiovisual content and augmented reality into one coherent experience."), b: t("Una narrativa transversal donde cada medio aporta una parte distinta de la historia.", "A cross-cutting narrative where each medium contributes a different part of the story.") },
          { a: t("Incorporar video dentro de la realidad aumentada sin que se sintiera pegado.", "Bring video into augmented reality without it feeling pasted on."), b: t("Un flujo con chroma key que integra las secuencias generadas con IA dentro de Unity mediante Vuforia.", "A chroma-key workflow that integrates the AI-generated sequences into Unity through Vuforia.") },
          { a: t("Usar tecnología sin que eclipsara el valor cultural.", "Use technology without it overshadowing the cultural value."), b: t("La tecnología como medio de interpretación, con las personas y los oficios en el centro.", "Technology as a means of interpretation, with people and trades at the center.") },
        ],
      },

      CH.evidencias,
      {
        type: "gallery",
        label: t("Capturas", "Screens"),
        items: [
          { src: "images/projects/pasos-de-tradicion/codice.jpg", alt: { es: "El Códice de los Pasos: bitácora de oficios con ilustraciones animadas", en: "El Códice de los Pasos: a logbook of trades with animated illustrations" } },
          { src: "images/projects/pasos-de-tradicion/cupula.jpg", alt: { es: "La Cúpula: visualización de un domo inmersivo en la plaza", en: "La Cúpula: visualization of an immersive dome in the plaza" } },
          { src: "images/projects/pasos-de-tradicion/sombras.jpg", alt: { es: "El Rastro de los Gestos: silueta en sombra de una persona en oración", en: "El Rastro de los Gestos: shadow silhouette of a person in prayer" } },
        ],
      },
      {
        type: "videos",
        items: [
          { title: { es: "Making of: el proceso creativo, técnico y humano del proyecto", en: "Making of: the project's creative, technical and human process" }, youtube: "1RO1sUt3OM8" },
          { title: { es: "El Códice de los Pasos: experiencia de realidad aumentada", en: "El Códice de los Pasos: augmented reality experience" }, youtube: "gtFGBEbhLYQ" },
          { title: { es: "El Rastro de los Gestos: narrativa interactiva", en: "El Rastro de los Gestos: interactive narrative" }, youtube: "GzqdeB_yQgE" },
          { title: { es: "Cúpula de Legados: instalación audiovisual inmersiva", en: "Cúpula de Legados: immersive audiovisual installation" }, youtube: "ZJIWKkEvlxY" },
        ],
      },

      CH.pruebas,
      {
        type: "text",
        body: t(
          "El proyecto culminó como una plataforma digital con tres experiencias complementarias y fue reconocido como el mejor proyecto del Taller 5.",
          "The project ended as a digital platform with three complementary experiences and was recognized as the best project of Workshop 5.",
        ),
      },
      { type: "awards", label: t("Reconocimiento", "Recognition"), items: pasosAwards },
      { type: "text", body: t("[PENDIENTE: pruebas con personas usuarias y sus resultados]", "[PENDIENTE: user tests and their results]") },

      CH.aprendizajes,
      {
        type: "quote",
        body: t(
          "Entendí que una experiencia interactiva puede ir más allá de comunicar información y conectar a las personas con las historias y memorias de su identidad colectiva. La tecnología no es la protagonista: es un medio para amplificar y preservar lo que merece ser recordado.",
          "I understood that an interactive experience can go beyond communicating information and connect people with the stories and memories of their collective identity. Technology is not the protagonist: it is a means to amplify and preserve what deserves to be remembered.",
        ),
      },

      CH.enlaces,
      {
        type: "links",
        items: [
          { label: { es: "Sitio web del proyecto", en: "Project website" }, url: "https://valengp2006.github.io/pasos-de-tradicion/" },
          { label: { es: "Repositorio en GitHub", en: "GitHub repository" }, url: "https://github.com/Valengp2006/pasos-de-tradicion" },
        ],
      },
    ],
  },

  {
    slug: "cosmos",
    tier: 1,
    categories: ["av", "immersive"],
    title: "Cosmos",
    year: "2026",
    mode: "individual",
    tags: [t("Instalación audiovisual", "Audiovisual installation"), t("Interacción en tiempo real", "Real-time interaction")],
    summary: t(
      "Instalación audiovisual donde público, performer y sonido comparten el control: cada persona tiñe la Luna desde su teléfono. Audio en Strudel y visuales en TouchDesigner.",
      "An audiovisual installation where audience, performer and sound share control: each person tints the Moon from their phone. Audio in Strudel, visuals in TouchDesigner.",
    ),
    roleLine: t("Concepto, diseño e implementación, con apoyo de IA", "Concept, design and implementation, with AI support"),
    color: "#6D4FE0",
    tint: "#EEE9FA",
    textColor: "#4B3A9E",
    cover: "images/projects/cosmos/cover.jpg",
    coverAlt: t("La Luna de Cosmos: una esfera generativa de textura viva sobre fondo negro", "Cosmos' Moon: a generative sphere with a living texture on a black background"),
    blocks: [
      CH.resumen,
      {
        type: "text",
        body: t(
          "Cosmos es una instalación audiovisual interactiva que se presenta como un ecosistema vivo. La obra cambia de color, colapsa hacia un vórtice o se expande en estrellas según lo que hacen el público, el performer y el sonido.",
          "Cosmos is an interactive audiovisual installation presented as a living ecosystem. The piece changes color, collapses into a vortex or expands into stars depending on what the audience, the performer and the sound do.",
        ),
      },
      {
        type: "facts",
        items: [
          { label: L_.materia, value: same("[PENDIENTE]") },
          { label: L_.anio, value: t("2026 (marzo – mayo)", "2026 (March – May)") },
          { label: L_.contexto, value: t("Proyecto académico individual · UPB", "Individual academic project · UPB") },
          { label: L_.tools, value: t("TouchDesigner (nivel básico-intermedio) · Strudel · Open Stage Control · Node.js · Socket.io", "TouchDesigner (basic-intermediate) · Strudel · Open Stage Control · Node.js · Socket.io") },
        ],
      },

      CH.rol,
      roles(
        [
          t("Diseñé el concepto y la dinámica entre público, performer y sistema", "I designed the concept and the dynamics between audience, performer and system"),
          t("Construí los visuales en TouchDesigner y el audio en Strudel", "I built the visuals in TouchDesigner and the audio in Strudel"),
          t("Implementé el servidor, la comunicación por OSC y las interfaces, con apoyo de IA", "I implemented the server, OSC communication and interfaces, with AI support"),
          t("Probé la sincronización y la estabilidad del sistema", "I tested the system's synchronization and stability"),
        ],
        [
          L_.solo,
          t("Créditos a terceros: las herramientas, librerías y protocolos sobre los que está construido", "Third-party credits: the tools, libraries and protocols it is built on"),
        ],
      ),

      CH.reto,
      {
        type: "quote",
        body: t(
          "¿Cómo diseñar una experiencia donde la interacción no solo controle una obra, sino que invite a las personas a construirla colectivamente?",
          "How can we design an experience where interaction doesn't just control a piece but invites people to build it together?",
        ),
      },
      {
        type: "text",
        body: t(
          "Muchas experiencias audiovisuales separan a quien observa de quien controla: el público contempla y las decisiones quedan en el artista o en sistemas predefinidos.",
          "Many audiovisual experiences separate those who watch from those who control: the audience looks on while decisions stay with the artist or with predefined systems.",
        ),
      },

      CH.investigacion,
      {
        type: "text",
        body: t(
          "Partí de referentes de instalaciones inmersivas y arte interactivo, y exploré cómo repartir el control de una obra entre distintos participantes.",
          "I started from references in immersive installations and interactive art, and explored how to share control of a piece among different participants.",
        ),
      },
      {
        type: "cards",
        label: t("Concepto: cada agente influye en una dimensión", "Concept: each agent shapes one dimension"),
        items: [
          { title: t("Audio", "Audio"), body: t("Define el tiempo: el bombo sincroniza el parpadeo de la Luna.", "Sets time: the kick drum drives the Moon's flicker.") },
          { title: t("Performer", "Performer"), body: t("Define la estructura: dirige los estados visuales desde un iPad.", "Sets structure: directs the visual states from an iPad.") },
          { title: t("Público", "Audience"), body: t("Introduce variación: cada persona envía un color desde su teléfono.", "Adds variation: each person sends a color from their phone.") },
          { title: t("Sistema visual", "Visual system"), body: t("Materializa estas interacciones en tiempo real.", "Turns these interactions into images in real time.") },
        ],
      },

      CH.diseno,
      {
        type: "steps",
        label: t("Cómo funciona", "How it works"),
        items: [
          { title: t("Entrada", "Input"), body: t("Teléfonos del público (colores por web), iPad del performer (Open Stage Control) y el pulso del bombo de Strudel.", "Audience phones (colors via web), the performer's iPad (Open Stage Control) and Strudel's kick-drum pulse.") },
          { title: t("Procesamiento", "Processing"), body: t("Un servidor Node.js con Socket.io convierte las conexiones web a OSC; TouchDesigner recibe todo y genera los visuales.", "A Node.js server with Socket.io converts web connections to OSC; TouchDesigner receives everything and generates the visuals.") },
          { title: t("Salida", "Output"), body: t("Visuales generativos y sonido sincronizados: una Luna de color colectivo que cambia entre estrellas, vórtice y nebulosa.", "Synchronized generative visuals and sound: a Moon of collective color that shifts between stars, vortex and nebula.") },
        ],
      },
      {
        type: "pairs",
        label: t("Retos y soluciones", "Challenges and solutions"),
        a: L_.challenge,
        b: L_.solution,
        items: [
          { a: t("Coordinar plataformas independientes con distintos protocolos.", "Coordinate independent platforms with different protocols."), b: t("Una arquitectura basada en OSC y Socket.io que intercambia información entre todos los componentes.", "An architecture based on OSC and Socket.io that exchanges information among all components.") },
          { a: t("Permitir que varias personas participen sin afectar la estabilidad.", "Let several people take part without affecting stability."), b: t("Una interfaz web ligera, con acceso por código QR, que solo pide elegir un color.", "A light web interface, opened by QR code, that only asks for a color.") },
          { a: t("Mantener la coherencia entre sonido, visuales e interacción.", "Keep sound, visuals and interaction coherent."), b: t("Eventos generados en Strudel activan respuestas visuales sincronizadas en TouchDesigner.", "Events generated in Strudel trigger synchronized visual responses in TouchDesigner.") },
        ],
      },

      CH.evidencias,
      {
        type: "gallery",
        label: t("Capturas", "Screens"),
        items: [
          { src: "images/projects/cosmos/luna.jpg", alt: { es: "TouchDesigner: la Luna generativa, una esfera de textura viva", en: "TouchDesigner: the generative Moon, a sphere with a living texture" } },
          { src: "images/projects/cosmos/filamentos.jpg", alt: { es: "TouchDesigner: la esfera se deshace en filamentos", en: "TouchDesigner: the sphere breaks into filaments" } },
          { src: "images/projects/cosmos/vortice.jpg", alt: { es: "TouchDesigner: la obra colapsa hacia un vórtice", en: "TouchDesigner: the piece collapses into a vortex" } },
          { src: "images/projects/cosmos/estrellas.jpg", alt: { es: "TouchDesigner: la obra se expande en estrellas", en: "TouchDesigner: the piece expands into stars" } },
          { src: "images/projects/cosmos/strudel.jpg", alt: { es: "Strudel: el código que genera el paisaje sonoro en vivo", en: "Strudel: the live-coded sound landscape" } },
          { src: "images/projects/cosmos/controlador.jpg", alt: { es: "El controlador del performer: botón de reinicio y deslizadores", en: "The performer's controller: reset button and sliders" } },
        ],
      },
      {
        type: "videos",
        items: [
          { title: { es: "Cosmos en funcionamiento", en: "Cosmos running live" }, youtube: "FiLLIV0uhI4" },
        ],
      },

      CH.pruebas,
      {
        type: "columns",
        items: [
          { title: t("Qué probé", "What I tested"), bullets: [t("La sincronización entre audio, visuales e interacción", "Synchronization between audio, visuals and interaction"), t("El rendimiento y la estabilidad en tiempo real", "Real-time performance and stability")] },
          { title: t("Resultado", "Result"), bullets: [t("Una instalación que responde a la vez al sonido, al performer y al público", "An installation that responds to sound, performer and audience at once"), t("Se presentó en la muestra de proyectos de la UPB", "It was shown at the UPB project showcase")] },
        ],
      },
      { type: "text", body: t("[PENDIENTE: resultados medidos o pruebas con público]", "[PENDIENTE: measured results or tests with an audience]") },

      CH.aprendizajes,
      {
        type: "quote",
        body: t(
          "Cosmos me permitió profundizar en sistemas interactivos donde la experiencia surge de la relación entre varios actores y tecnologías, y el control de la obra deja de pertenecer a una sola persona.",
          "Cosmos let me go deeper into interactive systems where the experience emerges from the relationship between several actors and technologies, and control of the piece stops belonging to a single person.",
        ),
      },

      CH.enlaces,
      {
        type: "links",
        items: [
          { label: { es: "Sitio del proyecto", en: "Project site" }, url: "https://valengp2006.github.io/Proyecto_Cosmos/" },
          { label: { es: "Repositorio en GitHub", en: "GitHub repository" }, url: "https://github.com/Valengp2006/Proyecto_Cosmos" },
        ],
      },
    ],
  },

  // ───────────────────────────── TAMBIÉN (versión corta) ────────────────────
  {
    slug: "jardin-de-bruma",
    tier: 2,
    categories: ["ux"],
    title: "Jardín de Bruma",
    year: "2026",
    mode: "team",
    tags: [t("Gamificación", "Gamification"), t("Estrategia para marca", "Brand strategy")],
    summary: t(
      "Propuesta de gamificación para Bruma, un emprendimiento de regalos artesanales: una comunidad que compra, vuelve y recomienda con recompensas de costo mínimo.",
      "A gamification proposal for Bruma, a handmade-gift business: a community that buys, returns and recommends, powered by very low-cost rewards.",
    ),
    roleLine: t("Idea y presentación de la propuesta, en equipo", "Idea and proposal presentation, as a team"),
    color: "#8E5F78",
    tint: "#F3E6EC",
    textColor: "#6B3F58",
    cover: "images/projects/jardin-de-bruma/cover.jpg",
    coverAlt: t("Portada de Jardín de Bruma con flores de acuarela", "Jardín de Bruma cover with watercolor flowers"),
    note: t("Ejercicio académico con cliente: propuesta de diseño, sin implementación.", "Academic client exercise: design proposal, not implemented."),
    blocks: [
      {
        type: "facts",
        label: t("Resumen", "Overview"),
        items: [
          { label: L_.anio, value: t("2026 (octubre)", "2026 (October)") },
          { label: L_.contexto, value: t("Proyecto académico en equipo", "Academic team project") },
          { label: t("Mi rol", "My role"), value: t("Participé en el planteamiento de la idea y la presentación, en conjunto con mis compañeras", "I took part in shaping the idea and presenting it, jointly with my teammates") },
        ],
      },
      {
        type: "text",
        label: t("La propuesta", "The proposal"),
        body: t(
          "Bruma es un emprendimiento de Medellín que hace regalos personalizados a mano con limpiapipas. El reto era convertir compradores ocasionales en una comunidad. Propusimos la Familia Bruma y el Jardín de Bruma: cada persona planta una semilla y la hace florecer participando; los puntos son gotas de rocío, los rangos son etapas de la flor y el reconocimiento es el Muro del Jardín.",
          "Bruma is a Medellín business that makes personalized handmade gifts out of pipe cleaners. The challenge was to turn occasional buyers into a community. We proposed Familia Bruma and Jardín de Bruma: each person plants a seed and makes it bloom by taking part; points are dewdrops, ranks are the stages of a flower and recognition is the Garden Wall.",
        ),
      },
      {
        type: "gallery",
        label: t("Evidencias", "Evidence"),
        items: [
          { src: "images/projects/jardin-de-bruma/concepto.jpg", alt: { es: "Concepto: Familia Bruma y Jardín de Bruma", en: "Concept: Familia Bruma and Jardín de Bruma" } },
          { src: "images/projects/jardin-de-bruma/reglas.jpg", alt: { es: "Reglas para participar y ganar gotas", en: "Rules to take part and earn drops" } },
          { src: "images/projects/jardin-de-bruma/rangos.jpg", alt: { es: "Rangos y recompensas", en: "Ranks and rewards" } },
          { src: "images/projects/jardin-de-bruma/feedback.jpg", alt: { es: "Feedback a corto plazo", en: "Short-term feedback" } },
          { src: "images/projects/jardin-de-bruma/conexion.jpg", alt: { es: "Cómo se conecta todo el sistema", en: "How the whole system connects" } },
          { src: "images/projects/jardin-de-bruma/calendario.jpg", alt: { es: "Calendario de actividades", en: "Activity calendar" } },
        ],
      },
    ],
  },

  {
    slug: "contemplar-lo-infinito",
    tier: 2,
    categories: ["av"],
    title: "Contemplar lo infinito",
    year: "2026",
    mode: "individual",
    tags: [t("Instrumento visual", "Visual instrument"), t("Tiempo real", "Real time")],
    summary: t(
      "Una pieza interactiva donde una intérprete modifica el entorno de un universo de agentes autónomos para transmitir la sensación de lo inmenso.",
      "An interactive piece where a performer shapes the environment of a universe of autonomous agents to convey the feeling of immensity.",
    ),
    roleLine: t("Diseño de interacción y visual; prototipado con apoyo de IA", "Interaction and visual design; AI-assisted prototyping"),
    color: "#5B4B9A",
    tint: "#ECE8F7",
    textColor: "#3F336F",
    cover: "images/projects/contemplar/cover.jpg",
    coverAlt: t("Clímax del ensayo: filamentos violetas y un sistema de cuerpos", "Rehearsal climax: violet filaments and a system of bodies"),
    blocks: [
      {
        type: "facts",
        label: t("Resumen", "Overview"),
        items: [
          { label: L_.anio, value: t("2026 (septiembre)", "2026 (September)") },
          { label: L_.contexto, value: t("Proyecto académico individual", "Individual academic project") },
          { label: t("Mi rol", "My role"), value: t("Diseño de interacción y visual; prototipado con apoyo de IA", "Interaction and visual design; AI-assisted prototyping") },
          { label: L_.tools, value: same("WebGPU · JavaScript · Vite") },
        ],
      },
      {
        type: "text",
        label: t("La idea", "The idea"),
        body: t(
          "Un instrumento visual para interpretar en vivo el tema principal de Interstellar. Con pocos controles, quien interpreta modifica las condiciones de un universo de agentes: las formas (grupos, corrientes, filamentos, nubes, cuerpos) emergen de decisiones locales, no de órdenes directas.",
          "A visual instrument for performing the main theme of Interstellar live. With only a few controls, the performer changes the conditions of a universe of agents: the shapes (groups, currents, filaments, clouds, bodies) emerge from local decisions, not from direct commands.",
        ),
      },
      {
        type: "gallery",
        label: t("Evidencias", "Evidence"),
        items: [
          { src: "images/projects/contemplar/05-nivel4-nebulosa.jpg", alt: { es: "Nivel 4 de revelación: nebulosa", en: "Revelation level 4: nebula" } },
          { src: "images/projects/contemplar/10-sistema-de-cuerpos.jpg", alt: { es: "Sistema de cuerpos en órbita", en: "System of orbiting bodies" } },
          { src: "images/projects/contemplar/v-sistema.jpg", alt: { es: "Sistema: filamentos violetas durante el ensayo grabado", en: "System: violet filaments during the recorded rehearsal" } },
          { src: "images/projects/contemplar/v-revelacion.jpg", alt: { es: "Revelación: materia que se reúne en el borde del campo", en: "Revelation: matter gathering at the edge of the field" } },
          { src: "images/projects/contemplar/07-revelacion-niveles.png", alt: { es: "Los cinco niveles de revelación", en: "The five revelation levels" } },
        ],
      },
      {
        type: "videos",
        items: [
          { title: { es: "Ensayo completo (6:39, con la música)", en: "Full rehearsal (6:39, with the music)" }, youtube: "ki0KPbzuUF4" },
        ],
      },
      {
        type: "links",
        items: [
          { label: { es: "Abrir la pieza (Chrome o Edge con WebGPU)", en: "Open the piece (Chrome or Edge with WebGPU)" }, url: "https://valengp2006.github.io/contemplar-lo-infinito/" },
          { label: { es: "Repositorio en GitHub", en: "GitHub repository" }, url: "https://github.com/Valengp2006/contemplar-lo-infinito" },
        ],
      },
    ],
  },

  // ───────────────────────────── LABORATORIO (versión corta) ────────────────
  {
    slug: "cauce",
    tier: 3,
    categories: ["av"],
    title: "Cauce",
    year: "2026",
    mode: "individual",
    tags: [t("Obra computacional", "Computational artwork"), t("Sonificación", "Sonification")],
    summary: t(
      "¿Para qué tomarte el trabajo? Una obra sobre la distancia entre lo que imaginas y lo que un sistema automático interpreta.",
      "Why bother? A piece about the gap between what you imagine and what an automated system interprets.",
    ),
    roleLine: t("Diseño de interacción y sistemas generativos, con apoyo de IA", "Interaction design and generative systems, with AI support"),
    color: "#2F7C8C",
    tint: "#E0F0F3",
    textColor: "#1D5561",
    cover: "images/projects/cauce/v-cover.jpg",
    coverAlt: t("Trazos de luz dorada sobre un fondo azul oscuro y la frase «Ahora, una intención basta para ponerlo en movimiento»", "Golden light trails over a dark blue background and the phrase “Now, an intention is enough to set it in motion”"),
    blocks: [
      {
        type: "facts",
        label: t("Resumen", "Overview"),
        items: [
          { label: L_.materia, value: t("Simulación, unidad 8", "Simulation, unit 8") },
          { label: L_.anio, value: t("2026 (octubre)", "2026 (October)") },
          { label: L_.contexto, value: t("Proyecto académico individual", "Individual academic project") },
          { label: L_.tools, value: same("p5.js · Tone.js · Vite") },
        ],
      },
      {
        type: "text",
        label: t("La idea", "The idea"),
        body: t(
          "El mouse es la intención: cuanto más constante su trayectoria, más fieles son los agentes que la interpretan; cuanto menos, más se desvían. La persona no controla los agentes: solo juzga qué conservar y qué soltar. Flow fields, flocking y rastros tipo Physarum producen la imagen y Tone.js la vuelve sonido.",
          "The mouse is the intention: the steadier its path, the more faithfully the agents interpret it; the less steady, the more they drift. People don't control the agents: they only judge what to keep and what to let go. Flow fields, flocking and Physarum-like trails produce the image and Tone.js turns it into sound.",
        ),
      },
      {
        type: "gallery",
        label: t("Evidencias", "Evidence"),
        items: [
          { src: "images/projects/cauce/inicio.jpg", alt: { es: "Pantalla de inicio de Cauce", en: "Cauce start screen" } },
          { src: "images/projects/cauce/v-verde.jpg", alt: { es: "Los primeros trazos: corrientes verdes que siguen la intención", en: "First strokes: green currents that follow the intention" } },
          { src: "images/projects/cauce/v-dorado.jpg", alt: { es: "Lo dorado es lo tuyo: las trazas conservadas brillan en oro", en: "The golden is yours: preserved traces glow in gold" } },
          { src: "images/projects/cauce/v-estela.jpg", alt: { es: "Pliegues dorados que se acumulan entre los desvíos", en: "Golden folds accumulating among the detours" } },
          { src: "images/projects/cauce/v-cierre.jpg", alt: { es: "El agua corrió sola: cierre de la sesión", en: "The water ran on its own: end of the session" } },
          { src: "images/projects/cauce/v-final.jpg", alt: { es: "Pantalla final: «Haz clic para volver a empezar»", en: "Final screen: “Click to start over”" } },
        ],
      },
      {
        type: "videos",
        items: [
          { title: { es: "Cauce: una sesión completa", en: "Cauce: a full session" }, youtube: "mbFWkJXmFDI" },
        ],
      },
      {
        type: "links",
        items: [
          { label: { es: "Abrir la obra", en: "Open the piece" }, url: "https://valengp2006.github.io/why-bother/" },
          { label: { es: "Repositorio en GitHub", en: "GitHub repository" }, url: "https://github.com/Valengp2006/why-bother" },
        ],
      },
    ],
  },

  {
    slug: "encantar",
    tier: 3,
    categories: ["immersive"],
    title: "Encantar", // Nombre nuevo (sin marca de terceros). Para cambiarlo: aquí y el slug de arriba.
    year: "2026",
    mode: "individual",
    tags: [t("Sistema tipográfico jugable", "Playable typographic system"), t("Diseño de juego", "Game design")],
    summary: t(
      "Una pantalla casi negra y una luz que sigue al cursor: cada letra guarda un hechizo que se despierta con un gesto.",
      "A nearly black screen and a light that follows the cursor: each letter hides a spell that wakes up with a gesture.",
    ),
    roleLine: t("Diseño de juego e interacción, con apoyo de IA", "Game and interaction design, with AI support"),
    color: "#7A4FA3",
    tint: "#EFE7F6",
    textColor: "#52307A",
    cover: "images/projects/encantar/cover.jpg",
    coverAlt: t("Una luz recorre una letra casi invisible sobre un cielo estrellado", "A light travels across a nearly invisible letter on a starry sky"),
    blocks: [
      {
        type: "facts",
        label: t("Resumen", "Overview"),
        items: [
          { label: L_.materia, value: t("Simulación", "Simulation") },
          { label: L_.anio, value: t("2026 (octubre)", "2026 (October)") },
          { label: L_.contexto, value: t("Proyecto académico individual", "Individual academic project") },
          { label: L_.tools, value: t("JavaScript · Vite · Audio web", "JavaScript · Vite · Web Audio") },
        ],
      },
      {
        type: "text",
        label: t("La idea", "The idea"),
        body: t(
          "Un sistema tipográfico jugable concebido como ejercicio académico para una pantalla interactiva en un evento de la marca Disney, con público familiar. Es conceptual: no tiene vínculo, patrocinio ni respaldo oficial de la marca. Cada letra se descubre en tres tiempos: un gesto la abre, un minijuego la despierta y su hechizo es la recompensa.",
          "A playable typographic system conceived as an academic exercise for an interactive screen at a Disney event, for a family audience. It is conceptual: it has no link to, sponsorship from or endorsement by the brand. Each letter is discovered in three beats: a gesture opens it, a minigame wakes it up and its spell is the reward.",
        ),
      },
      {
        type: "gallery",
        label: t("Evidencias", "Evidence"),
        items: [
          { src: "images/projects/encantar/inicio.jpg", alt: { es: "Pantalla de inicio: «Una aventura de luz»", en: "Start screen: “A light adventure”" } },
          { src: "images/projects/encantar/palabra.jpg", alt: { es: "Frase inicial: una palabra dormida en la oscuridad", en: "Opening line: a word asleep in the dark" } },
          { src: "images/projects/encantar/guia.jpg", alt: { es: "Guía de gestos: seis letras por despertar", en: "Gesture guide: six letters to wake up" } },
          { src: "images/projects/encantar/cover.jpg", alt: { es: "La luz del cursor revela el contorno de una letra", en: "The cursor's light reveals the outline of a letter" } },
        ],
      },
      {
        type: "videos",
        items: [
          { title: { es: "Encantar en juego: despertando las letras", en: "Encantar in play: waking up the letters" }, youtube: "CHbMVxdAO8U" },
        ],
      },
      {
        type: "links",
        items: [
          { label: { es: "Probar Encantar", en: "Try Encantar" }, url: "https://valengp2006.github.io/encantar/" },
          { label: { es: "Repositorio en GitHub", en: "GitHub repository" }, url: "https://github.com/Valengp2006/encantar" },
        ],
      },
    ],
  },
];

/** Proyectos publicados (sin borradores), en el orden del arreglo. */
export const published = projects.filter((p) => !p.draft);

export function getProject(slug: string): Project | undefined {
  return published.find((p) => p.slug === slug);
}

/** Siguiente proyecto en el orden del sitio (vuelve al primero al final). */
export function nextOf(slug: string): Project {
  const i = published.findIndex((p) => p.slug === slug);
  return published[(i + 1) % published.length];
}

/** Proyecto anterior en el orden del sitio (vuelve al último desde el primero). */
export function prevOf(slug: string): Project {
  const i = published.findIndex((p) => p.slug === slug);
  return published[(i - 1 + published.length) % published.length];
}

export const byTier = (tier: 1 | 2 | 3) => published.filter((p) => p.tier === tier);
export const featured = published.filter((p) => p.featured);
