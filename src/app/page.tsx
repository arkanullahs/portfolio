import { About } from "@/components/about";
import { Achievements } from "@/components/achievements";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { LiquidBackground } from "@/components/liquid-background";
import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";
import { ScrollLockedJourney } from "@/components/scroll-locked-journey";
import { Stack } from "@/components/stack";
import { Strengths } from "@/components/strengths";

export default function HomePage() {
    return (
        <>
            <LiquidBackground />
            <Nav />
            <ScrollLockedJourney>
                <Hero />
                <Projects />
                <Strengths />
                <About />
                <Stack />
                <Achievements />
                <Contact />
            </ScrollLockedJourney>
        </>
    );
}
