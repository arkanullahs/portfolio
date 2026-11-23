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
                    title="BhaloPhone"
                    description={p.blurb}
                />

                <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
                    {/* ── Live product card + metrics ─────────────────── */}
                    <div className="scroll-reveal lg:col-span-6 lg:order-2">
                        <LiveSiteShowcase href={p.live ?? "https://bhalophone.com"} />

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
 * The live site as it looks on a laptop and a phone. Screenshots of
 * bhalophone.com, linked straight to it.
 */
function LiveSiteShowcase({ href }: { href: string }) {
    return (
        <figure>
            <Link
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label="Open bhalophone.com"
                className="group relative block pb-10 sm:pb-14"
            >
                {/* Laptop: browser window */}
                <div
                    className="overflow-hidden rounded-xl border transition-transform duration-500 ease-out group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
                    style={{
                        borderColor: "var(--glass-border)",
                        background: "var(--background)",
                        boxShadow: "0 24px 48px -16px rgba(0,0,0,0.45)",
                    }}
                >
                    <div
                        className="flex items-center gap-1.5 border-b px-3 py-2"
                        style={{ borderColor: "var(--glass-border)", background: "var(--soft-fill)" }}
                        aria-hidden
                    >
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                        <span
                            className="mx-auto rounded-md px-3 py-0.5 text-[11px]"
                            style={{ background: "var(--background)", color: "var(--text-muted)" }}
                        >
                            bhalophone.com
                        </span>
                        <span className="w-[42px]" />
                    </div>
                    <Image
                        src="/shots/bhalophone-desktop.png"
                        alt="bhalophone.com home page on a laptop: best phone by budget, prices checked daily"
                        width={1440}
                        height={900}
                        sizes="(min-width: 1024px) 560px, 100vw"
                        className="block h-auto w-full"
                    />
                </div>

                {/* Phone */}
                <div
                    className="absolute bottom-0 right-3 w-[26%] min-w-[96px] max-w-[150px] rounded-[20px] bg-[#111] px-[4px] pb-[12px] pt-[12px] transition-transform duration-500 ease-out group-hover:-translate-y-2 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 sm:right-[-10px]"
                    style={{ boxShadow: "0 24px 40px -12px rgba(0,0,0,0.55)" }}
                >
                    <span className="absolute left-1/2 top-[5px] h-[3px] w-[22%] -translate-x-1/2 rounded-full bg-[#2a2a2a]" aria-hidden />
                    <div className="overflow-hidden rounded-[3px]">
                    <Image
                        src="/shots/bhalophone-mobile.png"
                        alt="bhalophone.com on a phone"
                        width={390}
                        height={844}
                        sizes="150px"
                        className="block h-auto w-full"
                    />
                    </div>
                </div>
            </Link>
            <figcaption className="mt-3 text-xs" style={{ color: "var(--text-muted)" }}>
                The live site on desktop and mobile, captured November 2026.
            </figcaption>
        </figure>
    );
}
