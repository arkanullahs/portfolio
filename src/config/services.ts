/* ============================================================================
   SERVICES — used by the marquee strip.
   Add as many as you like.
   ============================================================================ */

export type Service = {
    label: string;
    /** Lucide icon name. See https://lucide.dev */
    icon:
    | "Code2"
    | "Smartphone"
    | "Server"
    | "Layers"
    | "Cpu"
    | "Zap"
    | "GitBranch"
    | "Sparkles"
    | "Database"
    | "Box"
    | "Rocket"
    | "ShieldCheck";
};

export const services: Service[] = [
    { icon: "Code2", label: "Full-stack web" },
    { icon: "Smartphone", label: "Cross-platform mobile" },
    { icon: "Server", label: "REST APIs" },
    { icon: "Database", label: "Database design" },
    { icon: "Layers", label: "Design systems" },
    { icon: "Cpu", label: "Real-time chat" },
    { icon: "GitBranch", label: "Git workflow" },
    { icon: "Box", label: "Component libraries" },
    { icon: "Zap", label: "Performance audits" },
    { icon: "Sparkles", label: "Polished UX" },
    { icon: "Rocket", label: "MVP shipping" },
    { icon: "ShieldCheck", label: "Auth & security" },
];
