import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const glassBadgeVariants = cva(
    "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide transition-colors",
    {
        variants: {
            variant: {
                default:
                    "border border-[var(--glass-border)] bg-[var(--soft-fill)] text-[var(--text-muted)]",
                accent:
                    "border border-[var(--accent-tint-strong)] bg-[var(--accent-tint-soft)] text-[var(--color-3)]",
                outline:
                    "border border-[var(--glass-border-strong)] bg-transparent text-[var(--text-muted)]",
            },
        },
        defaultVariants: { variant: "default" },
    }
);

export interface GlassBadgeProps
    extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof glassBadgeVariants> { }

export function GlassBadge({ className, variant, ...props }: GlassBadgeProps) {
    return (
        <span
            className={cn(glassBadgeVariants({ variant }), className)}
            {...props}
        />
    );
}
