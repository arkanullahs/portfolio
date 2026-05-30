"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (
            <span
                aria-hidden
                className={cn("inline-block h-9 w-9 rounded-full", className)}
            />
        );
    }

    const isDark = (resolvedTheme ?? theme) === "dark";
    const next = isDark ? "light" : "dark";

    return (
        <button
            type="button"
            onClick={() => setTheme(next)}
            aria-label={`Switch to ${next} mode`}
            className={cn(
                "relative grid h-9 w-9 cursor-pointer place-items-center overflow-hidden rounded-full border transition-colors duration-200",
                className
            )}
            style={{
                borderColor: "var(--glass-border)",
                background: "var(--glass-fill-start)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
            }}
        >
            <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                    <motion.span
                        key="moon"
                        initial={{ y: -16, opacity: 0, rotate: -45 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 16, opacity: 0, rotate: 45 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute"
                    >
                        <Moon
                            className="h-4 w-4"
                            style={{ color: "var(--color-2)" }}
                            aria-hidden
                        />
                    </motion.span>
                ) : (
                    <motion.span
                        key="sun"
                        initial={{ y: -16, opacity: 0, rotate: -45 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 16, opacity: 0, rotate: 45 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute"
                    >
                        <Sun
                            className="h-4 w-4"
                            style={{ color: "var(--color-3)" }}
                            aria-hidden
                        />
                    </motion.span>
                )}
            </AnimatePresence>
        </button>
    );
}
