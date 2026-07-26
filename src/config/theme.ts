/* ============================================================================
   THEME
   ============================================================================

   Two ramps, not one:

     • the NEUTRAL ramp (`hue` + `baseChroma`) paints text, surfaces and glass.
       Keep `baseChroma` tiny — it's a whisper of tint, not a colour.
     • the ACCENT (`accentHue` + `accentChroma`) paints links, buttons, glow,
       the activity graph. This is the only place real colour shows up.

   Tinting everything from a single saturated hue is what made the old palette
   read muddy. Restraint in the base is what makes the accent land.

   `accentHue` picks (OKLCH angle, 0-360):
     - 248  Azure        (default — matches the BhaloPhone brand blue)
     - 285  Violet / indigo
     - 162  Emerald
     -  40  Warm amber
     -  15  Rose

   `mono` flattens the accent too, for a pure graphite look.
   ============================================================================ */

export type ThemeConfig = {
    /** Neutral hue — the faint tint carried by text, surfaces and glass. */
    hue: number;
    /** Accent hue. Falls back to `hue`. */
    accentHue?: number;
    /** Saturation of the neutral ramp. Keep under ~0.015 or it muddies. */
    baseChroma?: number;
    /** Saturation of the accent. */
    accentChroma?: number;
    /** Near-monochrome everything, accent included. */
    mono?: boolean;
    /** Default startup mode. User can still toggle. */
    defaultMode: "dark" | "light" | "system";
};

export const theme: ThemeConfig = {
    hue: 255,
    accentHue: 248,
    baseChroma: 0.008,
    accentChroma: 0.155,
    mono: false,
    defaultMode: "system",
};

/* ────────────────────────────────────────────────────────────────────────────
   Neutral ramp — c1 is the primary text colour, c7 the page/card ground.
   Pure JS so it works in `<style>` tags AND in inline SVG / cover art.
   ──────────────────────────────────────────────────────────────────────────── */

/* c1 …………………………………………………………………………………………………………………………………… c7 */
const LIGHTNESS_STOPS_DARK = [0.975, 0.9, 0.755, 0.6, 0.44, 0.28, 0.145] as const;
const LIGHTNESS_STOPS_LIGHT = [0.2, 0.34, 0.465, 0.58, 0.7, 0.9, 0.98] as const;

const ANCHOR_INDEX_DARK = 3;
const ANCHOR_INDEX_LIGHT = 3;

/** Chroma taper: peaks at the anchor lightness, falls off toward L extremes. */
function chromaForStop(l: number, anchorL: number, peak: number) {
    const distance = Math.abs(l - anchorL);
    const maxDistance = Math.max(
        Math.abs(LIGHTNESS_STOPS_DARK[LIGHTNESS_STOPS_DARK.length - 1] - anchorL),
        Math.abs(LIGHTNESS_STOPS_DARK[0] - anchorL)
    );
    const factor = 1 - (distance / maxDistance) * 0.7;
    return peak * factor;
}

export function buildPalette(mode: "dark" | "light", t: ThemeConfig = theme) {
    const stops =
        mode === "dark" ? LIGHTNESS_STOPS_DARK : LIGHTNESS_STOPS_LIGHT;
    const anchorL = stops[mode === "dark" ? ANCHOR_INDEX_DARK : ANCHOR_INDEX_LIGHT];
    const peak = t.mono ? 0 : t.baseChroma ?? 0.008;

    return stops.map((l) => {
        const c = chromaForStop(l, anchorL, peak);
        return `oklch(${l.toFixed(3)} ${c.toFixed(3)} ${t.hue})`;
    });
}

/**
 * The accent at an arbitrary lightness — no fixed ramp, because every accent
 * token wants its own L (a 0.44 button next to a 0.78 link next to a 0.55 glow).
 *
 * Contrast note: white text needs L ≤ 0.50 behind it to clear WCAG AA, and
 * accent text on the dark ground needs L ≥ 0.65. The token table respects both.
 */
export function accent(l: number, alpha?: number, t: ThemeConfig = theme) {
    const c = t.mono ? 0.012 : t.accentChroma ?? 0.155;
    const h = t.accentHue ?? t.hue;
    const stop = `oklch(${l.toFixed(3)} ${c.toFixed(3)} ${h})`;
    return alpha === undefined ? stop : withAlpha(stop, alpha);
}

/** Concrete oklch alpha string — works on iOS Safari (no relative-color syntax). */
export function withAlpha(stop: string, alpha: number) {
    // stop looks like "oklch(0.62 0.15 295)" — inject the alpha
    return stop.replace(/\)$/, ` / ${alpha})`);
}
