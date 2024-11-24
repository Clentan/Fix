// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Scanning for classes in these files
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add custom theme extensions if needed
    },
  },
  darkMode: "class", // Enabling dark mode with a class
  plugins: [nextui()], // Adding NextUI plugin
  daisyui: {
    themes: ["light", "dark"], // Enable both light and dark themes from DaisyUI
  },
}
