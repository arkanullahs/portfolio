"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { site } from "@/config/site";
import { GlassButton } from "@/components/liquid-glass/glass-button";
import { useContactModal } from "@/components/contact-modal";

export function Hero() {
    const { open: openContact } = useContactModal();

    return (
        <section
            id="top"
            className="snap-major section-x relative pt-28 pb-12 sm:pt-36 sm:pb-20"
        >
            <div className="container-x">
                <div className="max-w-3xl">
                    <div className="reveal flex items-center gap-4" data-delay="1">
                        <div
                            className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border"
                            style={{ borderColor: "var(--glass-border-strong)" }}
                        >
                            <Image
                                src={site.avatar}
                                alt={site.name}
                                fill
                                sizes="56px"
                                className="object-cover"
                                priority
                                unoptimized
                            />
                        </div>
                        <div className="text-sm leading-snug" style={{ color: "var(--text-muted)" }}>
                            Software engineer
                            <br />
                            CSE, AUST 2026
                        </div>
                    </div>

                    <h1
                        className="reveal mt-7 text-[clamp(2.5rem,7vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em]"
                        data-delay="2"
                        style={{ color: "var(--color-1)" }}
                    >
                        {site.name}
                    </h1>

                    <p
                        className="reveal mt-6 max-w-2xl text-pretty text-lg leading-relaxed sm:text-xl"
                        data-delay="3"
                        style={{ color: "var(--color-2)" }}
                    >
                        {site.tagline}
                    </p>

                    <p
                        className="reveal mt-4 max-w-2xl text-base leading-relaxed"
                        data-delay="3"
                        style={{ color: "var(--text-muted)" }}
                    >
                        {site.seeking}
                    </p>

                    <div className="reveal mt-9 grid grid-cols-2 gap-3 sm:flex sm:items-center" data-delay="4">
                        <GlassButton onClick={openContact} className="!justify-center whitespace-nowrap px-4 sm:px-7">
                            <Mail className="h-4 w-4" aria-hidden />
                            Contact me
                        </GlassButton>
                        <GlassButton variant="ghost" asChild className="!justify-center whitespace-nowrap px-4 sm:px-7">
                            <a href={site.cv} download="Arkanullah-Saad-CV.pdf">
                                <FileText className="h-4 w-4" aria-hidden />
                                Download CV
                            </a>
                        </GlassButton>
                    </div>

                    <div
                        className="reveal mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm"
                        data-delay="5"
                        style={{ color: "var(--text-muted)" }}
                    >
                        <Link
                            href={site.social.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-[var(--color-1)]"
                        >
                            <Github className="h-4 w-4" aria-hidden /> GitHub
                        </Link>
                        <Link
                            href={site.social.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-[var(--color-1)]"
                        >
                            <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
                        </Link>
                        <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" aria-hidden /> {site.location}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
