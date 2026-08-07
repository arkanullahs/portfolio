"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { flagship } from "@/config/projects";

import { SectionHeading } from "@/components/section-heading";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

/**
 * BhaloPhone's dark theme colors
 */
const BRAND_BG = "#151817";
const BRAND_MINT = "#a6c7c0";

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
            className="lift group block overflow-hidden rounded-none border sm:rounded-md"
            style={{
                background: BRAND_BG,
                borderColor: "rgba(255,255,255,0.05)",
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)",
            }}
        >
            <div className="flex items-center gap-5 p-6 sm:gap-7 sm:p-10">
                <div className="min-w-0 flex-1">
                    <h3 className="text-[clamp(1.5rem,3.5vw,2.4rem)] font-bold leading-[1.1] tracking-tight text-white">
                        Find <span className="font-serif font-medium italic" style={{ color: BRAND_MINT }}>your</span> perfect
                        <br />
                        phone
                    </h3>
                    <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#a1a1aa]">
                        Answer a few quick questions and our AI picks the best phone for
                        how you actually use it, ranked from live Bangladesh prices.
                    </p>
                    <span 
                        className="mt-8 inline-flex items-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold text-[#151817] shadow-sm transition-transform duration-300 group-hover:translate-x-0.5"
                        style={{ backgroundColor: BRAND_MINT }}
                    >
                        Get my pick &rarr;
                    </span>
                </div>

                <div
                    className="hidden w-px self-stretch bg-white/10 sm:block"
                    aria-hidden
                />

                <div className="hidden w-[32%] shrink-0 flex-col items-center text-center sm:flex">
                    <Image
                        src="/bhalophone-icon.png"
                        alt=""
                        width={76}
                        height={76}
                        className="drop-shadow-lg"
                    />
                    <div className="mt-5 text-[22px] font-bold tracking-tight text-white">
                        Bhalo Phone
                    </div>
                    <p className="mt-2 text-[13px] font-light leading-relaxed text-[#6b7280]">
                        AI-powered phone<br />recommendations for<br />Bangladesh
                    </p>
                </div>
            </div>
        </Link>
    );
}
