"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "@/config/experience";
import { site } from "@/config/site";
import { GlassCard } from "@/components/liquid-glass/glass-card";
import { SectionHeading } from "@/components/section-heading";

export function About() {
    return (
        <section id="about" className="section-x relative py-16 sm:py-24">
            <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-12">
                <div className="lg:col-span-5">
                    <SectionHeading eyebrow="About" title="A bit about me." />

                    <div className="reveal mt-6 space-y-4" data-delay="2">
                        {site.about.map((p, i) => (
                            <p
                                key={i}
                                className="text-base leading-relaxed"
                                style={{ color: "var(--text-muted)" }}
                            >
                                {p}
                            </p>
                        ))}
                    </div>

                    <div className="reveal mt-8" data-delay="3">
                        <GlassCard className="flex items-center gap-4 p-5">
                            <div
                                className="grid h-12 w-12 place-items-center rounded-2xl border"
                                style={{
                                    borderColor: "var(--glass-border)",
                                    background: "var(--soft-fill)",
                                }}
                            >
                                <GraduationCap
                                    className="h-5 w-5"
                                    style={{ color: "var(--color-3)" }}
                                    aria-hidden
                                />
                            </div>
                            <div>
                                <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                                    Education · {site.education.period}
                                </div>
                                <div
                                    className="text-base font-semibold"
                                    style={{ color: "var(--color-1)" }}
                                >
                                    {site.education.school}
                                </div>
                                <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                                    {site.education.degree}
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </div>

                <div className="lg:col-span-7">
                    <h3
                        className="mb-5 text-sm font-semibold uppercase tracking-[0.14em]"
                        style={{ color: "var(--text-muted)" }}
                    >
                        Beyond the code
                    </h3>
                    <ol className="relative space-y-5 sm:ml-3">
                        {experience.map((job, i) => (
                            <li
                                key={job.company}
                                className="reveal"
                                data-delay={String(Math.min(i + 2, 8))}
                            >
                                <GlassCard className="p-6">
                                    <div className="flex flex-wrap items-start justify-between gap-4">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="grid h-10 w-10 place-items-center rounded-xl border"
                                                style={{
                                                    borderColor: "var(--glass-border)",
                                                    background: "var(--soft-fill)",
                                                }}
                                            >
                                                <Briefcase
                                                    className="h-4 w-4"
                                                    style={{ color: "var(--color-3)" }}
                                                    aria-hidden
                                                />
                                            </div>
                                            <div>
                                                <div
                                                    className="text-sm"
                                                    style={{ color: "var(--text-muted)" }}
                                                >
                                                    {job.role}
                                                </div>
                                                <div
                                                    className="text-base font-semibold"
                                                    style={{ color: "var(--color-1)" }}
                                                >
                                                    {job.company}
                                                </div>
                                            </div>
                                        </div>
                                        <span
                                            className="rounded-full border px-2.5 py-1 text-[11px] font-medium"
                                            style={{
                                                borderColor: "var(--glass-border)",
                                                background: "var(--soft-fill)",
                                                color: "var(--text-muted)",
                                            }}
                                        >
                                            {job.period}
                                        </span>
                                    </div>

                                    <ul
                                        className="mt-4 space-y-2 pl-1 text-sm leading-relaxed"
                                        style={{ color: "var(--text-muted)" }}
                                    >
                                        {job.points.map((pt) => (
                                            <li key={pt} className="flex gap-2">
                                                <span
                                                    aria-hidden
                                                    className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full"
                                                    style={{ background: "var(--accent-dot)" }}
                                                />
                                                {pt}
                                            </li>
                                        ))}
                                    </ul>
                                </GlassCard>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
