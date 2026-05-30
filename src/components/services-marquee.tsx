"use client";

import {
    Code2,
    Smartphone,
    Server,
    Layers,
    Cpu,
    Zap,
    GitBranch,
    Sparkles,
    Database,
    Box,
    Rocket,
    ShieldCheck,
    type LucideIcon,
} from "lucide-react";
import { services } from "@/config/services";

const ICONS: Record<string, LucideIcon> = {
    Code2,
    Smartphone,
    Server,
    Layers,
    Cpu,
    Zap,
    GitBranch,
    Sparkles,
    Database,
    Box,
    Rocket,
    ShieldCheck,
};

export function ServicesMarquee() {
    const tripled = [...services, ...services, ...services];

    return (
        <section className="relative overflow-hidden py-8 sm:py-12">
            <div
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32"
                style={{
                    background:
                        "linear-gradient(to right, var(--background), transparent)",
                }}
            />
            <div
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32"
                style={{
                    background:
                        "linear-gradient(to left, var(--background), transparent)",
                }}
            />

            <div className="flex gap-2.5 animate-marquee sm:gap-3">
                {tripled.map((s, i) => {
                    const Icon = ICONS[s.icon] ?? Sparkles;
                    return (
                        <div
                            key={i}
                            className="inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 sm:gap-2.5 sm:px-5 sm:py-2.5"
                            style={{
                                borderColor: "var(--glass-border)",
                                background:
                                    "linear-gradient(135deg, var(--glass-fill-start) 0%, var(--glass-fill-end) 100%)",
                                backdropFilter: "blur(20px) saturate(160%)",
                                WebkitBackdropFilter: "blur(20px) saturate(160%)",
                            }}
                        >
                            <Icon
                                className="h-4 w-4 shrink-0"
                                style={{ color: "var(--color-3)" }}
                                aria-hidden
                            />
                            <span className="whitespace-nowrap text-xs font-medium sm:text-sm" style={{ color: "var(--color-1)" }}>
                                {s.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
