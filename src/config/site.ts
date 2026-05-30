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
    role: "Final-year CSE student · aspiring software engineer",

    /* "What kind of work I want" */
    seeking: "Looking for my first software engineering role",

    /* Tagline — humanized: no em dash, no clichés, has a point of view */
    tagline:
        "I'm in my final year of Computer Science at AUST in Dhaka. So far I've built and shipped three real apps: a course platform, a food delivery app, and a book marketplace, across MERN, Flutter and Laravel. Now I'm after my first software job. I learn quickly, and I'd rather ship something small that works than plan something big that never gets finished.",

    /* About — first person, varied rhythm, owns the student status */
    about: [
        "I'm in my final year of Computer Science at Ahsanullah University of Science and Technology. I got into code because I kept wanting apps that didn't exist yet, so I started building them. That habit never really wore off.",
        "Most of what I make is full-stack. I'll design the database, write the API, build the interface, and get it running online. NextEd and BookNest both went from an empty repo to something that actually works, either on my own or with a classmate or two.",
        "I also edit educational videos for Ascend IELTS. Sounds unrelated to code, but it taught me a lot about pacing and the small details that make something feel finished instead of rushed.",
        "Right now I'm looking for my first real software job. I'm not going to pretend I know everything. What I can promise is that I pick things up fast, I ask good questions, and I finish what I start.",
    ] as const,

    location: "Dhaka, Bangladesh",
    locationShort: "Dhaka, BD",
    email: "arkanullahs@gmail.com",
    status: "Available now",

    social: {
        github: "https://github.com/arkanullahs",
        linkedin: "https://www.linkedin.com/in/arkanullahsaad-4122b633b",
        facebook: "https://fb.com/arkusaa",
    },

    avatar: "https://avatars.githubusercontent.com/u/120630818?v=4",

    /* Hero stats — numbers a recruiter can verify */
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
            body: "I've worked across MERN, Laravel with React, and Flutter with Firebase. I can take a feature from a rough idea to something deployed without handing it off halfway.",
        },
        {
            title: "I teach myself fast",
            body: "Flutter, Laravel and TypeScript were all self-taught so I could build the projects on this page. A new tool isn't going to scare me off.",
        },
        {
            title: "I care how it feels",
            body: "A couple of years editing educational video taught me that clarity beats cleverness. I'd rather ship something people understand than something that shows off.",
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
