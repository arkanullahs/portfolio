"use client";

import { GlassCard } from "@/components/liquid-glass/glass-card";
import { site } from "@/config/site";
import type { GitHubStats } from "@/lib/github";

const LEVEL_TOKENS = [
    "var(--soft-fill)",
    "var(--accent-tint-soft)",
    "var(--accent-tint-mid)",
    "var(--accent-tint-strong)",
    "var(--accent-dot)",
] as const;

const MONTH = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
] as const;

function monthLabel(iso: string) {
    const d = new Date(`${iso}T00:00:00Z`);
    return `${MONTH[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/**
 * Renders only when there is real data behind it. No GITHUB_TOKEN means no
 * section — a made-up activity grid is a credibility risk the moment anyone
 * cross-checks it against the actual profile.
 */
export function ContributionGraph({ gh }: { gh: GitHubStats | null }) {
    if (!gh) return null;

    const { days, contributions } = gh;

    // GitHub's first week is partial, so pad to keep Sun-Sat rows aligned.
    const leadingPad = new Date(`${days[0].date}T00:00:00Z`).getUTCDay();
    const range = `${monthLabel(days[0].date)} – ${monthLabel(days[days.length - 1].date)}`;

    return (
        <section className="section-x relative pb-12 pt-4">
            <div className="container-x">
                <div className="reveal" data-delay="1">
                    <GlassCard className="overflow-hidden p-6 sm:p-8">
                        <div
                            className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full blur-3xl"
                            style={{ background: "var(--accent-tint-soft)" }}
                        />
                        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <div
                                    className="text-xs font-semibold uppercase tracking-[0.16em]"
                                    style={{ color: "var(--text-muted)" }}
                                >
                                    Activity
                                </div>
                                <h3
                                    className="mt-1 text-xl font-semibold tracking-tight"
                                    style={{ color: "var(--color-1)" }}
                                >
                                    <span className="tabular-nums">{contributions}</span>{" "}
                                    contributions in the last year
                                </h3>
                                <p
                                    className="mt-1 text-sm"
                                    style={{ color: "var(--text-muted)" }}
                                >
                                    {range}. Pulled live from the GitHub API, not a
                                    screenshot.
                                </p>
                            </div>
                            <a
                                href={site.social.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-200 hover:border-[var(--glass-border-hover)]"
                                style={{
                                    borderColor: "var(--glass-border)",
                                    background: "var(--soft-fill)",
                                    color: "var(--text-muted)",
                                }}
                            >
                                View on GitHub
                            </a>
                        </div>

                        <div className="relative mt-6 overflow-x-auto pb-1">
                            <div
                                className="grid grid-flow-col gap-[3px]"
                                style={{ gridTemplateRows: "repeat(7, 12px)" }}
                            >
                                {Array.from({ length: leadingPad }, (_, i) => (
                                    <div key={`pad-${i}`} className="h-3 w-3" />
                                ))}
                                {days.map((d) => (
                                    <div
                                        key={d.date}
                                        className="h-3 w-3 rounded-[3px]"
                                        title={`${d.count} contribution${d.count === 1 ? "" : "s"} on ${d.date}`}
                                        style={{
                                            background: LEVEL_TOKENS[d.level],
                                            border:
                                                d.level === 0
                                                    ? "1px solid var(--glass-border)"
                                                    : "none",
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        <div
                            className="relative mt-4 flex items-center justify-end gap-2 text-[10px]"
                            style={{ color: "var(--text-muted)" }}
                        >
                            <span>Less</span>
                            {LEVEL_TOKENS.map((tok, i) => (
                                <span
                                    key={i}
                                    className="h-3 w-3 rounded-[3px]"
                                    style={{
                                        background: tok,
                                        border:
                                            i === 0 ? "1px solid var(--glass-border)" : "none",
                                    }}
                                />
                            ))}
                            <span>More</span>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
