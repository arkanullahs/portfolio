"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/config/site";
import { GlassCard } from "@/components/liquid-glass/glass-card";
import { GlassButton } from "@/components/liquid-glass/glass-button";

export function Contact() {
    return (
        <section id="contact" className="section-x relative pb-24 pt-12">
            <div className="container-x">
                <div className="reveal" data-delay="1">
                    <GlassCard variant="strong" className="overflow-hidden p-8 sm:p-14">
                        <div
                            className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full blur-3xl"
                            style={{ background: "var(--accent-tint-mid)" }}
                        />
                        <div
                            className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full blur-3xl"
                            style={{ background: "var(--orb-2)" }}
                        />

                        <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                            <div className="lg:col-span-7">
                                <div className="glass-pill">
                                    <span
                                        className="h-1.5 w-1.5 rounded-full"
                                        style={{ background: "var(--accent-dot)" }}
                                    />
                                    Available immediately
                                </div>
                                <h2
                                    className="mt-4 text-balance text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight"
                                    style={{ color: "var(--color-1)" }}
                                >
                                    Got a role that fits?{" "}
                                    <span className="text-gradient">Email me.</span>
                                </h2>
                                <p
                                    className="mt-4 max-w-xl text-base leading-relaxed"
                                    style={{ color: "var(--text-muted)" }}
                                >
                                    I&apos;m looking for my first software job, whether that&apos;s
                                    a full role, an internship, or contract work. Email is the
                                    fastest way to reach me, and I&apos;m always happy to hop on a
                                    call and walk through any of these projects.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 lg:col-span-5">
                                <GlassButton size="lg" className="!justify-between" asChild>
                                    <Link href={`mailto:${site.email}`} className="group">
                                        <span className="flex items-center gap-2">
                                            <Mail className="h-4 w-4" aria-hidden />
                                            <span className="truncate">{site.email}</span>
                                        </span>
                                        <ArrowUpRight
                                            className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                            aria-hidden
                                        />
                                    </Link>
                                </GlassButton>
                                <GlassButton variant="ghost" size="lg" className="!justify-between" asChild>
                                    <Link href={site.social.github} target="_blank" rel="noreferrer">
                                        <span className="flex items-center gap-2">
                                            <Github className="h-4 w-4" aria-hidden /> github.com/arkanullahs
                                        </span>
                                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                                    </Link>
                                </GlassButton>
                                <GlassButton variant="ghost" size="lg" className="!justify-between" asChild>
                                    <Link href={site.social.linkedin} target="_blank" rel="noreferrer">
                                        <span className="flex items-center gap-2">
                                            <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
                                        </span>
                                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                                    </Link>
                                </GlassButton>
                            </div>
                        </div>
                    </GlassCard>
                </div>

                <footer
                    className="mt-10 flex flex-col items-center justify-between gap-3 text-xs sm:flex-row"
                    style={{ color: "var(--text-muted)" }}
                >
                    <div>
                        © {new Date().getFullYear()} {site.name}. Crafted in Dhaka.
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        Built with
                        {["Next.js 16", "Tailwind v4", "Motion"].map((t) => (
                            <span
                                key={t}
                                className="rounded-full border px-2 py-0.5"
                                style={{
                                    borderColor: "var(--glass-border)",
                                    background: "var(--soft-fill)",
                                }}
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </footer>
            </div>
        </section>
    );
}
