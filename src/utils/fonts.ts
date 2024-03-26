import { IBM_Plex_Mono, Ubuntu } from "next/font/google";

export const ubuntu = Ubuntu({
    weight: ["400", "500"],
    variable: "--font-ubuntu",
    subsets: ["latin"],
    display: "swap",
});

export const ibm_plex_mono = IBM_Plex_Mono({
    weight: ["300", "400", "500"],
    subsets: ["latin"],
    variable: "--font-ibm-plex-mono",
    display: "swap",
});
