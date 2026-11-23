"use client";

import { site } from "@/config/site";
import { SectionHeading } from "@/components/section-heading";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

export function Strengths() {
    const revealRef = useScrollReveal();

    return (
        <section className="snap-major section-x relative py-16 sm:py-24">
            <div ref={revealRef} className="container-x">
                <SectionHeading title="How I work" />

                <dl className="mt-10 grid grid-cols-1 gap-x-12 sm:grid-cols-2">
                    {site.strengths.map((s, i) => (
                        <div
                            key={s.title}
                            className="scroll-reveal border-t py-6"
                            style={{ borderColor: "var(--glass-border)", animationDelay: `${i * 80}ms` }}
                        >
                            <dt
                                className="text-base font-semibold tracking-tight"
                                style={{ color: "var(--color-1)" }}
                            >
                                {s.title}
                            </dt>
                            <dd
                                className="mt-2 max-w-prose text-sm leading-relaxed"
                                style={{ color: "var(--text-muted)" }}
                            >
                                {s.body}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
