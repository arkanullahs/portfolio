"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { flagship } from "@/config/projects";
import { GlassCard } from "@/components/liquid-glass/glass-card";
import { SectionHeading } from "@/components/section-heading";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

/**
 * BhaloPhone's own brand blue, hard-coded on purpose. The card is a window
 * into another product, so it keeps that product's colours in both site
 * themes instead of being repainted by the palette.
 *
 * The bright radial sits top-right, behind the icon column — the copy on the
 * left stays over the deep blue, where white text clears WCAG AA (5.5:1).
 * Moving that highlight left would quietly break the contrast.
 */
const BRAND_BG = [
    "radial-gradient(100% 130% at 84% 15%, #3771f3 0%, rgba(55,113,243,0) 60%)",
    "radial-gradient(95% 130% at 2% 112%, #0b1832 0%, rgba(11,24,50,0) 58%)",
    "radial-gradient(70% 90% at 100% 110%, #101f42 0%, rgba(16,31,66,0) 55%)",
    "linear-gradient(120deg, #1e4bcd 0%, #1a3fae 100%)",
].join(", ");

export function Flagship() {
    const revealRef = useScrollReveal();
    const p = flagship;
    if (!p) return null;

    return (
        <section
            id="flagship"
            className="snap-major section-x relative py-16 sm:py-24"
        >
            <div ref={revealRef} className="container-x">
                <SectionHeading
                    eyebrow="Flagship"
                    title="BhaloPhone."
                    description={p.blurb}
                />

                <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
                    {/* ── Live product card + metrics ─────────────────── */}
                    <div className="scroll-reveal lg:col-span-6 lg:order-2">
                        <BhaloPhoneCard href={p.live ?? "https://bhalophone.com"} />

                        {p.metrics && (
                            <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border sm:grid-cols-4"
                                style={{
                                    borderColor: "var(--glass-border)",
                                    background: "var(--glass-border)",
                                }}
                            >
                                {p.metrics.map((m) => (
                                    <div
                                        key={m.label}
                                        className="px-4 py-4"
                                        style={{ background: "var(--background)" }}
                                    >
                                        <dt
                                            className="text-[10px] font-medium uppercase tracking-[0.12em]"
                                            style={{ color: "var(--text-muted)" }}
                                        >
                                            {m.label}
                                        </dt>
                                        <dd
                                            className="mt-1 text-lg font-semibold tracking-tight"
                                            style={{ color: "var(--color-1)" }}
                                        >
                                            {m.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        )}
                    </div>

                    {/* ── The write-up ────────────────────────────────── */}
                    <div className="scroll-reveal lg:col-span-6 lg:order-1" style={{ animationDelay: "120ms" }}>
                        {p.role && (
                            <div
                                className="text-sm font-medium"
                                style={{ color: "var(--accent-text)" }}
                            >
                                {p.role}
                            </div>
                        )}

                        <p
                            className="mt-3 text-base leading-relaxed"
                            style={{ color: "var(--text-muted)" }}
                        >
                            {p.description}
                        </p>

                        <ul className="mt-6 space-y-3 text-sm">
                            {p.highlights.map((h) => (
                                <li
                                    key={h}
                                    className="flex items-start gap-2.5 leading-relaxed"
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

                        <div className="mt-7 flex flex-wrap gap-2">
                            {p.stack.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-full border px-2.5 py-1 text-[11px] font-medium"
                                    style={{
                                        borderColor: "var(--glass-border)",
                                        background: "var(--soft-fill)",
                                        color: "var(--color-2)",
                                    }}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
                            <Link
                                href={p.live ?? "https://bhalophone.com"}
                                target="_blank"
                                rel="noreferrer"
                                className="link-underline inline-flex cursor-pointer items-center gap-1.5 font-medium"
                                style={{ color: "var(--accent-text)" }}
                            >
                                bhalophone.com
                                <ArrowUpRight className="h-4 w-4" aria-hidden />
                            </Link>
                            {p.href && (
                                <Link
                                    href={p.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="link-underline inline-flex cursor-pointer items-center gap-1.5"
                                    style={{ color: "var(--text-muted)" }}
                                >
                                    Source
                                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/**
 * BhaloPhone's own "Find your perfect phone" CTA, rebuilt in this codebase's
 * primitives. Links straight into the live product.
 */
function BhaloPhoneCard({ href }: { href: string }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label="Open BhaloPhone — find your perfect phone"
            className="lift group block overflow-hidden rounded-[24px]"
            style={{
                background: BRAND_BG,
                boxShadow: "0 30px 60px -24px rgba(16,31,66,0.55)",
            }}
        >
            <div className="flex items-center gap-5 p-6 sm:gap-7 sm:p-8">
                <div className="min-w-0 flex-1">
                    <h3 className="text-[clamp(1.35rem,3.2vw,1.9rem)] font-bold leading-[1.15] tracking-tight text-white">
                        Find <span className="font-serif font-medium italic">your</span>{" "}
                        perfect phone
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
                        Answer a few quick questions and our AI picks the best phone for
                        how you actually use it, ranked from live Bangladesh prices.
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#132247] shadow-sm transition-transform duration-300 group-hover:translate-x-0.5">
                        Get my pick
                        <ArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                </div>

                <div
                    className="hidden w-px self-stretch bg-white/15 sm:block"
                    aria-hidden
                />

                <div className="hidden w-[32%] shrink-0 flex-col items-center text-center sm:flex">
                    <Image
                        src="/bhalophone-icon.png"
                        alt=""
                        width={64}
                        height={64}
                        className="rounded-2xl bg-white shadow-lg"
                    />
                    <div className="mt-4 text-lg font-semibold tracking-tight text-white">
                        bhalophone
                    </div>
                    {/* Solid white, not white/70 — this column sits over the
                        bright part of the gradient, where any alpha on 12px
                        text drops under 4.5:1. Weight carries the hierarchy
                        instead of opacity. */}
                    <p className="mt-1 text-xs font-light leading-snug text-white">
                        AI-powered phone recommendations for Bangladesh
                    </p>
                </div>
            </div>
        </Link>
    );
}
