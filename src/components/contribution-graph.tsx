"use client";

import { GlassCard } from "@/components/liquid-glass/glass-card";
import { site } from "@/config/site";
import type { ContributionDay, GitHubStats } from "@/lib/github";

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

const CELL = 14;
const GAP = 4;
/** "Mon"/"Wed"/"Fri" don't fit a 14px column — they'd bleed into week one. */
const DAY_LABEL_W = 26;

/** Sunday-aligned columns, front-padded and back-padded with nulls. */
function toWeeks(days: ContributionDay[]) {
    const pad = new Date(`${days[0].date}T00:00:00Z`).getUTCDay();
    const cells: (ContributionDay | null)[] = [...Array(pad).fill(null), ...days];
    while (cells.length % 7 !== 0) cells.push(null);

    const weeks: (ContributionDay | null)[][] = [];
    for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
    return weeks;
}

/**
 * One label per column, on the week each new month starts in.
 *
 * Column 0 is a partial week — the tail of the month before the window opens.
 * Labelling it puts two labels one column apart ("AprMay"), so it's dropped in
 * favour of the real month start beside it. Dropping by proximity instead
 * would silently lose that real month.
 */
function monthLabels(weeks: (ContributionDay | null)[][]) {
    let previousMonth = -1;

    return weeks.map((week, i) => {
        const first = week.find(Boolean);
        if (!first) return null;

        const month = new Date(`${first.date}T00:00:00Z`).getUTCMonth();
        const isNewMonth = month !== previousMonth;
        previousMonth = month;

        if (!isNewMonth) return null;
        if (i === 0 && week.some((d) => d === null)) return null;
        return MONTH[month];
    });
}

/**
 * Renders only when there is real data behind it. No GITHUB_TOKEN means no
 * section — a made-up activity grid is a credibility risk the moment anyone
 * cross-checks it against the actual profile.
 */
export function ContributionGraph({ gh }: { gh: GitHubStats | null }) {
    if (!gh) return null;

    const { days, contributions } = gh;
    const weeks = toWeeks(days);
    const labels = monthLabels(weeks);

    return (
        <section className="section-x relative pb-12 pt-4">
            <div className="container-x">
                {/* Sized to its contents (~700px), not the 80rem container — a
                    full-width card leaves a dead gap between copy and grid. */}
                <div className="reveal mx-auto max-w-3xl" data-delay="1">
                    <GlassCard className="overflow-hidden p-6 sm:p-8">
                        <div
                            className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full blur-3xl"
                            style={{ background: "var(--accent-tint-soft)" }}
                        />

                        {/* 90 days is only ~13 columns — a small object. It sits beside
                            the copy rather than under it, so the card reads as one
                            balanced row instead of a tiny grid stranded in whitespace. */}
                        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                            <div className="min-w-0">
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
                                    contributions in the last 90 days
                                </h3>
                                <p
                                    className="mt-1 max-w-sm text-sm"
                                    style={{ color: "var(--text-muted)" }}
                                >
                                    Pulled live from the GitHub API, not a screenshot.
                                </p>
                                <a
                                    href={site.social.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-200 hover:border-[var(--glass-border-hover)]"
                                    style={{
                                        borderColor: "var(--glass-border)",
                                        background: "var(--soft-fill)",
                                        color: "var(--text-muted)",
                                    }}
                                >
                                    View on GitHub
                                </a>
                            </div>

                            <div className="shrink-0 overflow-x-auto pb-1">
                                {/* Flex columns of fixed-size cells. Grid auto-columns
                                    stretch to fill leftover width; flex children at a
                                    fixed size cannot. */}
                                <div
                                    className="flex"
                                    style={{ gap: GAP, marginLeft: DAY_LABEL_W + GAP }}
                                >
                                    {labels.map((label, i) => (
                                        <div
                                            key={i}
                                            className="text-[10px] leading-none"
                                            style={{
                                                width: CELL,
                                                color: "var(--text-muted)",
                                            }}
                                        >
                                            {label && (
                                                <span className="relative -left-px whitespace-nowrap">
                                                    {label}
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-2 flex" style={{ gap: GAP }}>
                                    <div
                                        className="flex flex-col text-[10px] leading-none"
                                        style={{ gap: GAP, color: "var(--text-muted)" }}
                                        aria-hidden
                                    >
                                        {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
                                            <span
                                                key={i}
                                                className="flex items-center justify-end pr-1"
                                                style={{ height: CELL, width: DAY_LABEL_W }}
                                            >
                                                {d}
                                            </span>
                                        ))}
                                    </div>

                                    {weeks.map((week, wi) => (
                                        <div
                                            key={wi}
                                            className="flex flex-col"
                                            style={{ gap: GAP }}
                                        >
                                            {week.map((d, di) =>
                                                d ? (
                                                    <div
                                                        key={d.date}
                                                        className="rounded-[3px]"
                                                        title={`${d.count} contribution${d.count === 1 ? "" : "s"} on ${d.date}`}
                                                        style={{
                                                            height: CELL,
                                                            width: CELL,
                                                            background: LEVEL_TOKENS[d.level],
                                                            border:
                                                                d.level === 0
                                                                    ? "1px solid var(--glass-border)"
                                                                    : "none",
                                                        }}
                                                    />
                                                ) : (
                                                    <div
                                                        key={`${wi}-${di}`}
                                                        style={{ height: CELL, width: CELL }}
                                                    />
                                                )
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div
                                    className="mt-3 flex items-center justify-end gap-1.5 text-[10px]"
                                    style={{ color: "var(--text-muted)" }}
                                >
                                    <span>Less</span>
                                    {LEVEL_TOKENS.map((tok, i) => (
                                        <span
                                            key={i}
                                            className="rounded-[3px]"
                                            style={{
                                                height: 10,
                                                width: 10,
                                                background: tok,
                                                border:
                                                    i === 0
                                                        ? "1px solid var(--glass-border)"
                                                        : "none",
                                            }}
                                        />
                                    ))}
                                    <span>More</span>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
