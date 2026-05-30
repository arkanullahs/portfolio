"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/config/site";
import { GlassCard } from "@/components/liquid-glass/glass-card";
import { GlassButton } from "@/components/liquid-glass/glass-button";
import { useContactModal } from "@/components/contact-modal";

export function Contact() {
    const { open } = useContactModal();

    return (
        <section id="contact" className="section-x relative pb-24 pt-12">
            <div className="container-x">
                <div className="reveal mx-auto max-w-3xl" data-delay="1">
                    <GlassCard
                        variant="strong"
                        className="overflow-hidden p-8 sm:p-14"
                        style={{
                            background:
                                "linear-gradient(135deg, color-mix(in oklch, var(--color-1) 7%, transparent) 0%, color-mix(in oklch, var(--color-1) 3%, transparent) 100%)",
                        }}
                    >
                        <div
                            className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full blur-3xl"
                            style={{ background: "var(--accent-tint-mid)" }}
                        />
                        <div
                            className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full blur-3xl"
                            style={{ background: "var(--orb-2)" }}
                        />

                        <div className="relative mx-auto max-w-2xl text-center">
                            <div className="glass-pill mx-auto w-fit">
                                <span
                                    className="h-1.5 w-1.5 rounded-full"
                                    style={{ background: "var(--accent-dot)" }}
                                />
                                Available now
                            </div>
                            <h2
                                className="mt-5 text-balance text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight"
                                style={{ color: "var(--color-1)" }}
                            >
                                Got a role that fits?{" "}
                                <span className="text-gradient">Reach out.</span>
                            </h2>
                            <p
                                className="mx-auto mt-4 max-w-xl text-base leading-relaxed"
                                style={{ color: "var(--text-muted)" }}
                            >
                                I&apos;m looking for my first software job, whether that&apos;s
                                a full role, an internship, or contract work. Pick whatever
                                channel works for you. I reply fast.
                            </p>

                            <div className="mt-8 flex flex-col items-center gap-3">
                                <GlassButton
                                    size="lg"
                                    className="group w-full max-w-xs !justify-center"
                                    onClick={open}
                                >
                                    <Mail className="h-4 w-4" aria-hidden />
                                    Get in touch
                                    <ArrowUpRight
                                        className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        aria-hidden
                                    />
                                </GlassButton>
                                <p
                                    className="text-xs"
                                    style={{ color: "var(--text-muted)" }}
                                >
                                    Gmail, Facebook, LinkedIn or GitHub — your pick.
                                </p>
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
