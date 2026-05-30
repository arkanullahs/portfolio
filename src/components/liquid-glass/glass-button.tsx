import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const glassButtonVariants = cva(
    "relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                primary: "btn-primary-bg",
                ghost: "btn-ghost-bg border border-[var(--glass-border)] text-[var(--color-1)] hover:border-[var(--glass-border-hover)]",
                outline:
                    "border-2 border-[var(--glass-border-strong)] text-[var(--color-1)] hover:border-[var(--glass-border-hover)] hover:bg-[var(--soft-fill)]",
            },
            size: {
                default: "h-11 px-7",
                sm: "h-9 px-4 text-xs",
                lg: "h-12 px-8 text-base",
                icon: "h-10 w-10 p-0",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

interface GlassButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
    asChild?: boolean;
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
    ({ className, variant, size, asChild = false, children, ...props }, ref) => {
        if (asChild && React.isValidElement(children)) {
            const child = children as React.ReactElement<{ className?: string }>;
            return React.cloneElement(child, {
                className: cn(
                    glassButtonVariants({ variant, size }),
                    child.props.className,
                    className
                ),
            });
        }
        return (
            <button
                ref={ref}
                className={cn(glassButtonVariants({ variant, size }), className)}
                {...props}
            >
                {children}
            </button>
        );
    }
);
GlassButton.displayName = "GlassButton";

export { GlassButton, glassButtonVariants };
