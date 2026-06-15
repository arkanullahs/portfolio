"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { site } from "@/config/site";
import { GlassButton } from "@/components/liquid-glass/glass-button";
import { GlassCard, GlassCardContent } from "@/components/liquid-glass/glass-card";
import { useContactModal } from "@/components/contact-modal";
import { ServicesMarquee } from "@/components/services-marquee";

function HeroName() {
    return (
        <section id="top-name" className="snap-section section-x relative overflow-hidden">
            <div className="container-x py-12 sm:py-16">
                <div className="max-w-3xl">
                    <h1 className="reveal text-balance text-[clamp(2.5rem,7vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-[var(--color-1)]" data-delay="1">
                        Hi, I&apos;m <span className="text-gradient">{site.firstName}</span>.
                        <br />
                        Learning, building, and improving
                        <br />
                        <span style={{ color: "var(--color-2)" }}>every day.</span>
                    </h1>
                    <p className="reveal mt-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)]" data-delay="3">
                        {site.tagline}
                    </p>
                </div>
                <div className="mt-8 sm:mt-14">
                    <ServicesMarquee />
                </div>
            </div>
        </section>
    );
}

function HeroCard() {
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const rotX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 30 });
    const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 30 });

    return (
        <section id="top-card" className="snap-section section-x relative overflow-hidden">
            <div className="container-x py-12 sm:py-16">
                <div className="max-w-md mx-auto"
                    onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        mx.set((e.clientX - rect.left) / rect.width - 0.5);
                        my.set((e.clientY - rect.top) / rect.height - 0.5);
                    }}
                    onMouseLeave={() => { mx.set(0); my.set(0); }}
                    style={{ perspective: 1000 }}>
                    <motion.div style={{ rotateX: rotX as MotionValue, rotateY: rotY as MotionValue, transformStyle: "preserve-3d" }}>
                        <GlassCard variant="strong" className="overflow-hidden p-6 sm:p-8">
                            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full blur-3xl bg-[var(--accent-tint-mid)]" />
                            <div className="relative flex items-stretch gap-5">
                                <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-2xl border border-[var(--glass-border-strong)]">
                                    <Image src={site.avatar} alt={`${site.name} avatar`} fill sizes="144px" className="object-cover" priority unoptimized />
                                </div>
                                <div className="flex min-w-0 flex-col justify-center py-1">
                                    <div className="text-xl font-semibold leading-tight text-[var(--color-1)]">{site.name}</div>
                                    <div className="mt-1.5 text-sm leading-snug text-[var(--text-muted)]">
                                        {site.role.split(" · ").map((part, i) => <span key={i} className="block">{part}</span>)}
                                    </div>
                                </div>
                            </div>
                            <div className="hairline mt-6" />
                            <GlassCardContent className="!p-0 mt-6">
                                <dl className="grid grid-cols-2 gap-x-6 gap-y-5">
                                    {site.stats.map((s) => (
                                        <div key={s.label}>
                                            <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">{s.label}</dt>
                                            <dd className="mt-1 text-2xl font-semibold tracking-tight text-[var(--color-1)]">{s.value}{s.suffix}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </GlassCardContent>
                            <div className="hairline mt-6" />
                            <div className="relative mt-6 flex items-center gap-3 rounded-2xl border p-3"
                                style={{ borderColor: "var(--glass-border)", background: "var(--soft-fill)" }}>
                                <div className="grid h-10 w-10 place-items-center rounded-xl"
                                    style={{ background: "linear-gradient(135deg, var(--color-3) 0%, var(--color-4) 100%)", color: "var(--color-7)" }}>
                                    <span className="text-sm font-bold">⌘</span>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="text-xs uppercase tracking-wider text-[var(--text-muted)]">Currently building</div>
                                    <div className="truncate text-sm font-medium text-[var(--color-1)]">Course platforms · MERN + Flutter</div>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function HeroCTA() {
    const { open: openContact } = useContactModal();

    return (
        <section id="top-cta" className="snap-section section-x relative overflow-hidden">
            <div className="container-x py-12 sm:py-16">
                <div className="max-w-lg mx-auto text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm mb-8"
                        style={{ borderColor: "var(--glass-border)", background: "var(--soft-fill)", color: "var(--text-muted)" }}>
                        <span className="h-2 w-2 rounded-full bg-[var(--color-3)]" />
                        {site.status}
                    </div>
                    <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-1)]">Let&apos;s build something.</h2>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        <GlassButton onClick={openContact} className="group">
                            <Mail className="h-4 w-4" aria-hidden />
                            Contact me
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                        </GlassButton>
                        <GlassButton variant="ghost" asChild>
                            <Link href="#work-intro">View my work</Link>
                        </GlassButton>
                    </div>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[var(--text-muted)]">
                        <Link href={site.social.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-[var(--color-1)] transition-colors">
                            <Github className="h-4 w-4" /> GitHub
                        </Link>
                        <span className="h-3 w-px bg-[var(--glass-border)]" />
                        <Link href={site.social.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-[var(--color-1)] transition-colors">
                            <Linkedin className="h-4 w-4" /> LinkedIn
                        </Link>
                        <span className="h-3 w-px bg-[var(--glass-border)]" />
                        <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {site.location}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Hero() {
    return (
        <>
            <HeroName />
            <HeroCard />
            <HeroCTA />
        </>
    );
}
