import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
    "Arkanullah Saad, software engineer in Dhaka. Built BhaloPhone and RockSolid router firmware.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#f4f4f5";
const MUTED = "#a1a1aa";
const LINE = "#27272a";
const ACCENT = "#7cb4ff";

export default async function Image() {
    const photo = await readFile(join(process.cwd(), "public/avatar.jpg"));
    const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;
    const [inter400, inter700] = await Promise.all([
        readFile(join(process.cwd(), "assets/inter-400.woff")),
        readFile(join(process.cwd(), "assets/inter-700.woff")),
    ]);

    const work = [
        ["BhaloPhone", "Phone prices from 17 Bangladeshi shops, served from an old phone"],
        ["RockSolid", "Linux firmware for a 4 MB router OpenWrt doesn't support"],
    ];

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "64px 72px",
                    background: "#0b0d12",
                    color: INK,
                    fontFamily: "Inter",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={photoSrc}
                        width={180}
                        height={180}
                        alt=""
                        style={{ borderRadius: 999, border: `3px solid ${LINE}` }}
                    />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2, lineHeight: 1 }}>
                            Arkanullah Saad
                        </div>
                        <div style={{ marginTop: 16, fontSize: 32, color: MUTED }}>
                            Software engineer · Dhaka, Bangladesh
                        </div>
                        <div style={{ marginTop: 8, fontSize: 26, color: MUTED }}>
                            CSE, AUST 2026 · Open to full-time roles
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    {work.map(([name, line]) => (
                        <div key={name} style={{ display: "flex", alignItems: "center", gap: 24 }}>
                            <div style={{ width: 190, fontSize: 28, fontWeight: 700, color: ACCENT }}>{name}</div>
                            <div style={{ flex: 1, fontSize: 26, color: INK }}>{line}</div>
                        </div>
                    ))}
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderTop: `2px solid ${LINE}`,
                        paddingTop: 22,
                        fontSize: 24,
                        color: MUTED,
                    }}
                >
                    <div>arkanullah.pro.bd</div>
                    <div>github.com/arkanullahs</div>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                { name: "Inter", data: inter400, weight: 400, style: "normal" },
                { name: "Inter", data: inter700, weight: 700, style: "normal" },
            ],
        },
    );
}
