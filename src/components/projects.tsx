"use client";

import Link from "next/link";
import { ArrowUpRight, Check, Github } from "lucide-react";
import { projects } from "@/config/projects";
import { GlassCard } from "@/components/liquid-glass/glass-card";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCover } from "@/components/project-cover";
import { SkillIcon } from "@/components/brand-icons";

function ProjectSlide({ p, i }: { p: typeof projects[number]; i: number }) {
    return (
        <section id={p.id} className="snap-section section-x relative overflow-hidden">
            <div className="container-x py-12 sm:py-16">
                <div className="max-w-3xl mx-auto">
                    <GlassCard className="lift group relative overflow-hidden p-0">
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-[23px]">
                            <ProjectCover title={p.title} emoji={p.emoji} cover={p.cover} accentIndex={i} />
                            {p.badge && (
                                <span className="absolute left-4 top-4 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md"
                                    style={{ borderColor: "var(--glass-border-strong)", background: "var(--surface-translucent)", color: "var(--color-1)" }}>
                                    {p.badge}
                                </span>
                            )}
                            <div className="absolute right-4 top-4">
                                <span className="grid h-9 w-9 place-items-center rounded-full border backdrop-blur-md transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    style={{ borderColor: "var(--glass-border-strong)", background: "var(--surface-translucent)", color: "var(--color-1)" }}>
                                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                                </span>
                            </div>
                        </div>
                        <div className="relative p-6 sm:p-8">
                            <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-1)]">{p.title}</h3>
                            <p className="mt-2 text-base text-[var(--text-muted)]">{p.blurb}</p>
                            <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">{p.description}</p>
                            <ul className="mt-5 space-y-2 text-sm">
                                {p.highlights.map((h) => (
                                    <li key={h} className="flex items-start gap-2 text-[var(--text-muted)]">
                                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-3)]" aria-hidden />
                                        <span>{h}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {p.stack.map((t) => (
                                    <span key={t} className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium"
                                        style={{ borderColor: "var(--glass-border)", background: "var(--soft-fill)", color: "var(--color-2)" }}>
                                        <SkillIcon name={t} className="h-3.5 w-3.5" />
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <Link href={p.href} target="_blank" rel="noreferrer" aria-label={`${p.title} on GitHub`}
                                className="mt-5 inline-flex items-center gap-2 text-xs transition-colors hover:opacity-80 text-[var(--color-2)]">
                                <Github className="h-3.5 w-3.5" aria-hidden />
                                github.com/{p.href.split("/").slice(-2).join("/")}
                            </Link>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}

export function Projects() {
    return (
        <>
            <section id="work-intro" className="snap-section section-x relative overflow-hidden">
                <div className="container-x py-12 sm:py-16">
                    <SectionHeading
                        eyebrow="Work"
                        title="Things I've actually shipped."
                        description="Every card links to a real GitHub repo. Open one to read the code and the README."
                    />
                    <p className="reveal mt-6 text-sm max-w-xl text-[var(--text-muted)]" data-delay="2">
                        Three projects · solo and team · MERN, Flutter, Laravel
                    </p>
                </div>
            </section>
            {projects.map((p, i) => <ProjectSlide key={p.id} p={p} i={i} />)}
        </>
    );
}
