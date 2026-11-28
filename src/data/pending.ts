import type { L } from "../i18n";
import type { Block } from "./projects";

// Lo que falta por confirmar se escribe en `projects.ts` como "[PENDIENTE: …]".
// En el sitio publicado esas marcas no se muestran; en `astro dev` sí, para no olvidarlas.
const MARK = /\s*\[PENDIENTE[^\]]*\]/g;

/** Texto sin la marca; `null` si no queda nada que decir (vacío o solo un rótulo "Algo:"). */
function clean(x: L): L | null {
  if (!x.es.includes("[PENDIENTE") && !x.en.includes("[PENDIENTE")) return x;
  const es = x.es.replace(MARK, "").trim();
  const en = x.en.replace(MARK, "").trim();
  return !es || !en || es.endsWith(":") || en.endsWith(":") ? null : { es, en };
}

const keep = <T,>(list: (T | null)[]): T[] => list.filter((x): x is T => x !== null);

function cleanBlock(b: Block): Block | null {
  switch (b.type) {
    case "text": {
      const body = clean(b.body);
      return body && { ...b, body };
    }
    case "facts": {
      const items = keep(b.items.map((i) => { const value = clean(i.value); return value && { ...i, value }; }));
      return items.length ? { ...b, items } : null;
    }
    case "columns": {
      const items = b.items.map((c) => ({ ...c, bullets: keep(c.bullets.map(clean)) })).filter((c) => c.bullets.length);
      return items.length ? { ...b, items } : null;
    }
    case "cards":
      return { ...b, body: b.body && (clean(b.body) ?? undefined) };
    case "pairs": {
      const items = keep(b.items.map((i) => { const a = clean(i.a); const bb = clean(i.b); return a && bb && { ...i, a, b: bb }; }));
      return items.length ? { ...b, items } : null;
    }
    default:
      return b;
  }
}

/** Bloques listos para publicar: sin marcas y sin secciones que se queden vacías. */
export function publicBlocks(blocks: Block[]): Block[] {
  const cleaned = keep(blocks.map(cleanBlock));
  return cleaned.filter((b, i) => b.type !== "chapter" || (cleaned[i + 1] !== undefined && cleaned[i + 1].type !== "chapter"));
}
