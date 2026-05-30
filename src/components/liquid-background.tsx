"use client";

/** Animated palette orbs + refraction strips. Pure CSS. iOS-safe. */
export function LiquidBackground() {
    return (
        <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
            <div
                className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-[140px] animate-[orb1_18s_ease-in-out_infinite]"
                style={{ background: "var(--orb-1)" }}
            />
            <div
                className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full blur-[160px] animate-[orb2_22s_ease-in-out_infinite]"
                style={{ background: "var(--orb-2)" }}
            />
            <div
                className="absolute -bottom-40 left-1/3 h-[560px] w-[560px] rounded-full blur-[150px] animate-[orb1_24s_ease-in-out_infinite]"
                style={{ background: "var(--orb-3)" }}
            />

            <style>{`
        @keyframes orb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(60px, -40px) scale(1.15); }
        }
        @keyframes orb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-80px, 60px) scale(1.2); }
        }
      `}</style>
        </div>
    );
}
