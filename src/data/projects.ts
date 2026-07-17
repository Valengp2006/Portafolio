export interface ProcessStep {
  label: string;
  title: string;
  body: string;
}

export interface Challenge {
  reto: string;
  solucion: string;
}

export interface Project {
  slug: string;
  title: string;
  tag: string;
  result: string;
  color: string;
  tint: string;
  textColor: string;
  cover: string;
  role: string;
  duration: string;
  tools: string;
  contexto: string;
  preguntaDiseno: string;
  investigacion: string;
  procesoDiseno: string;
  iteraciones: Challenge[];
  implementacionTecnica: string;
  detalleSistema: ProcessStep[];
  stackHerramientas: string[];
  resultadoFinal: string;
  siteUrl?: string;
  nextSlug: string;
}

export const projects: Project[] = [
  {
    slug: "cosmos",
    title: "Cosmos",
    tag: "Instalación audiovisual",
    result: "Una experiencia donde público, performer y sistema comparten el control de la obra en tiempo real.",
    color: "#6D4FE0",
    tint: "#EEE9FA",
    textColor: "#4B3A9E",
    cover: "/images/covers/cosmos.jpg",
    role: "Diseño de interacción · Programación creativa · Diseño audiovisual",
    duration: "Marzo – Mayo 2026",
    tools: "TouchDesigner · Strudel · Open Stage Control · GitHub",
    contexto: "Cosmos es una instalación audiovisual interactiva desarrollada como una exploración sobre la relación entre cuerpo, sonido e imagen en tiempo real. El proyecto investiga cómo la interacción puede transformar la experiencia artística, convirtiendo al público en un participante activo dentro de la obra.",
    preguntaDiseno: "¿Cómo diseñar una experiencia donde la interacción no solo controle una obra, sino que invite a las personas a construirla colectivamente?",
    investigacion: "La investigación comenzó revisando referentes de instalaciones inmersivas, arte interactivo y sistemas audiovisuales en tiempo real. A partir de estos referentes se exploraron distintas formas de traducir acciones físicas en respuestas visuales y sonoras, buscando que la interacción se sintiera natural y significativa para quienes participaban.",
    procesoDiseno: "El proyecto evolucionó mediante múltiples prototipos que exploraban diferentes formas de traducir la interacción del usuario en respuestas visuales y sonoras. Cada iteración permitió ajustar la relación entre control, expresividad y estabilidad del sistema hasta lograr una experiencia donde la tecnología permaneciera en segundo plano y la atención se centrara en la exploración colectiva.",
    iteraciones: [
      { reto: "Construir un sistema donde diferentes medios (visuales, sonido e interacción) respondieran de forma sincronizada sin perder fluidez durante la experiencia.", solucion: "Se desarrolló una arquitectura modular que permitió comunicar las distintas herramientas mediante Open Stage Control, facilitando el intercambio de información entre los componentes del sistema en tiempo real." },
      { reto: "Conseguir que la interacción fuera intuitiva para personas sin conocimientos técnicos.", solucion: "Se simplificaron los controles y la retroalimentación visual para que la exploración surgiera de manera natural, reduciendo la necesidad de instrucciones durante la experiencia." },
    ],
    implementacionTecnica: "Cosmos integra programación creativa y diseño audiovisual mediante un flujo de trabajo donde TouchDesigner genera la experiencia visual, Strudel produce el componente sonoro y Open Stage Control actúa como puente entre las distintas interfaces de interacción. El proyecto fue desarrollado colaborativamente utilizando GitHub para el control de versiones.",
    detalleSistema: [
      { label: "1", title: "Entrada", body: "Open Stage Control — Interfaz utilizada para controlar en tiempo real los parámetros de la instalación mediante mensajes OSC." },
      { label: "2", title: "Procesamiento", body: "TouchDesigner — Procesamiento visual y comunicación entre los distintos componentes del sistema. Strudel — Generación procedural del paisaje sonoro a partir de los parámetros recibidos." },
      { label: "3", title: "Salida", body: "Experiencia audiovisual interactiva — Visuales generativos y sonido sincronizados que responden en tiempo real a la interacción del performer." },
    ],
    stackHerramientas: ["TouchDesigner", "Strudel", "Open Stage Control", "GitHub"],
    resultadoFinal: "Cosmos fue presentado como una instalación audiovisual interactiva durante la muestra de proyectos de la Universidad Pontificia Bolivariana. El proyecto permitió integrar investigación, programación creativa y diseño de interacción en una experiencia donde la participación del público transformaba continuamente el comportamiento del sistema.",
    siteUrl: "https://valengp2006.github.io/Proyecto_Cosmos/",
    nextSlug: "luna-y-las-estrellas-perdidas",
  },
  {
    slug: "pasos-de-tradicion",
    title: "Pasos de Tradición",
    tag: "Patrimonio Cultural - AR",
    result: "Experiencia digital para preservar la memoria de quienes sostienen la Semana Santa desde el anonimato.",
    color: "#B5651D",
    tint: "#F2E4D3",
    textColor: "#7A4718",
    cover: "/images/covers/pasos-de-tradicion.jpg",
    role: "Narrativa interactiva · Producción audiovisual · Arquitectura de información",
    duration: "Enero – Mayo 2026",
    tools: "Figma · Unity · Vuforia · Visual Studio Code · GitHub · Luma AI · CapCut",
    contexto: "Pasos de Tradición es una experiencia transmedia diseñada para divulgar el patrimonio cultural de la Semana Santa de Santa Fe de Antioquia mediante herramientas digitales. El proyecto reúne un sitio web, experiencias de realidad aumentada y contenido audiovisual para ampliar la comprensión de una tradición que ha sido transmitida de generación en generación. Más que digitalizar el patrimonio, la propuesta busca crear nuevas formas de acercarse a él, permitiendo que visitantes y habitantes exploren sus historias desde diferentes medios y niveles de interacción.",
    preguntaDiseno: "¿Cómo pueden las experiencias digitales complementar la preservación y divulgación del patrimonio cultural sin reemplazar el valor de vivirlo en el territorio?",
    investigacion: "El proyecto inició con una investigación sobre la historia, los oficios y las manifestaciones culturales de la Semana Santa de Santa Fe de Antioquia. Como parte del proceso realizamos entrevistas semiestructuradas con cuatro personas que participan activamente en los distintos oficios de la celebración, permitiéndonos comprender la tradición desde la experiencia de quienes la mantienen viva. Los hallazgos obtenidos orientaron el desarrollo narrativo, la selección de contenidos y el diseño de las experiencias digitales que conforman el proyecto.",
    procesoDiseno: "Mi participación se centró en transformar la investigación en una experiencia narrativa y digital coherente. Desarrollé El Códice de los Pasos, construyendo el guion y la estructura narrativa que guía al usuario a través de la experiencia. Posteriormente produje las secuencias audiovisuales utilizando herramientas de inteligencia artificial e implementé la integración mediante chroma key dentro de Unity para su visualización en realidad aumentada. Paralelamente diseñé la arquitectura del sitio web del proyecto, estructuré la documentación del proceso y organicé la información colaborativa del equipo.",
    iteraciones: [
      { reto: "Integrar narrativa, contenido audiovisual y realidad aumentada dentro de una experiencia coherente.", solucion: "Se diseñó una narrativa transversal donde cada medio aporta una parte distinta de la historia, permitiendo que la experiencia de realidad aumentada y los contenidos audiovisuales funcionen como un único ecosistema." },
      { reto: "Incorporar contenido audiovisual dentro de la experiencia de realidad aumentada manteniendo una integración natural.", solucion: "Se implementó un flujo de trabajo basado en chroma key, permitiendo integrar las secuencias audiovisuales generadas con IA dentro de Unity mediante Vuforia." },
    ],
    implementacionTecnica: "El proyecto integra un sitio web, una aplicación de realidad aumentada y contenido audiovisual dentro de un mismo ecosistema digital. La experiencia fue desarrollada en Unity utilizando Vuforia para el reconocimiento de marcadores, mientras que las secuencias audiovisuales fueron producidas con Luma AI, editadas en CapCut e integradas mediante chroma key. Mi aporte técnico se centró en la implementación del sitio web, la definición de su arquitectura de información y la organización de la documentación y contenidos del proyecto. GitHub se utilizó para el control de versiones y el trabajo colaborativo.",
    detalleSistema: [
      { label: "1", title: "Entrada", body: "Marcadores de realidad aumentada e interacción del usuario a través de la aplicación desarrollada en Unity." },
      { label: "2", title: "Procesamiento", body: "Unity · Vuforia · Contenido Audiovisual · Sistema Narrativo — Los marcadores son reconocidos mediante Vuforia, activando contenidos audiovisuales y elementos narrativos integrados en Unity." },
      { label: "3", title: "Salida", body: "Experiencia transmedia interactiva — Realidad aumentada, contenido audiovisual y narrativa digital que complementan la exploración de la Semana Santa de Santa Fe de Antioquia." },
    ],
    stackHerramientas: ["Unity", "Cap Cut", "GitHub", "Vuforia", "Visual Studio Code", "Luma AI"],
    resultadoFinal: "Pasos de Tradición culminó como una experiencia transmedia conformada por tres experiencias complementarias, cada una diseñada para acercar el patrimonio cultural desde una perspectiva distinta. Mi principal aporte fue El Códice de los Pasos, una experiencia narrativa que integra contenido audiovisual y realidad aumentada. También desarrollé el sitio web del proyecto, donde diseñé la arquitectura de información y documenté el proceso de desarrollo.",
    siteUrl: "https://valengp2006.github.io/pasos-de-tradicion/experiencia/",
    nextSlug: "cosmos",
  },
  {
    slug: "luna-y-las-estrellas-perdidas",
    title: "Luna y las Estrellas Perdidas",
    tag: "Videojuego 2D - Unity",
    result: "Videojuego de plataformas 2D donde la narrativa y la exploración acompañan al jugador.",
    color: "#0E8074",
    tint: "#E3F3F0",
    textColor: "#0A5A52",
    cover: "/images/covers/luna.jpg",
    role: "Diseño de juego · Diseño de niveles · Diseño narrativo · Diseño de interfaz · Diseño sonoro",
    duration: "Febrero – Mayo 2026",
    tools: "Unity · C# · Corgi Engine · Reaper · MMF Player · GitHub",
    contexto: "Luna y las Estrellas Perdidas es un videojuego de plataformas 2D desarrollado en Unity donde el jugador acompaña a Luna, una astronauta que debe recuperar tres Estrellas Guardianas robadas por el Cometa Caos para restaurar el equilibrio de su estación espacial. El proyecto exploró cómo combinar narrativa, diseño de niveles y progresión de dificultad para construir una experiencia accesible que mantuviera el interés del jugador a medida que aumentaba la complejidad de los desafíos.",
    preguntaDiseno: "¿Cómo diseñar un videojuego de plataformas que combine mecánicas, narrativa, estética visual y diseño sonoro para construir una experiencia de juego coherente y atractiva?",
    investigacion: "La investigación se centró en analizar referentes de videojuegos de plataformas, curvas de dificultad y diseño de niveles. Paralelamente se realizaron prototipos en papel para planificar recorridos, obstáculos y ritmo de juego antes de construir los escenarios dentro de Unity. Este proceso permitió validar la estructura general de los niveles y ajustar la distribución de desafíos antes de iniciar la implementación.",
    procesoDiseno: "El diseño comenzó definiendo la narrativa principal y la progresión de la aventura. A partir de ella se construyeron los niveles mediante paper prototyping, donde se exploraban recorridos, plataformas y enemigos antes de llevarlos al motor de juego. Posteriormente se desarrollaron los escenarios, interfaces, sonido y elementos de retroalimentación visual, realizando ajustes iterativos para mejorar la navegación, el equilibrio de la dificultad y la experiencia general del jugador.",
    iteraciones: [
      { reto: "Construir una progresión de dificultad que mantuviera el interés del jugador durante toda la aventura.", solucion: "Cada nivel fue diseñado alrededor de una mecánica principal, aumentando gradualmente la complejidad mediante nuevos obstáculos, enemigos y desafíos de exploración." },
      { reto: "Implementar el sistema de audio previsto dentro de Corgi Engine.", solucion: "Debido a incompatibilidades con FMOD, se migró la implementación al sistema de audio nativo de Unity utilizando MMF Player y Audio Source, replanteando la arquitectura sonora sin afectar la experiencia del jugador." },
    ],
    implementacionTecnica: "El proyecto se desarrolló sobre Unity utilizando Corgi Engine como base para las mecánicas de movimiento y combate. Se implementó un sistema de progresión dividido en tres niveles, interfaces de navegación, retroalimentación visual y sonora, además de un sistema de dificultad configurable (Fácil, Medio y Difícil). La integración de audio fue adaptada al sistema nativo de Unity mediante MMF Player y Audio Source.",
    detalleSistema: [
      { label: "1", title: "Entrada", body: "Controles del jugador mediante teclado y mando, interpretados por Unity y Corgi Engine para gestionar movimiento, combate e interacción con el entorno." },
      { label: "2", title: "Procesamiento", body: "Unity · C# · Corgi Engine · MMF Player · Audio Source — Arquitectura basada en Corgi Engine para administrar movimiento, físicas, enemigos y progresión de niveles." },
      { label: "3", title: "Salida", body: "Experiencia interactiva de plataformas 2D con narrativa espacial, exploración progresiva y retroalimentación audiovisual." },
    ],
    stackHerramientas: ["Unity", "C#", "Corgi Engine", "Reaper", "GitHub", "MMF Player"],
    resultadoFinal: "El proyecto culminó en un videojuego funcional compuesto por tres niveles completos con una progresión de dificultad cuidadosamente planificada, narrativa ambiental, interfaces de usuario y un sistema sonoro integrado. Además del desarrollo del juego, participé en la creación del sitio web del proyecto y en la organización de la documentación técnica y de diseño.",
    nextSlug: "muse",
  },
  {
    slug: "muse",
    title: "MUSE",
    tag: "App social - UX/UI",
    result: "Plataforma digital diseñada para ofrecer un espacio seguro donde artistas emergentes puedan compartir, descubrir y construir comunidad.",
    color: "#8C2F52",
    tint: "#F7E4EC",
    textColor: "#6E2140",
    cover: "/images/covers/muse.jpg",
    role: "Investigación UX · Diseño UX/UI · Prototipado interactivo",
    duration: "Marzo – Mayo 2026",
    tools: "Figma · FigJam · Notion · Google Forms",
    contexto: "MUSE es una propuesta de aplicación social enfocada en artistas emergentes que busca ofrecer una alternativa a las plataformas tradicionales, priorizando la seguridad, la autenticidad artística y la construcción de comunidad. El proyecto nació como respuesta a una problemática identificada durante la investigación con usuarios: muchos artistas sienten que las plataformas actuales privilegian la viralidad sobre el proceso creativo, generando inseguridad al momento de compartir su trabajo.",
    preguntaDiseno: "¿Cómo diseñar una plataforma donde los artistas puedan compartir sus obras y procesos creativos sintiéndose seguros, representados y parte de una comunidad, sin sacrificar una experiencia de uso atractiva e intuitiva?",
    investigacion: "La investigación se centró en comprender cómo viven los artistas jóvenes la experiencia de publicar su trabajo en plataformas digitales. Se realizaron encuestas, entrevistas y actividades de análisis que permitieron identificar patrones relacionados con la seguridad, la percepción del contenido generado por IA y las dinámicas de comunidad. Los principales hallazgos: preocupación por el uso no autorizado de las obras, necesidad de espacios con retroalimentación constructiva, interés por plataformas que prioricen el trabajo humano, y valoración de comunidades donde compartir procesos sea tan importante como los resultados finales. A partir de estos hallazgos se construyó el User Persona, el Point of View y parte del User Journey Map.",
    procesoDiseno: "El proceso comenzó con la definición de la arquitectura de información y los principales flujos de navegación. Posteriormente se desarrollaron wireframes de baja fidelidad para validar la organización del contenido antes de construir la identidad visual. Mi participación estuvo enfocada en: investigación UX, organización de insights, diseño del flujo de eventos, diseño de la sección Artista de la Semana, construcción parcial del UI Kit, evolución de wireframes hacia interfaces de alta fidelidad, y desarrollo del prototipo interactivo en Figma mediante componentes, variables e interacciones.",
    iteraciones: [
      { reto: "Crear una experiencia que transmitiera creatividad sin comprometer la claridad de navegación.", solucion: "Se realizaron varias iteraciones sobre los wireframes antes de construir la interfaz visual, ajustando jerarquías, composición y organización del contenido." },
      { reto: "Implementar interacciones que acercaran el prototipo a una experiencia real de aplicación.", solucion: "Se investigó de forma autónoma el funcionamiento avanzado de Figma para desarrollar dropdowns, componentes interactivos, transiciones y estados." },
    ],
    implementacionTecnica: "El prototipo fue desarrollado completamente en Figma mediante componentes reutilizables, Auto Layout, variantes e interacciones que simulan el comportamiento de una aplicación móvil. Se construyeron flujos de navegación para descubrimiento de artistas, participación en eventos, exploración de perfiles y visualización de contenido, permitiendo validar la experiencia antes de cualquier desarrollo.",
    detalleSistema: [
      { label: "1", title: "Entrada", body: "Investigación de usuarios y requerimientos funcionales — Encuestas, Entrevistas, FigJam, User Persona, User Journey Map." },
      { label: "2", title: "Procesamiento", body: "La información obtenida se transformó en flujos de navegación, wireframes y componentes visuales. Se definió la arquitectura de información, el sistema visual, el UI Kit y las interacciones principales mediante Figma." },
      { label: "3", title: "Salida", body: "Experiencia visual e interactiva — Aplicación social enfocada en artistas emergentes, diseñada para facilitar la publicación de obras y la participación en una comunidad segura." },
    ],
    stackHerramientas: ["Figma", "FigJam", "Notion", "Google Forms", "Visual Studio Code", "Luma AI"],
    resultadoFinal: "El proyecto culminó con un prototipo interactivo de alta fidelidad que permitió validar la propuesta con usuarios. Las pruebas destacaron especialmente la identidad visual, la facilidad de navegación, la claridad de los flujos principales y la propuesta de comunidad enfocada en artistas. Participé en el desarrollo del flujo de eventos, la funcionalidad Artista de la Semana, parte del sistema visual y la construcción del prototipo interactivo.",
    nextSlug: "pasos-de-tradicion",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
