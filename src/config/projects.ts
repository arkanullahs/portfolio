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
    /** A real screenshot of the project. Cards without one show no image. */
    image?: { src: string; alt: string; width: number; height: number };
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
        blurb: "Live phone prices from 17 Bangladeshi shops, and the best phone for your budget.",
        description:
            "Buying a phone in Bangladesh means opening a dozen shop tabs and trusting whichever one lies least. BhaloPhone tracks about 1,300 phones and 5,400 offers across 17 shops, refreshed nightly, and answers a plain question like \"best camera under 30k\" with ranked picks tied to real, current listings. It runs on hardware I self-host at home.",
        highlights: [
            "Ranks picks with RAG over embeddings and structured evidence cards, so every spec comes from database rows the model cannot invent. The LLM layer spans 13 providers with circuit breakers and key failover.",
            "When the managed database cut us off, I moved the backend onto repurposed phones: a broken Walton H9 Pro runs PostgreSQL 17, PostgREST, the job worker and the API behind a rate-limited Cloudflare Worker. A screenless Redmi 4A on LineageOS and Termux scrapes from a Bangladeshi residential IP. CI reaches both over Tailscale.",
            "Built an automated content pipeline: 8 Facebook price posts and 5 rendered best-price reels a day, cross-posted to Instagram and YouTube Shorts.",
            "946 indexed pages (phone, best-of and versus pages) and a monthly price report, generated from the same data.",
            "325 merged pull requests and 70 automated checks, 60 of them run in CI on every push. I write a design spec before a feature, and the AI coding agents I use work from repo rules and a knowledge base I maintain.",
        ],
        metrics: [
            { value: "17", label: "Shops tracked" },
            { value: "1,300", label: "Phones tracked" },
            { value: "946", label: "Indexed pages" },
            { value: "325", label: "Merged PRs" },
        ],
        stack: [
            "Python",
            "FastAPI",
            "PostgreSQL",
            "React",
            "TypeScript",
            "RAG",
            "LLMs",
            "GitHub Actions",
            "Cloudflare Workers",
            "Tailscale",
        ],
        live: "https://bhalophone.com",
        emoji: "BP",
        cover: "browser",
        badge: "Flagship · Live",
        flagship: true,
        featured: true,
    },
    {
        id: "rocksolid",
        title: "RockSolid Router Firmware",
        blurb: "Open-source Linux firmware for a 4 MB TP-Link router that OpenWrt doesn't ship.",
        description:
            "OpenWrt publishes no image for the TP-Link TL-WR841N v14: the default build doesn't fit its 4 MB of flash. I configured and cross-compiled the Linux kernel and OpenWrt from source, cut both down until the system and a web UI fit, and tuned the router as an access point for a crowded 2.4 GHz neighbourhood. Running on real hardware and released under GPL-2.0.",
        highlights: [
            "Cross-compiled Linux 6.6 and OpenWrt 24.10.8 for a MIPS SoC (MediaTek MT7628) in a reproducible Docker build.",
            "Cut kernel options (IPv6, PCI, debug symbols, cgroups, namespaces) and userland packages to fit the 3.97 MB image limit, leaving 256 KB for settings.",
            "Wrote first-boot scripts that bridge all five ports in the hardware switch and tune 2.4 GHz WiFi: 20 MHz channels, auto channel from 1/6/11, no 802.11b rates.",
            "Restyled the LuCI admin interface with 20 KB of CSS, light and dark, desktop and phone.",
        ],
        stack: ["Linux kernel", "OpenWrt", "Embedded Linux", "Docker", "Shell", "CSS"],
        href: "https://github.com/arkanullahs/tl-wr841n-v14-rocksolid",
        image: {
            src: "/shots/rocksolid.png",
            alt: "RockSolid sign-in page in the router's web interface",
            width: 1280,
            height: 480,
        },
        emoji: "RS",
        cover: "browser",
        badge: "Open source · Embedded Linux",
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
        live: "https://nexted-frontend.vercel.app",
        image: {
            src: "/shots/nexted.png",
            alt: "NextEd home page",
            width: 1280,
            height: 480,
        },
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
