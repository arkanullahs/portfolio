"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/config/site";
import { GlassCard } from "@/components/liquid-glass/glass-card";
import { GlassButton } from "@/components/liquid-glass/glass-button";
import { useContactModal } from "@/components/contact-modal";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

export function Contact() {
    const { open } = useContactModal();
    const revealRef = useScrollReveal();

    return (
        <section id="contact" className="snap-major section-x relative pb-24 pt-12">
            <div ref={revealRef} className="container-x">
                <div className="mx-auto max-w-3xl">
                    <GlassCard
                        variant="strong"
                        className="overflow-hidden p-8 sm:p-14"
                        style={{
                            background:
                                "linear-gradient(135deg, color-mix(in oklch, var(--color-1) 7%, transparent) 0%, color-mix(in oklch, var(--color-1) 3%, transparent) 100%)",
                        }}
                    >

                        <div className="relative mx-auto max-w-2xl text-center">
                            <h2 className="text-balance text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight text-[var(--color-1)]">
                                Get in touch
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[var(--text-muted)]">
                                I&apos;m looking for a full-time software engineering role.
                                Email is fastest:{" "}
                                <a className="underline underline-offset-4" href="mailto:arkanullahs@gmail.com">
                                    arkanullahs@gmail.com
                                </a>
                            </p>
                            <div className="mt-8 flex flex-col items-center gap-3">
                                <GlassButton size="lg" className="group w-full max-w-xs !justify-center" onClick={open}>
                                    <Mail className="h-4 w-4" aria-hidden />
                                    Contact me
                                    <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                                </GlassButton>
                                <p className="text-xs text-[var(--text-muted)]">Gmail, Facebook, LinkedIn or GitHub</p>
                            </div>
                        </div>
                    </GlassCard>

                    <footer className="mt-10 flex flex-col items-center justify-between gap-3 text-xs sm:flex-row text-[var(--text-muted)]">
                        <div>© {new Date().getFullYear()} {site.name}. Crafted in Dhaka.</div>
                        <div className="flex flex-wrap items-center gap-2">
                            Built with
                            {["Next.js 16", "Tailwind v4", "Motion"].map((t) => (
                                <span key={t} className="rounded-full border px-2 py-0.5"
                                    style={{ borderColor: "var(--glass-border)", background: "var(--soft-fill)" }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </footer>
                </div>
            </div>
        </section>
    );
}
