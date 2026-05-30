/* ============================================================================
   EXPERIENCE
   ============================================================================ */

export type ExperienceItem = {
    company: string;
    role: string;
    period: string;
    points: string[];
};

export const experience: ExperienceItem[] = [
    {
        company: "Ascend IELTS",
        role: "Content Editor",
        period: "Feb 2024 — Present",
        points: [
            "Edit and manage online academic videos for IELTS learners.",
            "Improve lesson clarity through cutting, pacing, subtitles and visual adjustments.",
            "Coordinate with instructors to structure long-form content into digestible modules.",
            "Own publishing workflow: thumbnails, metadata, optimization.",
        ],
    },
    {
        company: "GeekTex",
        role: "Owner — Online Gadget Store",
        period: "2022 — 2023",
        points: [
            "Managed a gadget-selling page with 1,000+ followers.",
            "Handled sourcing, pricing, customer comms and day-to-day ops.",
            "Picked up digital marketing, product presentation, support.",
            "Fulfilled orders independently with strong customer satisfaction.",
        ],
    },
    {
        company: "The Tech Show — YouTube",
        role: "Content Creator",
        period: "2016 — 2020",
        points: [
            "Custom ROM reviews, GCam tests, performance tweaks, Android root and Magisk guides.",
            "Owned scripts, recording, editing, thumbnails and analytics.",
            "Sharpened technical explanation skills through step-by-step tutorials.",
        ],
    },
];
