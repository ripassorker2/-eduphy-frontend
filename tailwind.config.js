/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primaryText: "#001422",
                secondaryText: "#CBD5E0",
                primaryBg: "#001422",
                secondaryBg: "#f8f8f8",
                black1: "#001d30",
                blue: "#1a94f5",
                green: "#00bd29",
            },
        },
    },
    plugins: [],
};
