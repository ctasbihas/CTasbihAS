import Navbar from "../components/Navbar";
import { ibm_plex_mono, ubuntu } from "../utils/fonts";
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
            className={`${ubuntu.variable} ${ibm_plex_mono.variable} bg-bg1`}
        >
            <body className="max-w-screen-2xl mx-auto">
                <Navbar />
                {children}
            </body>
        </html>
    );
}
