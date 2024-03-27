import Navbar from "@/components/Navbar/Navbar";
import { ibm_plex_mono, ubuntu } from "@/utils/fonts";
import "./globals.css";

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
            className={`${ubuntu.variable} ${ibm_plex_mono.variable} max-w-screen-2xl`}
        >
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
