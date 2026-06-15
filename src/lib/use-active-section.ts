"use client";

import { useEffect, useState } from "react";

const ROOT_MARGIN = "-40% 0px -55% 0px";

export function useActiveSection(ids: string[]) {
    const [active, setActive] = useState("top");

    useEffect(() => {
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        if (!sections.length) return;

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id);
                });
            },
            { rootMargin: ROOT_MARGIN, threshold: 0 }
        );

        sections.forEach((s) => obs.observe(s));
        return () => obs.disconnect();
    }, [ids]);

    return active;
}
