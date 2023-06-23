/** @type {import('tailwindcss').Config} */

import tp from "@tailwindcss/typography";
import daisyui from "daisyui";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [tp, daisyui],
  daisyui: {
    themes: ["forest"],
  },
};
