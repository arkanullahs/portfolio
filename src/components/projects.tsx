"use client";

import Link from "next/link";
import { ArrowUpRight, Check, Github } from "lucide-react";
import { gridProjects } from "@/config/projects";
import { GlassCard } from "@/components/liquid-glass/glass-card";
import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";
import { SkillIcon } from "@/components/brand-icons";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

export function Projects() {
    const revealRef = useScrollReveal();

    return (
        <section id="work" className="snap-major section-x relative py-16 sm:py-24">
            <div ref={revealRef} className="container-x">
                <SectionHeading
                    title="Other projects"
                    description="Newest first. Private repos have no link."
                />

                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {gridProjects.map((p, i) => (
                        <div
                            key={p.id}
                            className="scroll-reveal"
                            style={{ animationDelay: `${i * 120}ms` }}
                        >
                            <CardLink href={p.href ?? p.live} label={`${p.title} on GitHub`}>
                                <GlassCard className="lift group relative overflow-hidden p-0">
                                    {p.image && (
                                        <div
                                            className="overflow-hidden rounded-t-[23px] border-b"
                                            style={{ borderColor: "var(--glass-border)" }}
                                        >
                                            <div className="aspect-video">
                                                <Image
                                                    src={p.image.src}
                                                    alt={p.image.alt}
                                                    width={p.image.width}
                                                    height={p.image.height}
                                                    sizes="(min-width: 768px) 560px, 100vw"
                                                    className="block h-full w-full object-cover object-left-top"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div className="relative p-6 sm:p-7">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <div
                                                    className="mb-1 text-xs"
                                                    style={{ color: "var(--text-muted)" }}
                                                >
                                                    <span className="tabular-nums" style={{ color: "var(--color-2)" }}>{p.year}</span>
                                                    {p.badge && <> · {p.badge}</>}
                                                </div>
                                        <h3
                                            className="text-xl font-semibold tracking-tight"
                                            style={{ color: "var(--color-1)" }}
                                        >
                                            {p.title}
                                        </h3>
                                            </div>
                                            {(p.href || p.live) && <ArrowUpRight
                                                className="mt-1 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                style={{ color: "var(--text-muted)" }}
                                                aria-hidden
                                            />}
                                        </div>
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
                                                        style={{ color: "var(--accent-text)" }}
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

                                        {p.href && (
                                            <div
                                                className="mt-5 flex items-center gap-2 text-xs"
                                                style={{ color: "var(--text-muted)" }}
                                            >
                                                <Github className="h-3.5 w-3.5" aria-hidden />
                                                github.com/{p.href.split("/").slice(-2).join("/")}
                                            </div>
                                        )}
                                    </div>
                                </GlassCard>
                            </CardLink>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CardLink({ href, label, children }: { href?: string; label: string; children: React.ReactNode }) {
    if (!href) return <div>{children}</div>;
    return (
        <Link href={href} target="_blank" rel="noreferrer" aria-label={label} className="block">
            {children}
        </Link>
    );
}
