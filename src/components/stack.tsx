"use client";

import {
    Code2,
    Layout,
    Smartphone,
    Server,
    Database,
    type LucideIcon,
} from "lucide-react";
import { skillGroups, skills, type SkillGroup } from "@/config/skills";
import { GlassCard } from "@/components/liquid-glass/glass-card";
import { SectionHeading } from "@/components/section-heading";
import { SkillIcon } from "@/components/brand-icons";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

const GROUP_ICON: Record<SkillGroup, LucideIcon> = {
    Languages: Code2,
    Frontend: Layout,
    Mobile: Smartphone,
    Backend: Server,
    Data: Database,
};

export function Stack() {
    const revealRef = useScrollReveal();

    return (
        <section id="stack" className="snap-major section-x relative py-16 sm:py-24">
            <div ref={revealRef} className="container-x">
                <SectionHeading
                    eyebrow="Stack"
                    title="What I work with."
                    description="Stronger in some of these than others. The ones I don't know yet, I'm happy to learn."
                />

                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map((group, gi) => {
                        const Icon = GROUP_ICON[group];
                        const count = skills.filter((s) => s.group === group).length;
                        return (
                            <div
                                key={group}
                                className="scroll-reveal"
                                style={{ animationDelay: `${gi * 100}ms` }}
                            >
                                <GlassCard className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="grid h-9 w-9 place-items-center rounded-xl border"
                                                style={{
                                                    borderColor: "var(--glass-border)",
                                                    background: "var(--soft-fill)",
                                                }}
                                            >
                                                <Icon
                                                    className="h-4 w-4"
                                                    style={{ color: "var(--color-3)" }}
                                                    aria-hidden
                                                />
                                            </div>
                                            <h3
                                                className="text-sm font-semibold uppercase tracking-[0.14em]"
                                                style={{ color: "var(--text-muted)" }}
                                            >
                                                {group}
                                            </h3>
                                        </div>
                                        <span
                                            className="rounded-full border px-2 py-0.5 text-[10px]"
                                            style={{
                                                borderColor: "var(--glass-border)",
                                                background: "var(--soft-fill)",
                                                color: "var(--text-muted)",
                                            }}
                                        >
                                            {count}
                                        </span>
                                    </div>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {skills
                                            .filter((s) => s.group === group)
                                            .map((s) => (
                                                <span
                                                    key={s.name}
                                                    className="inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-sm transition-colors duration-200"
                                                    style={{
                                                        borderColor: "var(--glass-border)",
                                                        background: "var(--soft-fill)",
                                                        color: "var(--color-1)",
                                                    }}
                                                >
                                                    <SkillIcon
                                                        name={s.name}
                                                        className="h-3.5 w-3.5"
                                                    />
                                                    {s.name}
                                                </span>
                                            ))}
                                    </div>
                                </GlassCard>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
