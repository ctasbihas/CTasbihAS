module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                ubuntu: ["var(--font-ubuntu)"],
                ibmplexmono: ["IBM Plex Mono", "monospace"],
            },
            colors: {
                bg1: "#292F36",
                bg2: "#1A1E23",
                brand1: "#12F7D6",
                brand2: "#98FAEC",
                gray: "#43454D",
                white: "#FFFFFF",
                html: "#E54F26",
                css: "#0C73B8",
                js: "#E7A020",
                react: "#28A9E0",
            },
        },
    },
    plugins: [],
};
