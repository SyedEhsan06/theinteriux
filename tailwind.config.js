/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e1b544",  // Gold color for primary
        secondary: "#ffffff",  // White color for secondary text and background
        background: "#1f1f1f",  // Dark background color for the whole page
        foreground: "#333333",  // Dark gray for text
        focus: "#d99e2a",  // Darker shade for focus (e.g., button hover)
      },
      textColor: {
        primary: "#e1b544",  // Gold text color
        secondary: "#ffffff",  // White text color
        neutral: "#333333",  // Darker text for general use
      },
      boxShadow: {
        'focus-ring': '0 0 0 2px #d99e2a',  // Gold shadow for focus
      },
    },
  },
  plugins: [],
};
