/* ============================================================================
   SITE CONFIGURATION — single source of truth.
   Everything user-editable lives here. The portfolio is statically rendered,
   but you can swap content in seconds.
   ============================================================================ */

export const site = {
    /* Identity */
    name: "Arkanullah Saad",
    firstName: "Arkanullah",

    /* Headline that reads well to recruiters scanning quickly */
    role: "Software engineer · CSE graduate · Full-stack, AI & Linux",

    /* Hero, under the tagline */
    seeking: "Looking for a full-time software engineering role.",

    /* Hero lead and meta description */
    tagline:
        "I built BhaloPhone, a phone price site that tracks 17 shops across Bangladesh, and I run it on an old Android phone that serves as its server. I also wrote Linux firmware for a TP-Link router that OpenWrt doesn't support.",

    /* About — first person, varied rhythm */
    about: [
        "I graduated in Computer Science from Ahsanullah University of Science and Technology in 2026. I started writing code to build apps I wanted and couldn't find.",
        "BhaloPhone is the clearest example. Buying a phone here means opening a dozen shop tabs and guessing, so I built the thing that reads 17 shops for you: scrapers, a RAG pipeline over real listings, an LLM layer that survives free-tier limits, and a content pipeline that posts prices and reels every day. When the managed database cut us off, I moved the whole backend onto an old Android phone at home. Founder, backend, frontend and ops.",
        "Before that: eCrunchies (2023, Flutter and Firebase), NextEd (2024, MERN) and BookNest (2025, Laravel and React). Each went from an empty repo to something that works, solo or with a classmate or two.",
        "Outside the web stack I built RockSolid, open-source firmware for the TP-Link TL-WR841N v14. OpenWrt ships no image for it because the router has only 4 MB of flash, so I configured and cross-compiled the Linux kernel and OpenWrt from source, cut both down until they fit, and tuned the WiFi for a crowded neighbourhood. It runs on a real router and the source is on GitHub.",
        "In 2026 I also built norFleet as freelance client work: shift and fuel records for Altan Transport, a haulage business in Norway.",
        "I'm CTO at Ascend IELTS, where I built the learner progress tracker and run video lesson production.",
        "I'm looking for a full-time software engineering role.",
    ] as const,

    location: "Dhaka, Bangladesh",
    locationShort: "Dhaka, BD",
    email: "arkanullahs@gmail.com",

    /** CV PDF in /public. Linked from the hero and the nav. */
    cv: "/arkanullah-saad-cv.pdf",
    status: "Available",

    /** Used for the live GitHub API pull. See src/lib/github.ts. */
    githubLogin: "arkanullahs",

    social: {
        github: "https://github.com/arkanullahs",
        linkedin: "https://www.linkedin.com/in/arkanullah-saad-4122b633b/",
        facebook: "https://fb.com/arkusaa",
    },

    avatar: "https://avatars.githubusercontent.com/u/120630818?v=4",

    /* Hero stats — the fallback shown when GITHUB_TOKEN isn't set.
       With a token these are replaced by live GitHub numbers. */
    stats: [
        { value: "5", suffix: "", label: "Shipped projects" },
        { value: "12", suffix: "+", label: "Public repos" },
        { value: "127", suffix: "", label: "Commits last year" },
        { value: "AUST", suffix: "", label: "B.Sc. CSE" },
    ] as const,

    /* What I bring — humanized, plain, no slogans */
    strengths: [
        {
            title: "I can build the whole thing",
            body: "BhaloPhone is scrapers, a RAG pipeline, a React frontend and the CI/CD under it, all mine. I can take a feature from a rough idea to something deployed without handing it off halfway.",
        },
        {
            title: "I teach myself fast",
            body: "Flutter, Laravel, TypeScript and the whole RAG and LLM-orchestration side of BhaloPhone were self-taught, because I needed them to finish something. A new tool isn't going to scare me off.",
        },
        {
            title: "I design for things going wrong",
            body: "When the managed database cut BhaloPhone off, I moved PostgreSQL, the API and every background job onto a broken Walton H9 Pro running Debian, behind a rate-limited Cloudflare Worker. It restarts its own services, reboots itself every 3.5 days and reports to me on Telegram.",
        },
        {
            title: "I use AI agents with guardrails",
            body: "I build with Claude Code every day, and the agents work from written specs, repo rules and a knowledge base I maintain. Code goes through a branch and 60 automated checks before it lands. 325 merged pull requests on BhaloPhone went through that loop.",
        },
    ] as const,

    /* Education */
    education: {
        school: "Ahsanullah University of Science and Technology",
        schoolShort: "AUST",
        degree: "B.Sc. in Computer Science & Engineering",
        period: "2026",
        location: "Dhaka, Bangladesh",
    },
} as const;
