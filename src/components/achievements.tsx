"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Trophy } from "lucide-react";
import { achievements } from "@/config/achievements";
import { GlassCard } from "@/components/liquid-glass/glass-card";
import { SectionHeading } from "@/components/section-heading";

export function Achievements() {
    return (
        <section id="achievements" className="section-x relative py-16 sm:py-24">
            <div className="container-x">
                <SectionHeading
                    eyebrow="Recognition"
                    title="One I'm proud of."
                    description="Competed solo, shipped a full design, and took first place."
                />

                <div className="mt-12 mx-auto grid grid-cols-1 gap-6 max-w-5xl">
                    {achievements.map((a, i) => (
                        <div
                            key={a.id}
                            className="reveal"
                            data-delay={String(Math.min(i + 1, 8))}
                        >
                            <GlassCard className="lift group relative overflow-hidden p-0">
                                <div className="relative z-10 aspect-[16/9] w-full overflow-hidden rounded-t-[23px]">
                                    <Image
                                        src="/award.jpg"
                                        alt="1st Place UI/UX Design Competition trophy and certificate"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                    <span
                                        className="absolute left-4 top-4 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md"
                                        style={{
                                            borderColor: "var(--glass-border-strong)",
                                            background: "var(--surface-translucent)",
                                            color: "var(--color-1)",
                                        }}
                                    >
                                        1st Place
                                    </span>
                                    <div className="absolute right-4 top-4">
                                        <span
                                            className="grid h-9 w-9 place-items-center rounded-full border backdrop-blur-md"
                                            style={{
                                                borderColor: "var(--glass-border-strong)",
                                                background: "var(--surface-translucent)",
                                                color: "var(--color-1)",
                                            }}
                                        >
                                            <Trophy className="h-4 w-4" aria-hidden />
                                        </span>
                                    </div>
                                </div>

                                <div className="relative p-5 sm:p-6">
                                    <h3
                                        className="text-lg font-semibold tracking-tight"
                                        style={{ color: "var(--color-1)" }}
                                    >
                                        {a.title}
                                    </h3>
                                    <p
                                        className="mt-1 text-xs"
                                        style={{ color: "var(--text-muted)" }}
                                    >
                                        {a.subtitle}
                                    </p>

                                    <ul className="mt-3 space-y-1.5 text-sm">
                                        {a.highlights.map((h) => (
                                            <li
                                                key={h}
                                                className="flex items-start gap-2"
                                                style={{ color: "var(--text-muted)" }}
                                            >
                                                <span
                                                    className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full"
                                                    style={{ background: "var(--color-3)" }}
                                                    aria-hidden
                                                />
                                                <span>{h}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {a.url && a.urlLabel && (
                                        <div className="mt-4">
                                            <Link
                                                href={a.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-80"
                                                style={{ color: "var(--color-2)" }}
                                            >
                                                {a.urlLabel}
                                                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </GlassCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
