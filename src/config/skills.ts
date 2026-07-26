/* ============================================================================
   SKILLS
   ============================================================================ */

export type SkillGroup =
    | "Languages"
    | "Frontend"
    | "Mobile"
    | "Backend"
    | "AI"
    | "Data"
    | "Infra";

export type Skill = { name: string; group: SkillGroup };

export const skillGroups: SkillGroup[] = [
    "Languages",
    "Frontend",
    "Mobile",
    "Backend",
    "AI",
    "Data",
    "Infra",
];

export const skills: Skill[] = [
    { name: "Python", group: "Languages" },
    { name: "TypeScript", group: "Languages" },
    { name: "JavaScript", group: "Languages" },
    { name: "Dart", group: "Languages" },
    { name: "PHP", group: "Languages" },

    { name: "React", group: "Frontend" },
    { name: "Next.js", group: "Frontend" },
    { name: "Tailwind CSS", group: "Frontend" },

    { name: "Flutter", group: "Mobile" },

    { name: "FastAPI", group: "Backend" },
    { name: "Node.js", group: "Backend" },
    { name: "Express", group: "Backend" },
    { name: "Laravel", group: "Backend" },

    { name: "RAG pipelines", group: "AI" },
    { name: "Embeddings", group: "AI" },
    { name: "LLM orchestration", group: "AI" },
    { name: "Prompt engineering", group: "AI" },

    { name: "SQLite", group: "Data" },
    { name: "MongoDB", group: "Data" },
    { name: "Firebase", group: "Data" },
    { name: "MySQL", group: "Data" },

    { name: "GitHub Actions", group: "Infra" },
    { name: "Render", group: "Infra" },
    { name: "Vercel", group: "Infra" },
];
