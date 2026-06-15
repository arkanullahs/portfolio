"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "@/config/experience";
import { site } from "@/config/site";
import { GlassCard } from "@/components/liquid-glass/glass-card";
import { SectionHeading } from "@/components/section-heading";
import { ContributionGraph } from "@/components/contribution-graph";

export function About() {
    return (
        <>
            <section id="about-intro" className="snap-section section-x relative overflow-hidden">
                <div className="container-x py-12 sm:py-16">
                    <SectionHeading eyebrow="About" title="A bit about me." />
                </div>
            </section>

            <section id="about-me" className="snap-section section-x relative overflow-hidden">
                <div className="container-x py-12 sm:py-16">
                    <div className="max-w-2xl mx-auto space-y-4">
                        {site.about.map((p, i) => (
                            <p key={i} className="text-base leading-relaxed text-[var(--text-muted)]">
                                {p}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            <section id="about-edu" className="snap-section section-x relative overflow-hidden">
                <div className="container-x py-12 sm:py-16">
                    <div className="max-w-md mx-auto">
                        <GlassCard className="flex items-center gap-5 p-6">
                            <div className="grid h-14 w-14 place-items-center rounded-2xl border"
                                style={{ borderColor: "var(--glass-border)", background: "var(--soft-fill)" }}>
                                <GraduationCap className="h-6 w-6 text-[var(--color-3)]" aria-hidden />
                            </div>
                            <div>
                                <div className="text-sm text-[var(--text-muted)]">Education · {site.education.period}</div>
                                <div className="text-lg font-semibold text-[var(--color-1)]">{site.education.school}</div>
                                <div className="text-sm text-[var(--text-muted)]">{site.education.degree}</div>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </section>

            <section id="about-exp" className="snap-section section-x relative overflow-hidden">
                <div className="container-x py-12 sm:py-16">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                            Beyond the code
                        </h3>
                        <div className="space-y-4">
                            {experience.map((job) => (
                                <GlassCard key={job.company} className="p-5">
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <div className="grid h-10 w-10 place-items-center rounded-xl border"
                                                style={{ borderColor: "var(--glass-border)", background: "var(--soft-fill)" }}>
                                                <Briefcase className="h-4 w-4 text-[var(--color-3)]" aria-hidden />
                                            </div>
                                            <div>
                                                <div className="text-sm text-[var(--text-muted)]">{job.role}</div>
                                                <div className="text-sm font-semibold text-[var(--color-1)]">{job.company}</div>
                                            </div>
                                        </div>
                                        <span className="rounded-full border px-2.5 py-1 text-[10px] font-medium"
                                            style={{ borderColor: "var(--glass-border)", background: "var(--soft-fill)", color: "var(--text-muted)" }}>
                                            {job.period}
                                        </span>
                                    </div>
                                    <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-[var(--text-muted)]">
                                        {job.points.map((pt) => (
                                            <li key={pt} className="flex gap-2">
                                                <span aria-hidden className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--accent-dot)]" />
                                                {pt}
                                            </li>
                                        ))}
                                    </ul>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="about-activity" className="snap-section section-x relative overflow-hidden">
                <div className="container-x py-12 sm:py-16">
                    <div className="max-w-lg mx-auto">
                        <ContributionGraph compact />
                    </div>
                </div>
            </section>
        </>
    );
}
