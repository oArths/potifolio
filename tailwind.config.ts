import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Draper: ["Draper", "sans-serif"],
      },
    },
    colors: {
      "50": "rgb(246, 246, 246)",
      "100": "rgb(231, 231, 231)",
      "200": "rgb(209, 209, 209)",
      "300": "rgb(176, 176, 176)",
      "400": "rgb(136, 136, 136)",
      "500": "rgb(109, 109, 109)",
      "600": "rgb(93, 93, 93)",
      "700": "rgb(79, 79, 79)",
      "800": "rgb(69, 69, 69)",
      "900": "rgb(61, 61, 61)",
      "925": "rgb(20, 19, 19)",
      "945": "rgb(8, 8, 8)",
      "950": "rgb(2, 2, 2)",
      "red100": "rgb(210, 27, 27)",
      "blue100": "rgb(50, 39, 201)",
      "white100": "rgb(168, 182, 203)",
    },
    plugins: [],
  },
} satisfies Config;
