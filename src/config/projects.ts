/* ============================================================================
   PROJECTS
   Each project answers: what is it, why it's interesting, what I did.
   ============================================================================ */

export type Project = {
    id: string;
    title: string;
    blurb: string;
    description: string;
    highlights: string[];
    stack: string[];
    href: string;
    emoji: string;
    cover: "browser" | "mobile";
    badge?: string;
    featured?: boolean;
};

export const projects: Project[] = [
    {
        id: "nexted",
        title: "NextEd",
        blurb: "A course platform I built on my own.",
        description:
            "Students, teachers and admins each get their own dashboard. Teachers create courses and schedule live classes, students enroll and learn.",
        highlights: [
            "Built the whole thing solo: database, API, and frontend.",
            "Wrote the Express + MongoDB backend from an empty folder.",
            "Handled auth and three different role-based views in React.",
        ],
        stack: ["MongoDB", "Express", "React", "Node.js"],
        href: "https://github.com/arkanullahs/nextEd",
        emoji: "NE",
        cover: "browser",
        badge: "MERN · Solo",
        featured: true,
    },
    {
        id: "ecrunchies",
        title: "eCrunchies",
        blurb: "A food delivery app for phones.",
        description:
            "Find restaurants, chat with them in real time, fill a cart, get push notifications, and track an order. Restaurants get a simple dashboard too.",
        highlights: [
            "One Flutter codebase running on both Android and iOS.",
            "Used Firebase for auth, Firestore for data, and FCM for push.",
            "Designed how an order moves from cart to delivered.",
        ],
        stack: ["Flutter", "Firebase", "Firestore", "FCM"],
        href: "https://github.com/arkanullahs/eCrunchies",
        emoji: "eC",
        cover: "mobile",
        badge: "Mobile",
    },
    {
        id: "booknest",
        title: "BookNest",
        blurb: "A book marketplace with reviews.",
        description:
            "Browse books, get recommendations, read what other people thought, and check out. A Laravel API behind a React frontend.",
        highlights: [
            "Laravel API covering auth, cart, orders and reviews.",
            "React + TypeScript frontend with Tailwind.",
            "Designed the MySQL schema for books, reviews and orders.",
        ],
        stack: ["Laravel", "React", "MySQL"],
        href: "https://github.com/arkanullahs/BookNest",
        emoji: "BN",
        cover: "browser",
        badge: "Full-stack",
    },
    {
        id: "cherry",
        title: "CHERRY",
        blurb: "A period tracker, built with a classmate.",
        description:
            "Track your cycle, log symptoms, and get reminders. Privacy-first, with a deliberately calm and quiet interface.",
        highlights: [
            "Worked on the UI screens and tracking logic with one teammate.",
            "Built native cross-platform with C# and Xamarin.",
            "Kept the design minimal so it's easy to read at a glance.",
        ],
        stack: ["C#", "Xamarin", ".NET"],
        href: "https://github.com/NabilaRahmanMedha/CHERRY",
        emoji: "Ch",
        cover: "mobile",
        badge: "Mobile · Team",
    },
];
