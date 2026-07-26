/* ============================================================================
   PROJECTS
   Each project answers: what is it, why it's interesting, what I did.

   Exactly one project should carry `flagship: true` — it gets pulled out of
   the grid and rendered as its own section by <Flagship />.
   ============================================================================ */

export type Metric = { value: string; label: string };

export type Project = {
    id: string;
    title: string;
    blurb: string;
    description: string;
    highlights: string[];
    stack: string[];
    /** Source. Omit if the repo is private. */
    href?: string;
    /** Deployed URL, if there is one. */
    live?: string;
    emoji: string;
    cover: "browser" | "mobile";
    badge?: string;
    featured?: boolean;
    /** Promotes this project to its own section above the grid. */
    flagship?: boolean;
    /** Only rendered for the flagship. Numbers a recruiter can scan in 2s. */
    metrics?: Metric[];
    /** Only rendered for the flagship. Sits under the title. */
    role?: string;
};

export const projects: Project[] = [
    {
        id: "bhalophone",
        title: "BhaloPhone",
        role: "Founder & Full-Stack Developer",
        blurb: "AI phone recommendations for Bangladesh, grounded in live retailer data.",
        description:
            "Buying a phone in Bangladesh means opening eight retailer tabs and trusting whichever one lies least. BhaloPhone scrapes all of them nightly, then answers a plain question — \"best camera under 30k\" — with ranked picks and an explanation tied to real, current listings.",
        highlights: [
            "Built a RAG pipeline over embeddings and structured evidence cards, so every recommendation is ranked from database rows the model cannot invent.",
            "Wrote an inference layer across 13 LLM providers with circuit breakers, key failover and rotation, keeping the thing up on free-tier infrastructure.",
            "Automated scraping, nightly sync, review enrichment and SEO page generation in GitHub Actions — 250+ pages with structured data and AI crawler support.",
            "Shipped an internal admin dashboard that triggers crawls, enrichment and deploys from the browser, replacing the pile of scripts I was running by hand.",
            "Compressed evidence cards and retuned retrieval to fit strict payload limits, which cut latency and stopped the request failures.",
        ],
        metrics: [
            { value: "8+", label: "Retailers aggregated" },
            { value: "13", label: "LLM providers" },
            { value: "250+", label: "SEO pages generated" },
            { value: "Nightly", label: "Data sync" },
        ],
        stack: [
            "Python",
            "FastAPI",
            "React",
            "TypeScript",
            "SQLite",
            "RAG",
            "LLMs",
            "GitHub Actions",
            "Render",
        ],
        live: "https://bhalophone.com",
        emoji: "BP",
        cover: "browser",
        badge: "Flagship · Live",
        flagship: true,
        featured: true,
    },
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
];

export const flagship = projects.find((p) => p.flagship);
export const gridProjects = projects.filter((p) => !p.flagship);
