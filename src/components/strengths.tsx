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
        <>
            {/* Intro slide */}
            <section id="strengths-intro" className="snap-section section-x relative overflow-hidden">
                <div className="container-x py-12 sm:py-16">
                    <SectionHeading
                        eyebrow="Why hire me"
                        title="What you'd actually get."
                        description="I'm still a student, but I've shipped real apps from start to finish. Here's what that looks like in practice."
                    />
                </div>
            </section>

            {/* One strength per slide */}
            {site.strengths.map((s, i) => {
                const Icon = ICONS[i] ?? Layers;
                return (
                    <section
                        key={s.title}
                        id={["strength-build", "strength-learn", "strength-care", "strength-work"][i]}
                        className="snap-section section-x relative overflow-hidden"
                    >
                        <div className="container-x py-12 sm:py-16">
                            <div className="max-w-xl mx-auto text-center">
                                <div
                                    className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border"
                                    style={{
                                        borderColor: "var(--accent-tint-strong)",
                                        background: "var(--accent-tint-soft)",
                                    }}
                                >
                                    <Icon
                                        className="h-7 w-7"
                                        style={{ color: "var(--color-2)" }}
                                        aria-hidden
                                    />
                                </div>
                                <h2
                                    className="mt-6 text-2xl font-semibold tracking-tight"
                                    style={{ color: "var(--color-1)" }}
                                >
                                    {s.title}
                                </h2>
                                <p
                                    className="mt-4 text-base leading-relaxed"
                                    style={{ color: "var(--text-muted)" }}
                                >
                                    {s.body}
                                </p>
                            </div>
                        </div>
                    </section>
                );
            })}
        </>
    );
}
