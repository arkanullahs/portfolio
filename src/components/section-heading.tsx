export function SectionHeading({
    eyebrow,
    title,
    description,
}: {
    eyebrow: string;
    title: string;
    description?: string;
}) {
    return (
        <div className="max-w-2xl">
            <div className="glass-pill">
                <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--accent-dot)" }}
                />
                {eyebrow}
            </div>
            <h2 className="mt-4 text-balance text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.05] tracking-tight text-[var(--color-1)]">
                {title}
            </h2>
            {description && (
                <p className="mt-3 text-base leading-relaxed text-[var(--text-muted)]">
                    {description}
                </p>
            )}
        </div>
    );
}
