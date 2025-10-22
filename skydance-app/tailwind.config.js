/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Add this if using src directory
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "cursive"],
        body: ["var(--font-body)", "serif"],
      },
      fontSize: {
        h1: ["144px", { lineHeight: "110px" }],
        h2: ["50px", { lineHeight: "120px" }],
        h3: ["32px", { lineHeight: "120px" }],
        h4: ["32px", { lineHeight: "110px" }],
        h5: ["28px", { lineHeight: "110px" }],
        p: ["16px", { lineHeight: "24px" }],
      },
      colors: {
        background1: "#FFFFFF",
        background2: "#4A5759",
        background3: "#B0C4B1",
        background4: "#DEDBD2",
        background5: "#F7E1D7",
        background6: "#EDAFB8cc",
        paragraph1: "#000000",
        paragraph2: "#FFFFFF",
        accent1: "#BA8C93",
        accent2: "#F2F0F1",
      },
    },
  },
  plugins: [],
}