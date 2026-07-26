"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { site } from "@/config/site";
import { projects, flagship } from "@/config/projects";
import { GlassButton } from "@/components/liquid-glass/glass-button";
import { GlassCard } from "@/components/liquid-glass/glass-card";
import { useContactModal } from "@/components/contact-modal";
import type { GitHubStats } from "@/lib/github";

export function Hero({ gh }: { gh: GitHubStats | null }) {
    const { open: openContact } = useContactModal();

    // Real numbers when GITHUB_TOKEN is set, the static ones in site.ts otherwise.
    const stats = gh
        ? [
            { value: String(projects.length), label: "Shipped projects" },
            { value: String(gh.repos), label: "Public repos" },
            { value: String(gh.contributions), label: "Contributions, 90d" },
            { value: site.education.schoolShort, label: "B.Sc. CSE" },
        ]
        : site.stats.map((s) => ({
            value: `${s.value}${s.suffix}`,
            label: s.label,
        }));

    return (
        <section
            id="top"
            className="snap-major section-x relative pt-28 pb-14 sm:pt-36 sm:pb-24"
        >
            <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
                <div className="lg:col-span-7">
                    <div className="reveal glass-pill" data-delay="1">
                        <span className="status-dot" aria-hidden />
                        {site.seeking}
                    </div>

                    <h1
                        className="reveal mt-6 text-balance text-[clamp(2.25rem,6.2vw,4rem)] font-semibold leading-[1.04] tracking-[-0.02em]"
                        data-delay="2"
                        style={{ color: "var(--color-1)" }}
                    >
                        Hi, I&apos;m {site.firstName}.
                        <br />I build software{" "}
                        <span className="text-accent">end to end</span>.
                    </h1>

                    <p
                        className="reveal mt-6 max-w-lg text-base leading-relaxed sm:text-lg"
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
                            <Link href="#flagship">See BhaloPhone</Link>
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
                        <Divider />
                        <Link
                            href={site.social.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex cursor-pointer items-center gap-1.5 transition-colors duration-200 hover:text-[var(--color-1)]"
                        >
                            <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
                        </Link>
                        <Divider />
                        <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" aria-hidden /> {site.location}
                        </span>
                    </div>
                </div>

                <div className="reveal lg:col-span-5" data-delay="3">
                    <GlassCard variant="strong" className="overflow-hidden p-6 sm:p-7">
                        <div className="flex items-center gap-4">
                            <div
                                className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border"
                                style={{ borderColor: "var(--glass-border-strong)" }}
                            >
                                <Image
                                    src={site.avatar}
                                    alt={`${site.name} avatar`}
                                    fill
                                    sizes="64px"
                                    className="object-cover"
                                    priority
                                    unoptimized
                                />
                            </div>
                            <div className="min-w-0">
                                <div
                                    className="text-lg font-semibold leading-tight tracking-tight"
                                    style={{ color: "var(--color-1)" }}
                                >
                                    {site.name}
                                </div>
                                <div
                                    className="mt-1 text-sm leading-snug"
                                    style={{ color: "var(--text-muted)" }}
                                >
                                    {site.role}
                                </div>
                            </div>
                        </div>

                        <div className="hairline mt-6" />

                        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
                            {stats.map((s) => (
                                <div key={s.label}>
                                    <dd
                                        className="text-2xl font-semibold tracking-tight tabular-nums"
                                        style={{ color: "var(--color-1)" }}
                                    >
                                        {s.value}
                                    </dd>
                                    <dt
                                        className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.12em]"
                                        style={{ color: "var(--text-muted)" }}
                                    >
                                        {s.label}
                                    </dt>
                                </div>
                            ))}
                        </dl>

                        <div className="hairline mt-6" />

                        <CurrentlyBuilding />
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}

function Divider() {
    return (
        <span
            className="hidden h-3 w-px sm:inline-block"
            style={{ background: "var(--glass-border)" }}
            aria-hidden
        />
    );
}

/** The flagship, pulled straight from projects config so it can't drift. */
function CurrentlyBuilding() {
    const p = flagship;
    if (!p) return null;

    return (
        <Link
            href={p.live ?? "#flagship"}
            target={p.live ? "_blank" : undefined}
            rel={p.live ? "noreferrer" : undefined}
            className="group mt-6 flex items-center gap-3 rounded-2xl border p-3 transition-colors duration-300"
            style={{
                borderColor: "var(--glass-border)",
                background: "var(--soft-fill)",
            }}
        >
            <Image
                src="/bhalophone-icon.png"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 rounded-xl bg-white"
            />
            <div className="min-w-0 flex-1">
                <div
                    className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em]"
                    style={{ color: "var(--text-muted)" }}
                >
                    <span className="status-dot" aria-hidden />
                    Currently building
                </div>
                <div
                    className="truncate text-sm font-medium"
                    style={{ color: "var(--color-1)" }}
                >
                    {p.title} — {p.live?.replace("https://", "")}
                </div>
            </div>
            <ArrowUpRight
                className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: "var(--accent-text)" }}
                aria-hidden
            />
        </Link>
    );
}
