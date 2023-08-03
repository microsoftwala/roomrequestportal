/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        // app header
        "app-header-bg": "#D9D9D9",
        "dark-app-header-bg": "#000000",
        // club_prevrequests
        "club-previous-requests-header-text": "#000000",
        "dark-club-previous-requests-header-text": "#fdfdfd",
        "club_prevrequests-card-bg": "#D9D9D9",
        "club_prevrequests-card-text": "#222222",
      },
    },
  },
  plugins: [],
};
