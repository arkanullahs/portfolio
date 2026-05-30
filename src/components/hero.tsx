"use client";

import Image from "next/image";
import Link from "next/link";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    type MotionValue,
} from "motion/react";
import {
    ArrowUpRight,
    Github,
    Linkedin,
    Mail,
    MapPin,
} from "lucide-react";
import { site } from "@/config/site";
import { GlassButton } from "@/components/liquid-glass/glass-button";
import {
    GlassCard,
    GlassCardContent,
} from "@/components/liquid-glass/glass-card";
import { useContactModal } from "@/components/contact-modal";

export function Hero() {
    const { open: openContact } = useContactModal();
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const rotX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
        stiffness: 200,
        damping: 30,
    });
    const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
        stiffness: 200,
        damping: 30,
    });

    return (
        <section
            id="top"
            className="section-x relative pt-24 pb-12 sm:pt-32 sm:pb-24"
        >
            <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-7">
                    <h1
                        className="reveal mt-4 text-balance text-[clamp(2.25rem,7vw,4.5rem)] font-semibold leading-[1.05] tracking-tight"
                        data-delay="1"
                        style={{ color: "var(--color-1)" }}
                    >
                        Hi, I&apos;m{" "}
                        <span className="text-gradient">{site.firstName}</span>.
                        <br />
                        Learning, building, and improving
                        <br />
                        <span style={{ color: "var(--color-2)" }}>
                            every day.
                        </span>
                    </h1>

                    <p
                        className="reveal mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
                        data-delay="3"
                        style={{ color: "var(--text-muted)" }}
                    >
                        {site.tagline}
                    </p>

                    <div
                        className="reveal mt-9 flex flex-wrap items-center gap-3"
                        data-delay="4"
                    >
                        <GlassButton onClick={openContact} className="group">
                            <Mail className="h-4 w-4" aria-hidden />
                            Contact me
                            <ArrowUpRight
                                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                aria-hidden
                            />
                        </GlassButton>
                        <GlassButton variant="ghost" asChild>
                            <Link href="#work">View my work</Link>
                        </GlassButton>
                    </div>

                    <div
                        className="reveal mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm"
                        data-delay="5"
                        style={{ color: "var(--text-muted)" }}
                    >
                        <Link
                            href={site.social.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex cursor-pointer items-center gap-1.5 transition-colors duration-200 hover:text-[var(--color-1)]"
                        >
                            <Github className="h-4 w-4" aria-hidden /> GitHub
                        </Link>
                        <span className="hidden h-3 w-px sm:inline-block" style={{ background: "var(--glass-border)" }} />
                        <Link
                            href={site.social.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex cursor-pointer items-center gap-1.5 transition-colors duration-200 hover:text-[var(--color-1)]"
                        >
                            <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
                        </Link>
                        <span className="hidden h-3 w-px sm:inline-block" style={{ background: "var(--glass-border)" }} />
                        <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" aria-hidden /> {site.location}
                        </span>
                    </div>
                </div>

                <div
                    className="lg:col-span-5"
                    onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        mx.set((e.clientX - rect.left) / rect.width - 0.5);
                        my.set((e.clientY - rect.top) / rect.height - 0.5);
                    }}
                    onMouseLeave={() => {
                        mx.set(0);
                        my.set(0);
                    }}
                    style={{ perspective: 1000 }}
                >
                    <motion.div
                        className="reveal"
                        data-delay="2"
                        style={{
                            rotateX: rotX as MotionValue,
                            rotateY: rotY as MotionValue,
                            transformStyle: "preserve-3d",
                        }}
                    >
                        <GlassCard variant="strong" className="overflow-hidden p-6 sm:p-7">
                            <div
                                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl"
                                style={{ background: "var(--accent-tint-mid)" }}
                            />

                            <div className="relative flex items-stretch gap-5">
                                <div
                                    className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border sm:h-36 sm:w-36"
                                    style={{ borderColor: "var(--glass-border-strong)" }}
                                >
                                    <Image
                                        src={site.avatar}
                                        alt={`${site.name} avatar`}
                                        fill
                                        sizes="144px"
                                        className="object-cover"
                                        priority
                                        unoptimized
                                    />
                                </div>
                                <div className="flex min-w-0 flex-col justify-center py-1">
                                    <div
                                        className="text-xl font-semibold leading-tight sm:text-2xl"
                                        style={{ color: "var(--color-1)" }}
                                    >
                                        {site.name}
                                    </div>
                                    <div
                                        className="mt-1.5 text-sm leading-snug"
                                        style={{ color: "var(--text-muted)" }}
                                    >
                                        {site.role.split(" · ").map((part, i) => (
                                            <span key={i} className="block">
                                                {part}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="hairline mt-6" />

                            <GlassCardContent className="!p-0 mt-6">
                                <dl className="grid grid-cols-2 gap-x-6 gap-y-5">
                                    {site.stats.map((s) => (
                                        <div key={s.label}>
                                            <dt
                                                className="text-[11px] font-medium uppercase tracking-[0.12em]"
                                                style={{ color: "var(--text-muted)" }}
                                            >
                                                {s.label}
                                            </dt>
                                            <dd
                                                className="mt-1 text-2xl font-semibold tracking-tight"
                                                style={{ color: "var(--color-1)" }}
                                            >
                                                {s.value}
                                                {s.suffix}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </GlassCardContent>

                            <div className="hairline mt-6" />

                            <div
                                className="relative mt-6 flex items-center gap-3 rounded-2xl border p-3"
                                style={{
                                    borderColor: "var(--glass-border)",
                                    background: "var(--soft-fill)",
                                }}
                            >
                                <div
                                    className="grid h-10 w-10 place-items-center rounded-xl"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, var(--color-3) 0%, var(--color-4) 100%)",
                                        color: "var(--color-7)",
                                    }}
                                >
                                    <span className="text-sm font-bold">⌘</span>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div
                                        className="text-xs uppercase tracking-wider"
                                        style={{ color: "var(--text-muted)" }}
                                    >
                                        Currently building
                                    </div>
                                    <div
                                        className="truncate text-sm font-medium"
                                        style={{ color: "var(--color-1)" }}
                                    >
                                        Course platforms · MERN + Flutter
                                    </div>
                                </div>
                                <div className="flex items-end gap-1" aria-hidden>
                                    {[2, 4, 3, 5, 3, 4, 2].map((h, i) => (
                                        <span
                                            key={i}
                                            className="block w-[3px] rounded-full"
                                            style={{
                                                height: `${h * 4}px`,
                                                background: "var(--accent-dot)",
                                                animation: `bar 1.4s ease-in-out ${i * 0.08}s infinite`,
                                            }}
                                        />
                                    ))}
                                </div>
                                <style>{`
                  @keyframes bar {
                    0%, 100% { transform: scaleY(0.5); opacity: 0.5; }
                    50% { transform: scaleY(1); opacity: 1; }
                  }
                `}</style>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
