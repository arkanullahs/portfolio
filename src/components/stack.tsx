"use client";

import { Code2, Layout, Smartphone, Server, Database, type LucideIcon } from "lucide-react";
import { skillGroups, skills, type SkillGroup } from "@/config/skills";
import { GlassCard } from "@/components/liquid-glass/glass-card";
import { SectionHeading } from "@/components/section-heading";
import { SkillIcon } from "@/components/brand-icons";

const GROUP_ICON: Record<SkillGroup, LucideIcon> = {
    Languages: Code2,
    Frontend: Layout,
    Mobile: Smartphone,
    Backend: Server,
    Data: Database,
};

const SLUGS: Record<SkillGroup, string> = {
    Languages: "stack-languages",
    Frontend: "stack-frontend",
    Mobile: "stack-mobile",
    Backend: "stack-backend",
    Data: "stack-data",
};

function SkillGroupSlide({ group }: { group: SkillGroup }) {
    const Icon = GROUP_ICON[group];
    const groupSkills = skills.filter((s) => s.group === group);

    return (
        <section id={SLUGS[group]} className="snap-section section-x relative overflow-hidden">
            <div className="container-x py-12 sm:py-16">
                <div className="max-w-md mx-auto text-center">
                    <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border"
                        style={{ borderColor: "var(--accent-tint-strong)", background: "var(--accent-tint-soft)" }}>
                        <Icon className="h-7 w-7 text-[var(--color-3)]" aria-hidden />
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold tracking-tight text-[var(--color-1)]">{group}</h2>
                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                        {groupSkills.map((s) => (
                            <span key={s.name} className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm transition-colors"
                                style={{ borderColor: "var(--glass-border)", background: "var(--soft-fill)", color: "var(--color-1)" }}>
                                <SkillIcon name={s.name} className="h-4 w-4" />
                                {s.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Stack() {
    return (
        <>
            <section id="stack-intro" className="snap-section section-x relative overflow-hidden">
                <div className="container-x py-12 sm:py-16">
                    <SectionHeading
                        eyebrow="Stack"
                        title="What I work with."
                        description="Stronger in some of these than others. The ones I don't know yet, I'm happy to learn."
                    />
                </div>
            </section>
            {skillGroups.map((g) => <SkillGroupSlide key={g} group={g} />)}
        </>
    );
}
