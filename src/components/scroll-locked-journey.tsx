"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { site } from "@/config/site";
import { useActiveSection } from "@/lib/use-active-section";
import { ChevronDown, ChevronUp } from "lucide-react";

const levels = site.levels;

export function ScrollLockedJourney({ children }: { children: React.ReactNode[] }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const active = useActiveSection(levels.map((l) => l.id));
    const [currentIndex, setCurrentIndex] = useState(0);
    const isTransitioning = useRef(false);
    const lastWheelTime = useRef(0);

    useEffect(() => {
        const idx = levels.findIndex((l) => l.id === active);
        if (idx >= 0 && !isTransitioning.current) {
            setCurrentIndex(idx);
        }
    }, [active]);

    const scrollToIndex = useCallback((index: number) => {
        if (index < 0 || index >= levels.length) return;
        const el = document.getElementById(levels[index].id);
        if (!el || !containerRef.current) return;

        isTransitioning.current = true;
        lastWheelTime.current = Date.now();
        setCurrentIndex(index);

        el.scrollIntoView({ behavior: "smooth", block: "start" });

        el.classList.add("section-highlight");
        setTimeout(() => el.classList.remove("section-highlight"), 1000);

        setTimeout(() => {
            isTransitioning.current = false;
        }, 1000);
    }, []);

    const goNext = useCallback(() => {
        const next = Math.min(currentIndex + 1, levels.length - 1);
        if (next !== currentIndex) scrollToIndex(next);
    }, [currentIndex, scrollToIndex]);

    const goPrev = useCallback(() => {
        const prev = Math.max(currentIndex - 1, 0);
        if (prev !== currentIndex) scrollToIndex(prev);
    }, [currentIndex, scrollToIndex]);

    useEffect(() => {
        const COOLDOWN_MS = 1200;

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            if (isTransitioning.current) return;
            const now = Date.now();
            if (now - lastWheelTime.current < COOLDOWN_MS) return;

            if (e.deltaY > 30) {
                goNext();
            } else if (e.deltaY < -30) {
                goPrev();
            }
        };

        let touchStartY = 0;

        const onTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };

        const onTouchEnd = (e: TouchEvent) => {
            if (isTransitioning.current) return;
            const now = Date.now();
            if (now - lastWheelTime.current < COOLDOWN_MS) return;

            const diff = touchStartY - e.changedTouches[0].clientY;
            if (Math.abs(diff) < 40) return;
            if (diff > 0) goNext();
            else goPrev();
        };

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowDown" || e.key === "PageDown") {
                e.preventDefault();
                if (isTransitioning.current) return;
                goNext();
            } else if (e.key === "ArrowUp" || e.key === "PageUp") {
                e.preventDefault();
                if (isTransitioning.current) return;
                goPrev();
            }
        };

        const el = containerRef.current;
        if (!el) return;

        el.addEventListener("wheel", onWheel, { passive: false });
        el.addEventListener("touchstart", onTouchStart, { passive: true });
        el.addEventListener("touchend", onTouchEnd, { passive: false });
        window.addEventListener("keydown", onKeyDown);

        return () => {
            el.removeEventListener("wheel", onWheel);
            el.removeEventListener("touchstart", onTouchStart);
            el.removeEventListener("touchend", onTouchEnd);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [goNext, goPrev]);

    const currentLevel = levels[currentIndex];
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === levels.length - 1;

    return (
        <>
            <AnimatePresence>
                {!isFirst && (
                    <motion.button
                        key="prev"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        onClick={goPrev}
                        className="fixed left-1/2 top-20 z-50 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full cursor-pointer opacity-20 hover:opacity-40 transition-opacity duration-300"
                        style={{ color: "var(--text-muted)" }}
                        aria-label="Previous section"
                    >
                        <ChevronUp className="h-5 w-5" />
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {!isLast && (
                    <motion.button
                        key="next"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        onClick={goNext}
                        className="fixed left-1/2 bottom-8 z-50 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full cursor-pointer opacity-20 hover:opacity-40 transition-opacity duration-300"
                        style={{ color: "var(--text-muted)" }}
                        aria-label="Next section"
                    >
                        <ChevronDown className="h-5 w-5" />
                    </motion.button>
                )}
            </AnimatePresence>

            <div ref={containerRef} className="snap-container relative">
                {children}
            </div>

            {/* Desktop side dots */}
            <nav
                aria-label="Page sections"
                className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-40"
            >
                <div
                    className="flex flex-col items-center gap-0 rounded-full border px-2.5 py-4 backdrop-blur-xl"
                    style={{
                        background: "var(--soft-fill)",
                        borderColor: "var(--glass-border)",
                    }}
                >
                    {levels.map((l, i) => {
                        const isActive = i === currentIndex;
                        const reached = i <= currentIndex;
                        const isLastDot = i === levels.length - 1;

                        return (
                            <div key={l.id} className="relative flex flex-col items-center group">
                                {!isLastDot && (
                                    <div
                                        className="h-3 w-px transition-colors duration-400"
                                        style={{
                                            background: reached ? "var(--color-2)" : "var(--glass-border)",
                                        }}
                                    />
                                )}
                                <div className="relative">
                                    <button
                                        onClick={() => scrollToIndex(i)}
                                        aria-label={`Go to ${l.label}${i > currentIndex ? " (locked)" : ""}`}
                                        className={`
                                            relative block h-2.5 w-2.5 rounded-full cursor-pointer
                                            transition-all duration-300
                                            ${isActive
                                                ? "scale-125"
                                                : reached
                                                    ? ""
                                                    : "opacity-30 cursor-not-allowed"
                                            }
                                        `}
                                        style={{
                                            background: reached ? "var(--color-2)" : "transparent",
                                            border: `1px solid ${reached ? "var(--color-2)" : "var(--glass-border)"}`,
                                        }}
                                        disabled={i > currentIndex}
                                    />
                                    <span
                                        className={`
                                            pointer-events-none absolute right-full top-1/2
                                            -translate-y-1/2 mr-2 whitespace-nowrap rounded-full
                                            border px-2.5 py-1 text-[10px] font-medium
                                            backdrop-blur-md transition-opacity duration-200
                                            ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                                        `}
                                        style={{
                                            background: "var(--surface-translucent)",
                                            borderColor: "var(--glass-border-strong)",
                                            color: isActive ? "var(--color-1)" : "var(--color-2)",
                                        }}
                                    >
                                        {l.label}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </nav>

            {/* Mobile bottom bar */}
            <div
                className="lg:hidden fixed bottom-4 inset-x-4 z-40 flex justify-center"
                aria-label={`Section ${currentIndex + 1} of ${levels.length}: ${currentLevel.label}`}
            >
                <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 backdrop-blur-sm"
                    style={{ background: "var(--soft-fill)" }}>
                    {levels.map((l, i) => {
                        const reached = i <= currentIndex;
                        const isActive = i === currentIndex;
                        return (
                            <span
                                key={l.id}
                                className={`
                                    block rounded-full transition-all duration-300
                                    ${isActive ? "w-4 h-1.5" : "w-1.5 h-1.5"}
                                `}
                                style={{
                                    background: reached ? "var(--color-2)" : "var(--glass-border)",
                                    opacity: reached ? 1 : 0.35,
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
