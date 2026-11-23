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
    /** When it was built, shown on the card. */
    year: string;
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
        year: "2026 – present",
        title: "BhaloPhone",
        role: "Founder & Full-Stack Developer",
        blurb: "Live phone prices from 17 Bangladeshi shops, and the best phone for your budget.",
        description:
            "Buying a phone in Bangladesh means opening a dozen shop tabs and trusting whichever one lies least. BhaloPhone tracks about 1,300 phones and 5,400 offers across 17 shops, refreshed nightly, and answers a plain question like \"best camera under 30k\" with ranked picks tied to real, current listings. It runs on an old phone at my house.",
        highlights: [
            "Ranks picks with RAG over embeddings and structured evidence cards, so every spec comes from database rows the model cannot invent. The LLM layer spans 13 providers with circuit breakers and key failover.",
            "When the managed database cut us off, I turned a broken Walton H9 Pro into the server: rooted Android running a Debian chroot with PostgreSQL 17, PostgREST, the API, the job worker, reel rendering and a Telegram bot for operations. It sits behind a rate-limited Cloudflare Worker, crawls from a Bangladeshi home IP with a SIM-data proxy as a second exit, and CI reaches it over Tailscale.",
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
        year: "2026",
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
            alt: "RockSolid sign-in page in the router's web interface, on desktop and on a phone",
            width: 1280,
            height: 720,
        },
        emoji: "RS",
        cover: "browser",
        badge: "Open source · Embedded Linux",
        featured: true,
    },
    {
        id: "norfleet",
        year: "2026",
        title: "norFleet for Altan Transport",
        blurb: "Shift and fuel records for a haulage business in Norway. Freelance client work.",
        description:
            "Drivers record shifts, breaks and fuel from their phones. The owner reviews each driver's month, approves it and exports the figures for the accountant. Times follow Europe/Oslo and money is in NOK.",
        highlights: [
            "Overtime rules with an adjustable daily threshold and dated rates; approved months stay locked.",
            "One Cloudflare Worker serving the React app and a D1 database, built to fit the free plan's 10 ms CPU limit.",
            "Full business backups encrypted in the admin's browser, with a verified replace-and-restore flow.",
        ],
        stack: ["React", "TypeScript", "Cloudflare Workers", "D1", "Vite"],
        emoji: "NF",
        cover: "browser",
        badge: "Client work · Private repo",
        image: {
            src: "/shots/norfleet.png",
            alt: "norFleet admin overview on desktop and the driver app on a phone, with demo data",
            width: 1280,
            height: 720,
        },
    },
    {
        id: "ascend-tracker",
        year: "2026",
        title: "Ascend Performance Tracker",
        blurb: "Learner progress tracking for Ascend IELTS.",
        description:
            "A private tracker for up to 100 active learners. Instructors score learners and keep the final say over calculated suggestions; learners see their progress, a leaderboard and a speaking test page.",
        highlights: [
            "A Discord bot reads learners' daily task posts and marks each day done or half done.",
            "React and TypeScript on Cloudflare Workers, with D1 migrations.",
            "Domain, Worker and D1 tests in Vitest; browser flows in Playwright.",
        ],
        stack: ["React", "TypeScript", "Cloudflare Workers", "D1", "Discord API", "Vitest"],
        emoji: "AT",
        cover: "browser",
        badge: "Built as CTO of Ascend IELTS · Private repo",
        image: {
            src: "/shots/ascend.png",
            alt: "Ascend instructor overview on desktop and the learner view on a phone, with demo data",
            width: 1280,
            height: 720,
        },
    },
    {
        id: "nexted",
        year: "2024",
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
            alt: "NextEd home page on desktop and on a phone",
            width: 1280,
            height: 720,
        },
        emoji: "NE",
        cover: "browser",
        badge: "MERN · Solo",
        featured: true,
    },
];

export const flagship = projects.find((p) => p.flagship);
export const gridProjects = projects.filter((p) => !p.flagship);
