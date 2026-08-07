import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeTokens } from "@/components/theme-tokens";
import { ContactModalProvider } from "@/components/contact-modal";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: {
        default: `${site.name} — ${site.role}`,
        template: `%s | ${site.name}`,
    },
    description: site.tagline,
    icons: {
        icon: "/favicon.svg",
        apple: "/favicon.svg",
    },
    metadataBase: new URL("https://arkanullah.pro.bd"),
    keywords: [
        "Arkanullah Saad",
        "Full-stack engineer",
        "AI engineer",
        "Software Developer",
        "Next.js",
        "React",
        "Dhaka",
        "Bangladesh",
    ],
    authors: [{ name: site.name, url: "https://arkanullah.pro.bd" }],
    creator: site.name,
    publisher: site.name,
    alternates: {
        canonical: "/",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        title: `${site.name} — ${site.role}`,
        description: site.tagline,
        url: "https://arkanullah.pro.bd",
        siteName: site.name,
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: `${site.name} — ${site.role}`,
        description: site.tagline,
    },
    other: {
        "geo.region": "BD",
        "geo.placename": "Dhaka",
        "geo.position": "23.8103;90.4125",
        "ICBM": "23.8103, 90.4125",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    // Must track --background in theme-tokens.tsx (oklch 0.145 / 0.985 @ hue 255).
    themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "#0c0d11" },
        { media: "(prefers-color-scheme: light)", color: "#f9f9fc" },
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: site.name,
                            url: "https://arkanullah.pro.bd",
                            sameAs: [
                                site.social.github,
                                site.social.linkedin,
                                site.social.facebook,
                            ],
                            jobTitle: "Software Engineer",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Dhaka",
                                addressCountry: "BD",
                            },
                        }),
                    }}
                />
            </head>
            <body className="font-sans antialiased" suppressHydrationWarning>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange={false}
                    themes={["light", "dark"]}
                >
                    <ContactModalProvider>{children}</ContactModalProvider>
                </ThemeProvider>
                <SpeedInsights />
            </body>
        </html>
    );
}
