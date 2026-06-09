/* ============================================================================
   ACHIEVEMENTS
   Notable competition wins, awards, and recognitions.
   ============================================================================ */

export type Achievement = {
    id: string;
    title: string;
    subtitle: string;
    highlights: string[];
    url?: string;
    urlLabel?: string;
    emoji: string;
    cover: "browser" | "mobile";
};

export const achievements: Achievement[] = [
    {
        id: "uiux-cse-carnival",
        title: "1st Place, UI/UX Design Competition — AUST CSE Carnival 7.0",
        subtitle: "AUST CSE Society, Sponsored by Ostad, 2026",
        highlights: [
            "Won solo against teams of up to 3; prize 18,000 BDT",
            "Designed TheMindPeace, a mental health web platform for Bangladeshi university students featuring crisis detection, mood tracking, anonymous peer support, and counsellor handoff",
        ],
        url: "https://the-mind-peace.vercel.app",
        urlLabel: "the-mind-peace.vercel.app",
        emoji: "TMP",
        cover: "browser",
    },
];
