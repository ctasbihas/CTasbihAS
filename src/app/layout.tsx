import { Ubuntu, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ibm_plex_mono, ubuntu } from "@/utils/fonts";

export const metadata = {
    title: "Tasbih's Portfolio",
    description: "Portfolio website for Tasbih Ahmed",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${ubuntu.variable} ${ibm_plex_mono.variable}`}
        >
            <body>{children}</body>
        </html>
    );
}
