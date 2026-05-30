"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy, Mail, X } from "lucide-react";
import { site } from "@/config/site";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";

/* ── context so any button can open the modal ───────────────────────── */
type Ctx = { open: () => void; close: () => void };
const ContactModalContext = createContext<Ctx | null>(null);

export function useContactModal() {
    const ctx = useContext(ContactModalContext);
    if (!ctx)
        throw new Error("useContactModal must be used within ContactModalProvider");
    return ctx;
}

/* Facebook glyph (Simple Icons, CC0) */
function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    );
}

const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    site.email
)}`;

export function ContactModalProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);

    // Lock body scroll + close on Escape while open
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
        document.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [isOpen, close]);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(site.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch {
            /* clipboard blocked — no-op */
        }
    };

    const channels = [
        {
            key: "gmail",
            label: "Gmail",
            sub: "Compose a new email",
            href: gmailCompose,
            icon: <Mail className="h-5 w-5" aria-hidden />,
            tint: "var(--accent-tint-mid)",
        },
        {
            key: "facebook",
            label: "Facebook",
            sub: "Message me on Facebook",
            href: site.social.facebook,
            icon: <FacebookIcon />,
            tint: "var(--accent-tint-soft)",
        },
        {
            key: "linkedin",
            label: "LinkedIn",
            sub: "Connect professionally",
            href: site.social.linkedin,
            icon: <LinkedinIcon className="h-5 w-5" />,
            tint: "var(--accent-tint-soft)",
        },
        {
            key: "github",
            label: "GitHub",
            sub: "See all my code",
            href: site.social.github,
            icon: <GithubIcon className="h-5 w-5" />,
            tint: "var(--accent-tint-soft)",
        },
    ];

    return (
        <ContactModalContext.Provider value={{ open, close }}>
            {children}

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* backdrop */}
                        <button
                            type="button"
                            aria-label="Close contact dialog"
                            onClick={close}
                            className="absolute inset-0 cursor-default"
                            style={{
                                background: "color-mix(in oklch, var(--color-7) 75%, transparent)",
                                backdropFilter: "blur(18px) saturate(140%)",
                                WebkitBackdropFilter: "blur(18px) saturate(140%)",
                            }}
                        />

                        {/* sheet / dialog */}
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-label="Contact options"
                            initial={{ y: 40, opacity: 0, scale: 0.98 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 40, opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="glass-strong glass-lens relative z-10 m-0 w-full max-w-md overflow-hidden rounded-t-[28px] p-6 sm:m-4 sm:rounded-[28px] sm:p-7"
                        >
                            {/* drag handle on mobile */}
                            <div className="mb-4 flex justify-center sm:hidden">
                                <span
                                    className="h-1.5 w-10 rounded-full"
                                    style={{ background: "var(--glass-border-strong)" }}
                                />
                            </div>

                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h2
                                        className="text-xl font-semibold tracking-tight"
                                        style={{ color: "var(--color-1)" }}
                                    >
                                        Get in touch
                                    </h2>
                                    <p
                                        className="mt-1 text-sm"
                                        style={{ color: "var(--text-muted)" }}
                                    >
                                        Pick whatever&apos;s easiest for you.
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={close}
                                    aria-label="Close"
                                    className="grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-full border transition-colors duration-200"
                                    style={{
                                        borderColor: "var(--glass-border)",
                                        background: "var(--soft-fill)",
                                        color: "var(--text-muted)",
                                    }}
                                >
                                    <X className="h-4 w-4" aria-hidden />
                                </button>
                            </div>

                            {/* email row with copy */}
                            <div
                                className="mt-5 flex items-center gap-3 rounded-2xl border p-3"
                                style={{
                                    borderColor: "var(--glass-border)",
                                    background: "var(--soft-fill)",
                                }}
                            >
                                <Mail
                                    className="h-4 w-4 shrink-0"
                                    style={{ color: "var(--color-3)" }}
                                    aria-hidden
                                />
                                <span
                                    className="min-w-0 flex-1 truncate text-sm"
                                    style={{ color: "var(--color-1)" }}
                                >
                                    {site.email}
                                </span>
                                <button
                                    type="button"
                                    onClick={copyEmail}
                                    className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors duration-200"
                                    style={{
                                        borderColor: "var(--glass-border)",
                                        background: "var(--surface-translucent)",
                                        color: "var(--color-2)",
                                    }}
                                >
                                    {copied ? (
                                        <>
                                            <Check className="h-3 w-3" aria-hidden /> Copied
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="h-3 w-3" aria-hidden /> Copy
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* channels */}
                            <div className="mt-3 grid grid-cols-1 gap-2.5">
                                {channels.map((c) => (
                                    <a
                                        key={c.key}
                                        href={c.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group flex cursor-pointer items-center gap-3 rounded-2xl border p-3 transition-all duration-200 hover:brightness-110"
                                        style={{
                                            borderColor: "var(--glass-border-strong)",
                                            background:
                                                "color-mix(in oklch, var(--color-1) 9%, transparent)",
                                        }}
                                    >
                                        <span
                                            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                                            style={{ background: c.tint, color: "var(--color-1)" }}
                                        >
                                            {c.icon}
                                        </span>
                                        <span className="min-w-0 flex-1">
                                            <span
                                                className="block text-sm font-medium"
                                                style={{ color: "var(--color-1)" }}
                                            >
                                                {c.label}
                                            </span>
                                            <span
                                                className="block truncate text-xs"
                                                style={{ color: "var(--text-muted)" }}
                                            >
                                                {c.sub}
                                            </span>
                                        </span>
                                        <span
                                            className="text-sm transition-transform duration-200 group-hover:translate-x-0.5"
                                            style={{ color: "var(--text-muted)" }}
                                            aria-hidden
                                        >
                                            →
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </ContactModalContext.Provider>
    );
}
