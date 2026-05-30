/* ============================================================================
   THEME — change ONE number to retheme the entire site.
   ============================================================================

   `hue` is the OKLCH hue angle (0-360). Common picks:
     - 295  Lavender (default)
     - 265  Indigo / blue-violet
     - 325  Plum / red-violet
     -  15  Rose
     -  40  Warm amber
     - 160  Emerald
     - 220  Slate-blue (graphite-ish)

   `mono` swaps to a near-monochrome palette (great for "black silver" vibes).
   ============================================================================ */

export type ThemeConfig = {
    hue: number;
    mono?: boolean;
    /** Default startup mode. User can still toggle. */
    defaultMode: "dark" | "light" | "system";
};

export const theme: ThemeConfig = {
    hue: 288,
    mono: false,
    defaultMode: "dark",
};

/* ────────────────────────────────────────────────────────────────────────────
   Palette generator — chroma-tapered (per einui rules), pure JS so we can use
   it in `<style>` tags AND in inline SVG / cover art.
   ──────────────────────────────────────────────────────────────────────────── */

const LIGHTNESS_STOPS_DARK = [0.97, 0.88, 0.75, 0.62, 0.5, 0.35, 0.14] as const;
const LIGHTNESS_STOPS_LIGHT = [0.18, 0.32, 0.5, 0.62, 0.72, 0.88, 0.965] as const;

const ANCHOR_INDEX_DARK = 3; // L=0.62
const ANCHOR_INDEX_LIGHT = 3;
const ANCHOR_CHROMA = 0.15;

/** Chroma taper: peaks at the anchor lightness, falls off toward L extremes. */
function chromaForStop(l: number, anchorL: number, mono: boolean) {
    if (mono) return 0.02; // near-grey across the entire scale
    const distance = Math.abs(l - anchorL);
    const maxDistance = Math.max(
        Math.abs(LIGHTNESS_STOPS_DARK[LIGHTNESS_STOPS_DARK.length - 1] - anchorL),
        Math.abs(LIGHTNESS_STOPS_DARK[0] - anchorL)
    );
    const factor = 1 - (distance / maxDistance) * 0.7;
    return ANCHOR_CHROMA * factor;
}

export function buildPalette(mode: "dark" | "light", t: ThemeConfig = theme) {
    const stops =
        mode === "dark" ? LIGHTNESS_STOPS_DARK : LIGHTNESS_STOPS_LIGHT;
    const anchorL = stops[mode === "dark" ? ANCHOR_INDEX_DARK : ANCHOR_INDEX_LIGHT];

    return stops.map((l) => {
        const c = chromaForStop(l, anchorL, t.mono ?? false);
        return `oklch(${l.toFixed(3)} ${c.toFixed(3)} ${t.hue})`;
    });
}

/** Concrete oklch alpha string — works on iOS Safari (no relative-color syntax). */
export function withAlpha(stop: string, alpha: number) {
    // stop looks like "oklch(0.62 0.15 295)" — inject the alpha
    return stop.replace(/\)$/, ` / ${alpha})`);
}
