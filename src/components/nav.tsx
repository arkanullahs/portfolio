"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { GlassButton } from "@/components/liquid-glass/glass-button";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/config/site";

const items = [
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
    { id: "stack", label: "Stack" },
    { id: "contact", label: "Contact" },
];

export function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("top");
    const [hovered, setHovered] = useState<string | null>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const sections = ["top", ...items.map((i) => i.id)]
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);
        if (!sections.length) return;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id);
                });
            },
            { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
        );
        sections.forEach((s) => obs.observe(s));
        return () => obs.disconnect();
    }, []);

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-3 z-50 flex justify-center px-3"
        >
            <motion.nav
                layout
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
                className={cn(
                    "glass-nav glass-lens relative flex h-14 items-center justify-between gap-2 rounded-full px-2 sm:px-3 transition-[width] duration-500",
                    scrolled ? "w-full max-w-2xl" : "w-full max-w-3xl"
                )}
            >
                <Link
                    href="#top"
                    className="ml-2 flex shrink-0 cursor-pointer items-baseline gap-1.5 text-sm font-semibold tracking-tight text-[var(--color-1)]"
                >
                    <span>Arkanullah</span>
                    <span
                        className="hidden font-normal sm:inline"
                        style={{ color: "var(--text-muted)" }}
                    >
                        Saad
                    </span>
                </Link>

                <ul
                    className="hidden items-center gap-0 sm:flex"
                    onMouseLeave={() => setHovered(null)}
                >
                    {items.map((it) => {
                        const isActive = active === it.id;
                        const isHovered = hovered === it.id;
                        return (
                            <li key={it.id} className="relative">
                                <Link
                                    href={`#${it.id}`}
                                    onMouseEnter={() => setHovered(it.id)}
                                    className={cn(
                                        "relative z-10 block cursor-pointer rounded-full px-3.5 py-1.5 text-sm transition-colors duration-200",
                                        isActive
                                            ? "text-[var(--color-1)]"
                                            : "text-[var(--text-muted)] hover:text-[var(--color-1)]"
                                    )}
                                >
                                    {isHovered && !isActive && (
                                        <motion.span
                                            layoutId="navHover"
                                            className="absolute inset-0 -z-10 rounded-full"
                                            style={{ background: "var(--nav-hover-bg)" }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                    {isActive && (
                                        <motion.span
                                            layoutId="navActive"
                                            className="absolute inset-0 -z-10 rounded-full"
                                            style={{
                                                background:
                                                    "linear-gradient(135deg, var(--nav-pill-grad-start) 0%, var(--nav-pill-grad-end) 100%)",
                                                border: "1px solid var(--nav-pill-border)",
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 28,
                                            }}
                                        />
                                    )}
                                    {it.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div className="flex shrink-0 items-center gap-2">
                    <ThemeToggle />
                    <GlassButton size="sm" variant="ghost" asChild>
                        <Link href={`mailto:${site.email}`}>Contact</Link>
                    </GlassButton>
                </div>
            </motion.nav>
        </motion.header>
    );
}
