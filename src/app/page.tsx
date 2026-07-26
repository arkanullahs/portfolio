import { About } from "@/components/about";
import { Achievements } from "@/components/achievements";
import { Contact } from "@/components/contact";
import { ContributionGraph } from "@/components/contribution-graph";
import { Flagship } from "@/components/flagship";
import { Hero } from "@/components/hero";
import { LiquidBackground } from "@/components/liquid-background";
import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";
import { ServicesMarquee } from "@/components/services-marquee";
import { Stack } from "@/components/stack";
import { Strengths } from "@/components/strengths";
import { getGitHubStats } from "@/lib/github";
import { site } from "@/config/site";

export default async function HomePage() {
    // One fetch, shared by the hero counters and the activity graph.
    // Null without GITHUB_TOKEN; both consumers handle that.
    const gh = await getGitHubStats(site.githubLogin);

    return (
        <main className="relative min-h-screen">
            <LiquidBackground />
            <Nav />
            <Hero gh={gh} />
            <Flagship />
            <ServicesMarquee />
            <Projects />
            <Strengths />
            <ContributionGraph gh={gh} />
            <About />
            <Stack />
            <Achievements />
            <Contact />
        </main>
    );
}
