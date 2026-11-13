import type { L } from "../i18n";

// ─────────────────────────────────────────────────────────────────────────────
// TODO EL CONTENIDO DE PROYECTOS VIVE AQUÍ.
// Para agregar uno: copia un objeto, cambia `slug` y los textos (es/en) y
// déjalo en el lugar del arreglo que quieras (el orden del arreglo es el orden
// en el sitio). `draft: true` lo oculta de todo el sitio hasta que esté listo.
//
// tier 1 = destacado (home + primera fila de /proyectos)
// tier 2 = segundo nivel
// tier 3 = experimentos / laboratorio (versión corta)
//
// Imágenes: archivos en public/images/projects/<slug>/ ; aquí se escribe la
// ruta SIN `public` y SIN base, p. ej. "images/projects/dissonance/cover.webp".
// Si `cover` falta, la tarjeta usa el color del proyecto (no se rompe nada).
// ─────────────────────────────────────────────────────────────────────────────

export interface Section {
  label: L;
  body: L;
}
export interface Decision {
  challenge: L;
  solution: L;
}
export interface SystemStep {
  title: L;
  body: L;
}
export interface Metric {
  value: L;
  label: L;
}
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
}
export type Block =
  | { type: "facts"; label: L; body?: L; items: { label: L; value: L }[] }
  | { type: "statement"; label: L; body: L; tags?: { text: L; color: string }[] }
  | { type: "sections"; label?: L; items: Section[] }
  | { type: "steps"; label: L; body?: L; items: { title: L; body: L }[] }
  | { type: "cards"; label: L; body?: L; items: { title: L; body: L; color: string }[] }
  | { type: "columns"; label: L; body?: L; items: { title: L; color: string; bullets: L[] }[] }
  | { type: "insight"; label: L; body?: L; items: { title: L; body: L; color: string }[]; insight: L }
  | { type: "persona"; label: L; name: string; age: L; role: L; quote: L; groups: { title: L; color: string; items: L[] }[] }
  | { type: "palette"; label: L; body?: L; colors: { name: L; hex: string }[]; fonts: { name: string; note: L }[]; states: L[] }
  | { type: "flow"; label: L; body?: L; steps: L[] }
  | { type: "chips"; label: L; body?: L; items: L[] }
  | { type: "quote"; label: L; body: L };

export type Category = "ux" | "interactive" | "heritage";

export interface Project {
  slug: string;
  tier: 1 | 2 | 3;
  /** Categorías para los filtros de /proyectos (puede tener varias). */
  categories: Category[];
  draft?: boolean;
  title: string;
  tag: L;
  result: L;
  color: string;
  tint: string;
  textColor: string;
  cover?: string;
  coverAlt: L;
  role: L;
  duration: L;
  team?: L;
  /** Aviso visible bajo el banner (p. ej. ejercicio académico). */
  note?: L;
  /** Si es true, "Resultado" se muestra como "Entregable". */
  deliverable?: boolean;
  /** Reemplaza el título del bloque de cifras. */
  metricsLabel?: L;
  tools: string;
  question?: L;
  sections: Section[];
  /** Bloques visuales: si existen, reemplazan a `sections` en la página del proyecto. */
  blocks?: Block[];
  decisions?: Decision[];
  system?: SystemStep[];
  metrics?: Metric[];
  awards?: Award[];
  gallery?: GalleryItem[];
  videos?: Video[];
  links?: { label: L; url: string }[];
  stack: string[];
  outcome: L;
}

export const projects: Project[] = [
  // ───────────────────────────── TIER 1 ─────────────────────────────────────
  {
    slug: "dissonance",
    tier: 1,
    categories: ["interactive"],
    title: "Dissonance",
    tag: { es: "Experiencia inmersiva · VR", en: "Immersive experience · VR" },
    result: {
      es: "Ecosistema narrativo en tres actos (video interactivo, web y VR cooperativa) con 4 reconocimientos en la muestra DEX 2026.",
      en: "A three-act narrative ecosystem (interactive video, web and cooperative VR) with 4 recognitions at DEX 2026.",
    },
    color: "#2B3A67",
    tint: "#E3E8F6",
    textColor: "#1F2B52",
    cover: "images/projects/dissonance/cover.webp",
    coverAlt: {
      es: "Terminal de ATLAS-NET, la web ficticia de la misión Dissonance-1: «Revise la convocatoria y envíe su postulación»",
      en: "ATLAS-NET terminal, the fictional website of the Dissonance-1 mission: “Review the call and submit your application”",
    },
    role: { es: "Dirección creativa · Diseño de experiencia", en: "Creative direction · Experience design" },
    duration: { es: "Julio – Noviembre 2026 · Taller 6", en: "July – November 2026 · Workshop 6" },
    team: { es: "Proyecto en equipo", en: "Team project" },
    tools: "Unity · VR · HTML/CSS/JS · GitHub Pages",
    question: {
      es: "¿Cómo hacer que una persona experimente la incertidumbre desde adentro, en lugar de observarla desde afuera?",
      en: "How can we make people experience uncertainty from the inside, instead of watching it from the outside?",
    },
    sections: [
      {
        label: { es: "Contexto", en: "Context" },
        body: {
          es: "Dissonance es un ecosistema narrativo de terror cósmico que combina video interactivo, exploración web y realidad virtual cooperativa. La persona cree estar entrando a un proceso de reclutamiento para una misión aeroespacial; a medida que decide, investiga y colabora, aparecen contradicciones que debilitan su confianza en la organización, en la información y en su propia percepción. Cada medio cumple una función distinta: el Acto I invita a decidir, el II a buscar y el III a sobrevivir.",
          en: "Dissonance is a cosmic-horror narrative ecosystem that combines interactive video, web exploration and cooperative virtual reality. Participants believe they are joining a recruitment process for an aerospace mission; as they decide, investigate and cooperate, contradictions appear and erode their trust in the organization, in the information they receive and in their own perception. Each medium plays a different role: Act I is about deciding, Act II about searching and Act III about surviving.",
        },
      },
      {
        label: { es: "Investigación", en: "Research" },
        body: {
          es: "Antes de diseñar investigamos cómo las personas viven el universo y el miedo: una encuesta (39 respuestas), 11 entrevistas y una revisión de 12 fuentes, de Burke y Lovecraft a estudios sobre el «efecto panorámico» en VR. Exploramos el tema desde cinco ejes (geográfico, temporal, sociocultural, emocional y tecnológico) y agrupamos los datos por afinidad en hechos, hallazgos y recomendaciones. El hallazgo central: el miedo al espacio nace menos del peligro que de la incertidumbre, el aislamiento y la sensación de ser observado.",
          en: "Before designing, we researched how people relate to the universe and to fear: a survey (39 responses), 11 interviews and a review of 12 sources, from Burke and Lovecraft to studies on the overview effect in VR. We explored the topic through five lenses (geographic, temporal, sociocultural, emotional and technological) and clustered the data by affinity into facts, findings and recommendations. The key insight: fear of space comes less from danger than from uncertainty, isolation and the feeling of being watched.",
        },
      },
      {
        label: { es: "Proceso de diseño", en: "Design process" },
        body: {
          es: "Traduje la investigación en seis intenciones de diseño (involucrar desde el primer contacto, convertir la curiosidad en vulnerabilidad, hacer que la persona actúe, dar a cada medio una función propia, crear tensión sin sobresaltos y quedar en la memoria) y en una progresión emocional y visual que va de lo corporativo a lo cósmico. Desde la dirección creativa mantuve la coherencia entre narrativa, recorrido del participante, sonido e imagen, y las pruebas con usuarios ajustaron el ritmo de cada acto.",
          en: "I translated the research into six design intentions (engage from first contact, turn curiosity into vulnerability, make people act, give each medium its own role, build tension without jump scares, and stay in memory) and into an emotional and visual progression that moves from corporate to cosmic. As creative director I kept narrative, participant journey, sound and visuals coherent, and user tests tuned the pacing of each act.",
        },
      },
    ],
    decisions: [
      {
        challenge: {
          es: "Crear tensión sin depender de sobresaltos ni de violencia explícita.",
          en: "Build tension without relying on jump scares or explicit violence.",
        },
        solution: {
          es: "La tensión nace del contraste: información incompleta, contradicciones entre lo que dice la organización y lo que muestran los archivos, y sonido que crece de forma gradual.",
          en: "Tension comes from contrast: incomplete information, contradictions between what the organization says and what its files show, and sound that grows gradually.",
        },
      },
      {
        challenge: {
          es: "Que cada medio aporte algo propio y no repita lo que ya hizo el anterior.",
          en: "Make each medium contribute something of its own instead of repeating the previous one.",
        },
        solution: {
          es: "Cada acto exige una acción distinta (decidir, investigar, cooperar) y prepara el siguiente, de modo que la historia solo se entiende completa recorriendo los tres.",
          en: "Each act asks for a different action (decide, investigate, cooperate) and prepares the next one, so the story only makes sense by going through all three.",
        },
      },
      {
        challenge: {
          es: "Lograr cooperación en VR cuando ninguna de las dos personas puede asumir que ve o sabe lo mismo.",
          en: "Make cooperation work in VR when neither person can assume they see or know the same thing.",
        },
        solution: {
          es: "Diseño asimétrico: el astronauta vive la misión en VR y el operador terrestre trabaja en una estación de control en PC, con información, tareas y comunicación distintas.",
          en: "Asymmetric design: the astronaut lives the mission in VR while the ground operator works at a PC control station, with different information, tasks and communication.",
        },
      },
    ],
    system: [
      {
        title: { es: "Acto I · Decidir", en: "Act I · Decide" },
        body: {
          es: "Video interactivo con una comunicación corporativa de una organización ficticia y puntos de decisión que influyen en el recorrido. Una persona.",
          en: "Interactive video with a corporate message from a fictional organization and decision points that shape the path. One person.",
        },
      },
      {
        title: { es: "Acto II · Buscar", en: "Act II · Search" },
        body: {
          es: "Sitio web ficticio de la organización: documentos, historia y contradicciones para investigar sin guía. Una persona.",
          en: "The organization's fictional website: documents, history and contradictions to investigate without guidance. One person.",
        },
      },
      {
        title: { es: "Acto III · Sobrevivir", en: "Act III · Survive" },
        body: {
          es: "VR cooperativa más estación de control en PC: astronauta y operador terrestre con roles complementarios. Dos personas.",
          en: "Cooperative VR plus a PC control station: astronaut and ground operator with complementary roles. Two people.",
        },
      },
    ],
    metrics: [
      { value: { es: "39", en: "39" }, label: { es: "respuestas de encuesta", en: "survey responses" } },
      { value: { es: "11", en: "11" }, label: { es: "entrevistas", en: "interviews" } },
      { value: { es: "82,1 %", en: "82.1%" }, label: { es: "de la muestra tenía entre 18 y 25 años", en: "of respondents were aged 18–25" } },
      { value: { es: "69,2 %", en: "69.2%" }, label: { es: "siente mucha incomodidad ante estar solo/a en el espacio", en: "feel very uncomfortable at the idea of being alone in space" } },
    ],
    awards: [
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
    ],
    gallery: [
      { src: "images/projects/dissonance/acto-i.webp", alt: { es: "Acto I: presentación del video interactivo", en: "Act I: interactive video presentation" } },
      { src: "images/projects/dissonance/acto-ii.webp", alt: { es: "Acto II: inicio del sitio web de la organización ficticia", en: "Act II: home of the fictional organization's website" } },
      { src: "images/projects/dissonance/vr-astronauta.webp", alt: { es: "Acto III: vista del astronauta en VR", en: "Act III: astronaut's VR view" } },
      { src: "images/projects/dissonance/vr-operador.webp", alt: { es: "Acto III: operador terrestre conectado desde la estación de control", en: "Act III: ground operator connected from the control station" } },
      { src: "images/projects/dissonance/estacion-control.webp", alt: { es: "Monitor de señal en la estación de control", en: "Signal monitor at the control station" } },
      { src: "images/projects/dissonance/pruebas-vr.webp", alt: { es: "Prueba de la experiencia con visor de VR", en: "Testing the experience with a VR headset" } },
    ],
    videos: [
      { title: { es: "Recorrido completo (versión acelerada)", en: "Full walkthrough (sped-up version)" }, youtube: "5wiIbKju99w" },
    ],
    links: [
      { label: { es: "Sitio del proyecto y documentación", en: "Project site and documentation" }, url: "https://valengp2006.github.io/Dissonance/" },
      { label: { es: "Repositorio en GitHub", en: "GitHub repository" }, url: "https://github.com/Valengp2006/Dissonance" },
    ],
    stack: ["Unity", "VR", "HTML/CSS/JS", "GitHub Pages"],
    outcome: {
      es: "Dissonance recibió cuatro distinciones en la muestra DEX 2026 de la UPB: Mejor Producto en Experiencias Interactivas, Mejor Interacción Jugador-Entorno, Estilo Visual Más Original y Mención de Honor del Taller 6. El equipo documentó investigación, diseño y pruebas en un sitio público.",
      en: "Dissonance received four distinctions at UPB's DEX 2026 showcase: Best Product in Interactive Experiences, Best Player–Environment Interaction, Most Original Visual Style and the Workshop 6 Honorable Mention. The team documented research, design and testing on a public site.",
    },
  },

  {
    slug: "pasos-de-tradicion",
    tier: 1,
    categories: ["heritage", "interactive"],
    title: "Pasos de Tradición",
    tag: { es: "Patrimonio cultural · AR", en: "Cultural heritage · AR" },
    result: {
      es: "Experiencia transmedia que preserva la memoria de quienes sostienen la Semana Santa desde el anonimato. Mejor proyecto del Taller 5: Experiencias Interactivas.",
      en: "A transmedia experience that preserves the memory of the people who sustain Holy Week from anonymity. Best project of Workshop 5: Interactive Experiences.",
    },
    color: "#B5651D",
    tint: "#F2E4D3",
    textColor: "#7A4718",
    cover: "images/projects/pasos-de-tradicion/cover.webp",
    coverAlt: { es: "El Códice de los Pasos: bitácora de oficios abierta, con la página «El maestro de las andas» y una ilustración animada del tallador", en: "El Códice de los Pasos: an open logbook of trades, with the page “The master of the andas” and an animated illustration of the carver" },
    role: { es: "Narrativa interactiva · Arquitectura de información · Producción audiovisual", en: "Interactive narrative · Information architecture · Audiovisual production" },
    duration: { es: "Enero – Mayo 2026 · Taller 5", en: "January – May 2026 · Workshop 5" },
    team: { es: "Proyecto en equipo", en: "Team project" },
    tools: "Figma · Unity · Vuforia · Visual Studio Code · GitHub · Luma AI · CapCut",
    question: {
      es: "¿Cómo pueden las experiencias digitales complementar la preservación del patrimonio cultural sin reemplazar el valor de vivirlo en el territorio?",
      en: "How can digital experiences complement the preservation of cultural heritage without replacing the value of living it in its place?",
    },
    sections: [
      {
        label: { es: "Contexto", en: "Context" },
        body: {
          es: "Pasos de Tradición nació en el Taller 5 de Ingeniería en Diseño de Entretenimiento Digital. Divulga el patrimonio de la Semana Santa de Santa Fe de Antioquia mediante un sitio web, experiencias de realidad aumentada y contenido audiovisual. Plantea los oficios de la celebración como actos de transmisión, en los que unos cuerpos aprenden de otros. Más que digitalizar la tradición, busca nuevas formas de acercarse a ella para que visitantes y habitantes exploren sus historias desde distintos medios y niveles de interacción.",
          en: "Pasos de Tradición was created in Workshop 5 of the Digital Entertainment Design Engineering program. It shares the heritage of Holy Week in Santa Fe de Antioquia through a website, augmented reality experiences and audiovisual content. It frames the trades of the celebration as acts of transmission, where some bodies learn from others. Rather than simply digitizing the tradition, it looks for new ways to approach it so that visitors and locals can explore its stories through different media and levels of interaction.",
        },
      },
      {
        label: { es: "Investigación", en: "Research" },
        body: {
          es: "Investigamos la historia, los oficios y las manifestaciones de la celebración y realizamos entrevistas semiestructuradas con cuatro personas que participan en sus distintos oficios. El hallazgo central, «quienes hacen posible la procesión rara vez aparecen en las fotografías», orientó la narrativa, la selección de contenidos y el diseño de las experiencias.",
          en: "We researched the history, trades and expressions of the celebration and held semi-structured interviews with four people who take part in its different trades. The core finding, “the people who make the procession possible rarely appear in the photographs”, guided the narrative, the content selection and the design of the experiences.",
        },
      },
      {
        label: { es: "Las tres experiencias", en: "The three experiences" },
        body: {
          es: "El archivo se organiza en cuatro etapas (investigación, inmersión, documental y autores) y en tres piezas narrativas complementarias: El Códice de los Pasos, La Cúpula y El Rastro de los Gestos. Cada una aborda la tradición desde un medio y un nivel de interacción distintos.",
          en: "The archive is organized in four stages (research, immersion, documentary and authors) and three complementary narrative pieces: El Códice de los Pasos, La Cúpula and El Rastro de los Gestos. Each approaches the tradition through a different medium and level of interaction.",
        },
      },
      {
        label: { es: "Proceso de diseño", en: "Design process" },
        body: {
          es: "Convertí la investigación en una experiencia narrativa coherente: escribí el guion y la estructura de El Códice de los Pasos, produje las secuencias audiovisuales con herramientas de IA y las integré con chroma key en Unity para verlas en realidad aumentada. En paralelo diseñé la arquitectura de información del sitio web y organicé la documentación del equipo.",
          en: "I turned the research into a coherent narrative experience: I wrote the script and structure of El Códice de los Pasos, produced the audiovisual sequences with AI tools and integrated them with chroma key in Unity for augmented reality. In parallel I designed the website's information architecture and organized the team's documentation.",
        },
      },
    ],
    decisions: [
      {
        challenge: { es: "Integrar narrativa, audiovisual y realidad aumentada en una sola experiencia coherente.", en: "Integrate narrative, audiovisual content and augmented reality into one coherent experience." },
        solution: { es: "Una narrativa transversal donde cada medio aporta una parte distinta de la historia, de modo que web, AR y video funcionan como un único ecosistema.", en: "A cross-cutting narrative where each medium contributes a different part of the story, so web, AR and video work as a single ecosystem." },
      },
      {
        challenge: { es: "Incorporar video dentro de la realidad aumentada sin que se sintiera pegado.", en: "Bring video into augmented reality without it feeling pasted on." },
        solution: { es: "Un flujo con chroma key que integra las secuencias generadas con IA dentro de Unity mediante Vuforia.", en: "A chroma-key workflow that integrates the AI-generated sequences into Unity through Vuforia." },
      },
    ],
    system: [
      { title: { es: "Entrada", en: "Input" }, body: { es: "Marcadores de realidad aumentada e interacción a través de la aplicación en Unity.", en: "Augmented reality markers and interaction through the Unity app." } },
      { title: { es: "Procesamiento", en: "Processing" }, body: { es: "Vuforia reconoce los marcadores y activa contenidos audiovisuales y elementos narrativos integrados en Unity.", en: "Vuforia recognizes the markers and triggers audiovisual content and narrative elements integrated in Unity." } },
      { title: { es: "Salida", en: "Output" }, body: { es: "Experiencia transmedia: realidad aumentada, video y narrativa digital que complementan la exploración de la Semana Santa.", en: "A transmedia experience: augmented reality, video and digital narrative that complement the exploration of Holy Week." } },
    ],
    metrics: [
      { value: { es: "4", en: "4" }, label: { es: "entrevistas semiestructuradas a personas que sostienen los oficios", en: "semi-structured interviews with people who sustain the trades" } },
      { value: { es: "3", en: "3" }, label: { es: "experiencias complementarias: Códice, Cúpula y Rastro de los Gestos", en: "complementary experiences: Códice, Cúpula and Rastro de los Gestos" } },
      { value: { es: "4", en: "4" }, label: { es: "etapas del archivo: investigación, inmersión, documental y autores", en: "archive stages: research, immersion, documentary and authors" } },
    ],
    awards: [
      {
        title: { es: "Mejor proyecto del Taller 5: Experiencias Interactivas", en: "Best project of Workshop 5: Interactive Experiences" },
        detail: { es: "Reconocimiento · Taller 5, Ingeniería en Diseño de Entretenimiento Digital, UPB", en: "Recognition · Workshop 5, Digital Entertainment Design Engineering, UPB" },
      },
    ],
    gallery: [
      { src: "images/projects/pasos-de-tradicion/codice.jpg", alt: { es: "El Códice de los Pasos: bitácora de oficios con ilustraciones animadas", en: "El Códice de los Pasos: a logbook of trades with animated illustrations" } },
      { src: "images/projects/pasos-de-tradicion/cupula.jpg", alt: { es: "La Cúpula: visualización de un domo inmersivo en la plaza", en: "La Cúpula: visualization of an immersive dome in the plaza" } },
      { src: "images/projects/pasos-de-tradicion/sombras.jpg", alt: { es: "El Rastro de los Gestos: silueta en sombra de una persona en oración", en: "El Rastro de los Gestos: shadow silhouette of a person in prayer" } },
    ],
    videos: [
      { title: { es: "Making of: el proceso creativo, técnico y humano del proyecto", en: "Making of: the project's creative, technical and human process" }, youtube: "1RO1sUt3OM8" },
      { title: { es: "El Códice de los Pasos: experiencia de realidad aumentada", en: "El Códice de los Pasos: augmented reality experience" }, youtube: "gtFGBEbhLYQ" },
      { title: { es: "El Rastro de los Gestos: narrativa interactiva", en: "El Rastro de los Gestos: interactive narrative" }, youtube: "GzqdeB_yQgE" },
      { title: { es: "Cúpula de Legados: instalación audiovisual inmersiva", en: "Cúpula de Legados: immersive audiovisual installation" }, youtube: "ZJIWKkEvlxY" },
    ],
    links: [
      { label: { es: "Sitio web del proyecto", en: "Project website" }, url: "https://valengp2006.github.io/pasos-de-tradicion/" },
      { label: { es: "Repositorio en GitHub", en: "GitHub repository" }, url: "https://github.com/Valengp2006/pasos-de-tradicion" },
    ],
    stack: ["Unity", "Vuforia", "Figma", "Visual Studio Code", "GitHub", "Luma AI", "CapCut"],
    outcome: {
      es: "El proyecto culminó como una experiencia transmedia de tres experiencias complementarias y fue reconocido como el mejor proyecto del Taller 5: Experiencias Interactivas. Mi aporte principal fue El Códice de los Pasos, que integra audiovisual y realidad aumentada, además del sitio web: su arquitectura de información y la documentación del proceso.",
      en: "The project ended as a transmedia experience made of three complementary experiences and was recognized as the best project of Workshop 5: Interactive Experiences. My main contribution was El Códice de los Pasos, which combines audiovisual content and augmented reality, plus the website: its information architecture and the process documentation.",
    },
  },

  {
    slug: "muse",
    tier: 1,
    categories: ["ux"],
    title: "MUSE",
    tag: { es: "App social · UX/UI", en: "Social app · UX/UI" },
    result: {
      es: "Un espacio digital seguro donde artistas emergentes comparten procesos, descubren a otros y construyen comunidad.",
      en: "A safe digital space where emerging artists share their process, discover others and build community.",
    },
    color: "#8C2F52",
    tint: "#F7E4EC",
    textColor: "#6E2140",
    cover: "images/projects/muse/cover.jpg",
    coverAlt: { es: "Tres pantallas de la aplicación MUSE: concurso Artista de la Semana, galería de obras y eventos", en: "Three screens of the MUSE app: Artist of the Week contest, artwork gallery and events" },
    role: { es: "Investigación UX · Diseño UX/UI · Prototipado interactivo", en: "UX research · UX/UI design · Interactive prototyping" },
    duration: { es: "Marzo – Mayo 2026", en: "March – May 2026" },
    team: { es: "Proyecto en equipo", en: "Team project" },
    tools: "Figma · FigJam · Notion · Google Forms",
    question: {
      es: "¿Cómo diseñar una plataforma donde artistas compartan su obra y su proceso sintiéndose seguros y parte de una comunidad, sin sacrificar una experiencia de uso atractiva e intuitiva?",
      en: "How might we design a platform where artists share their work and process feeling safe and part of a community, without giving up an appealing, intuitive experience?",
    },
    sections: [],
    blocks: [
      {
        type: "facts",
        label: { es: "Acerca del proyecto", en: "About the project" },
        body: {
          es: "MUSE busca ofrecer una experiencia de publicación más humana, enfocada en la exploración creativa, la conexión entre artistas y la construcción de una identidad visual auténtica. Combina investigación UX, diseño de interfaces y prototipado interactivo.",
          en: "MUSE aims to offer a more human publishing experience focused on creative exploration, connection between artists and the building of an authentic visual identity. It combines UX research, interface design and interactive prototyping.",
        },
        items: [
          { label: { es: "Tipo", en: "Type" }, value: { es: "Aplicación social para artistas emergentes", en: "Social app for emerging artists" } },
          { label: { es: "Público", en: "Audience" }, value: { es: "Artistas jóvenes e ilustradores digitales", en: "Young artists and digital illustrators" } },
          { label: { es: "Herramientas", en: "Tools" }, value: { es: "Figma · FigJam · Notion", en: "Figma · FigJam · Notion" } },
          { label: { es: "Contexto", en: "Context" }, value: { es: "Proyecto académico de diseño UX/UI", en: "Academic UX/UI design project" } },
        ],
      },
      {
        type: "statement",
        label: { es: "Problema", en: "Problem" },
        body: {
          es: "Compartir arte en plataformas digitales se volvió una experiencia incómoda para muchos artistas emergentes: miedo al juicio, robo de contenido y saturación de contenido generado con IA. Eso abrió la oportunidad de diseñar un espacio enfocado en cuatro ejes.",
          en: "Sharing art on digital platforms has become an uncomfortable experience for many emerging artists: fear of judgment, content theft and saturation of AI-generated content. That opened the opportunity to design a space built around four pillars.",
        },
        tags: [
          { text: { es: "Seguridad", en: "Safety" }, color: "#E03F6C" },
          { text: { es: "Comunidad", en: "Community" }, color: "#373CE9" },
          { text: { es: "Autenticidad", en: "Authenticity" }, color: "#5FB3A6" },
          { text: { es: "IA", en: "AI" }, color: "#8C7BD8" },
        ],
      },
      {
        type: "cards",
        label: { es: "Objetivos", en: "Goals" },
        items: [
          { title: { es: "Investigación UX", en: "UX research" }, body: { es: "Comprender las necesidades y preocupaciones de artistas jóvenes.", en: "Understand the needs and concerns of young artists." }, color: "#E03F6C" },
          { title: { es: "Experiencia visual", en: "Visual experience" }, body: { es: "Diseñar una interfaz cómoda, intuitiva y creativa.", en: "Design a comfortable, intuitive and creative interface." }, color: "#373CE9" },
          { title: { es: "Comunidad", en: "Community" }, body: { es: "Facilitar la interacción y la participación entre artistas.", en: "Facilitate interaction and participation among artists." }, color: "#5FB3A6" },
          { title: { es: "Prototipado", en: "Prototyping" }, body: { es: "Desarrollar un prototipo interactivo funcional.", en: "Build a functional interactive prototype." }, color: "#FD7E57" },
        ],
      },
      {
        type: "columns",
        label: { es: "Mi rol", en: "My role" },
        body: {
          es: "Mis aportes destacados: el flujo de eventos, la sección «Artista de la Semana», el UI Kit y la navegación.",
          en: "My highlighted contributions: the events flow, the “Artist of the Week” section, the UI Kit and navigation.",
        },
        items: [
          {
            title: { es: "UX Research", en: "UX Research" },
            color: "#E03F6C",
            bullets: [
              { es: "Encuestas y análisis de usuarios", en: "Surveys and user analysis" },
              { es: "Organización de insights", en: "Insight organization" },
              { es: "User Persona y Point of View", en: "User Persona and Point of View" },
              { es: "User Journey Map", en: "User Journey Map" },
            ],
          },
          {
            title: { es: "UX Design", en: "UX Design" },
            color: "#373CE9",
            bullets: [
              { es: "Ideación de funcionalidades", en: "Feature ideation" },
              { es: "Wireframes iniciales", en: "Initial wireframes" },
              { es: "Flujos de navegación", en: "Navigation flows" },
            ],
          },
          {
            title: { es: "UI Design y prototipado", en: "UI Design and prototyping" },
            color: "#5FB3A6",
            bullets: [
              { es: "Diseño visual", en: "Visual design" },
              { es: "Wireframes en alta fidelidad", en: "High-fidelity wireframes" },
              { es: "UI Kit", en: "UI Kit" },
              { es: "Componentes interactivos", en: "Interactive components" },
              { es: "Prototipado en Figma", en: "Prototyping in Figma" },
            ],
          },
        ],
      },
      {
        type: "insight",
        label: { es: "Investigación UX", en: "UX research" },
        body: {
          es: "Encuestas, entrevistas y pruebas con usuarios sobre hábitos de publicación, percepción de seguridad y preferencias visuales.",
          en: "Surveys, interviews and user tests about publishing habits, perception of safety and visual preferences.",
        },
        items: [
          { title: { es: "Seguridad del contenido", en: "Content safety" }, body: { es: "Preocupación por el robo o uso no autorizado de obras.", en: "Concern about theft or unauthorized use of artwork." }, color: "#E65271" },
          { title: { es: "Comunidad con apoyo", en: "A supportive community" }, body: { es: "Valoración de comunidades con apoyo creativo y retroalimentación constructiva.", en: "Appreciation for communities with creative support and constructive feedback." }, color: "#4B45BC" },
          { title: { es: "Interés por el arte humano", en: "Interest in human-made art" }, body: { es: "Deseo de plataformas que den voz únicamente a contenido creado por humanos.", en: "Desire for platforms that give voice only to human-made content." }, color: "#62ADA2" },
        ],
        insight: {
          es: "Los artistas no solo buscan plataformas para publicar contenido, sino espacios donde sentirse seguros, valorados y representados visualmente.",
          en: "Artists don't just look for platforms to publish content, but for spaces where they feel safe, valued and visually represented.",
        },
      },
      {
        type: "quote",
        label: { es: "Reflexión", en: "Reflection" },
        body: {
          es: "MUSE fue mi primer acercamiento completo a un proceso de diseño UX/UI aplicado a una experiencia real: la investigación, la iteración y la exploración visual fueron fundamentales para una propuesta más humana, funcional y significativa.",
          en: "MUSE was my first complete approach to a UX/UI design process applied to a real experience: research, iteration and visual exploration were essential to a more human, functional and meaningful proposal.",
        },
      },
    ],
    decisions: [
      {
        challenge: { es: "Transmitir creatividad sin comprometer la claridad de navegación.", en: "Convey creativity without compromising navigation clarity." },
        solution: { es: "Varias iteraciones de wireframes antes de la interfaz visual, ajustando jerarquías, composición y organización del contenido.", en: "Several wireframe iterations before the visual interface, adjusting hierarchy, composition and content organization." },
      },
      {
        challenge: { es: "Adaptarme a nuevas herramientas (Figma y FigJam).", en: "Adapting to new tools (Figma and FigJam)." },
        solution: { es: "Aprendizaje guiado y autónomo que fortaleció mi capacidad de adaptarme a nuevos entornos de diseño.", en: "Guided and self-directed learning that strengthened my ability to adapt to new design environments." },
      },
      {
        challenge: { es: "Construir componentes interactivos que acercaran el prototipo a una app real.", en: "Build interactive components that bring the prototype closer to a real app." },
        solution: { es: "Exploré prototipado y lógica de interacción (dropdowns, transiciones y estados) y comprendí la importancia de la iteración técnica para mejorar la experiencia de usuario.", en: "I explored prototyping and interaction logic (dropdowns, transitions and states) and learned the importance of technical iteration to improve the user experience." },
      },
      {
        challenge: { es: "Lograr una dirección visual coherente.", en: "Achieve a coherent visual direction." },
        solution: { es: "Construí una identidad gráfica a partir de la investigación visual y el análisis de referentes, que fueron clave para tomar decisiones de diseño.", en: "I built a graphic identity from visual research and reference analysis, which were key to making design decisions." },
      },
    ],
    gallery: [
      { src: "images/projects/muse/persona.webp", alt: { es: "Usuario objetivo: Oscar, estudiante de Diseño Gráfico e ilustrador digital, con sus motivaciones, frustraciones y necesidades", en: "Target user: Oscar, graphic design student and digital illustrator, with his motivations, frustrations and needs" } },
      { src: "images/projects/muse/wireframes.webp", alt: { es: "De wireframes a diseño visual: flujo de postulación a Artista de la Semana", en: "From wireframes to visual design: Artist of the Week entry flow" } },
      { src: "images/projects/muse/ui-kit.webp", alt: { es: "UI Kit: colores, tipografías, botones y componentes", en: "UI Kit: colors, typography, buttons and components" } },
      { src: "images/projects/muse/prototipo.webp", alt: { es: "Mapa del prototipo interactivo en Figma", en: "Interactive prototype map in Figma" } },
    ],
    links: [
      { label: { es: "Presentación completa del caso de estudio en Figma", en: "Full case study presentation on Figma" }, url: "https://www.figma.com/deck/D16IOQE3BsvhIg70jK0tMP" },
    ],
    stack: ["Figma", "FigJam", "Notion", "Google Forms"],
    outcome: {
      es: "Un prototipo interactivo de alta fidelidad, validado con usuarios. Las pruebas destacaron la identidad visual, la facilidad de navegación, la claridad de los flujos principales y la propuesta de comunidad para artistas.",
      en: "A high-fidelity interactive prototype, validated with users. Testing highlighted the visual identity, ease of navigation, clarity of the main flows and the community proposal for artists.",
    },
  },

  // ───────────────────────────── TIER 2 ─────────────────────────────────────
  {
    slug: "jardin-de-bruma",
    tier: 2,
    categories: ["ux"],
    title: "Jardín de Bruma",
    tag: { es: "Gamificación · Estrategia para marca", en: "Gamification · Brand strategy" },
    result: {
      es: "Propuesta de gamificación para Bruma, un emprendimiento de regalos artesanales: una comunidad que compra, vuelve y recomienda con recompensas de costo mínimo.",
      en: "A gamification proposal for Bruma, a handmade-gift business: a community that buys, returns and recommends, powered by very low-cost rewards.",
    },
    color: "#8E5F78",
    tint: "#F3E6EC",
    textColor: "#6B3F58",
    cover: "images/projects/jardin-de-bruma/cover.jpg",
    coverAlt: { es: "Portada de Jardín de Bruma con flores de acuarela", en: "Jardín de Bruma cover with watercolor flowers" },
    role: { es: "Planteamiento de la idea y presentación de la propuesta, en conjunto con el equipo", en: "Idea development and proposal presentation, jointly with the team" },
    duration: { es: "Octubre 2026", en: "October 2026" },
    team: { es: "Proyecto en equipo", en: "Team project" },
    note: { es: "Ejercicio académico con cliente: propuesta de diseño, sin implementación.", en: "Academic client exercise: design proposal, not implemented." },
    deliverable: true,
    metricsLabel: { es: "El sistema en números", en: "The system in numbers" },
    tools: "Instagram · WhatsApp · Correo electrónico · Presentación de estrategia",
    question: {
      es: "¿Cómo construir una comunidad que compre, vuelva y recomiende una marca artesanal, con recompensas que cuesten poco pero impacten a las personas?",
      en: "How can we build a community that buys, returns and recommends a handmade brand, using rewards that cost little but matter to people?",
    },
    sections: [
      {
        label: { es: "Contexto", en: "Context" },
        body: {
          es: "Bruma es un emprendimiento de Medellín que hace regalos personalizados a mano con limpiapipas: bouquets personalizables y piezas temáticas. Los pedidos llegan por DM de Instagram o WhatsApp, con un anticipo del 50 % y entre 2 y 5 días de elaboración. Su público son personas que buscan un regalo para sus seres queridos. El reto era convertir compradores ocasionales en una comunidad que atraiga, vuelva y recomiende.",
          en: "Bruma is a Medellín business that makes personalized handmade gifts out of pipe cleaners: customizable bouquets and themed pieces. Orders come in through Instagram DMs or WhatsApp, with a 50% deposit and 2–5 days of production. Its audience is people looking for a gift for someone they love. The challenge was to turn occasional buyers into a community that attracts, returns and recommends.",
        },
      },
      {
        label: { es: "Hipótesis por validar", en: "Hypotheses to validate" },
        body: {
          es: "Cruzamos cinco necesidades del cliente con una respuesta de diseño cada una: un regalo diferente y especial (piezas temáticas y sorpresa), confiar en una marca nueva (reseñas, Muro y referidos), saber qué regalar (retos sobre sus gustos), no olvidar las fechas (recordatorios por correo) y sentirse parte de algo (Familia Bruma y rangos). Quedaron planteadas como hipótesis para validar con clientes reales.",
          en: "We paired five customer needs with a design response each: a different, special gift (themed and surprise pieces), trusting a new brand (reviews, a public wall and referrals), knowing what to give (challenges about their tastes), not forgetting dates (email reminders) and feeling part of something (Familia Bruma and ranks). They are framed as hypotheses to validate with real customers.",
        },
      },
      {
        label: { es: "Estrategia", en: "Strategy" },
        body: {
          es: "Dos dinámicas: la Familia Bruma, la comunidad de personas registradas que recibe beneficios, y el Jardín de Bruma, el juego de gotas y rangos dentro de esa comunidad. La metáfora guía todo: cada persona planta una semilla y la hace florecer participando; los puntos son gotas de rocío, los rangos son etapas de la flor y el reconocimiento público es el Muro del Jardín. Cada temporada tiene su ambientación, por ejemplo «Entre la bruma» en Halloween y «Luz entre la bruma» en Navidad.",
          en: "Two dynamics: Familia Bruma, the community of registered people who receive benefits, and Jardín de Bruma, the game of drops and ranks inside that community. One metaphor drives everything: each person plants a seed and makes it bloom by taking part; points are dewdrops, ranks are the stages of a flower and public recognition is the Garden Wall. Each season has its own theme, such as “Entre la bruma” for Halloween and “Luz entre la bruma” for Christmas.",
        },
      },
    ],
    decisions: [
      {
        challenge: { es: "Ofrecer recompensas que importen sin que el emprendimiento asuma costos que no puede sostener.", en: "Offer rewards that matter without costs the business can't sustain." },
        solution: { es: "Recompensas artesanales con cupo mensual y por tandas, un catálogo corto de figuras coleccionables, un único premio individual por trimestre (el Guardián del Jardín) y cupones solo para recompra, pequeños y con vigencia.", en: "Handmade rewards with monthly caps and small batches, a short catalog of collectible figures, a single individual prize per quarter (the Garden Guardian) and coupons only for repeat purchases, small and time-limited." },
      },
      {
        challenge: { es: "Que participar sea decisión del comprador y no tenga fricción.", en: "Make participation the buyer's choice, with no friction." },
        solution: { es: "Se entra escribiendo una palabra clave por DM: llega una respuesta automática con el link de registro, los datos caen en una base de datos con un código de referido y la persona empieza como Semilla.", en: "People join by sending a keyword by DM: an automatic reply brings the signup link, their data lands in a database with a referral code and they start as a Seed." },
      },
      {
        challenge: { es: "Mantener la motivación en el tiempo, no solo en la primera compra.", en: "Keep motivation going over time, not just at the first purchase." },
        solution: { es: "Dos relojes: las gotas totales (6 meses) definen el rango y las del trimestre definen el premio. Además, cada recompra trae una figura sorpresa (mariposa, abeja, caracol o luciérnaga) y los recordatorios traen de vuelta a las personas en sus fechas importantes.", en: "Two clocks: total drops (6 months) set the rank and quarterly drops set the prize. Each repeat purchase also brings a surprise figure (butterfly, bee, snail or firefly) and reminders bring people back on their important dates." },
      },
    ],
    system: [
      { title: { es: "1 · Entrar", en: "1 · Join" }, body: { es: "Palabra clave por DM, registro y código de referido. Se empieza como Semilla.", en: "Keyword by DM, signup and referral code. Everyone starts as a Seed." } },
      { title: { es: "2 · Ganar gotas", en: "2 · Earn drops" }, body: { es: "Comentar (5), reto semanal (10), historia con etiqueta (10), reseña con foto (20), comprar (30), volver a comprar (40) y referir a alguien que compra (40).", en: "Comment (5), weekly challenge (10), tagged story (10), photo review (20), purchase (30), repeat purchase (40) and referring someone who buys (40)." } },
      { title: { es: "3 · Subir de rango", en: "3 · Rank up" }, body: { es: "Semilla (0 gotas), Brote (30), Flor (80) y Jardín (150), cada uno con recompensas físicas y acceso anticipado a nuevas temporadas.", en: "Seed (0 drops), Sprout (30), Flower (80) and Garden (150), each with physical rewards and early access to new seasons." } },
      { title: { es: "4 · Volver y recomendar", en: "4 · Return and recommend" }, body: { es: "Feedback inmediato (mensajes con gotas ganadas y lo que falta para el siguiente rango) y a largo plazo (colección, Guardián y Muro).", en: "Immediate feedback (messages with drops earned and what's left for the next rank) and long-term feedback (collection, Guardian and Wall)." } },
    ],
    metrics: [
      { value: { es: "4", en: "4" }, label: { es: "rangos: Semilla, Brote, Flor y Jardín", en: "ranks: Seed, Sprout, Flower and Garden" } },
      { value: { es: "7", en: "7" }, label: { es: "acciones que suman gotas", en: "actions that earn drops" } },
      { value: { es: "6", en: "6" }, label: { es: "indicadores de medición del proceso", en: "process measurement indicators" } },
      { value: { es: "6 meses", en: "6 months" }, label: { es: "de vigencia de las gotas totales", en: "validity of total drops" } },
    ],
    gallery: [
      { src: "images/projects/jardin-de-bruma/concepto.jpg", alt: { es: "Concepto: Familia Bruma y Jardín de Bruma", en: "Concept: Familia Bruma and Jardín de Bruma" } },
      { src: "images/projects/jardin-de-bruma/reglas.jpg", alt: { es: "Reglas para participar y ganar gotas", en: "Rules to take part and earn drops" } },
      { src: "images/projects/jardin-de-bruma/rangos.jpg", alt: { es: "Rangos y recompensas", en: "Ranks and rewards" } },
      { src: "images/projects/jardin-de-bruma/feedback.jpg", alt: { es: "Feedback a corto plazo", en: "Short-term feedback" } },
      { src: "images/projects/jardin-de-bruma/conexion.jpg", alt: { es: "Cómo se conecta todo el sistema", en: "How the whole system connects" } },
      { src: "images/projects/jardin-de-bruma/calendario.jpg", alt: { es: "Calendario de actividades", en: "Activity calendar" } },
    ],
    stack: ["Instagram", "WhatsApp", "Correo electrónico"],
    outcome: {
      es: "Una propuesta completa de gamificación lista para pilotear: reglas, rangos, recompensas, feedback, controles de costo y seis indicadores de medición. El calendario plantea un piloto de Halloween (20 al 31 de octubre) y una dinámica de Navidad (1 de noviembre al 15 de diciembre), que luego se repite en cada fecha clave.",
      en: "A complete gamification proposal ready to pilot: rules, ranks, rewards, feedback, cost controls and six measurement indicators. The calendar plans a Halloween pilot (October 20–31) and a Christmas dynamic (November 1 – December 15), repeated on each key date afterwards.",
    },
  },

  {
    slug: "contemplar-lo-infinito",
    tier: 2,
    categories: ["interactive"],
    title: "Contemplar lo infinito",
    tag: { es: "Instrumento visual en tiempo real", en: "Real-time visual instrument" },
    result: {
      es: "Una pieza interactiva donde una intérprete modifica el entorno de un universo de agentes autónomos para transmitir la sensación de lo inmenso.",
      en: "An interactive piece where a performer shapes the environment of a universe of autonomous agents to convey the feeling of immensity.",
    },
    color: "#5B4B9A",
    tint: "#ECE8F7",
    textColor: "#3F336F",
    cover: "images/projects/contemplar/cover.jpg",
    coverAlt: { es: "Clímax del ensayo: filamentos violetas y un sistema de cuerpos", en: "Rehearsal climax: violet filaments and a system of bodies" },
    role: { es: "Diseño de interacción · Programación creativa · Diseño visual", en: "Interaction design · Creative coding · Visual design" },
    duration: { es: "Septiembre 2026", en: "September 2026" },
    tools: "WebGPU · JavaScript · Vite · GitHub Pages",
    question: {
      es: "¿Cómo transmitir la sensación de contemplar algo inmenso que no se puede comprender del todo, sin representar el espacio literalmente?",
      en: "How can we convey the feeling of contemplating something immense that can't be fully grasped, without depicting space literally?",
    },
    sections: [
      {
        label: { es: "Contexto", en: "Context" },
        body: {
          es: "Es un instrumento visual para interpretar en vivo el tema principal de Interstellar. Una intérprete escucha la música y, con pocos controles, modifica las condiciones de un universo de agentes. Las formas que aparecen (grupos, corrientes, filamentos, nubes, cuerpos) emergen de decisiones locales, no de órdenes directas.",
          en: "It is a visual instrument for performing the main theme of Interstellar live. A performer listens to the music and, with only a few controls, changes the conditions of a universe of agents. The shapes that appear (groups, currents, filaments, clouds, bodies) emerge from local decisions, not from direct commands.",
        },
      },
      {
        label: { es: "Proceso de diseño", en: "Design process" },
        body: {
          es: "Cada control cambia el entorno y nunca mueve una partícula: rumbo local y global, atracción, memoria, pulso, revelación, cuerpo, sistema, disolución y final. Cada uno tiene un significado emocional (viaje, deseo, recuerdo, tiempo, descubrimiento) y un score de interpretación sirve de guía de ensayo sin sincronizar la música. El proceso quedó documentado en una bitácora con evidencias de cada iteración.",
          en: "Every control changes the environment and never moves a particle directly: local and global heading, attraction, memory, pulse, revelation, body, system, dissolve and finale. Each carries an emotional meaning (journey, desire, memory, time, discovery) and a performance score serves as a rehearsal guide without syncing to the music. The process is documented in a log with evidence for every iteration.",
        },
      },
    ],
    decisions: [
      {
        challenge: { es: "Que pocos controles generen una pieza expresiva sin que el intérprete tenga que «dirigir» cada elemento.", en: "Make a handful of controls produce an expressive piece without the performer having to “direct” every element." },
        solution: { es: "Controles que modifican el entorno y agentes que perciben y deciden, de modo que la complejidad emerge sola y la interpretación se centra en la intención.", en: "Controls that change the environment and agents that perceive and decide, so complexity emerges on its own and the performance focuses on intent." },
      },
      {
        challenge: { es: "Sostener fluidez con decenas de miles de agentes en tiempo real.", en: "Keep it fluid with tens of thousands of agents in real time." },
        solution: { es: "Cómputo en GPU con WebGPU y un banco de pruebas que ejecuta los shaders reales para calibrar el rendimiento.", en: "GPU compute with WebGPU and a test bench that runs the real shaders to calibrate performance." },
      },
    ],
    gallery: [
      { src: "images/projects/contemplar/05-nivel4-nebulosa.jpg", alt: { es: "Nivel 4 de revelación: nebulosa", en: "Revelation level 4: nebula" } },
      { src: "images/projects/contemplar/10-sistema-de-cuerpos.jpg", alt: { es: "Sistema de cuerpos en órbita", en: "System of orbiting bodies" } },
      { src: "images/projects/contemplar/v-sistema.jpg", alt: { es: "Sistema: filamentos violetas durante el ensayo grabado", en: "System: violet filaments during the recorded rehearsal" } },
      { src: "images/projects/contemplar/v-revelacion.jpg", alt: { es: "Revelación: materia que se reúne en el borde del campo", en: "Revelation: matter gathering at the edge of the field" } },
      { src: "images/projects/contemplar/07-revelacion-niveles.png", alt: { es: "Los cinco niveles de revelación", en: "The five revelation levels" } },
    ],
    videos: [
      { title: { es: "Ensayo completo (6:39, con la música)", en: "Full rehearsal (6:39, with the music)" }, youtube: "ki0KPbzuUF4" },
    ],
    links: [
      { label: { es: "Abrir la pieza (Chrome o Edge con WebGPU)", en: "Open the piece (Chrome or Edge with WebGPU)" }, url: "https://valengp2006.github.io/contemplar-lo-infinito/" },
      { label: { es: "Repositorio en GitHub", en: "GitHub repository" }, url: "https://github.com/Valengp2006/contemplar-lo-infinito" },
    ],
    stack: ["WebGPU", "JavaScript", "Vite", "GitHub Pages"],
    outcome: {
      es: "Una pieza interpretada y grabada en un ensayo completo de más de seis minutos, con bitácora, especificación y evidencias del proceso.",
      en: "A piece performed and recorded in a full rehearsal of over six minutes, with a design log, specification and process evidence.",
    },
  },

  {
    slug: "cosmos",
    tier: 2,
    categories: ["interactive"],
    title: "Cosmos",
    tag: { es: "Instalación audiovisual", en: "Audiovisual installation" },
    result: {
      es: "Un ecosistema vivo donde público, performer y sonido moldean la obra en tiempo real: cada espectador tiñe la Luna desde su teléfono.",
      en: "A living ecosystem where audience, performer and sound shape the piece in real time: each spectator tints the Moon from their phone.",
    },
    color: "#6D4FE0",
    tint: "#EEE9FA",
    textColor: "#4B3A9E",
    cover: "images/projects/cosmos/cover.jpg",
    coverAlt: { es: "La Luna de Cosmos: una esfera generativa de textura viva sobre fondo negro", en: "Cosmos' Moon: a generative sphere with a living texture on a black background" },
    role: { es: "Diseño de interacción · Programación creativa · Diseño audiovisual", en: "Interaction design · Creative coding · Audiovisual design" },
    duration: { es: "Marzo – Mayo 2026", en: "March – May 2026" },
    team: { es: "Proyecto en equipo", en: "Team project" },
    tools: "TouchDesigner · Strudel · Open Stage Control · Node.js · Socket.io",
    question: {
      es: "¿Cómo diseñar una experiencia donde la interacción no solo controle una obra, sino que invite a las personas a construirla colectivamente?",
      en: "How can we design an experience where interaction doesn't just control a piece but invites people to build it together?",
    },
    sections: [
      {
        label: { es: "Contexto", en: "Context" },
        body: {
          es: "Cosmos es una instalación audiovisual interactiva que se presenta como un ecosistema vivo, moldeado por la interacción colectiva entre público, performer y sonido. Es una conversación entre sonido, imagen y presencia humana: la obra cambia de color, colapsa hacia un vórtice o se expande en estrellas, y busca difuminar la barrera entre espectador y obra mediante interfaces web.",
          en: "Cosmos is an interactive audiovisual installation presented as a living ecosystem, shaped by the collective interaction of audience, performer and sound. It is a conversation between sound, image and human presence: the piece changes color, collapses into a vortex or expands into stars, and aims to blur the line between spectator and artwork through web interfaces.",
        },
      },
      {
        label: { es: "Cómo funciona", en: "How it works" },
        body: {
          es: "Tres capas de participación: el pulso sonoro (música en vivo con Strudel cuyo bombo sincroniza el parpadeo de la Luna), el performer (dirige los estados visuales y la tensión narrativa desde un iPad con Open Stage Control) y el público (cada persona envía un color desde su teléfono, y el color lunar es colectivo). Un servidor Node.js con Socket.io traduce las conexiones web a OSC para TouchDesigner, en una red local con acceso por código QR.",
          en: "Three layers of participation: the sound pulse (live-coded music in Strudel whose kick drum syncs the Moon's flicker), the performer (directs the visual states and narrative tension from an iPad with Open Stage Control) and the audience (each person sends a color from their phone, and the lunar color is collective). A Node.js server with Socket.io translates web connections into OSC for TouchDesigner, on a local network with QR-code access.",
        },
      },
      {
        label: { es: "Proceso de diseño", en: "Design process" },
        body: {
          es: "Partimos de referentes de instalaciones inmersivas y arte interactivo, y construimos varios prototipos para traducir acciones físicas en respuestas visuales y sonoras. Cada iteración ajustó el equilibrio entre control, expresividad y estabilidad hasta que la tecnología quedó en segundo plano y la atención en la exploración colectiva.",
          en: "We started from references in immersive installations and interactive art and built several prototypes to translate physical actions into visual and sound responses. Each iteration tuned the balance between control, expressiveness and stability until the technology faded into the background and attention stayed on collective exploration.",
        },
      },
    ],
    decisions: [
      {
        challenge: { es: "Sincronizar visuales, sonido e interacción de decenas de teléfonos sin perder fluidez.", en: "Keep visuals, sound and the interaction of dozens of phones in sync without losing fluidity." },
        solution: { es: "Una arquitectura modular: Socket.io recibe al público, Open Stage Control al performer y todo converge por OSC en TouchDesigner.", en: "A modular architecture: Socket.io receives the audience, Open Stage Control the performer and everything converges through OSC in TouchDesigner." },
      },
      {
        challenge: { es: "Que fuera intuitivo para personas sin conocimientos técnicos.", en: "Make it intuitive for people with no technical background." },
        solution: { es: "Acceso por código QR y una interfaz web mínima que solo pide elegir un color, con retroalimentación visual inmediata en la Luna.", en: "QR-code access and a minimal web interface that only asks for a color, with immediate visual feedback on the Moon." },
      },
    ],
    system: [
      { title: { es: "Entrada", en: "Input" }, body: { es: "Smartphones del público (colores RGB por web), iPad del performer (Open Stage Control) y el pulso del bombo de Strudel.", en: "Audience smartphones (RGB colors via web), the performer's iPad (Open Stage Control) and Strudel's kick-drum pulse." } },
      { title: { es: "Procesamiento", en: "Processing" }, body: { es: "Un servidor Node.js con Socket.io convierte WebSocket a OSC; TouchDesigner recibe todo y genera los visuales.", en: "A Node.js server with Socket.io converts WebSocket to OSC; TouchDesigner receives everything and generates the visuals." } },
      { title: { es: "Salida", en: "Output" }, body: { es: "Visuales generativos y sonido sincronizados: una Luna de color colectivo que parpadea con el pulso y cambia entre estrellas, vórtice y nebulosa.", en: "Synchronized generative visuals and sound: a Moon of collective color that flickers with the pulse and shifts between stars, vortex and nebula." } },
    ],
    gallery: [
      { src: "images/projects/cosmos/luna.jpg", alt: { es: "TouchDesigner: la Luna generativa, una esfera de textura viva", en: "TouchDesigner: the generative Moon, a sphere with a living texture" } },
      { src: "images/projects/cosmos/filamentos.jpg", alt: { es: "TouchDesigner: la esfera se deshace en filamentos", en: "TouchDesigner: the sphere breaks into filaments" } },
      { src: "images/projects/cosmos/vortice.jpg", alt: { es: "TouchDesigner: la obra colapsa hacia un vórtice", en: "TouchDesigner: the piece collapses into a vortex" } },
      { src: "images/projects/cosmos/estrellas.jpg", alt: { es: "TouchDesigner: la obra se expande en estrellas", en: "TouchDesigner: the piece expands into stars" } },
      { src: "images/projects/cosmos/strudel.jpg", alt: { es: "Strudel: el código que genera el paisaje sonoro en vivo", en: "Strudel: the live-coded sound landscape" } },
      { src: "images/projects/cosmos/controlador.jpg", alt: { es: "El controlador del performer: botón de reinicio y deslizadores", en: "The performer's controller: reset button and sliders" } },
    ],
    videos: [
      { title: { es: "Cosmos en funcionamiento", en: "Cosmos running live" }, youtube: "FiLLIV0uhI4" },
    ],
    links: [
      { label: { es: "Sitio del proyecto", en: "Project site" }, url: "https://valengp2006.github.io/Proyecto_Cosmos/" },
      { label: { es: "Repositorio en GitHub", en: "GitHub repository" }, url: "https://github.com/Valengp2006/Proyecto_Cosmos" },
    ],
    stack: ["TouchDesigner", "Strudel", "Open Stage Control", "Node.js", "Socket.io", "OSC"],
    outcome: {
      es: "Se presentó como instalación en la muestra de proyectos de la Universidad Pontificia Bolivariana, integrando investigación, programación creativa y diseño de interacción.",
      en: "It was presented as an installation at the Universidad Pontificia Bolivariana's project showcase, bringing together research, creative coding and interaction design.",
    },
  },

  // ───────────────────────────── TIER 3 ─────────────────────────────────────
  {
    slug: "orquesta-corporal",
    tier: 3,
    categories: ["interactive"],
    title: "Orquesta Corporal",
    tag: { es: "Visión artificial · Interacción con el cuerpo", en: "Computer vision · Body interaction" },
    result: {
      es: "Dirige el «Himno a la alegría» con el cuerpo: la cámara ve, la orquesta suena.",
      en: "Conduct “Ode to Joy” with your body: the camera sees, the orchestra plays.",
    },
    color: "#C2563A",
    tint: "#F8E6DF",
    textColor: "#7E3220",
    cover: "images/projects/orquesta/cover.png",
    coverAlt: { es: "Pantalla de dirección de Orquesta Corporal", en: "Conducting screen of Orquesta Corporal" },
    role: { es: "Diseño de interacción · Visión por computador · Diseño sonoro", en: "Interaction design · Computer vision · Sound design" },
    duration: { es: "Octubre 2026 · Proyecto final de Visión por Computador", en: "October 2026 · Computer Vision final project" },
    tools: "p5.js · ml5.js (BodyPose / MoveNet) · Tone.js",
    question: {
      es: "¿Cómo hacer que alguien sin formación musical sienta lo que es dirigir una orquesta, usando solo su cuerpo?",
      en: "How can someone with no musical training feel what it's like to conduct an orchestra using only their body?",
    },
    sections: [
      {
        label: { es: "Idea y diseño", en: "Idea and design" },
        body: {
          es: "Una experiencia de pie frente a una pantalla: la persona dirige una orquesta con muestras reales que toca el «Himno a la alegría». La regla de diseño es «un gesto, una parte del cuerpo, un efecto»: la mano derecha marca el tempo, la izquierda llama a cada sección, la postura controla el volumen y los brazos cruzados cierran la obra. Nada se cruza con nada, así que es fácil de aprender y difícil de romper.",
          en: "An experience you stand in front of a screen for: the person conducts an orchestra of real samples playing “Ode to Joy”. The design rule is “one gesture, one body part, one effect”: the right hand sets the tempo, the left calls each section, posture controls volume and crossed arms end the piece. Nothing overlaps, so it is easy to learn and hard to break.",
        },
      },
      {
        label: { es: "Decisión clave", en: "Key decision" },
        body: {
          es: "La pantalla copia dónde se sienta cada sección en una orquesta real (cuerdas agudas a la izquierda, maderas al centro, chelos a la derecha): apuntar hacia donde está sentada la sección es llamarla. Cada gesto se justificó comparando lo que hace un director real con lo que hace el sistema.",
          en: "The screen mirrors where each section sits in a real orchestra (high strings on the left, woodwinds in the center, cellos on the right): pointing toward a section is calling it. Each gesture was justified by comparing what a real conductor does with what the system does.",
        },
      },
      {
        label: { es: "Implementación", en: "Implementation" },
        body: {
          es: "La cámara detecta 17 puntos del cuerpo con ml5.js BodyPose (MoveNet), con espejo activado y un filtro One Euro que suaviza la señal. El pulso se detecta como un golpe en el punto más bajo de la muñeca derecha, con histéresis y amplitud mínima relativa a los hombros; el tempo sale del promedio de los últimos golpes y se limita entre 0,5× y 1,5× del tempo escrito (80 BPM). La dinámica se calcula desde la postura (nariz y punto medio de hombros) con una línea base adaptativa, y el corte exige separar y luego cruzar los brazos durante 300 ms. El audio usa Tone.js con muestras reales, reverberación suave y un limitador.",
          en: "The camera detects 17 body keypoints with ml5.js BodyPose (MoveNet), with mirroring on and a One Euro filter smoothing the signal. The pulse is detected as a stroke at the lowest point of the right wrist, with hysteresis and a minimum amplitude relative to shoulder width; tempo comes from the average of the last strokes and is limited between 0.5× and 1.5× of the written tempo (80 BPM). Dynamics are computed from posture (nose and shoulder midpoint) with an adaptive baseline, and the cut requires separating and then crossing the arms for 300 ms. Audio uses Tone.js with real samples, soft reverb and a limiter.",
        },
      },
    ],
    decisions: [
      {
        challenge: { es: "Un gesto de corte que fuera visible, intuitivo y no chocara con los otros gestos.", en: "A cut-off gesture that was visible, intuitive and didn't clash with the other gestures." },
        solution: { es: "Pasé de manos juntas o dedos a brazos cruzados: se ve bien, se entiende sin explicación y no se confunde con señalar una sección.", en: "I moved from joined hands or fingers to crossed arms: it reads clearly, needs no explanation and isn't confused with pointing at a section." },
      },
      {
        challenge: { es: "Controlar el volumen sin ocupar la mano que llama a las secciones.", en: "Control volume without using the hand that calls the sections." },
        solution: { es: "El volumen pasó de la altura de la mano izquierda a la postura del cuerpo: libera esa mano y es más fácil de calibrar.", en: "Volume moved from the left hand's height to body posture: it frees that hand and is easier to calibrate." },
      },
      {
        challenge: { es: "Evitar el cansancio al marcar el pulso durante toda la obra.", en: "Avoid fatigue from beating the pulse throughout the piece." },
        solution: { es: "Un golpe equivale a dos pulsos en lugar de uno, lo que reduce el esfuerzo físico.", en: "One stroke now equals two beats instead of one, reducing physical effort." },
      },
      {
        challenge: { es: "Que la obra se escuchara completa aunque la persona no dirigiera a todas las secciones.", en: "Make the piece sound complete even if the person doesn't conduct every section." },
        solution: { es: "Siempre suena una base, las secciones no señaladas suenan suave, las llamadas suben al 60 % y la señalada al 100 %; el final se escucha con toda la orquesta.", en: "A base always plays, uncalled sections stay soft, called ones rise to 60% and the pointed one to 100%; the finale plays with the full orchestra." },
      },
    ],
    metrics: [
      { value: { es: "4", en: "4" }, label: { es: "gestos: pulso, entradas, dinámica y corte", en: "gestures: pulse, cues, dynamics and cut-off" } },
      { value: { es: "6", en: "6" }, label: { es: "instrumentos reales: violín, flauta, clarinete, chelo, contrabajo y piano", en: "real instruments: violin, flute, clarinet, cello, double bass and piano" } },
      { value: { es: "60 FPS", en: "60 FPS" }, label: { es: "estables durante casi todo el proyecto en las pruebas", en: "stable for almost the whole project in testing" } },
      { value: { es: "148", en: "148" }, label: { es: "pulsos de partitura a 80 BPM", en: "beats of score at 80 BPM" } },
    ],
    gallery: [
      { src: "images/projects/orquesta/historia.jpg", alt: { es: "Historia de apertura en el teatro", en: "Opening story at the theater" } },
      { src: "images/projects/orquesta/tutorial-pulso.jpg", alt: { es: "Tutorial del gesto de pulso", en: "Pulse gesture tutorial" } },
      { src: "images/projects/orquesta/gran-final.jpg", alt: { es: "Gran final con la orquesta completa", en: "Grand finale with the full orchestra" } },
      { src: "images/projects/orquesta/c-cuatro-gestos.png", alt: { es: "Los cuatro gestos: pulso, entradas, dinámica y corte", en: "The four gestures: pulse, cues, dynamics and cut-off" } },
      { src: "images/projects/orquesta/b-orquesta-real.png", alt: { es: "De la orquesta real a la distribución en pantalla", en: "From the real orchestra to the on-screen layout" } },
      { src: "images/projects/orquesta/j-arquitectura.png", alt: { es: "Arquitectura del sistema", en: "System architecture" } },
    ],
    links: [
      { label: { es: "Probar la experiencia en el navegador (requiere cámara)", en: "Try it in the browser (camera required)" }, url: "https://editor.p5js.org/Valengp2006/full/GMBJ7kILg" },
      { label: { es: "Documentación completa en Notion", en: "Full documentation on Notion" }, url: "https://app.notion.com/p/Orquesta-Corporal-401bd8838a788043a17ec992ffc8473c" },
    ],
    stack: ["p5.js", "ml5.js", "MoveNet", "Tone.js"],
    outcome: {
      es: "Una experiencia con historia de apertura, calibración, tutorial por gesto y gran final, documentada con storyboard, planificación técnica y bitácora.",
      en: "An experience with an opening story, calibration, a tutorial for each gesture and a grand finale, documented with a storyboard, technical planning and a design log.",
    },
  },

  {
    slug: "cauce",
    tier: 3,
    categories: ["interactive"],
    title: "Cauce",
    tag: { es: "Obra computacional", en: "Computational artwork" },
    result: {
      es: "¿Para qué tomarte el trabajo? Una obra sobre la distancia entre lo que imaginas y lo que un sistema automático interpreta.",
      en: "Why bother? A piece about the gap between what you imagine and what an automated system interprets.",
    },
    color: "#2F7C8C",
    tint: "#E0F0F3",
    textColor: "#1D5561",
    cover: "images/projects/cauce/v-cover.jpg",
    coverAlt: { es: "Trazos de luz dorada sobre un fondo azul oscuro y la frase «Ahora, una intención basta para ponerlo en movimiento»", en: "Golden light trails over a dark blue background and the phrase “Now, an intention is enough to set it in motion”" },
    role: { es: "Diseño de interacción · Sistemas generativos · Sonificación", en: "Interaction design · Generative systems · Sonification" },
    duration: { es: "Octubre 2026 · Unidad 8, Simulación", en: "October 2026 · Unit 8, Simulation" },
    tools: "p5.js · Tone.js · Vite · GitHub Pages",
    question: {
      es: "¿Qué pasa entre una intención y su interpretación automática, y qué vale la pena conservar de los desvíos?",
      en: "What happens between an intention and its automatic interpretation, and what is worth keeping from the detours?",
    },
    sections: [
      {
        label: { es: "Idea y diseño", en: "Idea and design" },
        body: {
          es: "El mouse es la intención: cuanto más constante su trayectoria, más fieles son los agentes que la interpretan; cuanto menos, más se desvían. La persona no controla los agentes: solo juzga qué conservar y qué soltar. Los desvíos se agrupan, se desafinan y a veces dejan trazas que valía la pena guardar. Flow fields, flocking y rastros tipo Physarum producen la imagen y Tone.js la vuelve sonido.",
          en: "The mouse is the intention: the steadier its path, the more faithfully the agents interpret it; the less steady, the more they drift. People don't control the agents: they only judge what to keep and what to let go. Detours cluster, go out of tune and sometimes leave traces worth keeping. Flow fields, flocking and Physarum-like trails produce the image and Tone.js turns it into sound.",
        },
      },
    ],
    gallery: [
      { src: "images/projects/cauce/inicio.jpg", alt: { es: "Pantalla de inicio de Cauce", en: "Cauce start screen" } },
      { src: "images/projects/cauce/v-verde.jpg", alt: { es: "Los primeros trazos: corrientes verdes que siguen la intención", en: "First strokes: green currents that follow the intention" } },
      { src: "images/projects/cauce/v-dorado.jpg", alt: { es: "Lo dorado es lo tuyo: las trazas conservadas brillan en oro", en: "The golden is yours: preserved traces glow in gold" } },
      { src: "images/projects/cauce/v-estela.jpg", alt: { es: "Pliegues dorados que se acumulan entre los desvíos", en: "Golden folds accumulating among the detours" } },
      { src: "images/projects/cauce/v-cierre.jpg", alt: { es: "El agua corrió sola: cierre de la sesión", en: "The water ran on its own: end of the session" } },
      { src: "images/projects/cauce/v-final.jpg", alt: { es: "Pantalla final: «Haz clic para volver a empezar»", en: "Final screen: “Click to start over”" } },
    ],
    videos: [
      { title: { es: "Cauce: una sesión completa", en: "Cauce: a full session" }, youtube: "mbFWkJXmFDI" },
    ],
    links: [
      { label: { es: "Abrir la obra", en: "Open the piece" }, url: "https://valengp2006.github.io/why-bother/" },
      { label: { es: "Repositorio en GitHub", en: "GitHub repository" }, url: "https://github.com/Valengp2006/why-bother" },
    ],
    stack: ["p5.js", "Tone.js", "Vite"],
    outcome: {
      es: "Una obra con hipótesis explícita, reglas de sistema verificables y una ficha de diseño que separa lo humano de lo automático.",
      en: "A piece with an explicit hypothesis, verifiable system rules and a design sheet that separates the human from the automatic.",
    },
  },

  {
    slug: "encantar",
    tier: 3,
    categories: ["interactive"],
    title: "Encantar", // Nombre nuevo (sin marca de terceros). Para cambiarlo: aquí y el slug de arriba.
    tag: { es: "Sistema tipográfico jugable", en: "Playable typographic system" },
    result: {
      es: "Una pantalla casi negra y una luz que sigue al cursor: cada letra guarda un hechizo que se despierta con un gesto.",
      en: "A nearly black screen and a light that follows the cursor: each letter hides a spell that wakes up with a gesture.",
    },
    color: "#7A4FA3",
    tint: "#EFE7F6",
    textColor: "#52307A",
    cover: "images/projects/encantar/cover.jpg",
    coverAlt: { es: "Una luz recorre una letra casi invisible sobre un cielo estrellado", en: "A light travels across a nearly invisible letter on a starry sky" },
    role: { es: "Diseño de juego · Diseño de interacción · Sistemas generativos", en: "Game design · Interaction design · Generative systems" },
    duration: { es: "Octubre 2026", en: "October 2026" },
    tools: "JavaScript · Vite · Audio web",
    question: {
      es: "¿Cómo encantar a un público familiar e intergeneracional con una experiencia que se descubre sin instrucciones?",
      en: "How can we enchant a family, multi-generational audience with an experience discovered without instructions?",
    },
    sections: [
      {
        label: { es: "Contexto", en: "Context" },
        body: {
          es: "Encantar nació como un ejercicio académico de la unidad de Simulación: un sistema tipográfico jugable concebido para una pantalla interactiva en un evento de la marca Disney, con público familiar e intergeneracional. La misión era hacer feliz a la gente; el atributo explorado, la magia y la fantasía; y el verbo, encantar. Es un ejercicio conceptual: no tiene vínculo, patrocinio ni respaldo oficial de la marca.",
          en: "Encantar began as an academic exercise for the Simulation course: a playable typographic system conceived for an interactive screen at a Disney event, for a family, multi-generational audience. The mission was to make people happy; the attribute explored, magic and fantasy; and the verb, to enchant. It is a conceptual exercise: it has no link to, sponsorship from or endorsement by the brand.",
        },
      },
      {
        label: { es: "Idea y diseño", en: "Idea and design" },
        body: {
          es: "Diseñada para una pantalla interactiva en un evento, cada letra se descubre en tres tiempos: un gesto la abre, un minijuego corto la despierta y su hechizo es la recompensa. No hay fallo ni números: el progreso se ve en la propia luz. Si alguien se atasca, el reto se vuelve más permisivo y una guía lo acompaña, pero nunca se completa solo. Los hechizos se encadenan entre sí con reglas fijas.",
          en: "Designed for an interactive screen at an event, each letter is discovered in three beats: a gesture opens it, a short minigame wakes it up and its spell is the reward. There is no failure and no score: progress shows in the light itself. If someone gets stuck, the challenge becomes more forgiving and a guide helps, but it never completes itself. Spells chain together through fixed rules.",
        },
      },
    ],
    gallery: [
      { src: "images/projects/encantar/inicio.jpg", alt: { es: "Pantalla de inicio: «Una aventura de luz»", en: "Start screen: “A light adventure”" } },
      { src: "images/projects/encantar/palabra.jpg", alt: { es: "Frase inicial: una palabra dormida en la oscuridad", en: "Opening line: a word asleep in the dark" } },
      { src: "images/projects/encantar/guia.jpg", alt: { es: "Guía de gestos: seis letras por despertar", en: "Gesture guide: six letters to wake up" } },
      { src: "images/projects/encantar/cover.jpg", alt: { es: "La luz del cursor revela el contorno de una letra", en: "The cursor's light reveals the outline of a letter" } },
    ],
    videos: [
      { title: { es: "Encantar en juego: despertando las letras", en: "Encantar in play: waking up the letters" }, youtube: "CHbMVxdAO8U" },
    ],
    links: [
      { label: { es: "Probar Encantar", en: "Try Encantar" }, url: "https://valengp2006.github.io/encantar/" },
      { label: { es: "Repositorio en GitHub", en: "GitHub repository" }, url: "https://github.com/Valengp2006/encantar" },
    ],
    stack: ["JavaScript", "Vite", "Web Audio"],
    outcome: {
      es: "Seis letras con gesto, minijuego y hechizo propios, pantalla de inicio, ayuda contextual y una bitácora de decisiones de diseño.",
      en: "Six letters, each with its own gesture, minigame and spell, plus a start screen, contextual help and a log of design decisions.",
    },
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
