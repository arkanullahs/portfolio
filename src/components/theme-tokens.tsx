import { buildPalette, theme, withAlpha } from "@/config/theme";

/**
 * Server-rendered <style> that emits the OKLCH palette + glass tokens for both
 * dark and light modes. Concrete oklch() values only — no relative-color
 * syntax (`oklch(from var(--x) ...)`) so iOS 26 Safari renders correctly.
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

function makeTokens(palette: string[], mode: "dark" | "light") {
  const [c1, c2, c3, c4, c5, c6, c7] = palette;
  const isDark = mode === "dark";

  const lines: string[] = [];
  const push = (k: string, v: string) => lines.push(`${k}: ${v};`);

  // Master palette
  push("--color-1", c1);
  push("--color-2", c2);
  push("--color-3", c3);
  push("--color-4", c4);
  push("--color-5", c5);
  push("--color-6", c6);
  push("--color-7", c7);

  // Semantic
  // Light mode gets a softly tinted off-white page bg so white cards pop.
  push("--background", isDark ? c7 : `oklch(0.965 0.014 ${theme.hue})`);
  push("--foreground", c1);
  push("--primary", c4);
  push("--primary-foreground", isDark ? c1 : "oklch(0.98 0.02 0)");
  push("--secondary", c6);
  push("--secondary-foreground", c2);
  push("--accent", c5);
  push("--accent-foreground", c1);
  push("--muted", c6);
  push("--muted-foreground", c3);
  push("--border", c6);
  push("--ring", c4);
  push("--card", c7);
  push("--card-foreground", c1);
  push("--text-muted", c3);

  // Status (fixed hues — palette-independent)
  push("--destructive", "oklch(0.55 0.22 27)");
  push("--success", "oklch(0.65 0.16 145)");
  push("--warning", "oklch(0.75 0.15 85)");

  if (isDark) {
    // Dark mode glass and helpers
    push("--glass-fill-start", withAlpha(c1, 0.16));
    push("--glass-fill-end", withAlpha(c1, 0.07));
    push("--glass-fill-strong-start", withAlpha(c1, 0.22));
    push("--glass-fill-strong-end", withAlpha(c1, 0.10));
    push("--glass-fill-nav-start", withAlpha(c7, 0.62));
    push("--glass-fill-nav-end", withAlpha(c7, 0.48));
    push("--glass-bg", withAlpha(c7, 0.45));
    push("--glass-bg-strong", withAlpha(c7, 0.6));
    push("--glass-border", withAlpha(c3, 0.32));
    push("--glass-border-strong", withAlpha(c3, 0.42));
    push("--glass-border-nav", withAlpha(c1, 0.14));
    push("--glass-border-hover", withAlpha(c3, 0.5));
    push("--glow-primary", withAlpha(c4, 0.45));
    push("--glow-secondary", withAlpha(c5, 0.35));
    push("--orb-1", withAlpha(c4, 0.3));
    push("--orb-2", withAlpha(c3, 0.22));
    push("--orb-3", withAlpha(c5, 0.28));
    push("--mesh-1", withAlpha(c4, 0.22));
    push("--mesh-2", withAlpha(c3, 0.16));
    push("--mesh-3", withAlpha(c5, 0.22));
    push("--glass-shine-top", withAlpha(c1, 0.25));
    push("--glass-shine-bottom", withAlpha(c1, 0.06));
    push("--soft-fill", withAlpha(c1, 0.06));
    push("--soft-fill-strong", withAlpha(c1, 0.12));
    push("--shadow-deep", withAlpha(c7, 0.55));
    // Component helpers
    push("--accent-tint-soft", withAlpha(c4, 0.15));
    push("--accent-tint-mid", withAlpha(c4, 0.30));
    push("--accent-tint-strong", withAlpha(c4, 0.45));
    push("--accent-dot", withAlpha(c4, 0.85));
    push("--cover-grad-start", withAlpha(c3, 0.55));
    push("--cover-grad-end", withAlpha(c5, 0.85));
    push("--cover-blob-1", withAlpha(c2, 0.55));
    push("--cover-blob-2", withAlpha(c6, 0.55));
    push("--ink-line", withAlpha(c1, 0.30));
    push("--ink-line-soft", withAlpha(c1, 0.18));
    push("--ink-dot", withAlpha(c1, 0.85));
    push("--surface-translucent", withAlpha(c7, 0.4));
    push("--nav-pill-grad-start", withAlpha(c3, 0.35));
    push("--nav-pill-grad-end", withAlpha(c4, 0.35));
    push("--nav-pill-border", withAlpha(c3, 0.5));
    push("--nav-hover-bg", withAlpha(c1, 0.10));
    // Primary button — bright violet gradient, near-white text (dark mode)
    push("--btn-grad-start", c4);
    push("--btn-grad-mid", c3);
    push("--btn-grad-end", c2);
    push("--btn-text", "oklch(0.99 0.01 0)");
    push("--btn-shine", withAlpha(c1, 0.45));
    push("--btn-shadow", withAlpha(c4, 0.5));
  } else {
    // ── LIGHT MODE ──────────────────────────────────────────────
    // c7 = lightest (≈0.98), c1 = darkest (≈0.18) in light palette.
    // Page bg is a soft tinted off-white; cards are crisp near-white with
    // real shadows so they read clearly. Glass fills lean light, not dark.
    push("--glass-fill-start", "oklch(1 0 0 / 0.85)");
    push("--glass-fill-end", "oklch(1 0 0 / 0.65)");
    push("--glass-fill-strong-start", "oklch(1 0 0 / 0.92)");
    push("--glass-fill-strong-end", "oklch(1 0 0 / 0.75)");
    push("--glass-fill-nav-start", "oklch(1 0 0 / 0.80)");
    push("--glass-fill-nav-end", "oklch(1 0 0 / 0.62)");
    push("--glass-bg", "oklch(1 0 0 / 0.8)");
    push("--glass-bg-strong", "oklch(1 0 0 / 0.92)");
    push("--glass-border", withAlpha(c4, 0.14));
    push("--glass-border-strong", withAlpha(c4, 0.20));
    push("--glass-border-nav", withAlpha(c4, 0.16));
    push("--glass-border-hover", withAlpha(c4, 0.30));
    push("--glow-primary", withAlpha(c4, 0.22));
    push("--glow-secondary", withAlpha(c5, 0.18));
    push("--orb-1", withAlpha(c4, 0.16));
    push("--orb-2", withAlpha(c3, 0.12));
    push("--orb-3", withAlpha(c5, 0.14));
    push("--mesh-1", withAlpha(c4, 0.12));
    push("--mesh-2", withAlpha(c3, 0.10));
    push("--mesh-3", withAlpha(c5, 0.12));
    // Inner shine is barely there in light mode; rely on shadow instead
    push("--glass-shine-top", "oklch(1 0 0 / 0.6)");
    push("--glass-shine-bottom", "oklch(1 0 0 / 0)");
    push("--soft-fill", withAlpha(c4, 0.07));
    push("--soft-fill-strong", withAlpha(c4, 0.12));
    push("--shadow-deep", withAlpha(c1, 0.16));
    push("--accent-tint-soft", withAlpha(c4, 0.12));
    push("--accent-tint-mid", withAlpha(c4, 0.22));
    push("--accent-tint-strong", withAlpha(c4, 0.34));
    push("--accent-dot", c4);
    push("--cover-grad-start", withAlpha(c4, 0.20));
    push("--cover-grad-end", withAlpha(c5, 0.32));
    push("--cover-blob-1", withAlpha(c4, 0.22));
    push("--cover-blob-2", withAlpha(c5, 0.20));
    push("--ink-line", withAlpha(c1, 0.22));
    push("--ink-line-soft", withAlpha(c1, 0.12));
    push("--ink-dot", withAlpha(c1, 0.75));
    push("--surface-translucent", "oklch(1 0 0 / 0.55)");
    push("--nav-pill-grad-start", withAlpha(c4, 0.16));
    push("--nav-pill-grad-end", withAlpha(c4, 0.24));
    push("--nav-pill-border", withAlpha(c4, 0.30));
    push("--nav-hover-bg", withAlpha(c4, 0.08));
    // Primary button — bright violet, white text (light mode)
    push("--btn-grad-start", c4);
    push("--btn-grad-mid", c3);
    push("--btn-grad-end", c5);
    push("--btn-text", "oklch(0.99 0.01 0)");
    push("--btn-shine", withAlpha("oklch(0.99 0.01 0)", 0.45));
    push("--btn-shadow", withAlpha(c4, 0.4));
  }

  return lines.join("\n      ");
}
