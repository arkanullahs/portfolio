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
    { icon: "Sparkles", label: "RAG pipelines" },
    { icon: "Cpu", label: "LLM orchestration" },
    { icon: "Server", label: "REST APIs" },
    { icon: "Smartphone", label: "Cross-platform mobile" },
    { icon: "Database", label: "Database design" },
    { icon: "GitBranch", label: "CI/CD automation" },
    { icon: "Box", label: "Web scraping" },
    { icon: "Layers", label: "Design systems" },
    { icon: "Zap", label: "Performance audits" },
    { icon: "Rocket", label: "MVP shipping" },
    { icon: "ShieldCheck", label: "Auth & security" },
];
