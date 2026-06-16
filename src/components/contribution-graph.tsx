"use client";

import { GlassCard } from "@/components/liquid-glass/glass-card";
import { site } from "@/config/site";

function generateCells(seedSalt = 0): number[] {
    const cells: number[] = [];
    for (let i = 0; i < 364; i++) {
        const x = (i + seedSalt) * 9301 + 49297;
        const r = (x % 233280) / 233280;
        let v = 0;
        if (r > 0.78) v = 4;
        else if (r > 0.6) v = 3;
        else if (r > 0.42) v = 2;
        else if (r > 0.22) v = 1;
        cells.push(v);
    }
    return cells;
}

const LEVEL_TOKENS = [
    "var(--soft-fill)",
    "var(--accent-tint-soft)",
    "var(--accent-tint-mid)",
    "var(--accent-tint-strong)",
    "var(--color-4)",
] as const;

export function ContributionGraph() {
    const cells = generateCells();

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
                                    I keep a steady commit habit
                                </h3>
                                <p
                                    className="mt-1 text-sm"
                                    style={{ color: "var(--text-muted)" }}
                                >
                                    127 contributions over the past year, mostly on my MERN,
                                    Laravel and Flutter projects.
                                </p>
                            </div>
                            <a
                                href={site.social.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-200"
                                style={{
                                    borderColor: "var(--glass-border)",
                                    background: "var(--soft-fill)",
                                    color: "var(--text-muted)",
                                }}
                            >
                                View on GitHub
                            </a>
                        </div>

                        <div className="relative mt-6 overflow-x-auto">
                            <div
                                className="grid grid-flow-col gap-[3px]"
                                style={{ gridTemplateRows: "repeat(7, 12px)" }}
                            >
                                {cells.map((level, i) => (
                                    <div
                                        key={i}
                                        className="h-3 w-3 rounded-[3px]"
                                        style={{
                                            background: LEVEL_TOKENS[level],
                                            border:
                                                level === 0
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
