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
  title: L;
  detail: L;
  image?: string;
}
export interface GalleryItem {
  src: string;
  alt: L;
}
export interface Project {
  slug: string;
  tier: 1 | 2 | 3;
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
  tools: string;
  question?: L;
  sections: Section[];
  decisions?: Decision[];
  system?: SystemStep[];
  metrics?: Metric[];
  awards?: Award[];
  gallery?: GalleryItem[];
  links?: { label: L; url: string }[];
  stack: string[];
  outcome: L;
}

export const projects: Project[] = [
  // ───────────────────────────── TIER 1 ─────────────────────────────────────
  {
    slug: "dissonance",
    tier: 1,
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
      es: "Vista del astronauta en la experiencia de realidad virtual de Dissonance",
      en: "Astronaut's view in Dissonance's virtual reality experience",
    },
    role: { es: "Dirección creativa · Diseño de experiencia", en: "Creative direction · Experience design" },
    duration: { es: "2026 · Taller 6", en: "2026 · Workshop 6" },
    team: { es: "Equipo interdisciplinar de 6 personas", en: "Interdisciplinary team of 6" },
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
    links: [
      { label: { es: "Sitio del proyecto y documentación", en: "Project site and documentation" }, url: "https://valengp2006.github.io/Dissonance/" },
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
    title: "Pasos de Tradición",
    tag: { es: "Patrimonio cultural · AR", en: "Cultural heritage · AR" },
    result: {
      es: "Experiencia transmedia que preserva la memoria de quienes sostienen la Semana Santa desde el anonimato.",
      en: "A transmedia experience that preserves the memory of the people who sustain Holy Week from anonymity.",
    },
    color: "#B5651D",
    tint: "#F2E4D3",
    textColor: "#7A4718",
    coverAlt: { es: "Pasos de Tradición", en: "Pasos de Tradición" },
    role: { es: "Narrativa interactiva · Arquitectura de información · Producción audiovisual", en: "Interactive narrative · Information architecture · Audiovisual production" },
    duration: { es: "Enero – Mayo 2026", en: "January – May 2026" },
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
          es: "Pasos de Tradición divulga el patrimonio de la Semana Santa de Santa Fe de Antioquia mediante un sitio web, experiencias de realidad aumentada y contenido audiovisual. Más que digitalizar la tradición, busca nuevas formas de acercarse a ella para que visitantes y habitantes exploren sus historias desde distintos medios y niveles de interacción.",
          en: "Pasos de Tradición shares the heritage of Holy Week in Santa Fe de Antioquia through a website, augmented reality experiences and audiovisual content. Rather than simply digitizing the tradition, it looks for new ways to approach it so that visitors and locals can explore its stories through different media and levels of interaction.",
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
    links: [
      { label: { es: "Ver la experiencia", en: "View the experience" }, url: "https://valengp2006.github.io/pasos-de-tradicion/experiencia/" },
    ],
    stack: ["Unity", "Vuforia", "Figma", "Visual Studio Code", "GitHub", "Luma AI", "CapCut"],
    outcome: {
      es: "El proyecto culminó como una experiencia transmedia de tres experiencias complementarias. Mi aporte principal fue El Códice de los Pasos, que integra audiovisual y realidad aumentada, además del sitio web: su arquitectura de información y la documentación del proceso.",
      en: "The project ended as a transmedia experience made of three complementary experiences. My main contribution was El Códice de los Pasos, which combines audiovisual content and augmented reality, plus the website: its information architecture and the process documentation.",
    },
  },

  {
    slug: "muse",
    tier: 1,
    title: "MUSE",
    tag: { es: "App social · UX/UI", en: "Social app · UX/UI" },
    result: {
      es: "Un espacio seguro donde artistas emergentes comparten procesos, descubren y construyen comunidad.",
      en: "A safe space where emerging artists share their process, discover others and build community.",
    },
    color: "#8C2F52",
    tint: "#F7E4EC",
    textColor: "#6E2140",
    coverAlt: { es: "Pantallas de la aplicación MUSE", en: "Screens from the MUSE app" },
    role: { es: "Investigación UX · Diseño UX/UI · Prototipado interactivo", en: "UX research · UX/UI design · Interactive prototyping" },
    duration: { es: "Marzo – Mayo 2026", en: "March – May 2026" },
    team: { es: "Proyecto en equipo", en: "Team project" },
    tools: "Figma · FigJam · Notion · Google Forms",
    question: {
      es: "¿Cómo diseñar una plataforma donde artistas compartan su obra y su proceso sintiéndose seguros y parte de una comunidad, sin sacrificar una experiencia de uso atractiva e intuitiva?",
      en: "How might we design a platform where artists share their work and process feeling safe and part of a community, without giving up an appealing, intuitive experience?",
    },
    sections: [
      {
        label: { es: "Problema", en: "Problem" },
        body: {
          es: "Muchos artistas jóvenes sienten que las plataformas actuales privilegian la viralidad sobre el proceso creativo, y eso les genera inseguridad al compartir su trabajo. MUSE propone una alternativa que prioriza la seguridad, la autenticidad artística y la comunidad.",
          en: "Many young artists feel that today's platforms reward virality over the creative process, which makes sharing their work feel unsafe. MUSE proposes an alternative that prioritizes safety, artistic authenticity and community.",
        },
      },
      {
        label: { es: "Investigación", en: "Research" },
        body: {
          es: "Con encuestas, entrevistas y actividades de análisis identificamos cuatro patrones: preocupación por el uso no autorizado de las obras, necesidad de retroalimentación constructiva, interés en plataformas que prioricen el trabajo humano frente al generado con IA, y valor de compartir procesos tanto como resultados. De ahí salieron el User Persona, el Point of View y parte del User Journey Map.",
          en: "Through surveys, interviews and analysis activities we found four patterns: concern about unauthorized use of artwork, a need for constructive feedback, interest in platforms that put human work ahead of AI-generated work, and valuing process as much as final results. These led to the User Persona, the Point of View and part of the User Journey Map.",
        },
      },
      {
        label: { es: "Proceso de diseño", en: "Design process" },
        body: {
          es: "Definimos la arquitectura de información y los flujos principales, validamos la organización del contenido con wireframes de baja fidelidad y solo después construimos la identidad visual. Mi trabajo: investigación UX y organización de insights, flujo de eventos, la sección «Artista de la Semana», parte del UI Kit, la evolución de wireframes a alta fidelidad y el prototipo interactivo en Figma con componentes, variables e interacciones.",
          en: "We defined the information architecture and main flows, validated the content structure with low-fidelity wireframes and only then built the visual identity. My work: UX research and insight organization, the events flow, the “Artist of the Week” section, part of the UI Kit, the evolution from wireframes to high fidelity and the interactive Figma prototype with components, variables and interactions.",
        },
      },
    ],
    decisions: [
      {
        challenge: { es: "Transmitir creatividad sin comprometer la claridad de navegación.", en: "Convey creativity without compromising navigation clarity." },
        solution: { es: "Varias iteraciones de wireframes antes de la interfaz visual, ajustando jerarquías, composición y organización del contenido.", en: "Several wireframe iterations before the visual interface, adjusting hierarchy, composition and content organization." },
      },
      {
        challenge: { es: "Acercar el prototipo al comportamiento de una app real.", en: "Bring the prototype closer to the behavior of a real app." },
        solution: { es: "Aprendí por mi cuenta funciones avanzadas de Figma para construir dropdowns, componentes interactivos, transiciones y estados.", en: "I taught myself advanced Figma features to build dropdowns, interactive components, transitions and states." },
      },
    ],
    links: [],
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
    title: "Jardín de Bruma",
    tag: { es: "Gamificación · Estrategia para marca", en: "Gamification · Brand strategy" },
    result: {
      es: "Sistema de gamificación para Bruma, un emprendimiento de regalos artesanales: una comunidad que compra, vuelve y recomienda con recompensas de costo mínimo.",
      en: "A gamification system for Bruma, a handmade-gift business: a community that buys, returns and recommends, powered by very low-cost rewards.",
    },
    color: "#8E5F78",
    tint: "#F3E6EC",
    textColor: "#6B3F58",
    cover: "images/projects/jardin-de-bruma/cover.jpg",
    coverAlt: { es: "Portada de Jardín de Bruma con flores de acuarela", en: "Jardín de Bruma cover with watercolor flowers" },
    role: { es: "Planteamiento de la idea y presentación de la propuesta, en conjunto con el equipo", en: "Idea development and proposal presentation, jointly with the team" },
    duration: { es: "Octubre 2026", en: "October 2026" },
    team: { es: "Equipo de 3 personas (con Miranda López Gómez y Nikki Ortiz Ospina)", en: "Team of 3 (with Miranda López Gómez and Nikki Ortiz Ospina)" },
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
      { src: "images/projects/contemplar/07-revelacion-niveles.png", alt: { es: "Los cinco niveles de revelación", en: "The five revelation levels" } },
    ],
    links: [
      { label: { es: "Abrir la pieza (Chrome o Edge con WebGPU)", en: "Open the piece (Chrome or Edge with WebGPU)" }, url: "https://valengp2006.github.io/contemplar-lo-infinito/" },
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
    title: "Cosmos",
    tag: { es: "Instalación audiovisual", en: "Audiovisual installation" },
    result: {
      es: "Una experiencia donde público, performer y sistema comparten el control de la obra en tiempo real.",
      en: "An experience where audience, performer and system share control of the piece in real time.",
    },
    color: "#6D4FE0",
    tint: "#EEE9FA",
    textColor: "#4B3A9E",
    coverAlt: { es: "Cosmos", en: "Cosmos" },
    role: { es: "Diseño de interacción · Programación creativa · Diseño audiovisual", en: "Interaction design · Creative coding · Audiovisual design" },
    duration: { es: "Marzo – Mayo 2026", en: "March – May 2026" },
    team: { es: "Proyecto en equipo", en: "Team project" },
    tools: "TouchDesigner · Strudel · Open Stage Control · GitHub",
    question: {
      es: "¿Cómo diseñar una experiencia donde la interacción no solo controle una obra, sino que invite a las personas a construirla colectivamente?",
      en: "How can we design an experience where interaction doesn't just control a piece but invites people to build it together?",
    },
    sections: [
      {
        label: { es: "Contexto", en: "Context" },
        body: {
          es: "Cosmos es una instalación audiovisual interactiva que explora la relación entre cuerpo, sonido e imagen en tiempo real y convierte al público en participante activo de la obra.",
          en: "Cosmos is an interactive audiovisual installation that explores the relationship between body, sound and image in real time and turns the audience into active participants.",
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
        challenge: { es: "Sincronizar visuales, sonido e interacción sin perder fluidez.", en: "Keep visuals, sound and interaction in sync without losing fluidity." },
        solution: { es: "Una arquitectura modular que comunica las herramientas mediante Open Stage Control.", en: "A modular architecture that connects the tools through Open Stage Control." },
      },
      {
        challenge: { es: "Que fuera intuitivo para personas sin conocimientos técnicos.", en: "Make it intuitive for people with no technical background." },
        solution: { es: "Controles simplificados y retroalimentación visual clara para que la exploración surja sola, sin instrucciones.", en: "Simplified controls and clear visual feedback so exploration happens naturally, without instructions." },
      },
    ],
    system: [
      { title: { es: "Entrada", en: "Input" }, body: { es: "Open Stage Control: interfaz para controlar los parámetros de la instalación mediante mensajes OSC.", en: "Open Stage Control: the interface that controls the installation's parameters through OSC messages." } },
      { title: { es: "Procesamiento", en: "Processing" }, body: { es: "TouchDesigner procesa lo visual y Strudel genera el paisaje sonoro a partir de los parámetros recibidos.", en: "TouchDesigner handles the visuals and Strudel generates the soundscape from the incoming parameters." } },
      { title: { es: "Salida", en: "Output" }, body: { es: "Visuales generativos y sonido sincronizados que responden en tiempo real a la interacción.", en: "Generative visuals and sound in sync that respond to the interaction in real time." } },
    ],
    links: [
      { label: { es: "Sitio del proyecto", en: "Project site" }, url: "https://valengp2006.github.io/Proyecto_Cosmos/" },
    ],
    stack: ["TouchDesigner", "Strudel", "Open Stage Control", "GitHub"],
    outcome: {
      es: "Se presentó como instalación en la muestra de proyectos de la Universidad Pontificia Bolivariana, integrando investigación, programación creativa y diseño de interacción.",
      en: "It was presented as an installation at the Universidad Pontificia Bolivariana's project showcase, bringing together research, creative coding and interaction design.",
    },
  },

  // ───────────────────────────── TIER 3 ─────────────────────────────────────
  {
    slug: "orquesta-corporal",
    tier: 3,
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
    ],
    gallery: [
      { src: "images/projects/orquesta/c-cuatro-gestos.png", alt: { es: "Los cuatro gestos: pulso, entradas, dinámica y corte", en: "The four gestures: pulse, cues, dynamics and cut-off" } },
      { src: "images/projects/orquesta/b-orquesta-real.png", alt: { es: "De la orquesta real a la distribución en pantalla", en: "From the real orchestra to the on-screen layout" } },
      { src: "images/projects/orquesta/j-arquitectura.png", alt: { es: "Arquitectura del sistema", en: "System architecture" } },
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
    title: "Cauce",
    tag: { es: "Obra computacional", en: "Computational artwork" },
    result: {
      es: "¿Para qué tomarte el trabajo? Una obra sobre la distancia entre lo que imaginas y lo que un sistema automático interpreta.",
      en: "Why bother? A piece about the gap between what you imagine and what an automated system interprets.",
    },
    color: "#2F7C8C",
    tint: "#E0F0F3",
    textColor: "#1D5561",
    coverAlt: { es: "Cauce", en: "Cauce" },
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
    links: [
      { label: { es: "Abrir la obra", en: "Open the piece" }, url: "https://valengp2006.github.io/why-bother/" },
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
    title: "Encantar", // Nombre nuevo (sin marca de terceros). Para cambiarlo: aquí y el slug de arriba.
    tag: { es: "Sistema tipográfico jugable", en: "Playable typographic system" },
    result: {
      es: "Una pantalla casi negra y una luz que sigue al cursor: cada letra guarda un hechizo que se despierta con un gesto.",
      en: "A nearly black screen and a light that follows the cursor: each letter hides a spell that wakes up with a gesture.",
    },
    color: "#7A4FA3",
    tint: "#EFE7F6",
    textColor: "#52307A",
    coverAlt: { es: "Encantar", en: "Encantar" },
    role: { es: "Diseño de juego · Diseño de interacción · Sistemas generativos", en: "Game design · Interaction design · Generative systems" },
    duration: { es: "Octubre 2026", en: "October 2026" },
    tools: "JavaScript · Vite · Audio web",
    question: {
      es: "¿Cómo encantar a un público familiar e intergeneracional con una experiencia que se descubre sin instrucciones?",
      en: "How can we enchant a family, multi-generational audience with an experience discovered without instructions?",
    },
    sections: [
      {
        label: { es: "Idea y diseño", en: "Idea and design" },
        body: {
          es: "Diseñada para una pantalla interactiva en un evento, cada letra se descubre en tres tiempos: un gesto la abre, un minijuego corto la despierta y su hechizo es la recompensa. No hay fallo ni números: el progreso se ve en la propia luz. Si alguien se atasca, el reto se vuelve más permisivo y una guía lo acompaña, pero nunca se completa solo. Los hechizos se encadenan entre sí con reglas fijas.",
          en: "Designed for an interactive screen at an event, each letter is discovered in three beats: a gesture opens it, a short minigame wakes it up and its spell is the reward. There is no failure and no score: progress shows in the light itself. If someone gets stuck, the challenge becomes more forgiving and a guide helps, but it never completes itself. Spells chain together through fixed rules.",
        },
      },
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

export const byTier = (tier: 1 | 2 | 3) => published.filter((p) => p.tier === tier);
