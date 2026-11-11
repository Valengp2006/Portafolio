// Utilidades de idioma y rutas. El sitio vive bajo `base` (GitHub Pages),
// así que TODAS las rutas internas e imágenes pasan por estos helpers.

export type Lang = "es" | "en";
export const langs: Lang[] = ["es", "en"];
export const defaultLang: Lang = "es";

/** Texto en los dos idiomas. */
export type L = Record<Lang, string>;

export type PageKey = "home" | "projects" | "about" | "services" | "contact";

/** Nombre de cada sección en la URL, por idioma. */
export const routes: Record<PageKey, L> = {
  home: { es: "", en: "" },
  projects: { es: "proyectos", en: "projects" },
  about: { es: "sobre-mi", en: "about" },
  services: { es: "servicios", en: "services" },
  contact: { es: "contacto", en: "contact" },
};

const base = import.meta.env.BASE_URL.replace(/\/+$/, "");

/** Ruta absoluta dentro del sitio (respeta `base`). */
export function url(path = ""): string {
  const clean = path.replace(/^\/+/, "");
  return `${base}/${clean}`;
}

/** Ruta de un archivo de /public (imágenes, favicon, PDF…). */
export const asset = (path: string): string => url(path);

/** Ruta de una página en un idioma. `slug` es el del proyecto, si aplica. */
export function pagePath(lang: Lang, key: PageKey, slug?: string): string {
  const seg = routes[key][lang];
  const parts = [lang, seg, slug].filter(Boolean).join("/");
  return url(`${parts}/`);
}

export const other = (lang: Lang): Lang => (lang === "es" ? "en" : "es");

export const htmlLang: Record<Lang, string> = { es: "es", en: "en" };
