"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { site } from "@/config/site";

export function AvailabilityRibbon() {
    return (
        <div className="section-x relative pt-20 pb-2 sm:pt-28">
            <div className="container-x">
                <Link
                    href={`mailto:${site.email}`}
                    className="reveal group inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium transition-all duration-300 sm:px-4"
                    data-delay="1"
                    style={{
                        borderColor: "var(--accent-tint-strong)",
                        background:
                            "linear-gradient(135deg, var(--accent-tint-soft) 0%, var(--soft-fill) 100%)",
                        color: "var(--color-1)",
                        backdropFilter: "blur(20px) saturate(180%)",
                        WebkitBackdropFilter: "blur(20px) saturate(180%)",
                    }}
                >
                    <Sparkles
                        className="h-3.5 w-3.5 shrink-0"
                        style={{ color: "var(--color-3)" }}
                        aria-hidden
                    />
                    <span style={{ color: "var(--color-2)" }}>{site.seeking}</span>
                    <span
                        className="hidden h-3 w-px sm:inline-block"
                        style={{ background: "var(--glass-border-strong)" }}
                    />
                    <span
                        className="hidden items-center gap-1.5 sm:inline-flex"
                        style={{ color: "var(--text-muted)" }}
                    >
                        <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ background: "var(--success)" }}
                        />
                        {site.status}
                    </span>
                    <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        style={{ color: "var(--color-3)" }}
                        aria-hidden
                    />
                </Link>
            </div>
        </div>
    );
}
