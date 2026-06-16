import { About } from "@/components/about";
import { Achievements } from "@/components/achievements";
import { Contact } from "@/components/contact";
import { ContributionGraph } from "@/components/contribution-graph";
import { Hero } from "@/components/hero";
import { LiquidBackground } from "@/components/liquid-background";
import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";
import { ServicesMarquee } from "@/components/services-marquee";
import { Stack } from "@/components/stack";
import { Strengths } from "@/components/strengths";

export default function HomePage() {
    return (
        <main className="relative min-h-screen">
            <LiquidBackground />
            <Nav />
            <Hero />
            <ServicesMarquee />
            <Projects />
            <Strengths />
            <ContributionGraph />
            <About />
            <Stack />
            <Achievements />
            <Contact />
        </main>
    );
}
