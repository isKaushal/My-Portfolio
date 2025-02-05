import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "clr-black": "#0a0a0a",
        "clr-react": "#61dbfb",
        "clr-typescript": "#007acc",
        "clr-javascript": "#f7df1e",
        "clr-tailwind": "#38bdf8",
        "clr-node": "#3c873a",
        "clr-nextjs": "#000000",
        "clr-sass": "#cc6699",
        "clr-html": "#e34c26",
        "clr-css": "#1572b6",
        "clr-git": "#f1502f",
        "clr-github": "#171515",
        "clr-linkedin": "#0a66c2",
        "clr-gmail": "#ea4335",
        "clr-instagram": "#e4405f",
      },
      fontFamily: {
        geist: ["var(--font-geist-sans)"],
        geistMono: ["var(--font-geist-mono)"],
        firaCode: ["var(--font-fira-code)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
