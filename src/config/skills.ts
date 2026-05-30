/* ============================================================================
   SKILLS
   ============================================================================ */

export type SkillGroup =
    | "Languages"
    | "Frontend"
    | "Mobile"
    | "Backend"
    | "Data";

export type Skill = { name: string; group: SkillGroup };

export const skillGroups: SkillGroup[] = [
    "Languages",
    "Frontend",
    "Mobile",
    "Backend",
    "Data",
];

export const skills: Skill[] = [
    { name: "JavaScript", group: "Languages" },
    { name: "TypeScript", group: "Languages" },
    { name: "Dart", group: "Languages" },
    { name: "PHP", group: "Languages" },
    { name: "Python", group: "Languages" },
    { name: "C / C++", group: "Languages" },
    { name: "Java", group: "Languages" },
    { name: "C#", group: "Languages" },

    { name: "React", group: "Frontend" },
    { name: "Next.js", group: "Frontend" },
    { name: "Tailwind CSS", group: "Frontend" },

    { name: "Flutter", group: "Mobile" },
    { name: "Xamarin", group: "Mobile" },

    { name: "Node.js", group: "Backend" },
    { name: "Express", group: "Backend" },
    { name: "Laravel", group: "Backend" },

    { name: "MongoDB", group: "Data" },
    { name: "Firebase", group: "Data" },
    { name: "MySQL", group: "Data" },
];
