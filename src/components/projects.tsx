"use client";

import Link from "next/link";
import { ArrowUpRight, Check, Github } from "lucide-react";
import { projects } from "@/config/projects";
import { GlassCard } from "@/components/liquid-glass/glass-card";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCover } from "@/components/project-cover";
import { SkillIcon } from "@/components/brand-icons";

export function Projects() {
    return (
        <section id="work" className="section-x relative py-16 sm:py-24">
            <div className="container-x">
                <SectionHeading
                    eyebrow="Work"
                    title="Things I've actually shipped."
                    description="Every card links to a real GitHub repo. Open one to read the code and the README."
                />

                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {projects.map((p, i) => (
                        <div
                            key={p.id}
                            className="reveal"
                            data-delay={String(Math.min(i + 1, 8))}
                        >
                            <Link
                                href={p.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${p.title} on GitHub`}
                                className="block"
                            >
                                <GlassCard className="lift group relative overflow-hidden p-0">
                                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-[23px]">
                                        <ProjectCover
                                            title={p.title}
                                            emoji={p.emoji}
                                            cover={p.cover}
                                            accentIndex={i}
                                        />
                                        {p.badge && (
                                            <span
                                                className="absolute left-4 top-4 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md"
                                                style={{
                                                    borderColor: "var(--glass-border-strong)",
                                                    background: "var(--surface-translucent)",
                                                    color: "var(--color-1)",
                                                }}
                                            >
                                                {p.badge}
                                            </span>
                                        )}
                                        <div className="absolute right-4 top-4">
                                            <span
                                                className="grid h-9 w-9 place-items-center rounded-full border backdrop-blur-md transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                style={{
                                                    borderColor: "var(--glass-border-strong)",
                                                    background: "var(--surface-translucent)",
                                                    color: "var(--color-1)",
                                                }}
                                            >
                                                <ArrowUpRight className="h-4 w-4" aria-hidden />
                                            </span>
                                        </div>
                                    </div>

                                    <div className="relative p-6 sm:p-7">
                                        <h3
                                            className="text-xl font-semibold tracking-tight"
                                            style={{ color: "var(--color-1)" }}
                                        >
                                            {p.title}
                                        </h3>
                                        <p
                                            className="mt-1 text-sm"
                                            style={{ color: "var(--text-muted)" }}
                                        >
                                            {p.blurb}
                                        </p>

                                        <p
                                            className="mt-4 text-sm leading-relaxed"
                                            style={{ color: "var(--text-muted)" }}
                                        >
                                            {p.description}
                                        </p>

                                        <ul className="mt-4 space-y-2 text-sm">
                                            {p.highlights.map((h) => (
                                                <li
                                                    key={h}
                                                    className="flex items-start gap-2"
                                                    style={{ color: "var(--text-muted)" }}
                                                >
                                                    <Check
                                                        className="mt-0.5 h-4 w-4 shrink-0"
                                                        style={{ color: "var(--color-3)" }}
                                                        aria-hidden
                                                    />
                                                    <span>{h}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {p.stack.map((t) => (
                                                <span
                                                    key={t}
                                                    className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium"
                                                    style={{
                                                        borderColor: "var(--glass-border)",
                                                        background: "var(--soft-fill)",
                                                        color: "var(--color-2)",
                                                    }}
                                                >
                                                    <SkillIcon name={t} className="h-3 w-3" />
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div
                                            className="mt-5 flex items-center gap-2 text-xs"
                                            style={{ color: "var(--text-muted)" }}
                                        >
                                            <Github className="h-3.5 w-3.5" aria-hidden />
                                            github.com/{p.href.split("/").slice(-2).join("/")}
                                        </div>
                                    </div>
                                </GlassCard>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
