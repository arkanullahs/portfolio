"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const targets = el.querySelectorAll(".scroll-reveal");
        if (!targets.length) return;

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        );

        targets.forEach((t) => obs.observe(t));
        return () => obs.disconnect();
    }, []);

    return ref;
}
