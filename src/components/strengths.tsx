"use client";

import {
    Layers,
    Compass,
    Target,
    Handshake,
    type LucideIcon,
} from "lucide-react";
import { site } from "@/config/site";
import { GlassCard } from "@/components/liquid-glass/glass-card";
import { SectionHeading } from "@/components/section-heading";

const ICONS: LucideIcon[] = [Layers, Compass, Target, Handshake];

export function Strengths() {
    return (
        <section className="section-x relative py-16 sm:py-24">
            <div className="container-x">
                <SectionHeading
                    eyebrow="Why hire me"
                    title="What you'd actually get."
                    description="I'm still a student, but I've shipped real apps from start to finish. Here's what that looks like in practice."
                />

                <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {site.strengths.map((s, i) => {
                        const Icon = ICONS[i] ?? Layers;
                        return (
                            <div
                                key={s.title}
                                className="reveal h-full"
                                data-delay={String(Math.min(i + 1, 8))}
                            >
                                <GlassCard className="h-full p-6">
                                    <div
                                        className="grid h-11 w-11 place-items-center rounded-2xl border"
                                        style={{
                                            borderColor: "var(--accent-tint-strong)",
                                            background: "var(--accent-tint-soft)",
                                        }}
                                    >
                                        <Icon
                                            className="h-5 w-5"
                                            style={{ color: "var(--color-2)" }}
                                            aria-hidden
                                        />
                                    </div>
                                    <h3
                                        className="mt-5 text-base font-semibold tracking-tight"
                                        style={{ color: "var(--color-1)" }}
                                    >
                                        {s.title}
                                    </h3>
                                    <p
                                        className="mt-2 text-sm leading-relaxed"
                                        style={{ color: "var(--text-muted)" }}
                                    >
                                        {s.body}
                                    </p>
                                </GlassCard>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
