import { accent, buildPalette, theme, withAlpha } from "@/config/theme";

/**
 * Server-rendered <style> that emits the neutral ramp + accent + glass tokens
 * for both dark and light modes. Concrete oklch() values only — no
 * relative-color syntax (`oklch(from var(--x) ...)`) so iOS 26 Safari renders
 * correctly.
 *
 * Rule of thumb when editing: `c1…c7` are neutrals and should never carry
 * visible colour. Anything that should read as *coloured* goes through
 * `accent()`.
 */
export function ThemeTokens() {
  const dark = buildPalette("dark", theme);
  const light = buildPalette("light", theme);

  const css = `
    :root, .dark {
      ${makeTokens(dark, "dark")}
    }
    .light {
      ${makeTokens(light, "light")}
    }
  `;

  return <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: css }} />;
}

/** Near-white that sits on top of a saturated accent fill. */
const ON_ACCENT = "oklch(0.99 0.004 255)";

function makeTokens(palette: string[], mode: "dark" | "light") {
  const [c1, c2, c3, c4, c5, c6, c7] = palette;
  const isDark = mode === "dark";

  const lines: string[] = [];
  const push = (k: string, v: string) => lines.push(`${k}: ${v};`);

  // Neutral ramp — c1 = primary text, c7 = ground.
  push("--color-1", c1);
  push("--color-2", c2);
  push("--color-3", c3);
  push("--color-4", c4);
  push("--color-5", c5);
  push("--color-6", c6);
  push("--color-7", c7);

  // Semantic
  push("--background", isDark ? c7 : `oklch(0.985 0.003 ${theme.hue})`);
  push("--foreground", c1);
  push("--primary", accent(isDark ? 0.66 : 0.5));
  push("--primary-foreground", ON_ACCENT);
  push("--secondary", c6);
  push("--secondary-foreground", c2);
  push("--accent", accent(isDark ? 0.66 : 0.5));
  push("--accent-foreground", ON_ACCENT);
  push("--muted", c6);
  push("--muted-foreground", c3);
  push("--border", c6);
  push("--ring", accent(isDark ? 0.7 : 0.55));
  push("--card", c7);
  push("--card-foreground", c1);
  push("--text-muted", c3);
  // Accent-coloured *text*. Tuned to clear AA on this mode's ground.
  push("--accent-text", accent(isDark ? 0.78 : 0.45));
  push("--on-accent", ON_ACCENT);

  // Status (fixed hues — palette-independent)
  push("--destructive", "oklch(0.55 0.22 27)");
  push("--success", "oklch(0.65 0.16 145)");
  push("--warning", "oklch(0.75 0.15 85)");

  if (isDark) {
    // ── DARK ─────────────────────────────────────────────────────
    // Glass leans on thin white fills + hairline white borders. The old
    // build tinted these with the accent, which is what made every surface
    // look washed instead of like glass.
    push("--glass-fill-start", withAlpha(c1, 0.07));
    push("--glass-fill-end", withAlpha(c1, 0.03));
    push("--glass-fill-strong-start", withAlpha(c1, 0.1));
    push("--glass-fill-strong-end", withAlpha(c1, 0.04));
    push("--glass-fill-nav-start", withAlpha(c7, 0.72));
    push("--glass-fill-nav-end", withAlpha(c7, 0.55));
    push("--glass-bg", withAlpha(c7, 0.5));
    push("--glass-bg-strong", withAlpha(c7, 0.7));
    push("--glass-border", withAlpha(c1, 0.1));
    push("--glass-border-strong", withAlpha(c1, 0.16));
    push("--glass-border-nav", withAlpha(c1, 0.12));
    push("--glass-border-hover", accent(0.7, 0.4));
    push("--glow-primary", accent(0.6, 0.28));
    push("--glow-secondary", accent(0.5, 0.18));
    push("--orb-1", accent(0.55, 0.22));
    push("--orb-2", accent(0.62, 0.13));
    push("--orb-3", accent(0.45, 0.2));
    push("--mesh-1", accent(0.55, 0.14));
    push("--mesh-2", accent(0.62, 0.08));
    push("--mesh-3", accent(0.45, 0.12));
    push("--glass-shine-top", withAlpha(c1, 0.16));
    push("--glass-shine-bottom", withAlpha(c1, 0.03));
    push("--soft-fill", withAlpha(c1, 0.05));
    push("--soft-fill-strong", withAlpha(c1, 0.09));
    push("--shadow-deep", "oklch(0.06 0 0 / 0.6)");
    // Component helpers
    push("--accent-tint-soft", accent(0.62, 0.14));
    push("--accent-tint-mid", accent(0.62, 0.28));
    push("--accent-tint-strong", accent(0.62, 0.48));
    push("--accent-dot", accent(0.7));
    push("--accent-surface", accent(0.6, 0.12));
    push("--cover-grad-start", accent(0.45, 0.35));
    push("--cover-grad-end", accent(0.3, 0.6));
    push("--cover-blob-1", accent(0.62, 0.35));
    push("--cover-blob-2", accent(0.4, 0.4));
    push("--ink-line", withAlpha(c1, 0.24));
    push("--ink-line-soft", withAlpha(c1, 0.12));
    push("--ink-dot", withAlpha(c1, 0.8));
    push("--surface-translucent", withAlpha(c7, 0.55));
    push("--nav-pill-grad-start", accent(0.6, 0.22));
    push("--nav-pill-grad-end", accent(0.52, 0.28));
    push("--nav-pill-border", accent(0.68, 0.35));
    push("--nav-hover-bg", withAlpha(c1, 0.07));
    // Primary button — deep enough that near-white text clears AA (L ≤ 0.50)
    push("--btn-grad-start", accent(0.4));
    push("--btn-grad-mid", accent(0.44));
    push("--btn-grad-end", accent(0.48));
    push("--btn-text", ON_ACCENT);
    push("--btn-shine", "oklch(1 0 0 / 0.22)");
    push("--btn-shadow", accent(0.45, 0.45));
  } else {
    // ── LIGHT ────────────────────────────────────────────────────
    // c1 = darkest (0.20), c7 = lightest (0.98). The page ground is a barely
    // cool off-white; cards are crisp white with real shadow so they lift.
    push("--glass-fill-start", "oklch(1 0 0 / 0.86)");
    push("--glass-fill-end", "oklch(1 0 0 / 0.66)");
    push("--glass-fill-strong-start", "oklch(1 0 0 / 0.94)");
    push("--glass-fill-strong-end", "oklch(1 0 0 / 0.78)");
    push("--glass-fill-nav-start", "oklch(1 0 0 / 0.82)");
    push("--glass-fill-nav-end", "oklch(1 0 0 / 0.64)");
    push("--glass-bg", "oklch(1 0 0 / 0.8)");
    push("--glass-bg-strong", "oklch(1 0 0 / 0.94)");
    push("--glass-border", withAlpha(c1, 0.09));
    push("--glass-border-strong", withAlpha(c1, 0.14));
    push("--glass-border-nav", withAlpha(c1, 0.1));
    push("--glass-border-hover", accent(0.55, 0.35));
    push("--glow-primary", accent(0.6, 0.16));
    push("--glow-secondary", accent(0.7, 0.12));
    push("--orb-1", accent(0.65, 0.14));
    push("--orb-2", accent(0.72, 0.1));
    push("--orb-3", accent(0.58, 0.12));
    push("--mesh-1", accent(0.65, 0.1));
    push("--mesh-2", accent(0.72, 0.07));
    push("--mesh-3", accent(0.58, 0.09));
    // Inner shine is barely there in light mode; rely on shadow instead
    push("--glass-shine-top", "oklch(1 0 0 / 0.7)");
    push("--glass-shine-bottom", "oklch(1 0 0 / 0)");
    push("--soft-fill", accent(0.6, 0.07));
    push("--soft-fill-strong", accent(0.6, 0.12));
    push("--shadow-deep", withAlpha(c1, 0.1));
    push("--accent-tint-soft", accent(0.62, 0.12));
    push("--accent-tint-mid", accent(0.6, 0.26));
    push("--accent-tint-strong", accent(0.55, 0.45));
    push("--accent-dot", accent(0.52));
    push("--accent-surface", accent(0.62, 0.1));
    push("--cover-grad-start", accent(0.7, 0.22));
    push("--cover-grad-end", accent(0.58, 0.34));
    push("--cover-blob-1", accent(0.65, 0.22));
    push("--cover-blob-2", accent(0.75, 0.2));
    push("--ink-line", withAlpha(c1, 0.2));
    push("--ink-line-soft", withAlpha(c1, 0.1));
    push("--ink-dot", withAlpha(c1, 0.7));
    push("--surface-translucent", "oklch(1 0 0 / 0.7)");
    push("--nav-pill-grad-start", accent(0.6, 0.14));
    push("--nav-pill-grad-end", accent(0.55, 0.2));
    push("--nav-pill-border", accent(0.55, 0.3));
    push("--nav-hover-bg", accent(0.6, 0.08));
    push("--btn-grad-start", accent(0.42));
    push("--btn-grad-mid", accent(0.46));
    push("--btn-grad-end", accent(0.5));
    push("--btn-text", ON_ACCENT);
    push("--btn-shine", "oklch(1 0 0 / 0.25)");
    push("--btn-shadow", accent(0.5, 0.35));
  }

  return lines.join("\n      ");
}
