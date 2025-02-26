import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      animation: {
        morph: "morph 5s ease-in-out infinite",
        morphSoft: "morphSoft 5s ease-in-out infinite",
        morphExtreme: "morphExtreme 5s ease-in-out infinite",
        morphBlue: "morphBlue 5s ease-in-out infinite",
      },
      keyframes: {
        morph: {
          "0%": {
            width: "25vw",
            height: "25vw",
            borderRadius: "50%",
            transform: "rotate(0deg)",
          },
          "25%": {
            width: "25vw",
            height: "20vw",
            borderRadius: "60% 40% 60% 40%",
            transform: "rotate(5deg)",
          },
          "50%": {
            width: "20vw",
            height: "30vw",
            borderRadius: "40% 60% 40% 60%",
            transform: "rotate(15deg)",
          },
          "75%": {
            width: "28vw",
            height: "24vw",
            borderRadius: "40% 60% 40% 60%",
            transform: "rotate(20deg)",
          },
          "100%": {
            width: "25vw",
            height: "25vw",
            borderRadius: "50%",
            transform: "rotate(25deg)",
          },
        },
        morphBlue: {
          "0%": {
            width: "75vw",
            height: "75vw",
            borderRadius: "50%",
            transform: "rotate(0deg)",
          },
          "25%": {
            width: "75vw",
            height: "65vw",
            borderRadius: "60% 40% 60% 40%",
            transform: "rotate(5deg)",
          },
          "50%": {
            width: "65vw",
            height: "80vw",
            borderRadius: "40% 60% 40% 60%",
            transform: "rotate(15deg)",
          },
          "75%": {
            width: "78vw",
            height: "74vw",
            borderRadius: "40% 60% 40% 60%",
            transform: "rotate(20deg)",
          },
          "100%": {
            width: "75vw",
            height: "75vw",
            borderRadius: "50%",
            transform: "rotate(25deg)",
          },
        },
        morphSoft: {
          "0%": {
            width: "25vw",
            height: "25vw",
            borderRadius: "50%",
            transform: "rotate(0deg)",
          },
          "25%": {
            width: "27vw",
            height: "23vw",
            borderRadius: "55% 45% 55% 45%",
            transform: "rotate(15deg)",
          },
          "50%": {
            width: "27vw",
            height: "23vw",
            borderRadius: "45% 55% 45% 55%",
            transform: "rotate(30deg)",
          },
          "75%": {
            width: "25vw",
            height: "23vw",
            borderRadius: "50% 50% 40% 60%",
            transform: "rotate(15deg)",
          },
          "100%": {
            width: "25vw",
            height: "25vw",
            borderRadius: "50%",
            transform: "rotate(0deg)",
          },
        },
        morphExtreme: {
          "0%": {
            width: "25vw",
            height: "25vw",
            borderRadius: "50%",
            transform: "rotate(0deg)",
          },
          "25%": {
            width: "30vw",
            height: "20vw",
            borderRadius: "70% 50% 70% 50%",
            transform: "rotate(90deg)",
          },
          "50%": {
            width: "27vw",
            height: "30vw",
            borderRadius: "50% 70% 50% 70%",
            transform: "rotate(180deg)",
          },
          "75%": {
            width: "30vw",
            height: "28vw",
            borderRadius: "60% 40% 60% 40%",
            transform: "rotate(270deg)",
          },
          "100%": {
            width: "25vw",
            height: "25vw",
            borderRadius: "50%",
            transform: "rotate(360deg)",
          },
        },
      },
      fontFamily: {
        sans: "var(--kanit), sans-serif",
        Draper: "var(--font-draper), sans-serif",
      },
      textStrokeWidth: {
        0.5: "0.5px",
        1: "1px",
        2: "2px",
      },
      textStrokeColor: {
        black: "#000",
        white: "#fff",
      },
    },
    colors: {
      "50": "rgb(246, 246, 246)",
      "100": "rgb(231, 231, 231)",
      "200": "rgb(209, 209, 209)",
      "300": "rgb(176, 176, 176)",
      "400": "rgb(136, 136, 136)",
      "500": "rgb(109, 109, 109)",
      "525": "rgb(102, 102, 102)",
      "600": "rgb(93, 93, 93)",
      "700": "rgb(79, 79, 79)",
      "800": "rgb(69, 69, 69)",
      "900": "rgb(61, 61, 61)",
      "910": "rgb(30, 30, 30)",
      "925": "rgb(20, 19, 19)",
      "945": "rgb(8, 8, 8)",
      "950": "rgb(2, 2, 2)",
      red100: "rgb(210, 27, 27)",
      blue100: "rgb(50, 39, 201)",
      white100: "rgb(168, 182, 203)",
    },
    plugins: [],
  },
} satisfies Config;
