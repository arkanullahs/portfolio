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
    role: "Final-year CSE student · Full-stack & AI engineering",

    /* Sits in the hero status pill, next to the live dot */
    seeking: "Open to software engineering roles",

    /* Tagline — humanized: no em dash, no clichés, has a point of view */
    tagline:
        "Final-year Computer Science student in Dhaka. I built BhaloPhone, an AI phone recommendation platform that's live and answering real buying questions across Bangladesh, plus three other shipped apps across MERN, Flutter and Laravel.",

    /* About — first person, varied rhythm, owns the student status */
    about: [
        "I'm in my final year of Computer Science at Ahsanullah University of Science and Technology. I got into code because I kept wanting apps that didn't exist yet, so I started building them. That habit never really wore off.",
        "BhaloPhone is the clearest example. Buying a phone here means opening eight retailer tabs and guessing, so I built the thing that reads all eight for you: scrapers, a RAG pipeline over real listings, an inference layer that survives free-tier rate limits, and the deploy pipeline underneath it. Founder, backend, frontend and ops, because there was nobody else.",
        "Before that: NextEd, eCrunchies and BookNest, across MERN, Flutter with Firebase, and Laravel. All went from an empty repo to something that works, either solo or with a classmate or two.",
        "I also edit educational videos for Ascend IELTS. Sounds unrelated to code, but it taught me a lot about pacing and the small details that make something feel finished instead of rushed.",
        "Right now I'm looking for my first real software job. I'm not going to pretend I know everything. What I can promise is that I pick things up fast, I ask good questions, and I finish what I start.",
    ] as const,

    location: "Dhaka, Bangladesh",
    locationShort: "Dhaka, BD",
    email: "arkanullahs@gmail.com",
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
        { value: "4", suffix: "", label: "Shipped projects" },
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
        period: "Expected 2026",
        location: "Dhaka, Bangladesh",
    },
} as const;
