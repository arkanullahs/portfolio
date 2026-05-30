/**
 * ProjectCover — palette-aware mock UI per project type.
 * Flat composition, no backdrop-filter and no 3D transforms inside, so the
 * card's rounded `overflow:hidden` clips it correctly on every browser.
 */
type Props = {
    title: string;
    emoji: string;
    cover: "browser" | "mobile";
    accentIndex?: number;
};

export function ProjectCover({ title, emoji, cover }: Props) {
    return (
        <div
            className="absolute inset-0 overflow-hidden"
            style={{
                // Force a clip context iOS WebKit honors at rounded corners.
                WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                transform: "translateZ(0)",
            }}
        >
            {/* Base wash */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(135deg, var(--cover-grad-start) 0%, var(--cover-grad-end) 100%)",
                }}
            />
            {/* ambient blobs */}
            <div
                className="absolute -left-10 -top-12 h-44 w-44 rounded-full blur-2xl"
                style={{ background: "var(--cover-blob-1)" }}
            />
            <div
                className="absolute -right-10 -bottom-14 h-48 w-48 rounded-full blur-2xl"
                style={{ background: "var(--cover-blob-2)" }}
            />
            {/* dot grid */}
            <div
                className="absolute inset-0 opacity-25"
                style={{
                    backgroundImage:
                        "radial-gradient(var(--ink-line-soft) 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                }}
                aria-hidden
            />

            {cover === "browser" ? (
                <BrowserMockup title={title} emoji={emoji} />
            ) : (
                <MobileMockup emoji={emoji} />
            )}

            {/* bottom fade into the card body */}
            <div
                className="absolute inset-x-0 bottom-0 h-16"
                style={{
                    background:
                        "linear-gradient(to bottom, transparent, var(--surface-translucent))",
                }}
            />
        </div>
    );
}

/* Browser window — anchored near the bottom so it reads like a screenshot
   peeking up into the card. No tilt, no blur. */
function BrowserMockup({ title, emoji }: { title: string; emoji: string }) {
    return (
        <div
            className="absolute inset-x-5 bottom-0 top-6 overflow-hidden rounded-t-xl border border-b-0"
            style={{
                borderColor: "var(--glass-border-strong)",
                background:
                    "linear-gradient(180deg, var(--soft-fill-strong) 0%, var(--soft-fill) 100%)",
            }}
        >
            {/* title bar */}
            <div
                className="flex items-center gap-1.5 border-b px-3 py-2"
                style={{ borderColor: "var(--glass-border)" }}
            >
                <span className="h-2 w-2 rounded-full" style={{ background: "#ff5f57" }} />
                <span className="h-2 w-2 rounded-full" style={{ background: "#febc2e" }} />
                <span className="h-2 w-2 rounded-full" style={{ background: "#28c840" }} />
                <div
                    className="ml-2 flex-1 truncate rounded-md px-2.5 py-0.5 text-[10px]"
                    style={{ background: "var(--soft-fill)", color: "var(--color-2)" }}
                >
                    arkanullah.dev / {title.toLowerCase()}
                </div>
            </div>

            {/* body */}
            <div className="flex gap-3 p-3">
                <div className="flex w-[26%] flex-col gap-2">
                    <div className="h-2.5 w-2/3 rounded" style={{ background: "var(--ink-line)" }} />
                    <div className="h-2 w-full rounded" style={{ background: "var(--ink-line-soft)" }} />
                    <div className="h-2 w-4/5 rounded" style={{ background: "var(--ink-line-soft)" }} />
                    <div className="h-2 w-3/4 rounded" style={{ background: "var(--ink-line-soft)" }} />
                    <div className="mt-1 h-5 w-full rounded" style={{ background: "var(--accent-tint-mid)" }} />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                    <div
                        className="grid h-10 w-10 place-items-center rounded-xl text-[10px] font-bold"
                        style={{
                            background: "linear-gradient(135deg, var(--color-2), var(--color-3))",
                            color: "var(--color-7)",
                        }}
                    >
                        {emoji}
                    </div>
                    <div className="h-2.5 w-2/3 rounded" style={{ background: "var(--ink-line)" }} />
                    <div className="h-2 w-full rounded" style={{ background: "var(--ink-line-soft)" }} />
                    <div className="grid grid-cols-3 gap-1.5 pt-1" aria-hidden>
                        {[0, 1, 2].map((i) => (
                            <div key={i} className="h-6 rounded" style={{ background: "var(--soft-fill-strong)" }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

/* Phone — anchored bottom-center, screen content peeking up. No tilt, no blur. */
function MobileMockup({ emoji }: { emoji: string }) {
    return (
        <div
            className="absolute bottom-0 left-1/2 top-6 w-[40%] min-w-[120px] -translate-x-1/2 overflow-hidden rounded-t-[26px] border border-b-0"
            style={{
                borderColor: "var(--glass-border-strong)",
                background:
                    "linear-gradient(180deg, var(--soft-fill-strong) 0%, var(--soft-fill) 100%)",
            }}
        >
            {/* notch */}
            <div className="flex justify-center pt-2">
                <div className="h-1.5 w-10 rounded-full" style={{ background: "var(--ink-line-soft)" }} />
            </div>

            <div className="px-3 pt-2.5">
                <div className="flex items-center justify-between text-[8px]" style={{ color: "var(--color-2)" }}>
                    <span>9:41</span>
                    <span>···</span>
                </div>

                <div className="mt-2.5 flex items-center gap-2">
                    <div
                        className="grid h-8 w-8 place-items-center rounded-xl text-[9px] font-bold"
                        style={{
                            background: "linear-gradient(135deg, var(--color-2), var(--color-3))",
                            color: "var(--color-7)",
                        }}
                    >
                        {emoji}
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="h-2 w-10 rounded" style={{ background: "var(--ink-line)" }} />
                        <div className="h-1.5 w-14 rounded" style={{ background: "var(--ink-line-soft)" }} />
                    </div>
                </div>

                <div
                    className="mt-3 rounded-xl p-2"
                    style={{
                        background:
                            "linear-gradient(135deg, var(--accent-tint-mid), var(--accent-tint-soft))",
                    }}
                >
                    <div className="h-2 w-2/3 rounded" style={{ background: "var(--ink-line)" }} />
                    <div className="mt-1 h-1.5 w-full rounded" style={{ background: "var(--ink-line-soft)" }} />
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                    {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="aspect-square rounded-lg" style={{ background: "var(--soft-fill-strong)" }} />
                    ))}
                </div>
            </div>
        </div>
    );
}
