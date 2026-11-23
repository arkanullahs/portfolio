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

    /* Sits in the hero status pill, next to the live dot */
    seeking: "Open to full-time software engineering roles",

    /* Tagline — humanized: no em dash, no clichés, has a point of view */
    tagline:
        "Computer Science graduate in Dhaka. I built BhaloPhone, an AI phone recommendation platform that's live and answering real buying questions across Bangladesh, plus open-source Linux firmware for a TP-Link router and three more apps across MERN, Flutter and Laravel.",

    /* About — first person, varied rhythm */
    about: [
        "I graduated in Computer Science from Ahsanullah University of Science and Technology in 2026. I got into code because I kept wanting apps that didn't exist yet, so I started building them. That habit never really wore off.",
        "BhaloPhone is the clearest example. Buying a phone here means opening eight retailer tabs and guessing, so I built the thing that reads all eight for you: scrapers, a RAG pipeline over real listings, an inference layer that survives free-tier rate limits, and the deploy pipeline underneath it. Founder, backend, frontend and ops, because there was nobody else.",
        "Before that: NextEd, eCrunchies and BookNest, across MERN, Flutter with Firebase, and Laravel. All went from an empty repo to something that works, either solo or with a classmate or two.",
        "Outside the web stack I built RockSolid, open-source firmware for the TP-Link TL-WR841N v14. OpenWrt ships no image for it because the router has only 4 MB of flash, so I configured and cross-compiled the Linux kernel and OpenWrt from source, cut both down until they fit, and tuned the WiFi for a crowded neighbourhood. It runs on a real router and the source is on GitHub.",
        "I also edit educational videos for Ascend IELTS. Sounds unrelated to code, but it taught me a lot about pacing and the small details that make something feel finished instead of rushed.",
        "I'm looking for a full-time software engineering role. I pick things up fast, I ask good questions, and I finish what I start.",
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
            body: "Free-tier infrastructure fails constantly. Circuit breakers, provider rotation and key failover weren't resume padding, they were the only way to keep BhaloPhone answering.",
        },
        {
            title: "I'm easy to work with",
            body: "Small commits, clear PRs, and I'm fine saying \"I don't know yet, give me a bit to figure it out\" instead of bluffing.",
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
