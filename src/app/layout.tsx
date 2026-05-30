import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { theme } from "@/config/theme";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeTokens } from "@/components/theme-tokens";

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    metadataBase: new URL("https://arkanullah.dev"),
    openGraph: {
        title: `${site.name} — ${site.role}`,
        description: site.tagline,
        type: "website",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "#0e0a18" },
        { media: "(prefers-color-scheme: light)", color: "#fbf9ff" },
    ],
};

/**
 * Tiny boot script — runs synchronously in <head> before paint.
 * Flips html.js-on so the no-JS CSS fallback in globals.css disengages.
 * Never blocks rendering: it's <1KB and inline.
 */
const BOOT_SCRIPT = `(function(){try{document.documentElement.classList.add('js-on');}catch(e){}})();`;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={inter.variable}
            suppressHydrationWarning
        >
            <head>
                <ThemeTokens />
                <script
                    dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }}
                    suppressHydrationWarning
                />
            </head>
            <body className="font-sans antialiased" suppressHydrationWarning>
                <ThemeProvider
                    attribute="class"
                    defaultTheme={theme.defaultMode}
                    enableSystem={theme.defaultMode === "system"}
                    disableTransitionOnChange={false}
                    themes={["light", "dark"]}
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
