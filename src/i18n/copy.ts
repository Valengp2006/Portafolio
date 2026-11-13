import type { L } from "./index";

// Textos de las páginas generales (home, sobre mí, servicios, contacto) y de la interfaz.
// Todo en dos idiomas. Los proyectos están en src/data/projects.ts.

export const meta = {
  siteTitle: {
    es: "Valentina Garzón — Diseño UX/UI y de producto",
    en: "Valentina Garzón — UX/UI & Product Design",
  },
  description: {
    es: "Portafolio de Valentina Garzón Pérez: diseño UX/UI y de producto con enfoque en experiencias interactivas para marcas, patrimonio cultural y problemáticas sociales.",
    en: "Portfolio of Valentina Garzón Pérez: UX/UI and product design focused on interactive experiences for brands, cultural heritage and social issues.",
  },
} satisfies Record<string, L | Record<string, string>>;

export const ui = {
  nav: {
    about: { es: "Sobre mí", en: "About" },
    projects: { es: "Proyectos", en: "Projects" },
    services: { es: "Servicios", en: "Services" },
    contact: { es: "Contacto", en: "Contact" },
    switchLabel: { es: "Cambiar a inglés", en: "Switch to Spanish" },
    skip: { es: "Saltar al contenido", en: "Skip to content" },
  },
  footer: {
    location: { es: "Medellín, Colombia", en: "Medellín, Colombia" },
  },
  common: {
    viewProject: { es: "Ver proyecto", en: "View project" },
    viewAll: { es: "Ver todos", en: "View all" },
    allProjects: { es: "Ver todos los proyectos", en: "View all projects" },
    back: { es: "← Proyectos", en: "← Projects" },
    openLink: { es: "Abrir", en: "Open" },
  },
  project: {
    role: { es: "Rol", en: "Role" },
    duration: { es: "Duración", en: "Duration" },
    team: { es: "Equipo", en: "Team" },
    tools: { es: "Herramientas", en: "Tools" },
    result: { es: "Resultado", en: "Outcome" },
    deliverable: { es: "Entregable", en: "Deliverable" },
    deliverableFinal: { es: "Entregable final", en: "Final deliverable" },
    question: { es: "Pregunta de diseño", en: "Design question" },
    decisions: { es: "Decisiones clave", en: "Key decisions" },
    challenge: { es: "Reto", en: "Challenge" },
    solution: { es: "Solución", en: "Solution" },
    system: { es: "Cómo funciona", en: "How it works" },
    stack: { es: "Stack y herramientas", en: "Stack and tools" },
    metrics: { es: "Investigación en números", en: "Research in numbers" },
    awards: { es: "Reconocimientos", en: "Recognitions" },
    gallery: { es: "Galería", en: "Gallery" },
    videos: { es: "Videos", en: "Videos" },
    playVideo: { es: "Reproducir video", en: "Play video" },
    links: { es: "Enlaces", en: "Links" },
    outcome: { es: "Resultado final", en: "Final outcome" },
    next: { es: "Siguiente proyecto", en: "Next project" },
    prev: { es: "Proyecto anterior", en: "Previous project" },
    all: { es: "Todos los proyectos", en: "All projects" },
  },
  projectsPage: {
    eyebrow: { es: "Trabajo", en: "Work" },
    title: { es: "Proyectos", en: "Projects" },
    intro: {
      es: "Casos de estudio de producto, investigación e interacción. Empiezo por el problema y la gente que lo vive, y termino en prototipos que se pueden probar.",
      en: "Case studies in product, research and interaction. I start with the problem and the people living it, and end with prototypes that can be tested.",
    },
    tier1: { es: "Casos principales", en: "Featured case studies" },
    tier2: { es: "También", en: "More work" },
    tier3: { es: "Laboratorio de experimentos", en: "Experiment lab" },
    filterLabel: { es: "Filtrar proyectos por categoría", en: "Filter projects by category" },
    filterAll: { es: "Todos", en: "All" },
    cats: {
      ux: { es: "UX/UI y producto", en: "UX/UI & product" },
      interactive: { es: "Experiencias interactivas", en: "Interactive experiences" },
      heritage: { es: "Patrimonio cultural", en: "Cultural heritage" },
    },
    countOne: { es: "1 proyecto", en: "1 project" },
    countMany: { es: "proyectos", en: "projects" },
    tier3Intro: {
      es: "Exploraciones de interacción, visión artificial y sistemas generativos.",
      en: "Explorations in interaction, computer vision and generative systems.",
    },
  },
} as const;

export const home = {
  title: meta.siteTitle,
  eyebrow: { es: "Portafolio", en: "Portfolio" },
  h1: {
    es: "Diseño UX/UI y de producto para experiencias interactivas",
    en: "UX/UI & product design for interactive experiences",
  },
  name: "Valentina Garzón Pérez",
  role: {
    es: "Estudiante de 6.º semestre de Ingeniería en Diseño de Entretenimiento Digital · UPB, Medellín",
    en: "6th-semester student of Digital Entertainment Design Engineering · UPB, Medellín",
  },
  bio: {
    es: "Diseño productos y experiencias digitales a partir de la investigación: entiendo a las personas, defino el problema y lo llevo a prototipos que se pueden probar. Mi trabajo se mueve entre marcas, patrimonio cultural y problemáticas sociales.",
    en: "I design digital products and experiences grounded in research: I understand people, define the problem and take it to prototypes that can be tested. My work moves between brands, cultural heritage and social issues.",
  },
  badge: { es: "Busco prácticas 2027-2", en: "Seeking an internship for 2027-2" },
  ctaProjects: { es: "Ver proyectos", en: "See projects" },
  ctaContact: { es: "Escríbeme", en: "Get in touch" },
  portraitAlt: { es: "Retrato de Valentina Garzón", en: "Portrait of Valentina Garzón" },

  awardsEyebrow: { es: "Reconocimientos", en: "Recognitions" },
  awardsTitle: {
    es: "Dissonance recibió 4 distinciones en la muestra DEX 2026",
    en: "Dissonance received 4 distinctions at DEX 2026",
  },
  awardsList: {
    es: ["Mejor Producto: Experiencias Interactivas", "Mejor Interacción Jugador-Entorno", "Estilo Visual Más Original", "Mención de Honor, Taller 6"],
    en: ["Best Product: Interactive Experiences", "Best Player–Environment Interaction", "Most Original Visual Style", "Honorable Mention, Workshop 6"],
  },
  awardsLink: { es: "Ver el caso de estudio", en: "Read the case study" },

  wayTitle: { es: "Mi forma de diseñar", en: "How I design" },
  wayIntro: {
    es: "No empiezo por la tecnología. Empiezo por una pregunta y por las personas que la viven.",
    en: "I don't start with the technology. I start with a question and the people living it.",
  },
  steps: [
    {
      n: "01",
      title: { es: "Investigar", en: "Research" },
      body: { es: "Encuestas, entrevistas y referentes para entender el contexto antes de proponer nada.", en: "Surveys, interviews and references to understand the context before proposing anything." },
    },
    {
      n: "02",
      title: { es: "Definir", en: "Define" },
      body: { es: "Personas, point of view y arquitectura de información que convierten hallazgos en decisiones.", en: "Personas, point of view and information architecture that turn findings into decisions." },
    },
    {
      n: "03",
      title: { es: "Prototipar", en: "Prototype" },
      body: { es: "De wireframes a prototipos interactivos y experiencias en tiempo real, iterando rápido.", en: "From wireframes to interactive prototypes and real-time experiences, iterating fast." },
    },
    {
      n: "04",
      title: { es: "Probar", en: "Test" },
      body: { es: "Pruebas con usuarios para ajustar ritmo, claridad y emoción antes de dar algo por terminado.", en: "User testing to tune pacing, clarity and emotion before calling anything finished." },
    },
  ],

  featuredEyebrow: { es: "Proyectos destacados", en: "Featured projects" },
  featuredTitle: { es: "Tres casos para conocer mi trabajo", en: "Three cases to get to know my work" },

  areasEyebrow: { es: "Dónde aplico este enfoque", en: "Where I apply this approach" },
  areas: [
    {
      n: "01",
      title: { es: "Marcas y producto digital", en: "Brands and digital products" },
      body: { es: "Interfaces, flujos, experiencias interactivas y sistemas de gamificación y fidelización que traducen la identidad de una marca o emprendimiento en algo que las personas pueden usar y recordar.", en: "Interfaces, flows, interactive experiences and gamification and loyalty systems that translate the identity of a brand or small business into something people can use and remember." },
    },
    {
      n: "02",
      title: { es: "Patrimonio cultural", en: "Cultural heritage" },
      body: { es: "Experiencias digitales y de realidad aumentada que documentan y reinterpretan la memoria de una comunidad sin reemplazar el territorio.", en: "Digital and augmented reality experiences that document and reinterpret a community's memory without replacing the place itself." },
    },
    {
      n: "03",
      title: { es: "Problemáticas sociales", en: "Social issues" },
      body: { es: "Productos que parten de problemas reales de personas reales: espacios seguros, comunidad y participación.", en: "Products that start from real problems of real people: safe spaces, community and participation." },
    },
  ],

  contactTitle: { es: "¿Trabajamos juntos?", en: "Shall we work together?" },
  contactBody: {
    es: "Busco prácticas para el semestre 2027-2 y estoy abierta a proyectos freelance de diseño UX/UI, producto y experiencias interactivas.",
    en: "I'm looking for an internship for the 2027-2 term and open to freelance UX/UI, product and interactive experience projects.",
  },
} as const;

export const about = {
  title: { es: "Sobre mí — Valentina Garzón", en: "About — Valentina Garzón" },
  eyebrow: { es: "Sobre mí", en: "About me" },
  h1: { es: "Diseñadora UX/UI y de producto", en: "UX/UI & product designer" },
  body: {
    es: [
      "Soy Valentina, estudiante de 6.º semestre de Ingeniería en Diseño de Entretenimiento Digital en la Universidad Pontificia Bolivariana (UPB), en Medellín. Diseño productos y experiencias digitales que parten de la investigación y terminan en prototipos que se pueden probar con personas.",
      "Mi enfoque está en las experiencias interactivas: desde una app social para artistas hasta una experiencia inmersiva en VR o una instalación audiovisual. Me interesa que la tecnología quede en segundo plano y que lo que se note sea la experiencia de quien la usa.",
      "He desarrollado proyectos académicos para marcas, patrimonio cultural y problemáticas sociales. Me gusta especialmente el patrimonio digital: que las comunidades sean protagonistas de su propia memoria y no solo sujetos de documentación.",
      "Estoy buscando prácticas para el semestre 2027-2 y también estoy abierta a proyectos freelance.",
    ],
    en: [
      "I'm Valentina, a 6th-semester Digital Entertainment Design Engineering student at Universidad Pontificia Bolivariana (UPB) in Medellín. I design digital products and experiences that start from research and end in prototypes that can be tested with people.",
      "My focus is interactive experiences: from a social app for artists to an immersive VR experience or an audiovisual installation. I want the technology to stay in the background so that what stands out is the experience of the person using it.",
      "I've developed academic projects for brands, cultural heritage and social issues. I'm especially drawn to digital heritage: communities as protagonists of their own memory, not just subjects of documentation.",
      "I'm looking for an internship for the 2027-2 term and I'm also open to freelance projects.",
    ],
  },
  contactLink: { es: "Conversemos", en: "Let's talk" },
  portraitAlt: { es: "Retrato de Valentina Garzón", en: "Portrait of Valentina Garzón" },
  skillsEyebrow: { es: "Habilidades y herramientas", en: "Skills and tools" },
  toolsTitle: { es: "Herramientas", en: "Tools" },
  skillsTitle: { es: "Habilidades", en: "Skills" },
  langsTitle: { es: "Idiomas", en: "Languages" },
  // Basado en los proyectos publicados (ver src/data/projects.ts).
  toolGroups: [
    { title: { es: "Diseño e investigación", en: "Design and research" }, items: ["Figma", "FigJam", "Notion", "Google Forms"] },
    { title: { es: "Experiencias interactivas", en: "Interactive experiences" }, items: ["Unity", "Vuforia", "TouchDesigner", "p5.js", "ml5.js", "Tone.js", "Strudel", "Open Stage Control", "WebGPU"] },
    { title: { es: "Desarrollo y producción", en: "Development and production" }, items: ["GitHub", "Node.js", "Socket.io", "Luma AI", "CapCut"] },
  ],
  skills: {
    es: ["Investigación UX", "Pruebas con usuarios", "Diseño de interfaces y UI Kit", "Prototipado interactivo", "Arquitectura de información", "Diseño de interacción", "Experiencias inmersivas (VR y AR)", "Gamificación", "Narrativa interactiva", "Dirección creativa", "Programación creativa", "Investigación cultural"],
    en: ["UX research", "User testing", "Interface design and UI kits", "Interactive prototyping", "Information architecture", "Interaction design", "Immersive experiences (VR and AR)", "Gamification", "Interactive storytelling", "Creative direction", "Creative coding", "Cultural research"],
  },
  languages: { es: ["Español (nativo)", "Inglés (B2)"], en: ["Spanish (native)", "English (B2)"] },
  awardsEyebrow: { es: "Reconocimientos", en: "Recognitions" },
  awardsTitle: { es: "Reconocimientos de la UPB", en: "UPB recognitions" },
  awardsNote: {
    es: "Cuatro distinciones para Dissonance en la muestra DEX 2026 (Medellín, 10 de noviembre de 2026) y el reconocimiento «Mejor proyecto del Taller 5: Experiencias Interactivas» para Pasos de Tradición.",
    en: "Four distinctions for Dissonance at the DEX 2026 showcase (Medellín, November 10, 2026) and the “Best project of Workshop 5: Interactive Experiences” recognition for Pasos de Tradición.",
  },
} as const;

export const services = {
  title: { es: "Servicios — Valentina Garzón", en: "Services — Valentina Garzón" },
  eyebrow: { es: "Servicios", en: "Services" },
  h1: { es: "¿En qué puedo ayudarte?", en: "How can I help?" },
  body: {
    es: "Trabajo de la investigación al prototipo, en proyectos de producto digital, gamificación para emprendimientos, experiencias interactivas y patrimonio cultural. Disponible para prácticas 2027-2 y freelance.",
    en: "I work from research to prototype on digital product, gamification for small businesses, interactive experiences, and cultural heritage projects. Available for 2027-2 internships and freelance.",
  },
  items: [
    {
      title: { es: "Investigación UX y diseño UI de producto", en: "UX research and product UI design" },
      tagline: { es: "Interfaces claras que nacen de entender a las personas.", en: "Clear interfaces that come from understanding people." },
      body: {
        es: "Investigación con usuarios, arquitectura de información, wireframes, UI kit y prototipos interactivos de alta fidelidad. El UI kit también se puede contratar por separado.",
        en: "User research, information architecture, wireframes, UI kit, and high-fidelity interactive prototypes. The UI kit can also be hired on its own.",
      },
      image: "images/servicios/ux-ui.webp" as string | null,
      accent: "#8C2F52",
      faqs: [
        {
          q: { es: "¿Cómo es el proceso?", en: "What does the process look like?" },
          a: {
            es: "Investigo para entender al usuario, defino el problema, valido la estructura con wireframes de baja fidelidad y construyo un prototipo interactivo en Figma que podemos probar.",
            en: "I research to understand the user, define the problem, validate the structure with low-fidelity wireframes, and build an interactive Figma prototype we can test.",
          },
        },
        {
          q: { es: "¿Qué entregables recibes?", en: "What deliverables do you get?" },
          a: {
            es: "Según el proyecto: hallazgos de investigación, flujos, wireframes, un UI kit con tipografías, colores y componentes con sus estados, y un prototipo listo para pruebas de usuario.",
            en: "Depending on the project: research findings, flows, wireframes, a UI kit with typography, colors, and components with their states, and a prototype ready for user testing.",
          },
        },
      ],
    },
    {
      title: { es: "Gamificación y fidelización para emprendimientos", en: "Gamification and loyalty for small businesses" },
      tagline: {
        es: "Una comunidad que compra, vuelve y recomienda, sin recompensas que el negocio no pueda sostener.",
        en: "A community that buys, returns, and recommends, without rewards the business can't sustain.",
      },
      body: {
        es: "Diseño de sistemas de puntos, rangos y recompensas para negocios pequeños, a partir de cómo compran hoy sus clientes y de lo que el negocio puede costear.",
        en: "Design of point, rank, and reward systems for small businesses, based on how their customers buy today and what the business can afford.",
      },
      image: "images/servicios/gamificacion.webp" as string | null,
      accent: "#8E5F78",
      faqs: [
        {
          q: { es: "¿Cómo es el proceso?", en: "What does the process look like?" },
          a: {
            es: "Entiendo cómo llegan y compran tus clientes, cruzo sus necesidades con dinámicas de juego, defino reglas y recompensas de costo controlado, y dejo planteadas las hipótesis para validar con clientes reales.",
            en: "I learn how your customers find and buy from you, match their needs with game dynamics, define rules and cost-controlled rewards, and set out hypotheses to validate with real customers.",
          },
        },
        {
          q: { es: "¿Qué entregables recibes?", en: "What deliverables do you get?" },
          a: {
            es: "Reglas del sistema, rangos y recompensas, flujo de entrada y participación, calendario de piloto e indicadores de medición. Es una propuesta de diseño: el piloto y la operación los ejecuta el negocio.",
            en: "System rules, ranks and rewards, entry and participation flow, a pilot calendar, and measurement indicators. It is a design proposal: the pilot and day-to-day operation are run by the business.",
          },
        },
      ],
    },
    {
      title: { es: "Experiencias interactivas para eventos e instalaciones", en: "Interactive experiences for events and installations" },
      tagline: { es: "Experiencias donde la audiencia se vuelve parte de la obra.", en: "Experiences where the audience becomes part of the work." },
      body: {
        es: "Instalaciones, experiencias inmersivas y sistemas en tiempo real que combinan interacción, sonido e imagen para marcas, eventos y espacios culturales.",
        en: "Installations, immersive experiences, and real-time systems that combine interaction, sound, and image for brands, events, and cultural spaces.",
      },
      image: "images/servicios/experiencias-interactivas.webp" as string | null,
      accent: "#2B3A67",
      faqs: [
        {
          q: { es: "¿Qué tipo de proyectos haces?", en: "What kinds of projects do you do?" },
          a: {
            es: "Experiencias con cámara y gestos para eventos y activaciones de marca, interfaces web para instalaciones y performances en vivo, y experiencias de VR y realidad aumentada.",
            en: "Camera- and gesture-based experiences for events and brand activations, web interfaces for installations and live performances, and VR and augmented reality experiences.",
          },
        },
        {
          q: { es: "¿Con qué tecnologías trabajas?", en: "What technologies do you work with?" },
          a: {
            es: "Unity, TouchDesigner, p5.js y ml5.js, WebGPU, OSC, Open Stage Control y Strudel.",
            en: "Unity, TouchDesigner, p5.js and ml5.js, WebGPU, OSC, Open Stage Control, and Strudel.",
          },
        },
      ],
    },
    {
      title: { es: "Patrimonio cultural e impacto social", en: "Cultural heritage and social impact" },
      tagline: { es: "Llevar la memoria y las comunidades a experiencias digitales.", en: "Bringing memory and communities into digital experiences." },
      body: { es: "Investigación de campo, narrativa y producción digital para documentar tradiciones y crear espacios seguros y participativos.", en: "Field research, storytelling and digital production to document traditions and create safe, participatory spaces." },
      image: "images/servicios/patrimonio-cultural.webp" as string | null,
      accent: "#B5651D",
      faqs: [
        { q: { es: "¿Combinas investigación y producción?", en: "Do you combine research and production?" }, a: { es: "Sí: la investigación documental y de campo es la base de lo que se diseña y se produce.", en: "Yes: documentary and field research is the base of what gets designed and produced." } },
        { q: { es: "¿Se puede adaptar a museos o comunidades?", en: "Can it be adapted to museums or communities?" }, a: { es: "Sí, las experiencias se diseñan para espacios expositivos, comunidades locales o plataformas web accesibles.", en: "Yes, experiences are designed for exhibition spaces, local communities or accessible web platforms." } },
      ],
    },
  ],
} as const;

export const contact = {
  title: { es: "Contacto — Valentina Garzón", en: "Contact — Valentina Garzón" },
  eyebrow: { es: "Contacto", en: "Contact" },
  h1: { es: "¿Trabajamos juntos?", en: "Shall we work together?" },
  body: {
    es: "Busco prácticas para el semestre 2027-2 y estoy abierta a proyectos freelance. Si tienes un reto de producto, una experiencia interactiva o una iniciativa cultural o social, cuéntame.",
    en: "I'm looking for an internship for the 2027-2 term and open to freelance projects. If you have a product challenge, an interactive experience or a cultural or social initiative, tell me about it.",
  },
  info: [
    { label: { es: "Ubicación", en: "Location" }, body: { es: "Medellín, Colombia", en: "Medellín, Colombia" } },
    { label: { es: "Disponibilidad", en: "Availability" }, body: { es: "Prácticas 2027-2 · Freelance", en: "Internship 2027-2 · Freelance" } },
    { label: { es: "Enfoque", en: "Focus" }, body: { es: "UX/UI · Producto · Experiencias interactivas · Gamificación", en: "UX/UI · Product · Interactive experiences · Gamification" } },
  ],
  linkedin: { es: "LinkedIn", en: "LinkedIn" },
  github: { es: "GitHub", en: "GitHub" },
  cv: { es: "Descargar CV", en: "Download résumé" },
} as const;
