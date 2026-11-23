export function SectionHeading({
    title,
    description,
}: {
    title: string;
    description?: string;
}) {
    return (
        <div className="max-w-2xl">
            <h2 className="text-balance text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-[1.1] tracking-tight text-[var(--color-1)]">
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
